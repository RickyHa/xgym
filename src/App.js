import React, { Component } from 'react';
import './App.css';

import {Admin, Delete, Resource} from 'admin-on-rest';
import {Dashboard} from './dashboard';
import translations from './i18n';
import {BranchList, BranchEdit, BranchCreate} from './branchs';
import {RoomList} from './rooms';
import {RoomStatusList, RoomStatusEdit} from './roomStatus';
import Menu from './Menu';
import restClient from './restClient';
import fakeRestServer from './restServer';

class App extends Component {

  componentWillMount () {
    this.restoreFetch=fakeRestServer();
  } // componentWillMount ()

  componentWillUnMount () {
    this.restoreFetch();
  } // componentWillUnMount ()

  render() {
    return (
      <Admin
        title="XGYM"
        restClient={restClient}
        dashboard={Dashboard}
        messages={translations}
        locale="vi"
        menu={Menu}
        >
        <Resource
          name="branchs"
          list={BranchList}
          edit={BranchEdit}
          create={BranchCreate}
          remove={Delete}
          >
        </Resource>
        <Resource
          name="rooms_status"
          list={RoomStatusList}
          edit={RoomStatusEdit}
          messages={translations}
          >
        </Resource>
        <Resource
          name="rooms"
          list={RoomList}
          messages={translations}
          >
        </Resource>
      </Admin>
    );
  }
}

export default App;
