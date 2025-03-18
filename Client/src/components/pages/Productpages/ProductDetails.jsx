import React, { useEffect } from 'react'
import { ProductDetailStyle } from './Products.style'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../../../features/products/productSlice'
import { fetchAllbots } from '../../../features/chatbots/chatbotSlice'
import { Link } from 'react-router-dom'
import { companyInfo } from '../../../features/company/companySlice'
function ProductDetails() {
    const dispatch = useDispatch()
    const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)
    const { yourbots, isLoading: botLoading, error: botError } = useSelector((state) => state.chatbot)
    const { company, isLoading : companyLoading } = useSelector((state) => state.company)
    const { productId } = useParams()

    // Fetch product and bots data on component mount
    useEffect(() => {
        dispatch(fetchSingleProduct(productId))
        dispatch(fetchAllbots())
        dispatch(companyInfo())
    }, [dispatch, productId])

    // Ensure data safety with loading and error handling
    if (productLoading || botLoading || companyLoading) return <h3>Loading...</h3>
    if (botError) return <h3>Error loading bots: {botError}</h3>

    return (
        <ProductDetailStyle>
            <div className="container">
                <div className="product-grid">
                    <div className="main-content">
                        {/* Product Info Section */}
                        <div className="product-info">
                            <h1 className="product-title">{singleProduct?.data?.product_name || 'Product Name'}</h1>
                            <p>{singleProduct?.data?.description || 'No description available'}</p>
                            <div className="product-meta">
                                <div className="meta-item">
                                    <span>Last Updated</span>
                                    <strong>2024-03-15</strong>
                                </div>
                                <div className="meta-item">
                                    <span>Total Customers</span>
                                    <strong>847</strong>
                                </div>
                                <div className="meta-item">
                                    <span>Engagement Rate</span>
                                    <strong>87%</strong>
                                </div>
                            </div>
                        </div>

                        {/* Customer List Section */}
                        <div className="customer-list">
                            <h2 className="section-title">
                                Customer List
                                <button className="btn"><Link to={`/create-link/${company.data._id}/${productId}`}>Add customer</Link></button>
                            </h2>
                            <table className="customer-table">
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Email</th>
                                        <th>Join Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {yourbots?.data?.length ? (
                                        yourbots.data.map((bot, index) => (
                                            <tr key={index}>
                                                <td>{bot.product.product_name || 'N/A'}</td>
                                                <td>{bot.useremail || 'N/A'}</td>
                                                <td>{bot.createdAt || 'N/A'}</td>
                                                <td>
                                                    <span className="status-badge">{bot.status || 'Active'}</span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">No bots found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="sidebar">
                        <div className="customer-section">
                            <h2 className="section-title">Customer Engagement</h2>
                            <div className="engagement-stats">
                                <div className="stat-card">
                                    <h4>Today's Activity</h4>
                                    <div className="stat-value">24</div>
                                </div>
                                <div className="stat-card">
                                    <h4>This Week</h4>
                                    <div className="stat-value">156</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailStyle>
    )
}

export default ProductDetails
