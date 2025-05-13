import React, { useEffect } from 'react'
import { ProductQuestionsStyle } from './company.styled'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../../../features/products/productSlice'
import { fetchSingleFeedback } from '../../../features/analysis/analysisSlice'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function QuestionsList() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { singleProduct, isLoading: productLoading } = useSelector((state) => state.products)
    const { single_feedback, isLoading: feedbackLoading } = useSelector((state) => state.analysis)

    useEffect(() => {
            dispatch(fetchSingleProduct(productId));
            dispatch(fetchSingleFeedback(productId))
    }, [dispatch, productId]);
  return (
        <ProductQuestionsStyle>
          <GlobalStyle/>
            <Sidebar/>
            <Navbar page={`Product Details - ${singleProduct?.data?.product_name}`} />
            {productLoading || feedbackLoading ? <>
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
                    {/* <div className="meta-item">
                        <span className="material-symbols-rounded">category</span>
                        <span>Electronics</span>
                    </div>
                    <div className="meta-item">
                        <span className="material-symbols-rounded">inventory_2</span>
                        <span>SKU: SHH-2023-PRO</span>
                    </div> */}
                    {/* <div className="product-badge">New</div> */}
                    </div>
                    <p className="product-description">
                    {singleProduct?.data?.description || 'No description available'}
                    </p>
                    <div className="product-features">
                    </div>
                    <div className="product-actions">
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
                    <button className="tab-btn active">Questions Asked</button>
                    {/* <button className="tab-btn "> Answered Questions</button> */}

                </div>
                <div className="tab-content">
                    <div className="manual-list">

                    {single_feedback?.data?.length ? (
                                        single_feedback.data.map((feed, index) => (
                                            <div className="manual-item">
                                <div className="manual-icon">
                                <span className="material-symbols-rounded">description</span>
                                </div>
                                <div className="manual-info">
                                <div className="manual-title">{feed.content || 'N/A'}</div>
                                </div>
                                <div className="manual-actions">
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
        </ProductQuestionsStyle>
  )
}

export default QuestionsList