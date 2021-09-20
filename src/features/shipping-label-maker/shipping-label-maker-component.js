import React, { useState } from 'react';
import WizardComponent from '../../core/components/wizard/wizard-component';
import FormUserDetails from './form-user-details';
import FormReceiverDetails from './form-receiver-details';
import GetWeight from './get-weight';
import SelectShippingOption from './select-shipping-option';
import ShippingLabel from './shipping-label';
import Confirm from './confirm';
import Success from './success';
import ShippingContext from '../../contexts/shipping-context';
import { Button } from '@material-ui/core';

const ShippingLabelMakerComponent = () => {
  const [processComplete, setStatus] = useState(false);
  let initialState = {
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
  };
  const [state, stateState] = useState(initialState);
  const actions = [
    {
      step: 1,
      component: <FormUserDetails />,
    },
    {
      step: 2,
      component: <FormReceiverDetails />,
    },
    {
      step: 3,
      component: <GetWeight />,
    },
    {
      step: 4,
      component: <SelectShippingOption />,
    },
    {
      step: 5,
      component: <Confirm />,
    },
    {
      step: 6,
      component: <Success />,
    },
  ];

  const onComplete = () => {
    setStatus(true);
  };

  const refresh = () => {
    stateState(initialState);
    setStatus(false);
  };

  return (
    <ShippingContext.Provider value={[state, stateState]}>
      {/* 
       // *! This button is only for testing purposes as it is used to simulate onComplete in jest test
      */}
      <Button
        id="testComplete"
        className="hide"
        onClick={() => onComplete()}
      />
      {/* 
       // *! Component's real JSX starts below
      */}

      {!processComplete ? (
        <WizardComponent steps={actions} onComplete={onComplete} />
      ) : (
        <ShippingLabel refresh={refresh} />
      )}
    </ShippingContext.Provider>
  );
};

export default ShippingLabelMakerComponent;
