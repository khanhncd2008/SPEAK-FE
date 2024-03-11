import React from "react";
import { Col, Row } from 'antd';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <Row>
        <Col span={4}>
          <LeftBar/>
        </Col>
        <Col span={16}>
          <Outlet/>
        </Col>
        <Col span={4}>
          <RightBar/>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;
