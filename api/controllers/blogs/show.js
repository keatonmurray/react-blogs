const Blogs = require('../../models/Blog');

const showBlog = async(req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blogs.findById(blogId);
        res.status(200).json(blog);
    } catch(error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
}

module.exports = { showBlog };