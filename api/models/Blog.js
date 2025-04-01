const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    timestamps: true
  },
  body: {
    type: String,
    required: true,
    timestamps: true
  },
  image: {
    type: String,
    required: true,
    timestamps: true
  }
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
