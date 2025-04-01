import React, { useEffect, useState } from 'react';
import blogImage from '../assets/img/129780.jpg';
import { baseUrl } from '../config.js';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/blogs`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogs();
  }, []); 

  return (
    <div className="container min-vh-100 py-5 my-5">
      <div className="row g-4 my-4">
        {error && <div className="alert alert-danger">{error}</div>} 

        {blogs.map((blog) => (
          <div key={blog._id} className="col-12 col-md-4">
            <div className="card shadow-sm">
              <img src={blog.image ? `${baseUrl}${blog.image}` : blogImage} 
                className="card-img-top" 
                height="280" 
                alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.body.substring(0, 100)}...</p>
                <Link to={`/blog/${blog._id}`} className="btn btn-primary w-100">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
