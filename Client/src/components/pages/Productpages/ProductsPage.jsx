import React, { useEffect, useState } from 'react';
import { ProductStyle } from './Products.style';
import Sidebar from '../../molecules/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../features/products/productSlice';
import { Link } from 'react-router-dom';
import Navbar from '../../molecules/Navbar';

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    if (!products) dispatch(fetchProducts());
  }, [dispatch, products]);

  // Update filtered products when products or search term changes
  useEffect(() => {
    if (products?.data) {
      const filtered = products.data.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchTerm]);

  return (
    <>
      <Sidebar />
      <ProductStyle>
        {/* <main className="main-content">
          <div className="products-header">
            <h1>Products</h1>
            <div className="btn"><Link to={"/upload-product"}>Add product</Link></div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="search-input"
            />
            <button className="btn btn-outline">Filter</button>
          </div>

          <div className="products-grid">
            {isLoading ? (
              <h3>Loading...</h3>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((data) => (
                <div className="product-card" key={data._id}>
                  <div className="product-info">
                    <div className="product-title">{data.product_name}</div>
                    <div className="product-meta">
                      <p>Manual Version: 2.1</p>
                      <p>Last Updated: 2024-03-15</p>
                    </div>
                    <div className="product-status">
                      <span className="status-badge">Active Chatbot</span>
                      <div href="edit-product.html" className="btn"><Link to={`/product-details/${data._id}`}>Manage</Link></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No products found.</h3>
            )}
          </div>
        </main> */}


        <div className="main-content">
          <Navbar/>
          <div className="content">
            <div className="page-header">
              <div className="section-title">All Products</div>
              <div className="page-actions">
                <div className="search-box">
                  <span className="material-symbols-rounded search-icon">search</span>
                  <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="search-input" placeholder="Search products..." />
                </div>
                <button className="btn">
                  <span className="material-symbols-rounded">add</span>
                  Add Product
                </button>
              </div>
            </div>
            <div className="product-grid">


            {isLoading ? (
              <h3>Loading...</h3>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((data) => (
                <div className="product-card" key={data._id}>
                <div className="product-content">
                  <h3 className="product-title">{data.product_name}</h3>
                  {/* <div className="product-category">
                    <span className="material-symbols-rounded">category</span>
                    <span>Electronics</span>
                  </div> */}
                  <div className="product-stats">
                    <div className="stat">
                      <span className="material-symbols-rounded">description</span>
                      <span>3 Manuals</span>
                    </div>
                    <div className="stat">
                      <span className="material-symbols-rounded">smart_toy</span>
                      <span>2 Chatbots</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <Link to={`/product-details/${data._id}`} className="product-btn primary">
                      <span className="material-symbols-rounded">visibility</span>
                      <span>View</span>
                    </Link>
                    <button className="product-btn secondary">
                      <span className="material-symbols-rounded">edit</span>
                      <span>Edit</span>
                    </button>
                  </div>
                </div>
              </div>
              ))
            ) : (
              <h3>No products found.</h3>
            )}
            </div>
            <div className="pagination">
              <button className="page-btn">
                <span className="material-symbols-rounded">chevron_left</span>
              </button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">
                <span className="material-symbols-rounded">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

      </ProductStyle>
    </>
  );
}

export default ProductsPage;