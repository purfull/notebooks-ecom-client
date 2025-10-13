import React, { useState } from "react";
import "./OrderTracking.scss";
import { products } from "../../data/productData";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Steps, Dropdown } from "antd";
const { Step } = Steps;
const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [open, setOpen] = useState(false);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrentStep(value);
  };
  return (
    <div className="order-container">
      <div className="title">My Orders</div>

      <div className="faq-item">
        <div
          className="faq-question"
          role="button"
          tabindex="0"
          onClick={() => setOpen(!open)}
        >
          <div>
            <span className="question-text">Order ID: #12345</span>
            <br />
            <span className="delivery-text">
              🧰 Will be Delivered in 5–7 Working Days
            </span>
          </div>
          <span className="icon">
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
        </div>

        {open && (
          <div className="faq-answer">
            <div className="faq-content">
              <div className="divider"></div>

              <Steps current={currentStep} onChange={onChange}>
                <Step title="Step 1" description="Order Confirmed" />
                <Step title="Step 2" description="Shipped" />
                <Step title="Step 3" description="Out for Delivery" />
                <Step title="Step 4" description="Delivered" />
              </Steps>

              <div className="items-header">
                <span>Items ready to shipment</span>
                {/* <span className="icon"></span> */}
              </div>

              <table className="product-table">
                <tbody>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc_sO6nvK0L0nGX5nnPZCZ6CqVWlz5voB0g&s"
                          alt="Cursive Writing Notebook"
                        />
                        <div className="details">
                          <span className="name">Cursive Writing Notebook</span>
                          <span className="weight">1 kg</span>
                        </div>
                      </div>
                    </td>
                    <td className="price">
                      <div className="amount">₹100</div>
                      <div className="old-price">₹120</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://i.pinimg.com/1200x/9a/b1/d7/9ab1d789d8729d6cb8c60d9381395626.jpg"
                          alt="Cursive Handwriting for Kids"
                        />
                        <div className="details">
                          <span className="name">
                            Cursive Handwriting for Kids
                          </span>
                          <span className="weight">2 kg</span>
                        </div>
                      </div>
                    </td>
                    <td className="price">
                      <div className="amount">₹200</div>
                      <div className="old-price">₹250</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
