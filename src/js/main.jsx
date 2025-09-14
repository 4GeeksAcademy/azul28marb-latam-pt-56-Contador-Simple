import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

function SimpleCounter(props) {
  return (<div className='bigCounter'>
    <div className='calendar'>
      <i className="fa-regular fa-clock"></i>
    </div>
    <div className='five'>{props.digitFive % 10}</div>
    <div className='four'>{props.digitFour % 10}</div>
    <div className='three'>{props.digitThree % 10}</div>
    <div className='two'>{props.digitTwo % 10}</div>
    <div className='one'>{props.digitOne % 10}</div>
  
  </div>)
}

SimpleCounter.propTypes = {
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
}

let counter = 0;
setInterval(function() {
    const five = Math.floor(counter/10000)
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter++;
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five}/>
      </React.StrictMode>,
    )
},1000)