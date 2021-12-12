import './App.css';
import Clock from './components/Clock';
import React, { useEffect,useState } from 'react';
// import Pic from './img/bg.JPG'


function App() {
const [timerDays,setTimerDays] = useState()
const [timerHours,setTimerHours] = useState()
const [timerMinutes,setTimerMinutes] = useState()
const [timerSeconds,setTimerSeconds] = useState()
let interval;
const startTimer=()=>{
  const countDownDate = new Date("May 1,2026").getTime();
  interval=setInterval(()=>{
    const now = new Date().getTime();

    const distance = countDownDate - now;
    
    const days = Math.floor(distance/(24*60*60*1000))
    const hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60))
    const minutes = Math.floor(distance % (60*60*1000)/(1000*60))
    const seconds = Math.floor(distance %(60*1000)/(1000))

    if(distance<0){
      clearInterval(interval.current);
    } else {
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(minutes)
      setTimerSeconds(seconds)
    }
  })
}
  useEffect(()=>{
    startTimer();
  });

  return (
    <div className="App">
      <div>
        <p className="p">Luke & Jane</p>
        <p className="wed">May 1, 2026 - NEW YORK, NY</p>
        <Clock 
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        />
        {/* <img src={require('./img/bg.JPG').default} width ={600} height={400}></img> */}
        
      </div>
    </div>
  );
}

export default App;
