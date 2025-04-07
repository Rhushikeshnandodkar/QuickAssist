import React from 'react'
import { AnalyticsStyle } from './company.styled'
import GlobalStyle from '../../molecules/gloable.style'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'

function AnalyticsPage() {
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
                <div className="card-value">1,248</div>
                <div className="card-description">+32% from last month</div>
                </div>
                <div className="analytics-card">
                <div className="card-header">
                    <div className="card-title">Answered Queries</div>
                    <div className="card-icon green">
                    <span className="material-symbols-rounded">check_circle</span>
                    </div>
                </div>
                <div className="card-value">1,156</div>
                <div className="card-description">92.6% success rate</div>
                </div>
                <div className="analytics-card">
                <div className="card-header">
                    <div className="card-title">Common Issues</div>
                    <div className="card-icon coral">
                    <span className="material-symbols-rounded">error</span>
                    </div>
                </div>
                <div className="card-value">24</div>
                <div className="card-description">5 high priority issues</div>
                </div>
            </div>
            <div className="analytics-card">
                <div className="card-header">
                <div className="card-title">Query Response Performance</div>
                <select className="filter-select">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last 6 months</option>
                </select>
                </div>
                <div className="chart-container">
                <div className="chart-bar" style={{height: '20%'}}>
                    <div className="chart-bar-value">70%</div>
                </div>
                <div className="chart-bar" style={{height: '85%'}}>
                    <div className="chart-bar-value">85%</div>
                </div>
                <div className="chart-bar" style={{height: '92%'}}>
                    <div className="chart-bar-value">92%</div>
                </div>
                <div className="chart-bar" style={{height: '78%'}}>
                    <div className="chart-bar-value">78%</div>
                </div>
                <div className="chart-bar" style={{height: '94%'}}>
                    <div className="chart-bar-value">94%</div>
                </div>
                <div className="chart-bar" style={{height: '88%'}}>
                    <div className="chart-bar-value">88%</div>
                </div>
                <div className="chart-bar" style={{height: '91%'}}>
                    <div className="chart-bar-value">91%</div>
                </div>
                </div>
                <div className="chart-legend">
                <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: 'rgba(46, 139, 192, 0.2)'}} />
                    <span>Success Rate</span>
                </div>
                </div>
            </div>
            <div className="product-analysis-container">
                <div className="section-title">Products Performance</div>
                <div className="product-list">
                <div className="product-item">
                    <div className="product-header">
                    <div className="product-name">Smart Watch Pro</div>
                    <div className="product-stats">
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">forum</span>
                        342
                        </div>
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">check_circle</span>
                        96%
                        </div>
                    </div>
                    </div>
                    <div className="progress-container">
                    <div className="progress-label">
                        <span>Query Success Rate</span>
                        <span>96%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill high" style={{width: '96%'}} />
                    </div>
                    </div>
                    <div className="confusion-points">
                    <div className="confusion-title">Common Confusion Points:</div>
                    <div className="confusion-list">
                        <div className="confusion-tag">Battery replacement</div>
                        <div className="confusion-tag">Pairing with iOS devices</div>
                        <div className="confusion-tag">Water resistance rating</div>
                    </div>
                    </div>
                    <div className="product-actions">
                    <button className="btn btn-secondary">
                        <span className="material-symbols-rounded">visibility</span>
                        View Details
                    </button>
                    <button className="btn btn-primary">
                        <span className="material-symbols-rounded">edit</span>
                        Improve Manual
                    </button>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-header">
                    <div className="product-name">Coffee Maker XL</div>
                    <div className="product-stats">
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">forum</span>
                        278
                        </div>
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">check_circle</span>
                        88%
                        </div>
                    </div>
                    </div>
                    <div className="progress-container">
                    <div className="progress-label">
                        <span>Query Success Rate</span>
                        <span>88%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill medium" style={{width: '88%'}} />
                    </div>
                    </div>
                    <div className="confusion-points">
                    <div className="confusion-title">Common Confusion Points:</div>
                    <div className="confusion-list">
                        <div className="confusion-tag">Descaling procedure</div>
                        <div className="confusion-tag">Filter replacement</div>
                        <div className="confusion-tag">Brew strength settings</div>
                        <div className="confusion-tag">Timer programming</div>
                    </div>
                    </div>
                    <div className="product-actions">
                    <button className="btn btn-secondary">
                        <span className="material-symbols-rounded">visibility</span>
                        View Details
                    </button>
                    <button className="btn btn-primary">
                        <span className="material-symbols-rounded">edit</span>
                        Improve Manual
                    </button>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-header">
                    <div className="product-name">Wireless Earbuds</div>
                    <div className="product-stats">
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">forum</span>
                        186
                        </div>
                        <div className="stat-item">
                        <span className="stat-icon material-symbols-rounded">check_circle</span>
                        91%
                        </div>
                    </div>
                    </div>
                    <div className="progress-container">
                    <div className="progress-label">
                        <span>Query Success Rate</span>
                        <span>91%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill high" style={{width: '91%'}} />
                    </div>
                    </div>
                    <div className="confusion-points">
                    <div className="confusion-title">Common Confusion Points:</div>
                    <div className="confusion-list">
                        <div className="confusion-tag">Pairing with devices</div>
                        <div className="confusion-tag">Touch controls</div>
                        <div className="confusion-tag">Charging case usage</div>
                    </div>
                    </div>
                    <div className="product-actions">
                    <button className="btn btn-secondary">
                        <span className="material-symbols-rounded">visibility</span>
                        View Details
                    </button>
                    <button className="btn btn-primary">
                        <span className="material-symbols-rounded">edit</span>
                        Improve Manual
                    </button>
                    </div>
                </div>
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