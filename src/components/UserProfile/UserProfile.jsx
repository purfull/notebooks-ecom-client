import {React,useState} from "react";
import { Form, Input, Button } from "antd";
import "./UserProfile.scss";
import { useDispatch, useSelector } from "react-redux";


const UserProfile = () => {
  
  const dispatch = useDispatch ();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    zip_code: "",

  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const Updatesumbit = async (e) => {
    try {
      const payload = {
        "id": formData.id,
        "name": formData.name,
        "email": formData.email,
        "phone": formData.phone,
        "Address": formData.address,
        "country": formData.country,
        "address": formData.address,
        "zip_code": formData.zip_code

      }
      console.log(payload, "jiiiiiiiiiiiiiiiiiiii");
      console.log("hiiiiiiiiiiiiiiii");

      await dispatch(updatecustomers(payload)).unwrap();
    } catch (err) {

    }
  }

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
            <div className="form-group">
              <p className="input-label">Name *</p>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" className="form-input" />
              </Form.Item>
            </div>

            <div className="form-group">
              <p className="input-label">Email *</p>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" className="form-input" />
              </Form.Item>
            </div>

            <div className="form-group">
              <p className="input-label">Phone Number *</p>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" className="form-input" />
              </Form.Item>
            </div>

            <div className="form-group">
              <p className="input-label">Address *</p>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input placeholder="Address" className="form-input" />
              </Form.Item>
            </div>

            <div className="form-group">
              <p className="input-label">Zip-code *</p>
              <Form.Item
                name="zip_code"
                rules={[
                  { required: true, message: "Please input your zip code!" },
                ]}
              >
                <Input placeholder="Zip Code" className="form-input" />
              </Form.Item>
            </div>

            <div className="form-group">
              <p className="input-label">Country *</p>
              <Form.Item
                name="country"
                rules={[
                  { required: true, message: "Please input your country!" },
                ]}
              >
                <Input placeholder="Country" className="form-input" />
              </Form.Item>
            </div>

            {/* Submit Button */}
            <div className="update-profile-button">
              <Button className="primary-button" htmlType="submit">
                Update Profile
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;
