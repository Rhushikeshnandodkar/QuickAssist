import React, { useCallback, useEffect } from 'react'
import Sidebar from '../molecules/Sidebar'
import { DashboardStyle } from './Dashboard.style';
import { NavbarStyle } from '../molecules/molecule.style';
import Navbar from '../molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo } from '../../features/company/companySlice';
import { fetchProducts } from '../../features/products/productSlice';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => (
    state.user))
  const {company} = useSelector((state) =>(state.company))
  const {products, isLoading} = useSelector((state) =>(state.products))

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
  return (
    <>
    <Sidebar />
    <DashboardStyle>
      {company ? 
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
       {isLoading ? <h3>Loading....</h3> : (products.data && products.data.map((data) =>(
            <div class="chatbot-card">
            <div class="chatbot-header">
                <div class="chatbot-title">{data.product_name}</div>
                <span class="status-badge">Active</span>
            </div>
            
            <div class="chatbot-stats">
                <div class="stat-item">
                    <div class="stat-number">856</div>
                    <div class="stat-label">Total Queries</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">95%</div>
                    <div class="stat-label">Accuracy</div>
                </div>
            </div>

            <div class="chatbot-actions">
                <button class="btn">View Analytics</button>
                <button class="btn btn-outline">Settings</button>
            </div>
        </div>

       )))}
       </div>
       </div>
     </main>: 
     <h4>Loading....</h4>
    }
    </DashboardStyle>
    </>
  )
}

export default Dashboard;