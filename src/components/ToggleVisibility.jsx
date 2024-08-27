
import React, { useState } from 'react';

function ToggleVisibility() {
    // State: We use the useState hook to manage the visibility of the text. isVisible is initially 
    // set to false (hidden).
  const [isVisible, setIsVisible] = useState(false);
// Click Handler: The handleClick function toggles the isVisible state each time the button is clicked.
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
// Button: The button's text dynamically changes between "Show Text" and "Hide Text" based on the current
// visibility state.
// Conditional Rendering: The <p> tag containing the text is only rendered when isVisible is true.
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>This text is now visible!</p>}
    </div>
  );
}

export default ToggleVisibility;
