import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className="hero-section container-fluid d-flex align-items-center justify-content-center text-white">
        <div className="col-12 col-md-9 col-lg-6">
            <h1 className="hero-text fw-bold">
                Write cool stuff. 
                <span className="d-block text-small fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.</span>
            </h1> 
            <Button />
        </div>
    </div>
  )
}

export default Home
