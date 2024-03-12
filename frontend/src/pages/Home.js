import { Button, Space } from "antd";
import React from "react";
import "../index.css";
import { Breadcrumb, Layout, Menu, theme, Image, Row, Col } from "antd";
import { Link } from "react-router-dom";
import GetCourseImage from "../images/GetCourse.jpg";
import CreateCourseImage from "../images/CreateCourse.png";

const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
          <h1 style={{ textAlign: 'left', color: "#222298"}}>CREATE A COURSE OR VIEW THE AVAILABLE COURSES</h1>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Row>
            <Col span={12}>
              <div className="image-container">
                <Image width={270} src={GetCourseImage} alt="image" />
              </div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space align="center">
                    <div className="button-container">
                      <Link to="/course/create">
                        <Button type="primary">CREATE COURSE</Button>
                      </Link>
                    </div>
                    <span className="mock-block"></span>
                  </Space>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="image-container">
                <Image width={270} src={CreateCourseImage} alt="Image" />
              </div>

              <div className="space-align-container">
                <div className="space-align-block">
                  <Space align="center">
                    <div className="button-container">
                      <Link to="/course/feed">
                        <Button type="primary">GET COURSE</Button>
                      </Link>
                    </div>
                    <span className="mock-block"></span>
                  </Space>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
export default Home;
