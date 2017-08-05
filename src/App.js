import React, { Component } from 'react';
import './App.css';

import {Admin, Delete, Resource} from 'admin-on-rest';
import {Dashboard} from './dashboard';
import {BranchList, BranchEdit, BranchCreate} from './branchs';
import {MembersList, MembersEdit, MembersCreate} from './members';
import {UsersList, UsersEdit, UsersCreate} from './users';
import {PackageList, PackageEdit, PackageCreate} from './packages';
import {PromotionsList, PromotionsEdit, PromotionsCreate} from './promotions';
import {RegistersList, RegistersEdit, RegistersCreate} from './registers';
import {UnregistersList, UnregistersEdit, UnregistersCreate} from './unregisters';
import {RoomList, RoomEdit, RoomCreate} from './rooms';
import {SessionsList, SessionsEdit, SessionsCreate} from './sessions';
import authClient from './authClient';
import customRoutes from './routes';
// import fakeRestServer from './restServer';
import Menu from './Menu';
import translations from './i18n';
import restClient from './restClient';

// const restClient = jsonAPIRestClient('http://localhost:3001');
// const restClient = jsonRestClient('http://localhost:3001');

class App extends Component {

  // componentWillMount () {
  //   this.restoreFetch=fakeRestServer();
  // } // componentWillMount ()
  //
  // componentWillUnMount () {
  //   this.restoreFetch();
  // } // componentWillUnMount ()

  render() {
    return (
      <Admin
        authClient={authClient}
        customRoutes={customRoutes}
        dashboard={Dashboard}
        locale="vi"
        messages={translations}
        menu={Menu}
        restClient={restClient}
        title="XGYM"
        >
        <Resource
          name="branchs"
          list={BranchList}
          edit={BranchEdit}
          create={BranchCreate}
          remove={Delete}
          />
        <Resource
          name="rooms"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          remove={Delete}
          />
        <Resource name="members" list={MembersList} edit={MembersEdit} create={MembersCreate} remove={Delete}/>
        <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate} remove={Delete}/>
        <Resource name="sessions" list={SessionsList} edit={SessionsEdit} create={SessionsCreate} remove={Delete}/>
        <Resource name="packages" list={PackageList} edit={PackageEdit} create={PackageCreate} remove={Delete}/>
        <Resource name="promotions" list={PromotionsList} edit={PromotionsEdit} create={PromotionsCreate} remove={Delete}/>
        <Resource name="registers" list={RegistersList} edit={RegistersEdit} create={RegistersCreate} remove={Delete}/>
        <Resource name="unregisters" list={UnregistersList} edit={UnregistersEdit} create={UnregistersCreate} remove={Delete}/>
      </Admin>
    );
  } // render()
} // App

export default App;
