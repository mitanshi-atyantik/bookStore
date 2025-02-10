import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="mt-10 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen">
            {/* Hero Section */}
            <div
                className="relative w-full h-[50vh] bg-contain bg-center"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkI_Gsz7faOnOxwSGvh-6zE_ufAh62x_ndoaaxhKgYeQ-sKB6YDJKcXLDGWL7wuiRqdGI&usqp=CAU')" }}
            >
                <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl font-extrabold text-gray-800 z-10 text-center">
                    Welcome to Our Bookstore
                </h1>
            </div>


            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-pink-500">Our Story</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        At <span className="font-bold text-pink-500">Book Haven</span>, we believe in the magic of books.
                        Our journey started with a simple mission: to bring stories closer to readers.
                        We offer a carefully curated collection of bestsellers, classics, and hidden gems.
                    </p>
                </motion.div>

                {/* Image & Text Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X2UqzhAAD1Z_fAdWKLwsJWNbRfqQIcZz_g&s" alt="Bookstore" className="rounded-lg shadow-lg" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                            We are more than just a bookstore. Our space is designed for book lovers
                            to explore, read, and connect with like-minded people. Join our community events,
                            enjoy personalized book recommendations, and find your next adventure within our shelves.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
