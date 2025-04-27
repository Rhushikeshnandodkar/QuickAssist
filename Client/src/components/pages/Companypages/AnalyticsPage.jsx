import React, { useEffect } from 'react'
import { AnalyticsStyle } from './company.styled'
import GlobalStyle from '../../molecules/gloable.style'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { feedbackInfo, feedbacksList } from '../../../features/analysis/analysisSlice'
import { fetchProducts } from '../../../features/products/productSlice'
import { HiH3 } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function AnalyticsPage() {
    const dispatch = useDispatch()
    const {isLoading, ana_data, feedbacks} = useSelector((state) => state.analysis)
    const { products, isLoading: productLoading } = useSelector((state) => state.products);
    if(!isLoading){
        // console.log(ana_data)
    }
    useEffect(() =>{
        if(!products){
            dispatch(fetchProducts())
        }
        dispatch(feedbackInfo())
        dispatch(feedbacksList())
    }, [dispatch])
  return (
    <>
    <AnalyticsStyle>
        <GlobalStyle />
        <Navbar page="Analytics" />
        <Sidebar/>
        {/* <div className="main"> */}
        <div className="main-content">
            <div className="content">
            <div className="filter-bar">
                <select className="filter-select">
                <option>Last 7 day</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
                </select>
                <select className="filter-select">
                <option>All Products</option>
                <option>Smart Watch Pro</option>
                <option>Coffee Maker XL</option>
                <option>Wireless Earbuds</option>
                </select>
            </div>
            <div className="analytics-grid">
                <div className="analytics-card">
                <div className="card-header">
                    <div className="card-title">Total Queries</div>
                    <div className="card-icon blue">
                    <span className="material-symbols-rounded">forum</span>
                    </div>
                </div>
                <div className="card-value">{ana_data ? ana_data.answered + ana_data.not_answered : "Loading"}</div>
                <div className="card-description">+32% from last month</div>
                </div>
                <div className="analytics-card">
                <div className="card-header">
                    <div className="card-title">Answered Queries</div>
                    <div className="card-icon green">
                    <span className="material-symbols-rounded">check_circle</span>
                    </div>
                </div>
                <div className="card-value">{ana_data ? ana_data.answered : "Loading"}</div>
                <div className="card-description">{ana_data ? Math.floor((ana_data.answered / (ana_data.answered + ana_data.not_answered)) * 100) : "Loading"}% success rate</div>
                </div>
                <div className="analytics-card">
                <div className="card-header">
                    <div className="card-title">Common Issues</div>
                    <div className="card-icon coral">
                    <span className="material-symbols-rounded">error</span>
                    </div>
                </div>
                <div className="card-value">{ana_data ? ana_data.not_answered : "Loading"}</div>
                <div className="card-description">5 high priority issues</div>
                </div>
            </div>

            <div className="product-analysis-container">
                <div className="section-title">Products Performance</div>
                <div className="product-list">
                {feedbacks && feedbacks.data ? (
  <>
    {feedbacks.data.map((item, index) => (
      <div className="product-item" key={index}>
        <div className="product-header">
          <div className="product-name">
            {item.unanswered?.product?.product_name || "Unnamed Product"}
          </div>

          <div className="product-stats">
            <div className="stat-item">
              <span className="stat-icon material-symbols-rounded">forum</span>
              {item.unansweredCount}
            </div>
          </div>
        </div>

        <div className="product-actions">
          <Link to={`/product-questions/${item.unanswered?.product?._id}`} className="btn btn-primary">
            <span className="material-symbols-rounded">visibility</span>
            View Questions
          </Link>
        </div>
      </div>
    ))}
  </>
) : (
  <h2>Loading feedbacks...</h2>
)}

                </div>
            </div>
            <div className="queries-container">
                <div className="section-title">Common Customer Queries</div>
                <div className="query-list">
                <div className="query-card">
                    <div className="query-status status-answered">Answered</div>
                    <div className="query-content">"How do I reset my Smart Watch Pro?"</div>
                    <div className="query-meta">
                    <div className="query-frequency">Appears in 48 conversations</div>
                    <div className="query-product">
                        <span className="material-symbols-rounded">watch</span>
                        Smart Watch Pro
                    </div>
                    </div>
                </div>
                <div className="query-card">
                    <div className="query-status status-answered">Answered</div>
                    <div className="query-content">"How often should I descale the Coffee Maker XL?"</div>
                    <div className="query-meta">
                    <div className="query-frequency">Appears in 36 conversations</div>
                    <div className="query-product">
                        <span className="material-symbols-rounded">coffee</span>
                        Coffee Maker XL
                    </div>
                    </div>
                </div>
                <div className="query-card">
                    <div className="query-status status-unanswered">Unanswered</div>
                    <div className="query-content">"Can I use third-party charging cables with my Wireless Earbuds?"</div>
                    <div className="query-meta">
                    <div className="query-frequency">Appears in 29 conversations</div>
                    <div className="query-product">
                        <span className="material-symbols-rounded">headphones</span>
                        Wireless Earbuds
                    </div>
                    </div>
                </div>
                <div className="query-card">
                    <div className="query-status status-unanswered">Unanswered</div>
                    <div className="query-content">"Is the Digital Camera Pro compatible with third-party lenses?"</div>
                    <div className="query-meta">
                    <div className="query-frequency">Appears in 18 conversations</div>
                    <div className="query-product">
                        <span className="material-symbols-rounded">photo_camera</span>
                        Digital Camera Pro
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="improvements-container">
                <div className="section-title">Manual Improvement Opportunities</div>
                <div className="improvement-card improvement-high">
                <div className="improvement-header">
                    <div className="improvement-title">Digital Camera Pro - Advanced Settings Section</div>
                    <div className="priority-badge priority-high">High Priority</div>
                </div>
                <div className="improvement-description">
                    The advanced settings section is causing significant confusion. 47% of queries relate to finding and using manual focus, aperture adjustments, and custom shooting modes. Recommend creating step-by-step guides with screenshots for each setting.
                </div>
                <div className="improvement-stats">
                    <div className="improvement-stat">
                    <div className="stat-value">47%</div>
                    <div className="stat-label">of all queries</div>
                    </div>
                    <div className="improvement-stat">
                    <div className="stat-value">82%</div>
                    <div className="stat-label">confusion rate</div>
                    </div>
                </div>
                <div className="product-actions">
                    <button className="btn btn-secondary">
                    <span className="material-symbols-rounded">visibility</span>
                    View Details
                    </button>
                    <button className="btn btn-primary">
                    <span className="material-symbols-rounded">edit</span>
                    Update Manual
                    </button>
                </div>
                </div>
                <div className="improvement-card improvement-medium">
                <div className="improvement-header">
                    <div className="improvement-title">Coffee Maker XL - Descaling Procedure</div>
                    <div className="priority-badge priority-medium">Medium Priority</div>
                </div>
                <div className="improvement-description">
                    The descaling procedure needs more detailed step-by-step instructions with images. 32% of users are confused about the correct descaling frequency and process. Recommend adding a troubleshooting section for common descaling problems.
                </div>
                <div className="improvement-stats">
                    <div className="improvement-stat">
                    <div className="stat-value">32%</div>
                    <div className="stat-label">of all queries</div>
                    </div>
                    <div className="improvement-stat">
                    <div className="stat-value">64%</div>
                    <div className="stat-label">confusion rate</div>
                    </div>
                </div>
                <div className="product-actions">
                    <button className="btn btn-secondary">
                    <span className="material-symbols-rounded">visibility</span>
                    View Details
                    </button>
                    <button className="btn btn-primary">
                    <span className="material-symbols-rounded">edit</span>
                    Update Manual
                    </button>
                </div>
                </div>
                <div className="improvement-card improvement-medium">
                <div className="improvement-header">
                    <div className="improvement-title">Wireless Earbuds - Charging Compatibility</div>
                    <div className="priority-badge priority-medium">Medium Priority</div>
                </div>
                <div className="improvement-description">
                    Clarification needed regarding compatibility with charging cables and charging stations. This information is missing from the current documentation, leading to 24% of customer queries about third-party charging solutions.
                </div>
                <div className="improvement-stats">
                    <div className="improvement-stat">
                    <div className="stat-value">24%</div>
                    <div className="stat-label">of all queries</div>
                    </div>
                    <div className="improvement-stat">
                    <div className="stat-value">58%</div>
                    <div className="stat-label">confusion rate</div>
                    </div>
                </div>
                <div className="product-actions">
                    <button className="btn btn-secondary">
                    <span className="material-symbols-rounded">visibility</span>
                    View Details
                    </button>
                    <button className="btn btn-primary">
                    <span className="material-symbols-rounded">edit</span>
                    Update Manual
                    </button>
                </div>
                </div>
            </div>
            </div>
            </div>
        {/* </div> */}
    </AnalyticsStyle>
    
    </>
  )
}

export default AnalyticsPage