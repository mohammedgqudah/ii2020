import React from 'react';
import styles from './AppHeader.module.scss';
import { withTheme, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ACTION_LOGOUT } from '../../store/actions/auth.actions';

@connect(state => ({ user: state.user }))
@withRouter
class AppHeader extends React.Component {
  logout = () => {
    this.props.history.push('/login');
    this.props.dispatch(ACTION_LOGOUT());
  };
  render() {
    let { theme, user } = this.props;
    let { palette } = theme;
    return (
      <div
        className={styles.header}
        style={{ backgroundColor: palette.primary.main }}
      >
        <div></div>
        <div>
          {user ? (
            <React.Fragment>
              <Button color="danger" onClick={this.logout}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                color="default"
                variant="outlined"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              {'  '}
              <Button color="default" component={Link} to="/signup">
                Signup
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withTheme(AppHeader);
