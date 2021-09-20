import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-component';

const Success = (props) => {

  const completeProcess = () => {
    props.onAction(WizardAction.end);
  }
  
  return (
    <Card>
      <CardContent>
        <div className="container center">
          <h5 className="green-text center text-darken-2">
            Thank You For Your Submission!
          </h5>
          <Button onClick={completeProcess} >Click here to see your shipping label!</Button>
        </div>
      </CardContent>
    </Card>
  );
};

Success.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default props => <Success {...props} />