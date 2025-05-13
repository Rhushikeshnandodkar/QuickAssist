import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GlobalStyle from '../../molecules/gloable.style';
import Sidebar from '../../molecules/Sidebar';
import Navbar from '../../molecules/Navbar';
import { UploadVideoLinkStyle } from './Products.style';
import { uploadVideoLink } from '../../../features/products/productSlice';
import { useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../../features/products/productSlice';
function UploadVideoLink() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)


  const [link, setLink] = useState("");        // ✅ state for video link
  const [description, setDescription] = useState(""); // ✅ state for description

    useEffect(() => {
      dispatch(fetchSingleProduct(productId))
    }, [productId, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted")
    dispatch(uploadVideoLink({
      productId,
      link,
      description,
    })).then(() =>{
        navigate(`/edit-products/${productId}`)
    });
  };

  return (
    <UploadVideoLinkStyle>
      <GlobalStyle />
      <Sidebar />
      <Navbar page={`Add Video`} />

      {productLoading ? (
        <div>Loading...</div>
      ) : (
      <div className="main-content">
        <div className="header">
          <div className="page-title">Upload Video Tutorials</div>
        </div>
        <div className="content">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <h3>Product Name - {singleProduct.data.product_name}</h3>
              <div className="form-group">
                <label>Video Link</label>
                <input
                  type="text"
                  placeholder="Enter video URL"
                  value={link}
                  onChange={(e) => setLink(e.target.value)} // ✅ capture video link
                />
              </div>
              
              <div className="form-group">
                <label>Description of Video</label>
                <textarea
                  rows={3}
                  placeholder="Add any notes"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} // ✅ capture description
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn">
                  <span className="btn-icon material-symbols-rounded">save</span>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </UploadVideoLinkStyle>
  );
}

export default UploadVideoLink;
