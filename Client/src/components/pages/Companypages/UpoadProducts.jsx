import React, { useState } from "react";
import { ProductsFormStyle } from "./company.styled";
import { useDispatch } from "react-redux";
import { uploadProduct } from "../../../features/products/productSlice";
import Sidebar from "../../molecules/Sidebar";
import { useNavigate } from "react-router-dom";

const UploadProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        productManual: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, productManual: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("product_name", formData.productName);
        formDataToSend.append("description", formData.productDescription);
        formDataToSend.append("file", formData.productManual);
        console.log("Form Data Submitted:", formDataToSend);
        dispatch(uploadProduct(formDataToSend))
        navigate("/dashboard")
    };

    return (
        <ProductsFormStyle>
            <Sidebar />
        <main className="main-content">
            <div className="form-container">
                <div className="form-header">
                    <h1>Add New Product</h1>
                    <p>Fill in the product details and upload the user manual to create a new chatbot.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
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

                    <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <textarea
                            id="productDescription"
                            name="productDescription"
                            placeholder="Enter product description"
                            value={formData.productDescription}
                            onChange={handleChange}
                        />
                    </div>

                    

                    <div className="form-group">
                        <label>Product Manual</label>
                        <div className="upload-area">
                            <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
                            <p className="text-sm">Supported formats: PDF, DOCX (max 10MB)</p>
                        </div>
                    </div>


                    <div className="btn-group">
                        <button type="submit" className="btn">Create Product & Generate Chatbot</button>
                    </div>
                </form>
            </div>
        </main>
        </ProductsFormStyle>
    );
};

export default UploadProducts;