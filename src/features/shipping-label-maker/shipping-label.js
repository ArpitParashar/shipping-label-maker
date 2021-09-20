import React, { useContext, Fragment } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import ShippingContext from '../../contexts/shipping-context';
import { shippingOptionEnum } from './select-shipping-option';

const ShippingLabel = (props) => {
  // eslint-disable-next-line
  const [state, setState] = useContext(ShippingContext);

  const refresh = () => {
      props.refresh();
  };

  const calculateCost = () => {
    const shippingRate = 0.4;
    const shippingCost =
      state.weight *
      shippingRate *
      (state.shippingOption === shippingOptionEnum.ground ? 1 : 1.5);
    return shippingCost.toFixed(2);
  };

  return (
    <Fragment>
      <h3 className="red-text center text-darken-3"> Your shipping label!</h3>
      <Card className="container">
        <CardContent>
          <div className="row">
            <div className="col s6">
              <h6>FROM:</h6>
              <List>
                <ListItem>
                  <ListItemText primary="Name" secondary={state.from.name} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Street"
                    secondary={state.from.street}
                  />
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
                  <ListItemText
                    primary="Shipping Option"
                    secondary={state.shippingOption===1?'Ground':'Priority'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText id="shippingcCost"
                    primary="Shipping Cost"
                    secondary={calculateCost()}
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </CardContent>
        <CardActions className="right">
          <Button color="secondary" variant="contained" onClick={refresh}>
            Create Another!
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default ShippingLabel;
