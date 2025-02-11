import { Form, Input, Button, Select, Upload, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default function Post() {

    const [form] = Form.useForm();
    const { Option } = Select;
  
    const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
    const districts = { "Dhaka": ["Dhaka", "Gazipur", "Narsingdi"], "Chattogram": ["Chattogram", "Cox's Bazar"] }; // Extend dynamically
  
    const handleSubmit = (values) => {
      console.log(values);
    };


  return (
    
    <div className="max-w-2xl mx-auto p-6 bg-white ">
      <h2 className="text-xl font-bold mb-4">Report a Crime</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
       
      <div className="flex gap-4">
        <Form.Item name="division" label="Division" rules={[{ required: true, message: 'Please select a division' }]}> 
          <Select placeholder="Select Division">
            {divisions.map((div) => (
              <Option key={div} value={div}>{div}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="district" label="District" rules={[{ required: false, message: 'Please select a district' }]}> 
          <Select placeholder="Select District">
            {form.getFieldValue("division") && (districts[form.getFieldValue("division")] || []).map((dist) => (
              <Option key={dist} value={dist}>{dist}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="crimeTime" label="Crime Time" rules={[{ required: true, message: 'Please select crime time' }]}> 
          <DatePicker showTime className="w-full" />
        </Form.Item>
        </div>


        <Form.Item name="title" label="Crime Title" rules={[{ required: true, message: 'Please enter the crime title' }]}> 
          <Input placeholder="Enter crime title" />
        </Form.Item>
        
        <Form.Item name="image" label="Upload Image" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true, message: 'Please upload an image' }]}> 
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        
        <Form.Item name="description" label="Crime Description" rules={[{ required: true, message: 'Please describe the crime' }]}> 
          <Input.TextArea placeholder="Describe the crime..." rows={4} />
        </Form.Item>
       
       
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">Submit Crime Report</Button>
        </Form.Item>
      </Form>
    </div>
  )
}



