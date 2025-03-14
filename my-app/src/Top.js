import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import robot from './robot.png';

function Top() {



  return (
    <div>
      <h1>Adopta un robot con Robot Lovers! </h1>
      <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
      
      <img src={robot} className="App-logo" alt="robotImage" />

      <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
  
    </div>
  );
}

export default Top;