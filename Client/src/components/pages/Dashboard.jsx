import React, { useCallback, useEffect } from 'react'
import Sidebar from '../molecules/Sidebar'
import { DashboardStyle } from './Dashboard.style';
import { NavbarStyle } from '../molecules/molecule.style';
import Navbar from '../molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo } from '../../features/company/companySlice';
import { fetchProducts } from '../../features/products/productSlice';
import { Link } from 'react-router-dom';
import GlobalStyle from '../molecules/gloable.style';

function Dashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => (
    state.user))
  const {company} = useSelector((state) =>(state.company))
  const {products, isLoading: productsLoading} = useSelector((state) =>(state.products))

  const fetchData = useCallback(() => {
    if(!products || !company){
      dispatch(companyInfo())
      dispatch(fetchProducts())
    }
  }, []);

  useEffect(() =>{
    fetchData();
  }, [fetchData])
  // console.log(company)
  if(productsLoading) return <h3>Loading...</h3>
  return (
    <>
      <Sidebar />
    <DashboardStyle>
 
      <GlobalStyle/>
      {/* {company ? 
         <main className="main-content">
         <Navbar />
         <div className="content">
     
       <div className="stats-container">
         <div className="stat-card">
           <h3>Total Products</h3>
           <div className="number">{company.products}</div>
         </div>
         <div className="stat-card">
           <h3>Active Chatbots</h3>
           <div className="number">{company.chatbots}</div>
         </div>
         <div className="stat-card">
           <h3>Total Customers</h3>
           <div className="number">156</div>
         </div>
       </div>
       <h1>Products</h1>

       <div className="products-grid">
        {products?.data?.length ? (
          products.data.map((product, index) =>(
          <div className="chatbot-card" key={index}>
            <div className="chatbot-header">
              <div className="chatbot-title">{product.product_name}</div>
              <span className="status-badge">Active</span>
            </div>
            <div className="chatbot-stats">
              <div className="stat-item">
                <div className="stat-number">856</div>
                <div className="stat-label">Total Queries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
            <div className="chatbot-actions">
              <button className="btn btn-outline">View Analytics</button>
            </div>
          </div>

          ))
        ) : (
          <h3>Loading ...</h3>
        )}
       </div>
       </div>
     </main>: 
     <h4>Loading....</h4>
    } */}
          <div classname="main-content">
          <Navbar />
          <div className="content">
              {company ? <>

            <div className="dashboard-grid">
              <div className="analytics-card">
                <div className="card-header">
                  <div className="card-title">Active Chatbots</div>
                  <div className="card-icon blue">
                    <span className="material-symbols-rounded">smart_toy</span>
                  </div>
                </div>
                <div className="card-value">{company.chatbots}</div>
                <div className="card-description">+12% from last month</div>
              </div>
              <div className="analytics-card">
                <div className="card-header">
                  <div className="card-title">Total Manuals</div>
                  <div className="card-icon purple">
                    <span className="material-symbols-rounded">folder</span>
                  </div>
                </div>
                <div className="card-value">{company.products}</div>
                <div className="card-description">+8 new this week</div>
              </div>
              <div className="analytics-card">
                <div className="card-header">
                  <div className="card-title">User Interactions</div>
                  <div className="card-icon coral">
                    <span className="material-symbols-rounded">forum</span>
                  </div>
                </div>
                <div className="card-value">2,841</div>
                <div className="card-description">+32% from last week</div>
              </div>
            </div>
              </> : <>Loading...</>}

            <div className="quick-actions">
              <div className="section-title">Quick Actions</div>
              <div className="actions-grid">
                <a href="upload-manual.html" className="action-card">
                  <div className="action-icon">
                    <span className="material-symbols-rounded">upload_file</span>
                  </div>
                  <div className="action-label">Upload Manual</div>
                </a>
                <a href="create-customer.html" className="action-card">
                  <div className="action-icon">
                    <span className="material-symbols-rounded">person_add</span>
                  </div>
                  <div className="action-label">Add Customer</div>
                </a>
                <a href="chatbot.html" className="action-card">
                  <div className="action-icon">
                    <span className="material-symbols-rounded">smart_toy</span>
                  </div>
                  <div className="action-label">Test Chatbot</div>
                </a>
                <a href="products.html" className="action-card">
                  <div className="action-icon">
                    <span className="material-symbols-rounded">apps</span>
                  </div>
                  <div className="action-label">View Products</div>
                </a>
              </div>
            </div>
            <div className="recent-activity">
              <div className="section-title">Recent Activity</div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <span className="material-symbols-rounded">upload_file</span>
                  </div>
                  <div className="activity-details">
                    <div className="activity-title">User Manual for Product X123 was uploaded</div>
                    <div className="activity-meta">
                      <span className="activity-time">2 hours ago</span>
                      <span className="activity-user">by John Doe</span>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <span className="material-symbols-rounded">smart_toy</span>
                  </div>
                  <div className="activity-details">
                    <div className="activity-title">New chatbot created for SmartHome Devices</div>
                    <div className="activity-meta">
                      <span className="activity-time">Yesterday</span>
                      <span className="activity-user">by Sarah Johnson</span>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <span className="material-symbols-rounded">person_add</span>
                  </div>
                  <div className="activity-details">
                    <div className="activity-title">New customer TechCorp was added</div>
                    <div className="activity-meta">
                      <span className="activity-time">2 days ago</span>
                      <span className="activity-user">by Mike Smith</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </DashboardStyle>
    </>
  )
}

export default Dashboard;