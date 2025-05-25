import React, { useState } from 'react';
import { CreateLinkStyle } from './Products.style';
import { useDispatch } from 'react-redux';
import { createLink } from '../../../features/chatbots/chatbotSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../molecules/gloable.style';
import Loader from '../../molecules/Loader';

function CreateLink() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {productId, companyId} = useParams()

    const [loading, setLoading] = useState(false)
    console.log(productId, companyId)
    const [formData, setFormData] = useState({
        companyId : companyId,
        productId : productId,
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const {companyId, productId, email} = formData
        dispatch(createLink({companyId, productId, email})).then(() =>{
            navigate('/products')
        })
    };
    return (
        <>
        <GlobalStyle/>
            <CreateLinkStyle>
                {loading ? <><Loader message="Please wait while sending email"/></> 
                :
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
                    <div className="back-link"> <Link to={`/product-details/${productId}`}>← Back to Product Details</Link></div>
                </div>
            </div>
                }
              
            </CreateLinkStyle>
        </>
    );
}

export default CreateLink;