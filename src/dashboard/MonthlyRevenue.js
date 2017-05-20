import React, {Component} from 'react';
import DollarIcon from 'material-ui/svg-icons/editor/attach-money';
import {Card, CardTitle} from 'material-ui/Card';
import {translate} from 'admin-on-rest';

const styles={
  card: {borderLeft: 'solid 4px yellow', flex: '1', marginRight: '1em'},
  icon: {float: 'right', width: 64, height: 64, padding: 16, color: '#ffd700'}
}; // styles

class MonthlyRevenue extends Component {

  render () {
    const { translate }=this.props;
    let subtitle=translate('pos.dashboard.monthly_revenue');
    return (
      <Card style={styles.card}>
        <DollarIcon style={styles.icon}/>
        <CardTitle title={this.props.value} subtitle={subtitle}/>
      </Card>
    ); // return
  } // render
} // MonthlyRevenue

export default translate(MonthlyRevenue);
