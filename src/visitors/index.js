import React, {Component} from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const VisitorList = (props) => (
  <List {...props} perPage={20}>
    <Datagrid>
      <TextField source="id"/>
    </Datagrid>
  </List>
); // export
