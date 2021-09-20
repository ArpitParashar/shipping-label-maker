import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ShippingContext from '../../../contexts/shipping-context';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Button } from '@material-ui/core';

export const WizardAction = {
  prev: 1,
  next: 2,
  end: 3,
};

const WizardComponent = (props) => {
  // Proceed to next step
  const initialStep = 1;
  const [state, setState] = useContext(ShippingContext);
  const [step, setstep] = useState(initialStep);

  const handleWizardAction = (action, name, data) => {
    switch (action) {
      case WizardAction.prev:
        if (name) {
          setState((prevState) => {
            return {
              ...prevState,
              [name]: data,
            };
          });
        }
        setstep((currStep) => {
          return currStep - 1;
        });
        break;
      case WizardAction.next:
        if (name) {
          setState((prevState) => {
            return {
              ...prevState,
              [name]: data,
            };
          });
        }
        setstep((prevStep) => {
          return prevStep + 1;
        });
        break;
      case WizardAction.end:
        props.onComplete();
        break;
      default:
        return state;
    }
  };

  return (
    <Fragment>
      {/* 
       // *! These buttons are only for testing purposes as they are used to simulate events in jest tests
      */}
      <Button
        id="testNextStep"
        className="hide"
        onClick={() => handleWizardAction(WizardAction.next)}
      />
      <Button
        id="testPrevStep"
        className="hide"
        onClick={() => handleWizardAction(WizardAction.prev)}
      />
      {/* 
       // *! Component's real JSX starts below
      */}
      <h3 className="red-text center text-darken-3"> Welcome to the WIZARD!</h3>
      <div className="container">
        <Stepper activeStep={step}>
          {props.steps &&
            props.steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step.step}</StepLabel>
                </Step>
              );
            })}
        </Stepper>
        {props.steps
          ? React.cloneElement(props.steps[step - 1].component, {
              onAction: handleWizardAction,
              wizardContext: state,
            })
          : ''}
      </div>
    </Fragment>
  );
};

WizardComponent.propTypes = {
  steps: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default WizardComponent;
