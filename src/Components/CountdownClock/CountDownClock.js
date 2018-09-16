import React from 'react'; 
import './CountdownTime.css';




/*Set the date we're counting down to*/
    
let countDownDate = new Date("July 5, 2019 17:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

// Get todays date and time
let now = new Date().getTime();

// Find the distance between now and the count down date
let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="timer"
document.getElementById("timer").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



const CountDownClock = () => {
    return (
    <div>
        <p className='f2 white'>
            {'The Future is Near'}
        </p>
        <div id="launchDate">
            {'July 5th, 2019 CST'}
        </div>
       
        <div>    
          <p id="timer"></p>  
            
        </div>
        <div>
         <p className='f6 white'>
          {'A completely New Way of interacting and socializing with STEAM. STEAM or Science, Technology, Engineering, Art, and Math should be fun and engaging. Soon you will have a place to socialize, learn, and even contribute to the STEAM fields. Hold tight we will be launching on July 5th, 2019 at 5:00 pm Central Standard Time! That is in...'}
         </p>
        </div>
    </div>
    
    );
}

export default CountDownClock;
