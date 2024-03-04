import React from 'react'
import './home.css';
import { Button, Image, Tabs } from 'antd';
import onlintStudy from "../../img/home/online-study.png" 
import bloodReport from "../../img/home/blood-report.png"
import schoolBag from "../../img/home/school-bag.png"
import other07 from "../../img/home/Other07.png"
import other08 from "../../img/home/Other08.png"
import other09 from "../../img/home/Other09.png"
import reviewStart from "../../img/home/reviewStart.png"
import start from "../../img/home/start.png"




function Home() {

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Home',
    },
    {
      key: '2',
      label: 'Find a tutor',
    },
    {
      key: '3',
      label: 'Become a tutor',
    },
    {
      key: '4',
      label: 'About us',
    }
  ];
  return(
    <div className='home'>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div>
          <a>EN/VI</a>
          <a>Login</a>
        </div>
      </div>
      <div>
        <div>
          <Image src={schoolBag}/> 
          <Image src={onlintStudy}/> 
          <Image src={bloodReport}/> 
        </div>
        <div>
          <h1>
            Improve your English speaking skills with SPEAK
          </h1>
          <p>
            Get started today with our experienced tutors,  flexible scheduling, and AI-powered learning.  Achieve your fluency goals, fast!
          </p>
          <Button>Get Started</Button>
        </div>
        <div>
          <Image src={other07}/> 
          <Image src={other08}/> 
          <Image src={other09}/>          
        </div>
        <div>
          <Image src={reviewStart}/>          
          <Image src={start}/>          
        </div>
      </div>
    </div>
  )
}

export default Home
