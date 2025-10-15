import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Note from "../../assets/images/note.jpg";
import { products } from "../../data/productData";
import { Button, Rate } from "antd";
import { useParams } from "react-router-dom";
import { Divider } from "antd";

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  let { id } = useParams();
  useEffect(() => {
    const productData = products.find((el) => el.id == id);
    setProductData(productData);
  }, []);

  return (
    <div className="productdetail-component">
      <div className="product-detail-page">
        <div className="detail-left">
          <div className="image-gallery">
            <div className="thumbnails">
              {productData?.galleryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  className={`thumbnail ${
                    index === selectedIndex ? "active" : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>

            <div className="main-image">
              <img
                src={productData?.galleryImages?.[selectedIndex]}
                alt="main product"
              />
            </div>
          </div>
        </div>

        {/* MIDDLE DETAILS SECTION */}
        <div className="detail-middle">
          <h1>{productData?.title}</h1>
          {productData?.rating && (
            <div className="rating">
              <Rate allowHalf disabled defaultValue={productData?.rating} />
              <span className="rating-text">{productData?.rating}</span>
            </div>
          )}
          <p className="description">{productData?.description}</p>
          <Divider />

          <div className="price-total-display">
            <div className="discount-price">
              <span className="discounted">{productData?.discount}</span>
              <span className="product-current-price">
                ₹{productData?.price}
              </span>
            </div>
            <div className="cancelled-price">
              <h6 className="cancelled-heading">
                M.R.P:
                <span className="original-product-price">
                  ₹{productData?.originalPrice}
                </span>
              </h6>
            </div>
            <p>Inclusive of all taxes</p>
          </div>
          {/* <div className="price-section">
      <span className="current-price">₹{productData?.price}</span>
      <span className="original-price">₹{productData?.originalPrice}</span>
      <span className="discount">{productData?.discount}</span>
    </div> */}
        </div>

        {/* RIGHT CHECKOUT BOX */}
        <div className="detail-right">
          <div className="checkout-box">
            <div className="price-section">
              <span className="current-price">₹{productData?.price}</span>
              <span className="original-price">
                ₹{productData?.originalPrice}
              </span>
              <span className="discount">{productData?.discount}</span>
            </div>
            <div className="delivery">
              <span className="free">FREE Delivery</span> by{" "}
              <strong>Tuesday, 14 October</strong>
            </div>
            <div className="stock">In stock</div>
            <div className="location">
              Deliver to <strong>Sanjay - Nagercoil 629002</strong>
            </div>
            <div className="quantity">
              {/* <label htmlFor="qty">Qty:</label> */}
              <div className="quantity-select">
                <span className="prefix">quantity:</span>
                <select
                  id="qty"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="checkout-buttons">
              <Button className="buy-now">Buy Now</Button>
              <Button className="add-cart">Add to Cart</Button>
            </div>

            {/* <div className="secure">
              <i className="fa fa-lock"></i> Secure transaction
            </div>

            <div className="sold-by">
              Sold by <a href="#">Clicktech Retail Pvt Ltd</a> and Fulfilled by Amazon.
            </div>

            <div className="protection">
              <label>
                <input type="checkbox" /> 1 Year Extended Warranty for ₹2,399
              </label>
              <label>
                <input type="checkbox" /> 2 Years Total Protection Plan for ₹3,299
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
