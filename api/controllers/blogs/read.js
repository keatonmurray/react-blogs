const Blogs = require('../../models/Blog');

const fetchBlogs = async(req, res) => {
    try {
        const blogs = await Blogs.find().sort({ createdAt: -1 });
        res.status(200).json({ blogs });
      } catch (error) {
        console.error("Error retrieving blogs:", error);
        res.status(500).json({ message: "Error retrieving blogs", error: error.message || error });
      }
}

module.exports = { fetchBlogs };
