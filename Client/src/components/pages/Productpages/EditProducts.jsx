import React, { useEffect, useState } from 'react'
import { useParams, Link, data } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, updateProduct } from '../../../features/products/productSlice'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
import { EditProductStyle } from './Products.style'

function EditProducts() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)

  const [formData, setFormData] = useState({
    product_name: '',
    category: '',
    description: ''
  })

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [productId, dispatch])

  useEffect(() => {
    if (singleProduct?.data) {
      setFormData({
        product_name: singleProduct.data.product_name || '',
        category: singleProduct.data.category || '',
        description: singleProduct.data.description || ''
      })
    }
  }, [singleProduct])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      product_name: formData.product_name,
      category: formData.category,
      description: formData.description
    }
  
    dispatch(updateProduct({ productId, formData: data }))
      .unwrap()
      .then(res => {
        console.log('Product updated successfully:', res)
        // Optional: show success toast or redirect
      })
      .catch(err => {
        console.error('Failed to update product:', err)
      })
  }

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
                    <div className="form-col">
                      <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                          type="text"
                          name="category"
                          id="category"
                          value={formData.category}
                          onChange={handleChange}
                          placeholder="Enter product category"
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
