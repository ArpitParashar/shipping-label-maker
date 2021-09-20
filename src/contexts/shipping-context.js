import React from "react";

// set the defaults
const ShippingContext = React.createContext({
  initialState: {
    from: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    to: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    weight: '',
    shippingOption: '',
  },
  setState: () => {}
});

export default ShippingContext;
