import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book-route.js";
import userRoute from "./routes/user-route.js";
import categoryRoute from "./routes/category-route.js";
import contactRoute from "./routes/contact-route.js";
import cors from "cors";
import User from "./model/user-model.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import expressSession from "express-session";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.MONGOURI;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4001/auth/google/callback", // Should be your callback URL (e.g., /auth/google/callback)
    },
    async (accessToken, refreshToken, profile, done) => {
      // This callback runs after Google authenticates the user
      try {
        // Find user in DB by email
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          // If user doesn't exist, create a new user in the DB
          user = new User({
            fullname: profile.displayName,
            email: profile.emails[0].value,
            password: "", // Google login doesn’t need a password
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Passport session handling
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(
  expressSession({
    secret: "your_secret_key", // Secret to sign the session ID cookie
    resave: false, // Do not save session if unmodified
    saveUninitialized: false, // Do not create session until something is stored
    cookie: {
      httpOnly: true, // Ensures cookie is only sent to HTTP request
      secure: false, // Set to true if using HTTPS (not necessary for development)
      maxAge: 24 * 60 * 60 * 1000, // Cookie expiration (1 day)
    },
  })
);

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/", categoryRoute);
app.use("/", contactRoute);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/",
  }),
  async (req, res) => {
    // After Google login is successful
    const user = req.user;
    let dbUser = await User.findOne({ email: user?.email });
    if (!dbUser) {
      // If the user doesn't exist, create a new user in the DB
      const createdUser = new User({
        fullname: user.displayName,
        email: user.emails[0].value,
        password: "", // You may want to handle password differently, but it's not needed for Google login
      });
      await createdUser.save();
      dbUser = createdUser;
    }

    // Send back the user information
    res.cookie("user", JSON.stringify(dbUser), {
      httpOnly: false,
      maxAge: 3600000,
    });

    res.redirect("http://localhost:5173/");

    // Check if the user exists in the DB
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
