import React from 'react';
import styles from './Page.module.scss';
import Zoom from '@material-ui/core/Zoom';

class Page extends React.Component {
  render() {
    let { className } = this.props;
    return (
      <Zoom in={true}>
        <div className={[styles.page, className].join(' ')}>
          {this.props.children}
        </div>
      </Zoom>
    );
  }
}

export default Page;
