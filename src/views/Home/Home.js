import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import "./Home.css";
import lampimg from "./diwali-lamp.png";
import divaimg from "./lamp.png";
import copyImg from "./../Home/copy.png";

const GREETINGS = [
    "स्नेहाचा सुगंध दरवळला, आनंदाचा सण आला. विनंती आमची परमेश्वराला, सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
    "एक दिवा लावु जिजाऊचरणी। एक दिवा लावु शिवचरणी। एक दिवा लावु शंभुचरणी। आमचा इतिहास हीच आमची प्रतिष्ठा….. दिपावलीच्या हार्दिक शिवशुभेच्छा…. आपल्या घरि सुख समाधान सदैव नांदो हिच जगदंबेचरणी प्रार्थना॥ ।। जय शिवराय ।। तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
    "सर्व मित्र परिवाराला … दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!! दीपावलीच्या हार्दिक शुभेछा…",
    "सगळा आनंद सगळे सौख्य, सगळ्या स्वप्नांची पूर्णता, यशाची सगळी शिखरे, सगळे ऐश्वर्य, हे आपल्याला मिळू दे, ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…"
]

function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo] = useState(searchParams.get('to'));
    const [from ,setFrom] = useState(searchParams.get('from'));
    const [greetingNumber, setGreetingNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
    const [themeNumber, setThemeNumber] = useState(searchParams.get('t'))

  return (
    <>
    <div className={`greeting-container ${`theme-${themeNumber}`} `}>
      <img src={lampimg} className='lamp-img left-lamp'/>
      <img src={lampimg} className='lamp-img right-lamp'/>
      <p className='to-text'>Dear {to} 💐</p>

      <p className='greeting-text'>
        {GREETINGS[greetingNumber]}
      </p>

      <img src={divaimg} className='diva-img'/>
        <p className="from-text"> 
           🙏 आपला शुभेच्छुक {from}</p> 
    </div>

    <p className='create-your-own'>Do you want to create your own Diwali Greeting? Customized it here 👇</p>

    <p className='link-generate' onClick={()=>{
        const url = `${process.env.REACT_APP_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`
        navigator.clipboard.writeText(url);
        alert(`Copied to clipboard: ${url}`);
      }}>
      {`${process.env.REACT_APP_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`}
      <img src={copyImg}  className='copy-img'/>
      </p>
 
    <div className='input-container'>
      <input 
      type='text'
      placeholder='To'
      className='input-box'
      value={to}
      onChange={(e)=>{
        setTo(e.target.value);

      }}
      />
       <input 
      type='text'
      placeholder='From'
      className='input-box'
      value={from}
      onChange={(e)=>{
        setFrom(e.target.value);
      }}
      />
       
      <select  
        onChange={(e)=>{
        setGreetingNumber(e.target.value);
      }}
      className='input-box'>
        <option value={0}>Greeting-1</option>
        <option value={1}>Greeting-2</option>
        <option value={2}>Greeting-3</option>
        <option value={3}>Greeting-4</option>
      </select>

      <select 
      onChange={(e)=>{
      setThemeNumber(e.target.value);
      }}
      className='input-box'>
      <option value="1">Theme-1</option>
        <option value="2">Theme-2</option>
        <option value="3">Theme-3</option>
        <option value="4">Theme-4</option>
        <option value="5">Theme-5</option>
      </select>
      
    </div>
    </>
  )
}

export default Home
