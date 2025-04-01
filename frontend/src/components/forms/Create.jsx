import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error('Title and content body are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    if (coverPhoto) {
      formData.append('coverPhoto', coverPhoto);
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/api/posts`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.status === 201) {
        toast.success('Post created successfully!', {
          onClose: () => navigate('/blogs'),
        });
      } else {
        toast.error(data.message || 'Error occurred while creating post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center min-vh-100 px-3 py-3 mt-4 overflow-auto">
      <form className="col-12 col-md-8 col-lg-6 p-4 mt-4" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-center">Create Content</legend>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cover Photo</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />
            {imagePreview && (
              <div className="mt-2 d-flex justify-content-center align-items-center card px-3 py-3" 
                style={{ backgroundColor: '#eee' }}>
                <img
                  src={imagePreview}
                  alt="Cover Preview"
                  className="img-fluid"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Content Body</label>
            <textarea
              id="body"
              className="form-control"
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column flex-sm-row">
            <button type="submit" className="btn btn-primary me-sm-2 mb-2 mb-sm-0" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <Link className="btn btn-secondary" to="/">
              Go back
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Create;
