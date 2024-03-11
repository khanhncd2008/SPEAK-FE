import Search from "antd/es/input/Search";
import React from "react";
import { Col, Row } from "antd";
import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
const { Meta } = Card;



const Dashboard = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  Chart.register(LinearScale);
  Chart.register(CategoryScale);
  Chart.register(BarElement);
  const options = {
    x: {
      type: 'category',
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Your labels here
    },
    y: {
      beginAtZero: true,
    },
  };
  
  return (
    <div>
      <Search
        placeholder="input search text"
        style={{
          width: "50%",
          marginLeft: "4rem",
          marginTop: "4rem",
          outline: "none",
          border: "none",
        }}
      />
      <h2>Topics</h2>
      <Row>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
      <h2>Statistics</h2>
      <div style={{width: "31.25rem", height: "31.25rem"}} >
        <h2>Learning Time</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
