import React from 'react';
import {List, Responsive, SimpleList, TextField, Edit, Create, TextInput, Datagrid, EditButton, SimpleForm} from 'admin-on-rest/lib/mui';

export const RoomStatusList=(props) => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.id}
          secondaryText={record => record.name}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source='id'/>
          <TextField source='name' label="room_status_name"/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // RoomStatusList

export const RoomStatusEdit=(props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
); // RoomStatusEdit
