import { Form, Input, Button, Select, Upload, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDistrict, getAllDivision } from "../Redux/Api/Division";
import { addCrimePost } from "../Redux/Api/CrimePost";

export default function Post() {
  const dispatch = useDispatch();
  const { division, loading, district } = useSelector(
    (state) => state.division
  );
  const [form] = Form.useForm();
  const { Option } = Select;

  const handleSubmit = async (values) => {
    try {
      const resp = await dispatch(addCrimePost(values));
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
    console.log(values);
  };

  const handleSelectDivision = (value) => {
    dispatch(getAllDistrict(value));
  };

  useEffect(() => {
    // Fetch data from API
    dispatch(getAllDivision());
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white ">
      <h2 className="text-xl font-bold mb-4">Report a Crime</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="flex gap-4">
          <Form.Item
            className="min-w-[130px]"
            loading={loading}
            name="division"
            label="Division"
            rules={[{ required: true, message: "Please select a division" }]}>
            <Select
              placeholder="Select Division"
              onChange={handleSelectDivision}>
              {division &&
                division.map((div, index) => (
                  <Option key={index} value={div.division}>
                    {div.division}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            className="min-w-[130px]"
            name="district"
            label="District"
            rules={[{ required: false, message: "Please select a district" }]}>
            <Select placeholder="Select District">
              {district &&
                district.map((dist, index) => (
                  <Option key={index} value={dist.district}>
                    {dist.district}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="crimeTime"
            label="Crime Time"
            rules={[{ required: true, message: "Please select crime time" }]}>
            <DatePicker showTime className="w-full" />
          </Form.Item>
        </div>

        <Form.Item
          name="title"
          label="Crime Title"
          rules={[{ required: true, message: "Please enter the crime title" }]}>
          <Input placeholder="Enter crime title" />
        </Form.Item>

        <Form.Item
          name="image"
          label="Upload Image"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[{ required: true, message: "Please upload an image" }]}>
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="description"
          label="Crime Description"
          rules={[{ required: true, message: "Please describe the crime" }]}>
          <Input.TextArea placeholder="Describe the crime..." rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit Crime Report
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
