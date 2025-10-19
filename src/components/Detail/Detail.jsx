import React, { useEffect, useState } from "react";
import "./Detail.scss";
import Report from "../../assets/icon/report.png";
import Discount from "../../assets/icon/discount.png";
import { products } from "../../data/productData";
import { Button, Card, Rate } from "antd";
import { useParams } from "react-router-dom";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import FreeDelivery from "../../assets/icon/free-delivery.png";
import CashDelivery from "../../assets/icon/cash-on-delivery.png";
import Brand from "../../assets/icon/brand.png";
import Return from "../../assets/icon/return-box.png";
import Secure from "../../assets/icon/secure.png";
import Ontime from "../../assets/icon/on-time.png";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [productData, setProductData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [showOffers, setShowOffers] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    const productData = products.find((el) => el.id == id);
    setProductData(productData);
  }, []);

  //directing to checkout page
  const navigate = useNavigate();

  return (
    <div className="productdetail-component">
      <div className="product-detail-page">
        <div className="left-detail">
          <div className="session-top">
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

            <div className="detailhead-mobile">
              <h1 className="mobile-detailed-title">{productData?.title}</h1>
              <div className="mobile-product-title">
                {productData?.rating && (
                  <div className="mobile-rating">
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={productData?.rating}
                    />
                    <span className="mobile-rating-text">
                      {productData?.rating}
                    </span>
                  </div>
                )}
                {/* <p className="description">{productData?.description}</p> */}
                <Divider />
              </div>
            </div>

            <div className="detail-middle">
              <h1 className="detailed-title">{productData?.title}</h1>
              <div className="product-title">
                {productData?.rating && (
                  <div className="rating">
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={productData?.rating}
                    />
                    <span className="rating-text">{productData?.rating}</span>
                  </div>
                )}
                {/* <p className="description">{productData?.description}</p> */}
                <Divider />
              </div>

              {/* Rest of middle content */}
              <div className="middle-content">
                <div className="price-total-display">
                  <div className="discount-price-formobile">
                    <div className="discount-price">
                      <span className="discounted">
                        {productData?.discount}
                      </span>
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

                  <div className="for-offers">
                    <div
                      className="offers-heading"
                      onClick={() => setShowOffers(!showOffers)}
                    >
                      <img
                        src={Discount}
                        alt="discount"
                        className="discount-icon"
                      />
                      <h4 className="offers-name">Offers</h4>
                      <span className="dropdown-icon">
                        {showOffers ? "▲" : "▼"}
                      </span>
                    </div>
                    <div
                      className={`offers-content ${
                        showOffers ? "open" : "closed"
                      }`}
                    >
                      <div className="offers-card">
                        <Card>Cashback</Card>
                        <Card>Cashback</Card>
                        <Card>Cashback</Card>
                      </div>
                    </div>

                    <div className="delivery-icons">
                      <div className="icons-grp">
                        <img src={Return} alt="return" className="return" />
                        <span className="icons-grp-name">10 days Return </span>
                      </div>
                      <div className="icons-grp">
                        <img
                          src={CashDelivery}
                          alt="cashDelivery"
                          className="cash-on"
                        />
                        <span className="icons-grp-name">
                          Cash/Pay on Delivery
                        </span>
                      </div>
                      <div className="icons-grp">
                        <img
                          src={FreeDelivery}
                          alt="free-delivery"
                          className="free"
                        />
                        <span className="icons-grp-name">Free Delivery</span>
                      </div>
                      <div className="icons-grp">
                        <img src={Brand} alt="topbrand" className="top-brand" />
                        <span className="icons-grp-name">Top Brand</span>
                      </div>
                      <div className="icons-grp">
                        <img src={Ontime} alt="ontime" className="on-time" />
                        <span className="icons-grp-name">On-Time Delivery</span>
                      </div>
                      <div className="icons-grp">
                        <img
                          src={Secure}
                          alt="securetranscation"
                          className="secure"
                        />
                        <span className="icons-grp-name">
                          Secure transcation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          </div>

          <div className="session-bottom">
            <div className="info-grid">
              <div className="info-group">
                <h3>Brand</h3>
                <p>NoteBook</p>
              </div>
              <div className="info-group">
                <h3>Reading Age</h3>
                <p>1-3</p>
              </div>
              <div className="info-group">
                <h3>Language</h3>
                <p>English</p>
              </div>
              <div className="info-group">
                <h3>Colour</h3>
                <p>Multi</p>
              </div>
              <div className="info-group">
                <h3>Theme</h3>
                <p>Plain</p>
              </div>
              <div className="info-group">
                <h3>Size</h3>
                <p>A4</p>
              </div>
              <div className="info-group">
                <h3>Pages</h3>
                <p>120</p>
              </div>
            </div>
            <Divider />

            <div className="about-item">
              <h3>About this item</h3>
              <div className="item-description">
                <li className="desc-points">
                  Take hassle-free notes during your classes or lectures with
                  Classmate Longbooks for every subject. Single Line ruling in
                  29.7cm X 21.0cm
                </li>
                <li className="desc-points">
                  Eco-friendly and Elemental Chlorine free paper.
                </li>
                <li className="desc-points">
                  Smooth, smudge-free, long writing experience.
                </li>
              </div>
            </div>

            <div className="report-container">
              <img src={Report} alt="report-image" />
              <Link to="/support" className="report">
                Report an issue with this product
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT CHECKOUT BOX */}
        <div className="right-detail">
          <div className="detail-right">
            <div className="checkout-box">
              <div className="price-section">
                <span className="current-price">₹{productData?.price}</span>
                <span className="original-price">
                  ₹{productData?.originalPrice}
                </span>
                <span className="discount">{productData?.discount}</span>
              </div>
              <div className="inclusive">
                <p>Inclusive of all taxes</p>
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
                  <span className="prefix">Quantity:</span>
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
                <Button
                  className="buy-now"
                  onClick={() => navigate("/checkout")}
                >
                  Buy Now
                </Button>
                <Button className="add-cart">Add to Cart</Button>
              </div>
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

export default Detail;
