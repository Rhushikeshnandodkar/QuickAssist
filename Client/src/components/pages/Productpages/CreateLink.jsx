import React, { useState } from 'react';
import { CreateLinkStyle } from './Products.style';
import { useDispatch } from 'react-redux';
import { createLink } from '../../../features/chatbots/chatbotSlice';
import { useParams } from 'react-router-dom';

function CreateLink() {
    const dispatch = useDispatch()
    const {productId, companyId} = useParams()
    console.log(productId, companyId)
    const [formData, setFormData] = useState({
        companyId : "67cbcd73f4a88d5c5f5fc41a",
        productId : "67d5ada24ff892747beec92e",
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {companyId, productId, email} = formData
        dispatch(createLink({companyId, productId, email}))
    };

    return (
        <>
            <CreateLinkStyle>
                <div className="container">
                    <div className="form-card">
                        <h1 className="form-title">Customer Information</h1>
                        <form id="customerForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email Address <span className="required">*</span></label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    placeholder="Enter your email address" 
                                />
                            </div>
                            <button type="submit" className="submit-button">Submit Order</button>
                        </form>
                        <a href="product-detail.html" className="back-link">← Back to Product Details</a>
                    </div>
                </div>
            </CreateLinkStyle>
        </>
    );
}

export default CreateLink;