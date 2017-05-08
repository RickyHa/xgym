import React from 'react';
import {List, Responsive, SimpleList, TextField, NumberField, Edit, Create, Filter, TextInput, Datagrid, ReferenceField, EditButton} from 'admin-on-rest/lib/mui';

export const RoomFilter=(props) => (
  <Filter {...props}>
    <TextInput label="global_search" source="q" alwaysOn/>
  </Filter>
); // RoomFilter

export const RoomList=(props) => (
  <List {...props} filters={<RoomFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.acreage}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source='id'/>
          <TextField label="room_name" source='name'/>
          <ReferenceField label="branch" source="branch_id" reference="branchs">
            <TextField source="name"/>
          </ReferenceField>
          <TextField label="room_name" source='name'/>
          <ReferenceField label="global_status" source="status_id" reference="rooms_status">
            <TextField source="name"/>
          </ReferenceField>
          <NumberField label="room_acreage" source="acreage" />
          <TextField source="note" label="global_note" style={{maxWidth: '50em', whiteSpace: 'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // RoomList
