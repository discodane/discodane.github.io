import React from 'react';
import './Home.css';
import aboutList from '../../assets/aboutList';
import pic from '../../assets/images/me.png';

const Home = () => (
  <div className="content">
    <div className='text'>
      <div className="name"><span>Dane Erickson</span></div>
      {aboutList.map(item => <div className="listItem">{item}</div>)}
    </div>
    <div className="image">
      <img src={pic} alt="me" />
    </div>
  </div>
)

export default Home;

