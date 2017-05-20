import React, {Component} from 'react';
import { AppBarMobile } from 'admin-on-rest';
import MonthlyRevenue from './MonthlyRevenue';
import withWidth from 'material-ui/utils/withWidth';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

class Dashboard extends Component {
  render () {
    const { width } = this.props;
    return (
      <div>
        {width === 1 && <AppBarMobile title="XGYM" />}
        <div style={styles.flex}>
          <MonthlyRevenue value={"$2000"}/>
        </div>
      </div>
    );
  }
} // Dashboard

export default withWidth()(Dashboard);
