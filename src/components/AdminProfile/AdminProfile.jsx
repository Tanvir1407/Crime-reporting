import React, { useState } from "react";
import { FaEdit, FaCamera, FaUsers, FaCogs, FaChartBar } from "react-icons/fa";
import { Form, Input, Button, Upload, Table, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AdminProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/100"
  );
  const [bio, setBio] = useState("Administrator of the system");
  const [contact, setContact] = useState("admin@example.com");
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const [users, setUsers] = useState([
    { key: 1, name: "John Doe", email: "john@example.com", role: "User" },
    {
      key: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Moderator",
    },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
    form.setFieldsValue({ bio, contact });
  };

  const handleFormSubmit = (values) => {
    setBio(values.bio);
    setContact(values.contact);
    setIsEditing(false);
  };

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      const url = URL.createObjectURL(info.file.originFileObj);
      setProfileImage(url);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
  ];

  return (
    <div className=" mx-auto bg-gray-900 text-white rounded-lg shadow-md p-6 my-6 flex gap-6">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg flex flex-col items-center">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-700"
          />
          <Upload
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleImageUpload}>
            <button className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full border border-gray-600">
              <FaCamera className="text-gray-300" />
            </button>
          </Upload>
        </div>
        {!isEditing ? (
          <>
            <h2 className="mt-2 text-lg font-bold">Admin Name</h2>
            <p className="text-gray-400 text-sm text-center">{bio}</p>
            <p className="text-gray-400 text-sm">{contact}</p>
            <button
              onClick={handleEditClick}
              className="mt-3 flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
              <FaEdit /> <span>Edit Profile</span>
            </button>
          </>
        ) : (
          <Form form={form} onFinish={handleFormSubmit} className="w-full mt-3">
            <Form.Item name="bio" label="Bio">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item name="contact" label="Contact">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full mt-2">
              Save
            </Button>
          </Form>
        )}
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card
            className="bg-gray-800 p-4 text-center text-white"
            title={<span className="text-white">Total Users</span>}>
            <FaUsers size={30} />
            <p className="text-xl font-bold">150</p>
          </Card>
          <Card
            className="bg-gray-800 p-4 text-center text-white"
            title={<span className="text-white">Reports</span>}>
            <FaChartBar size={30} />
            <p className="text-xl font-bold">45</p>
          </Card>
          <Card
            className="bg-gray-800 p-4 text-center text-white"
            title={<span className="text-white">Settings</span>}>
            <FaCogs size={30} />
            <p className="text-xl font-bold">Manage</p>
          </Card>
        </div>

        {/* User Management Table */}
        <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
          User Management
        </h3>
        <Table
          columns={columns}
          dataSource={users}
          pagination={false}
          className="mt-3"
        />
      </div>
    </div>
  );
};

export default AdminProfile;
