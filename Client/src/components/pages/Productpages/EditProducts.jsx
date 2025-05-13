import React, { useEffect, useState } from 'react'
import { useParams, Link, data } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, updateProduct } from '../../../features/products/productSlice'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
import { EditProductStyle } from './Products.style'
import { url } from '../../common/api'
import axios from 'axios'
function EditProducts() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)
  const [pdfFile, setPdfFile] = useState(null);
  const [formData, setFormData] = useState({
    product_name: '',
    category: '',
    description: ''
  })

  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [productId, dispatch])

  useEffect(() => {
    if (singleProduct?.data) {
      setFormData({
        product_name: singleProduct.data.product_name || '',
        category: singleProduct.data.category || '',
        description: singleProduct.data.description || '',
        filename : singleProduct.data.filename || ''
      })
    }
  }, [singleProduct])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`${url}/api/manual/get-video-links/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setVideos(response.data); // Assuming the API returns an array of video objects
        console.log('Fetched videos:', response.data);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };
  
    fetchVideos();
  }, [productId]);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("product_name", formData.product_name);
    formDataToSend.append("description", formData.description);
  
    if (pdfFile) {
      formDataToSend.append("file", pdfFile);
    }
  
    dispatch(updateProduct({ productId, formData: formDataToSend }))
      .unwrap()
      .then((res) => {
        console.log("Product updated successfully:", res);

      })
      .catch((err) => {
        console.error("Failed to update product:", err);
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const data = {
  //     product_name: formData.product_name,
  //     category: formData.category,
  //     description: formData.description
  //   }
  
  //   dispatch(updateProduct({ productId, formData: data }))
  //     .unwrap()
  //     .then(res => {
  //       console.log('Product updated successfully:', res)
  //       // Optional: show success toast or redirect
  //     })
  //     .catch(err => {
  //       console.error('Failed to update product:', err)
  //     })
  // }

  return (
    <EditProductStyle>
      <GlobalStyle />
      <Sidebar />
      <Navbar page={`Edit Product`} />

      {productLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="main-content">
          <div className="header">
            <div className="page-title">Edit Product</div>
            <div className="header-actions">
              <button className="action-button">
                <span className="material-symbols-rounded">help</span>
              </button>
            </div>
          </div>

          <div className="content">
            <div className="form-card">
              <div className="form-header">
                <div className="form-title">Edit Product Details</div>
                <div className="form-description">Update product information and manage video tutorials</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <div className="section-title">Basic Information</div>
                  <div className="form-row">
                    <div className="form-col">
                      <div className="form-group">
                        <label htmlFor="product_name">Product Name</label>
                        <input
                          type="text"
                          name="product_name"
                          id="product_name"
                          value={formData.product_name}
                          onChange={handleChange}
                          placeholder="Enter product name"
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Product Description</label>
                    <textarea
                      name="description"
                      id="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                    />
                  </div>
                </div>

                {videos?.data?.length > 0 ? (
  videos.data.map((video, index) => (
    <div key={index} className="video-item">
      <input type="url" value={video.video_link} disabled />
      <p style={{ marginTop: '4px' }}>{video.description}</p>
      <div className="video-actions">
        <button type="button" className="action-button">
          <span className="material-symbols-rounded">visibility</span>
        </button>
        <button type="button" className="action-button delete">
          <span className="material-symbols-rounded">delete</span>
        </button>
      </div>
    </div>
  ))
) : (
  <div>No videos uploaded yet.</div>
)}




                <div className="form-section">
                  <div className="section-title">Video Tutorials</div>
                  <div className="form-description" style={{ marginBottom: 20 }}>
                    Add video tutorials and guides for your product
                  </div>
                  <div className="video-links">
                    <Link to={`/upload-video-link/${productId}`} className="btn btn-add-video">
                      <span className="material-symbols-rounded" style={{ marginRight: 8 }}>add</span>
                      Add Video
                    </Link>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="manual_pdf">Update PDF Manual</label>
                  <div style={{ marginBottom: '20px' }}>
                    <a
                      href={`http://localhost:5000/uploads/${formData.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="btn btn-secondary"
                      style={{ textDecoration: 'none' }}
                    >
                      {formData.filename}
                    </a>
                  </div>
                  <input
                    type="file"
                    id="manual_pdf"
                    accept="application/pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-secondary">Cancel</button>
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
    </EditProductStyle>
  )
}

export default EditProducts
