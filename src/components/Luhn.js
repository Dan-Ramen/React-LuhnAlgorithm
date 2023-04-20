import React, { useState, useEffect } from "react";

function Luhn() {

  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateCardNumber();
  }, [cardNumber]);

  function validateCardNumber() {
    let sum = 0;
    let isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    setIsValid(sum % 10 === 0);
  };

  function handleInputChange(event) {
    setCardNumber(event.target.value);
  }

  function handleValidationClick() {
    validateCardNumber();
  }

return (
    <div>
      <label>
        Card No. :
        <input type="text" value={cardNumber} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleValidationClick}>Validate</button>
      <br />
      {/* wanted to add an extra perameter here to not display anything if "isValid === 0" but couldnt figure it out */}
      {isValid ? (
        <p style={{ color: "green" }}>Valid card number!</p>
      ) : (
        <p style={{ color: "red" }}>Invalid card number.</p>
      )}

    </div>
  );

}

export default Luhn;

// Special thanks and credit to Jordan for help formating the algorithm itself