import React from "react";

const SpecialButton = (props) => {
  const {specials} = props
  return (
    <button>
      {specials}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;