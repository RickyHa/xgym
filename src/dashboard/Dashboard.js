import React, {Component} from 'react';
import MonthlyRevenue from './MonthlyRevenue';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <MonthlyRevenue value={"$2000"}/>
      </div>
    );
  }
} // Dashboard

export default Dashboard;
