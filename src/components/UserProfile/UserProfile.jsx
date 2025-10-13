import React from "react";
import { Form, Input, Button } from "antd";
import "./UserProfile.scss";
const UserProfile = () => {
  return (
    <div className="user-wrapper">
      <div className="account-header">
        <span className="account-title">My Account</span>
        <p className="account-description">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="profile-card">
        <span className="profile-title">Profile</span>

        <Form>
          <div className="profile-inputs">
            <p className="input-label">Name *</p>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Name" className="ant-input" />
            </Form.Item>

            <p className="input-label">Email *</p>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" className="ant-input" />
            </Form.Item>

            <p className="input-label">Phone Number *</p>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your mobile number!" },
              ]}
            >
              <Input placeholder="Phone Number" className="ant-input" />
            </Form.Item>

            <p className="input-label">Address *</p>
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="Address" className="ant-input" />
            </Form.Item>

            <p className="input-label">Zip-code *</p>
            <Form.Item
              name="zip_code"
              rules={[
                { required: true, message: "Please input your zip code!" },
              ]}
            >
              <Input placeholder="Zip Code" className="ant-input" />
            </Form.Item>

            <p className="input-label">Country *</p>
            <Form.Item
              name="country"
              rules={[
                { required: true, message: "Please input your country!" },
              ]}
            >
              <Input placeholder="Country" className="ant-input" />
            </Form.Item>

            {/* Submit Button */}
            {/* <Form.Item> */}
            <Button className="primary-button" htmlType="submit">
              Update Profile
            </Button>
            {/* </Form.Item> */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;
