import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { WizardAction } from '../../core/components/wizard/wizard-component';
import PropTypes from 'prop-types';

const Confirm = (props) => {
  const state = useState(props.wizardContext)[0];
  const continueForm = (e) => {
    e.preventDefault();
    props.onAction(WizardAction.next)
  };

  const back = (e) => {
    e.preventDefault();
    props.onAction(WizardAction.prev)
  };

  return (
    <Card>
      <CardHeader>
        <AppBar title="Confirm User Data" />
      </CardHeader>
      <CardContent>
        <div className="row">
          <div className="col s6">
            <h6>FROM:</h6>
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={state.from.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Street" secondary={state.from.street} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={state.from.city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="State" secondary={state.from.state} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Zip" secondary={state.from.zip} />
              </ListItem>
            </List>
          </div>
          <div className="col s6">
            <h6>TO:</h6>
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={state.to.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Street" secondary={state.to.street} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={state.to.city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="State" secondary={state.to.state} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Zip" secondary={state.to.zip} />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <List>
              <ListItem>
                <ListItemText primary="Weight" secondary={state.weight} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Shipping Option" secondary={state.shippingOption===1?'Ground':'Priority'} />
              </ListItem>
            </List>
          </div>
        </div>
      </CardContent>
      <CardActions className="right">
        <Button color="secondary" variant="contained" onClick={back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={continueForm}>
          Confirm & Continue
        </Button>
      </CardActions>
    </Card>
  );
};

Confirm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default props => <Confirm {...props} />