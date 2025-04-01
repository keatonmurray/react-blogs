const Blogs = require('../../models/Blog');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });

const createBlogs = async (req, res) => {
  try {
    const { title, body } = req.body;

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newBlog = new Blogs({ title, body, image });

    await newBlog.save();

    res.status(201).json({
      message: 'Blog post created successfully',
      blog: newBlog
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({
      message: 'Error creating blog post',
      error: error.message || error
    });
  }
};

module.exports = { createBlogs, upload };
