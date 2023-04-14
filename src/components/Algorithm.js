import React, { useState, useEffect } from "react";
function Algorithm() {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setisValid] = useState(false);
  useEffect(() => {
    luhnValidate();
  }, [cardNumber]);
  var luhnValidate = function(imei){
    return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){ 
            return sum + parseInt(((n + imei.length) %2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
        }, 0)) % 10 === 0;
};

  function handleInputChange(event) {
    setCardNumber(event.target.value);
  }
  function handleValidationClick() {
    luhnValidate();
  }
  return (
    <div>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleValidationClick}>Validate</button>
      <br />
      {isValid ? (
        <p style={{ color: "green" }}>Valid card number!</p>
      ) : (
        <p style={{ color: "red" }}>Invalid card number.</p>
      )}
    </div>
  );
}
export default Algorithm;