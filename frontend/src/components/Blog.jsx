import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogImage from '../assets/img/129780.jpg';
import { baseUrl } from '../config.js';

const Blog = () => {

    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null); 

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(`${baseUrl}/api/blog/${id}`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const data = await response.json();
                setBlog(data); 
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        }
        
        fetchBlog();
    }, [id]);  
    if (loading) return <div>Loading...</div>; 
    if (error) return <div>Error: {error}</div>;  

    return (
        <div className="container min-vh-100 py-5 my-5">
            <div className="row g-4 my-4">
                <div className="content">
                    <img 
                        src={blog.image ? `${baseUrl}${blog.image}` : blogImage} 
                        className="card-img-top rounded" height="500" alt="Card Image" 
                    />
                    <div className="content-body px-4 py-3">
                        <div className="content-heading text-center">
                            <h3 className="fw-bold">{blog?.title || 'Blog Title'}</h3>  
                            <p>{blog?.body || 'Blog Body'}</p>  
                        </div>
                    </div>
                </div>
                <div className="button d-flex justify-content-center">
                    <a href="#" className="btn btn-primary w-auto me-1">Update</a>
                    <a href="#" className="btn btn-danger w-auto me-1">Delete</a>
                    <Link to="/blogs" className="btn btn-secondary w-auto">Go back</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
