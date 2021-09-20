import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { WizardAction } from '../../core/components/wizard/wizard-component';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

let SenderSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  street: yup.string().required('This field is required.'),
  city: yup.string().required('This field is required.'),
  state: yup.string().required('This field is required.'),
  zip: yup.string().required('This field is required.'),
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

const FormUserDetails = (props) => {
  const classes = useStyles();
  const state = useState(props.wizardContext.from)[0];

  const continueForm = (values) => {
    props.onAction(WizardAction.next, 'from', values)
  };

  return (
    <Card>
      <Fragment>
        <Formik
          initialValues={{
            name: state.name,
            street: state.street,
            city: state.city,
            state: state.state,
            zip: state.zip,
          }}
          validationSchema={SenderSchema}
          onSubmit={(values) => {
            continueForm(values);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Enter sender details
                </Typography>
                <TextField
                  error={errors.name && touched.name}
                  placeholder="Enter  Name"
                  label="Name"
                  onChange={handleChange('name')}
                  defaultValue={state.name}
                  margin="normal"
                  fullWidth
                  helperText={errors.name && touched.name ? errors.name : null}
                />
                <br />
                <TextField
                  error={errors.street && touched.street}
                  placeholder="Enter Street"
                  label="Street"
                  onChange={handleChange('street')}
                  defaultValue={state.street}
                  margin="normal"
                  fullWidth
                  helperText={
                    errors.street && touched.street ? errors.street : null
                  }
                />
                <br />
                <TextField
                  error={errors.city && touched.city}
                  placeholder="Enter City"
                  label="City"
                  onChange={handleChange('city')}
                  defaultValue={state.city}
                  margin="normal"
                  fullWidth
                  helperText={errors.city && touched.city ? errors.city : null}
                />
                <br />
                <TextField
                  error={errors.state && touched.state}
                  placeholder="Enter State"
                  label="State"
                  onChange={handleChange('state')}
                  defaultValue={state.state}
                  margin="normal"
                  fullWidth
                  helperText={
                    errors.state && touched.state ? errors.state : null
                  }
                />
                <br />
                <TextField
                  error={errors.zip && touched.zip}
                  placeholder="Enter Zip"
                  label="Zip"
                  onChange={handleChange('zip')}
                  defaultValue={state.zip}
                  margin="normal"
                  fullWidth
                  helperText={errors.zip && touched.zip ? errors.zip : null}
                />
                <br />
              </CardContent>
              <CardActions className="right">
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

FormUserDetails.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default props => <FormUserDetails {...props} />