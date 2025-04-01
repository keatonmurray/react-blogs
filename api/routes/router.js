const express = require('express');
const router = express.Router();

// Controllers
const create = require('../controllers/blogs/create');
const read = require('../controllers/blogs/read');
const show = require('../controllers/blogs/show');
const update = require('../controllers/blogs/update');
const destroy = require('../controllers/blogs/delete');

//API Routes
router.post('/posts', create.upload.single('coverPhoto'), create.createBlogs); 
router.get('/blogs', read.fetchBlogs);
router.get('/blog/:id', show.showBlog);
router.put('/blog/:id', update.updateBlog);
router.delete('/blog/:id', destroy.deleteBlog);

module.exports = router;
