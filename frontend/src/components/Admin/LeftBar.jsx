import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Divider, Menu } from 'antd';
import { Link } from 'react-router-dom';
function LeftBar() {

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    // getItem('Dashboard', '1', <PieChartOutlined />),
    // getItem('Explore', '2', <DesktopOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),
    // getItem('Option 3', '4', <ContainerOutlined />),
    // getItem('Option 3', '5', <ContainerOutlined />),
    // getItem('Option 3', '6', <ContainerOutlined />),
    // getItem('Option 3', '7', <ContainerOutlined />),


  {
      label: (
          <Link to="dashboard">
              Dashboard
          </Link>
      ),
      key: 'dashboard',
  },
  
  {
    label: (
        <Link to="">
            Option 6
        </Link>
    ),
    key: '....',
  },
  {
    label: (
        <Link to="">
           Option 5
        </Link>
    ),
    key: '...',
  }
    // getItem('Navigation One', 'sub1', <MailOutlined />, [
    //   getItem('Option 5', '5'),
    //   getItem('Option 6', '6'),
    //   getItem('Option 7', '7'),
    //   getItem('Option 8', '8'),
    // ]),
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
  ];
  return (
    <div
      style={{
        width: 256,
        overflowY: "scroll"
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
        style={{minHeight:"100vh", paddingTop: "150px"}}
      />
    </div>
  );
}

export default LeftBar;
