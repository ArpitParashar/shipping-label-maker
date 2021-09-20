import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import auth from '../auth/auth';
import * as yup from 'yup';

let LoginSchema = yup.object().shape({
  userName: yup.string().required('This field is required.'),
  password: yup.string().required('This field is required.'),
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

const LoginComponent = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const login = (values) => {
    auth.login();
    history.push("/");
  };

  return (
    <Card className="container mt-3">
      <Fragment>
        <Formik
          initialValues={{
            userName: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            login(values);
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
                  Login!
                </Typography>
                <TextField
                  error={errors.userName && touched.userName}
                  placeholder="Enter User Name"
                  label="Username"
                  onChange={handleChange('userName')}
                  defaultValue=''
                  margin="normal"
                  fullWidth
                  helperText={errors.userName && touched.userName ? errors.userName : null}
                />
                <br />
                <TextField
                  error={errors.password && touched.password}
                  placeholder="Enter Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue=''
                  margin="normal"
                  fullWidth
                  helperText={
                    errors.password && touched.password ? errors.password : null
                  }
                />
               <br />
              </CardContent>
              <CardActions className="right">
                <Button color="primary" variant="contained" type="submit">
                  Login
                </Button>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Card>
  );
};

export default LoginComponent