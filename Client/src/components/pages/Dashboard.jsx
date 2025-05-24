import React, { useCallback, useEffect } from 'react'
import Sidebar from '../molecules/Sidebar'
import { DashboardStyle } from './Dashboard.style';
import { NavbarStyle } from '../molecules/molecule.style';
import Navbar from '../molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo, getPurchaseData } from '../../features/company/companySlice';
import { fetchProducts } from '../../features/products/productSlice';
import { Link } from 'react-router-dom';
import GlobalStyle from '../molecules/gloable.style';
import Loader from '../molecules/Loader';

function Dashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => (
    state.user))
  const { isLoading : productsLoading, company} = useSelector((state) =>(state.company))

  useEffect(() => {
    dispatch(companyInfo());
  }, [dispatch]);

  useEffect(() =>{
    dispatch(getPurchaseData())
  }, [dispatch])
  return (
    <>
    <DashboardStyle>
      <GlobalStyle/>
      <Sidebar />
                <div classname="main-content">
                <Navbar page="Dashboard" />
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
                      <div className="card-value">{company.interactions}</div>
                      <div className="card-description">+32% from last week</div>
                    </div>
                  </div>
                    </> : <Loader/>}
                  <div className="quick-actions">
                    <div className="section-title">Quick Actions</div>
                    <div className="actions-grid">
                      <Link to={'/upload-product'} className="action-card">
                        <div className="action-icon">
                          <span className="material-symbols-rounded">upload_file</span>
                        </div>
                        <div className="action-label">Upload Manual</div>
                      </Link>
                      <Link to={'/chatbots'} className="action-card">
                        <div className="action-icon">
                          <span className="material-symbols-rounded">smart_toy</span>
                        </div>
                        <div className="action-label">Chatbots</div>
                      </Link>
                      <Link to={'/products'} className="action-card">
                        <div className="action-icon">
                          <span className="material-symbols-rounded">apps</span>
                        </div>
                        <div className="action-label">View Products</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
    </DashboardStyle>
    </>
  )
}
export default Dashboard;