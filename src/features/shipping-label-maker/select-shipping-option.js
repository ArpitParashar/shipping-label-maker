import React, { Fragment, useState, useEffect } from 'react';
import { TextField, MenuItem } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { WizardAction } from '../../core/components/wizard/wizard-component';
import { useFormikContext, Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

let ShippingSchema = yup.object().shape({
  shippingOption: yup.number().required('This field is required.'),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: 24,
  },
}));

export const shippingOptionEnum = {
  ground: 1,
  priority: 2,
};

const SelectShippingOption = (props) => {
  const classes = useStyles();
  const [state, setstate] = useState(props.wizardContext);
  const options = [
    {
      label: 'Ground',
      value: shippingOptionEnum.ground,
    },
    {
      label: 'Priority',
      value: shippingOptionEnum.priority,
    },
  ];
  const continueForm = (values) => {
    props.onAction(WizardAction.next, 'shippingOption', values.shippingOption);
  };

  const Logger = () => {
    const formik = useFormikContext();
    useEffect(() => {
      setstate(formik.values);
    }, [formik.values]);
    return null;
  };

  const back = (e) => {
    e.preventDefault();
    props.onAction(WizardAction.prev, 'shippingOption', state.shippingOption);
  };

  return (
    <Card>
      <Fragment>
        <Formik
          initialValues={{
            shippingOption: state.shippingOption,
          }}
          validationSchema={ShippingSchema}
          onSubmit={(values) => {
            continueForm(values);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Logger />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Select Shipping Option
                </Typography>
                <TextField
                  select
                  id="shippingOption"
                  label="Shipping Option"
                  value={state.shippingOption}
                  onChange={handleChange('shippingOption')}
                  helperText={touched.shippingOption ? errors.shippingOption : ''}
                  error={touched.shippingOption && Boolean(errors.shippingOption)}
                  fullWidth
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
              </CardContent>
              <CardActions className="right">
                <Button color="secondary" variant="contained" onClick={back}>
                  Back
                </Button>

                <Button color="primary" variant="contained" type="submit">
                  Continue
                </Button>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Card>
  );
};

SelectShippingOption.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default props => <SelectShippingOption {...props} />