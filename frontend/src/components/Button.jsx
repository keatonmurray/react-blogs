import React from 'react'
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
        <Link to="/create" className="btn btn-primary text-capitalize hero-btn px-3 py-2 my-3">
            <i className="bi bi-pencil-fill me-2"></i>
            Write something
        </Link>
    </div>
  )
}

export default Button
