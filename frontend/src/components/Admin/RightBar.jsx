import { Avatar, Col, Row } from "antd";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;
function RightBar() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Avatar
            style={{ marginLeft: "45px" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Row>
        <Col span={12}>
          <Card
            hoverable
            style={{
              width: 100,
            }}
          >
            <Meta description="Sessions" />
            <h2>24</h2>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            style={{
              width: 100,
            }}
          >
            <Meta description="Credistx" />
            <h2>1$</h2>
          </Card>
        </Col>
      </Row>
      <h1>Quick Start</h1>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
}

export default RightBar;
