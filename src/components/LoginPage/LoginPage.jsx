import React from 'react';
import styles from './LoginPage.module.scss';
import Page from '../Page/Page';

import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import LOGIN_SCHEMA from '../../schemas/login.schema';
import { Button, TextField, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { LOGIN } from '../../store/actions/auth.actions';
import { withRouter } from 'react-router-dom';

let fields = ['name', 'password'];

@connect()
class LoginPage extends React.Component {
  state = { error_from_server: null };
  render() {
    let classes = this.props.classes;
    return (
      <Page className={styles.login_page}>
        <Typography
          variant="h4"
          component="h4"
          className={styles.title}
          align="left"
        >
          LOGIN
        </Typography>
        <br />
        <br />
        <Formik
          initialValues={{ name: '' }}
          validationSchema={LOGIN_SCHEMA}
          onSubmit={(values, actions) => {
            this.setState({ error_from_server: null });
            this.props.dispatch(
              LOGIN(values, error => {
                console.log(error);
                actions.setSubmitting(false);
                if (error) return this.setState({ error_from_server: error });
                this.props.history.push('/');
              })
            );
          }}
        >
          {props => (
            <form
              onSubmit={props.handleSubmit}
              autoComplete="off"
              className={[styles.form, classes.root].join(' ')}
            >
              {fields.map((field, idx) => {
                return (
                  <TextField
                    key={`${field}-${idx}`}
                    type={field.includes('pass') ? 'password' : 'text'}
                    error={Boolean(props.errors[field])}
                    id={`login-form-${field}-${idx}-field`}
                    label={field}
                    className={styles.input}
                    name={field}
                    autoComplete="off"
                    helperText={props.errors[field]}
                    variant="outlined"
                    onChange={props.handleChange}
                    defaultValue={props.values[field]}
                    onBlur={props.handleBlur}
                    autoFocus={idx === 0}
                  />
                );
              })}
              <Typography
                variant="h6"
                component="h6"
                align="center"
                color="error"
              >
                {this.state.error_from_server}
              </Typography>
              <div
                className={[styles.button_container, classes.wrapper].join(' ')}
              >
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                >
                  Login
                </Button>
                {props.isSubmitting && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </form>
          )}
        </Formik>
      </Page>
    );
  }
}

export default withStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))(withRouter(LoginPage));
