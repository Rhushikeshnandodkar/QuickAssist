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
        <Navbar />
        <Sidebar/>
        {/* <div className="main"> */}
        <main className="main-content">
        <div className="analytics-header">
            <h1>Analytics Dashboard</h1>
            <p>Track your chatbot performance and user engagement</p>
        </div>
        <div className="analytics-grid">
            <div className="metric-card">
            <div className="metric-title">Total Queries</div>
            <div className="metric-value">24,856</div>
            </div>
            <div className="metric-card">
            <div className="metric-title">Average Accuracy</div>
            <div className="metric-value">96.8%</div>
            </div>
            <div className="metric-card">
            <div className="metric-title">Active Users</div>
            <div className="metric-value">1,245</div>
            </div>
            <div className="metric-card">
            <div className="metric-title">Response Time</div>
            <div className="metric-value">1.2s</div>
            </div>
        </div>
        <div className="chart-container">
            <div className="chart-header">
            <h2>Query Volume Trends</h2>
            <select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
            </select>
            </div>
            <div className="chart-placeholder">
            Chart: Daily Query Volume
            </div>
        </div>
        <div className="chart-container">
            <div className="chart-header">
            <h2>Accuracy Distribution</h2>
            <select>
                <option>All Products</option>
                <option>Smart Watch Pro</option>
                <option>Smart Home Hub</option>
            </select>
            </div>
            <div className="chart-placeholder">
            Chart: Accuracy Distribution
            </div>
        </div>
        <div className="queries-list">
            <h2>Recent Queries</h2>
            <div className="query-item">
            <p>"How do I reset my Smart Watch Pro?"</p>
            <div className="query-meta">
                <span>2 minutes ago</span>
                <span className="accuracy-badge">98% Accuracy</span>
            </div>
            </div>
            <div className="query-item">
            <p>"Where is the power button on Smart Home Hub?"</p>
            <div className="query-meta">
                <span>5 minutes ago</span>
                <span className="accuracy-badge">95% Accuracy</span>
            </div>
            </div>
            <div className="query-item">
            <p>"How to connect to WiFi?"</p>
            <div className="query-meta">
                <span>10 minutes ago</span>
                <span className="accuracy-badge">99% Accuracy</span>
            </div>
            </div>
        </div>
        </main>
        {/* </div> */}
    </AnalyticsStyle>
    
    </>
  )
}

export default AnalyticsPage