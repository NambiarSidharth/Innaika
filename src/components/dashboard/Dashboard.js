import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bulma-components'
import 'tachyons';
import DashboardHeader from './DashboardComponents/DashboardHeader';
import DashboardBody from './DashboardComponents/DashboardBody';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
        <DashboardHeader />
        </div>
        <div className="container">
            <DashboardBody/>        
        </div>
        <div className="footer">
        
        </div>
      </div>
    )
  }
}


export default Dashboard;