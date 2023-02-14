import { useState } from "react";
import './timer.css';
function Timer() {
  const [time, setime] = useState("")
  const [interval , updateinterval] = useState(null)
  function handle(e) {
    let value = parseInt(e)
    console.log(value)
    if (value > 0) {
      if(interval !== null){
        clearInterval(interval)
        updateinterval(null)
      }
     let newinterval =  setInterval(() => {
        if (value > 0) {
          setime(value)
          value--
        } else {
          setime(0)
        }
      }, 1000
      )
      updateinterval(newinterval)
    } else {
      setime(0)
    }

  }
  return (<div id="main">
    <h1>CountDown</h1>
    <input type="number" id="timeCount" placeholder="Enter time" onKeyUp={(e)=>{handle(e.target.value)}} />
    <div id="current-time">
      {
        time
      }
    </div>
  </div>
  )
}

export default Timer;