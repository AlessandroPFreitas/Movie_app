import React from "react";

const Format = ({value}) => {
  if (value == null) return "Value not defined";
  if(isNaN(value)) return "invalid value";

  switch (true) {
    case value >= 1000000000: {
      const inBillions = value / 1000000000;
      return `$${inBillions.toFixed(1)} billion`;
    }
    case value >= 1000000: {
      const inMillions = value / 1000000;
      return `$${inMillions.toFixed(1)} million`;
    }
    default:
        return `$${value.toLocaleString()}`;
  }
};

export default Format;
