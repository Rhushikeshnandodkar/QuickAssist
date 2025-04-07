import React, { useEffect, useMemo, useState } from 'react'
import { ProductDetailStyle } from './Products.style'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../../../features/products/productSlice'
import { fetchAllbots } from '../../../features/chatbots/chatbotSlice'
import { Link } from 'react-router-dom'
import { companyInfo } from '../../../features/company/companySlice'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
function ProductDetails() {
    const dispatch = useDispatch()
    const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)
    const { yourbots, isLoading: botLoading, error: botError } = useSelector((state) => state.chatbot)
    const { company, isLoading : companyLoading } = useSelector((state) => state.company)
    const { productId } = useParams()

    const [currentBots, setcurrentBots] = useState([])

    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        if (!hasFetched) {
            dispatch(fetchSingleProduct(productId));
            dispatch(fetchAllbots());
            dispatch(companyInfo());
            setHasFetched(true);
        }
    }, [dispatch, productId, hasFetched]);

    const filteredBots = useMemo(() =>{
        if (yourbots?.data && company?.data.company_name) { 
            console.log(company.data.company_name)
            return yourbots.data.filter(
                (product) => product.product._id  === productId
            )
        } else {
            console.log("Bots data or company info not available yet")
            return []
        }
    }, [yourbots, company, productId])
    console.log(filteredBots)

    if (botError) return <h3>Error loading bots: {botError}</h3>

    return (
        <ProductDetailStyle>
          <GlobalStyle/>
           
            <Sidebar/>
            <Navbar page={`Product Details - ${singleProduct?.data?.product_name}`} />
            {productLoading || botLoading || companyLoading ? <>
                  return <div>Loading...</div>   
            
            </> : <>
            <div className="main-content">
            <div className="content">
                <Link to={'/products'} className="back-link">
                <span className="material-symbols-rounded">arrow_back</span>
                Back to Products
                </Link>
                <div className="product-detail-container">
                <div className="product-info">
                    <h1 className="product-title">{singleProduct?.data?.product_name || 'Product Name'}</h1>
                    <div className="product-meta">
                    <div className="meta-item">
                        <span className="material-symbols-rounded">category</span>
                        <span>Electronics</span>
                    </div>
                    <div className="meta-item">
                        <span className="material-symbols-rounded">inventory_2</span>
                        <span>SKU: SHH-2023-PRO</span>
                    </div>
                    <div className="product-badge">New</div>
                    </div>
                    <p className="product-description">
                    {singleProduct?.data?.description || 'No description available'}
                    </p>
                    <div className="product-features">
                    </div>
                    <div className="product-actions">
                    <Link to={`/create-link/${company.data._id}/${productId}`} className="btn btn-primary">
                        <span className="material-symbols-rounded">smart_toy</span>
                        Create Chatbot
                    </Link>
                    <button className="btn btn-secondary">
                        <span className="material-symbols-rounded">edit</span>
                        Edit Product
                    </button>
                    </div>
                </div>
                </div>
                <div className="tab-container">
                <div className="tab-nav">
                    {/* <button className="tab-btn active">Manuals</button> */}
                    <button className="tab-btn active">Customers</button>
                </div>
                <div className="tab-content">
                    <div className="manual-list">

                    {filteredBots?.length ? (
                                        filteredBots.map((bot, index) => (
                                            <div className="manual-item">
                                <div className="manual-icon">
                                <span className="material-symbols-rounded">description</span>
                                </div>
                                <div className="manual-info">
                                <div className="manual-title">{bot.useremail || 'N/A'}</div>
                                <div className="manual-meta">
                                    <span>PDF • 4.8 MB</span>
                                    <span>crated:{bot.createdAt || 'N/A'}</span>
                                </div>
                                </div>
                                <div className="manual-actions">
                                <Link to={`/chatbot/${bot.company}/${bot.product}/${bot.uniqueId}`} className="manual-btn">
                                    <span className="material-symbols-rounded">smart_toy</span>
                                </Link>
                                </div>
                            </div>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">No bots found</td>
                                        </tr>
                                    )}
                    </div>
                </div>
                </div>
            </div>
            </div>
            </>}
        </ProductDetailStyle>
    )
}

export default ProductDetails
