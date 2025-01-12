import Contact  from '../model/contact-model.js'

export const contactFunction = async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      const newContact = new Contact({
        name,
        email,
        message,
      });
  
      await newContact.save();
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error saving message" });
    }}