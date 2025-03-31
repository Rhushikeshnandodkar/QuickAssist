import React, { useEffect, useState } from "react";
import { ProductsFormStyle } from "./company.styled";
import { useDispatch } from "react-redux";
import { fetchProducts, uploadProduct } from "../../../features/products/productSlice";
import Sidebar from "../../molecules/Sidebar";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../molecules/gloable.style";
import Navbar from "../../molecules/Navbar";

const UploadProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        productManual: null,
    });

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, productManual: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formDataToSend = new FormData();
        formDataToSend.append("product_name", formData.productName);
        formDataToSend.append("description", formData.productDescription);
        formDataToSend.append("file", formData.productManual);
        console.log("Form Data Submitted:", formDataToSend);
        // dispatch(uploadProduct(formDataToSend))
        // navigate("/products")
         try {
                const response = await dispatch(uploadProduct(formDataToSend))
                console.log(response)
                if (response.meta.requestStatus === 'fulfilled') {
                        // ✅ Redirect on success
                    navigate(`/products`);
                    dispatch(fetchProducts())
                } else {
                        console.error('Failed to create link:', response.error.message);
                        alert('Failed to submit. Please try again.');
                }
        } catch (error) {
                    console.error('Error:', error);
                    alert('An error occurred.');
                }
    };

    return (
        <ProductsFormStyle>
            <GlobalStyle/>
            <Sidebar />
            <Navbar/>


        <div className="main-content">
        <div className="content">
            <div className="form-card">
            <div className="form-header">
                <h1 className="form-title">Add New Product</h1>
                <p className="form-description">Fill in the product details and upload the user manual to create a new chatbot.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                <div className="form-col">
                    <div className="form-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                            type="text"
                            id="productName"
                            name="productName"
                            required
                            placeholder="Enter product name"
                            value={formData.productName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="product-description">Product Description</label>
                {/* <textarea id="product-description" name="productDescription" placeholder="Enter product description" value="{formData.productDescription}" onchange="handleChange(event)" defaultValue={""} /> */}
                <textarea
                            id="productDescription"
                            name="productDescription"
                            placeholder="Enter product description"
                            value={formData.productDescription}
                            onChange={handleChange}
                        />
                </div>
                <div className="upload-area" id="dropzone">
                <input type="file" className="file-input" accept=".pdf,.docx" onChange={handleFileChange} />

                <p className="text-sm">Supported formats: PDF, DOCX (max 10MB)</p>
                </div>
                <div className="form-actions">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn">Create Product &amp; Generate Chatbot</button>
                </div>
            </form>
            </div>
        </div>
        {isLoading && <p className="loading-message">Processing PDF... Please wait.</p>}
        </div>

        </ProductsFormStyle>
    );
};

export default UploadProducts;