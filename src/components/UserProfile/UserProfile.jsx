import { useState } from "react";
import { FaEdit, FaCamera } from "react-icons/fa";
import { Form, Input, Button, Upload } from "antd";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/100"
  );
  const [bio, setBio] = useState("This is my bio");
  const [name, setName] = useState("Abdullah Al Mehmud");
  const [contact, setContact] = useState("contact@example.com");
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const [crimeReports, setCrimeReports] = useState([
    { title: "Theft Incident", location: "Downtown", date: "2024-02-10" },
    { title: "Vandalism Case", location: "City Park", date: "2024-01-25" },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
    form.setFieldsValue({ name, bio, contact });
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

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-md p-6 my-6 flex gap-6">
      {/* Left Side - Profile Section */}
      <div className="w-1/3 flex flex-col items-center bg-gray-800 p-4 rounded-lg">
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
            <button className="absolute bottom-7 right-0 bg-gray-800 p-1 rounded-full border border-gray-600">
              <FaCamera className="text-gray-300" />
            </button>
          </Upload>
        </div>
        {!isEditing ? (
          <>
            <h2 className="mt-2 text-lg font-bold">{name}</h2>
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
            <Form.Item name="name">
              <Input />
            </Form.Item>
            <Form.Item name="bio">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item name="contact">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full mt-2">
              Save
            </Button>
          </Form>
        )}
      </div>

      {/* Right Side - Crime Reports Section */}
      <div className="w-2/3">
        <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
          Crime Reports
        </h3>
        <ul className="mt-3 space-y-3">
          {crimeReports.map((report, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded-lg shadow">
              <h4 className="font-bold">{report.title}</h4>
              <p className="text-sm text-gray-400">
                Location: {report.location}
              </p>
              <p className="text-sm text-gray-400">Date: {report.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
