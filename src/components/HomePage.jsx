import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="container">
            <div className="container">
                <p id="heading" className="display-3 my-3">Welcome</p>
                <p className="fs-4 fw-light">Keep a track on your Shopping List...</p>
            </div>
            <hr />
            <div className="container">
                <h3 id="sub-heading" className="fw-light">Getting Started...</h3>
                <hr />
                <h5 id="heading-description">Follow these 3 simple steps to create your First Shopping List <i className="bi bi-three-dots-vertical"></i> </h5>

                <ol>
                    <li className="fs-5 fw-light my-2">Create your first List by simply clicking on the <strong>"Create List"</strong> below</li>
                    <li className="fs-5 fw-light my-2">Add <strong>Item name, Quantity and Price</strong> of the item you wish to buy</li>
                    <li className="fs-5 fw-light my-2">Navigate to <strong>"Show List"</strong> to see the added items in your shopping list</li>
                </ol>
            </div>
            <hr />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Link to="/input"><button className="btn btn-outline-warning btn-lg my-4">Create List</button></Link>
                </div>
            </div>

        </div>
    )
}