import React, { useState } from "react";
import { Typography, Input, Button, Form, Checkbox, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const { TextArea } = Input;

const initial = { instructor: "", duration: 0, syllabus: [], desc: "" };

const Create = () => {
  const skillSet = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "Python" },
    { name: "Django" },
    { name: "Rust" }
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    fetch("http://localhost:8080/Course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/course/feed");
  };

  const { instructor, duration, desc } = form;

  const handleChange = (checkedValues) => {
    setForm({ ...form, syllabus: checkedValues });
  };

  /**const handleChange = (e) => {
    setForm({ ...form, syllabus: [...form.syllabus, e.target.value] });
  };**/

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
    <Form
      onFinish={handleSubmit}
      initialValues={form}
      style={{ padding: "2%" }}
    >
      <Typography.Title style={{ margin: "3% auto" }} level={5} align="center">
        Create New Post
      </Typography.Title>
      <Form.Item name="instructor" rules={[{ required: true, message: "Please enter the Course instructor!" }]}>
        <Input
          style={{ width: "100%", margin: "2% auto" }}
          placeholder="Course-Instructor"
          value={instructor}
          onChange={(e) => setForm({ ...form, instructor: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="duration" rules={[{ required: true, message: "Please enter the course duration!" }]}>
        <Input
          style={{ width: "100%", margin: "2% auto" }}
          placeholder="Duration"
          value={duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="desc" rules={[{ required: true, message: "Please enter the course description!" }]}>
        <TextArea
          style={{ width: "100%", margin: "2% auto" }}
          placeholder="Course-description"
          autoSize={{ minRows: 4, maxRows: 6 }}
          value={desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
      </Form.Item>
      <Typography.Title level={5} style={{ margin: "1% auto" }}>
        Please mention required skills
      </Typography.Title>
      <Checkbox.Group style={{ width: "100%", margin: "1% auto" }} onChange={handleChange}>
        {skillSet.map(({ name }) => (
          <Checkbox key={name} value={name}>{name}</Checkbox>
        ))}
      </Checkbox.Group>
      <Form.Item style={{ margin: "2% auto" }}>
        <Button type="primary" htmlType="submit" style={{ width: "50%" }}>
        <Link to="/course/feed">
          Submit
        </Link>
        </Button>
      </Form.Item>
    </Form>
    </Row>
  );
};

export default Create;
