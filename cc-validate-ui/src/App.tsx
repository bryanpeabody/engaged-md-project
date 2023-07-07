import './App.css'
import { useState } from 'react'
import ValidationResults from './ValidationResults'

//
// Main App component
// Note: Valid test credit card number is 4111111111111111
//
function App() {
  //
  // Holds the card number input field value
  //
  let [cardNum, setCardNum] = useState('')
  
  //
  // Determines if the card number is valid. Possible values are
  // 0 - unknown, 1 - valid, 2 - invalid.
  //
  let [valid, setValid] = useState(0)

  //
  // Handle input field change. Set valid to 0 to remove any 
  // previous status message in the UI.
  //
  const handleChange = (event: any) => {
    //
    // The credit card number has changed, set it to unknown validate state
    //
    setValid(0)

    // Set the new card number in state
    setCardNum(event.target.value)
  };

  //
  // Handles validate button click. Calls API with card number provided.
  //
  const handleValidateClick = async () => {
    if (cardNum.trim().length !== 0) {
      try {
        //
        // Use fetch to call the validate API
        //
        await fetch('http://localhost:8080/validate/' + cardNum)
          .then(response => response.json())
          .then(data => (data.isValid ? setValid(1) : setValid(-1)))
      } catch (error) {
        //
        // Log error to console
        //
        console.error(error)
      }
    }
  }

  return (    
    <div className="App">
      <div className="sidenav">
         <div className="login-main-text">
            <h2>Credit Card<br /> Validator</h2>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <label>Credit Card Number</label>
              <input type="text" id="cardNum" name="cardNum" onChange={handleChange} value={cardNum} className="form-control"></input>
              <br />
              <button type="button" onClick={handleValidateClick} className="btn btn-primary">Validate</button>
              <ValidationResults isValid={valid} />
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;
