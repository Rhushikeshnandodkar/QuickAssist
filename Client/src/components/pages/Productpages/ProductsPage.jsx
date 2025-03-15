import React, { useEffect, useState } from 'react';
import { ProductStyle } from './Products.style';
import Sidebar from '../../molecules/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../features/products/productSlice';

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
        <main className="main-content">
          <div className="products-header">
            <h1>Products</h1>
            <a href="add-product.html" className="btn">Add New Product</a>
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
                      <a href="edit-product.html" className="btn">Manage</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No products found.</h3>
            )}
          </div>
        </main>
      </ProductStyle>
    </>
  );
}

export default ProductsPage;