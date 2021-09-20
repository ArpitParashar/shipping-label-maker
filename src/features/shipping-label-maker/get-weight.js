import React, { Fragment, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { WizardAction } from '../../core/components/wizard/wizard-component';
import { useFormikContext, Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

let WeightSchema = yup.object().shape({
  weight: yup.number().required('This field is required.'),
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

const GetWeight = (props) => {
  const classes = useStyles();
  const [state, setstate] = useState(props.wizardContext);

  const continueForm = (values) => {
    props.onAction(WizardAction.next, 'weight', values.weight)

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
    props.onAction(WizardAction.prev, 'weight', state.weight)
  };

  return (
    <Card>
      <Fragment>
        <Formik
          initialValues={{
            weight: state.weight,
          }}
          validationSchema={WeightSchema}
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
                  Enter Weight
                </Typography>
                <TextField
                  error={errors.weight && touched.weight}
                  placeholder="Enter  Weight"
                  label="Weight"
                  onChange={handleChange('weight')}
                  defaultValue={state.weight}
                  margin="normal"
                  fullWidth
                  helperText={
                    errors.weight && touched.weight ? errors.weight : null
                  }
                />
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

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

  
export default props => <GetWeight {...props} />