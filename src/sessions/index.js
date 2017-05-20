import React from 'react';
import {List, Responsive, SimpleList, TextField, LongTextInput, Edit, Create
  , Filter, TextInput, Datagrid, ReferenceField, ReferenceInput, EditButton, SelectInput, SimpleForm
  , BooleanField, BooleanInput, required
} from 'admin-on-rest/lib/mui';
import Icon from 'material-ui/svg-icons/action/date-range';

export const SessionsIcon = Icon;

export const SessionFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
  </Filter>
); // SessionFilter

export const SessionsList=(props) => (
  <List {...props} filters={<SessionFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.note}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source='id'/>
          <TextField source='name'/>
          <ReferenceField source="branch_id" reference="branchs">
            <TextField source="name"/>
          </ReferenceField>
          <ReferenceField source="room_id" reference="rooms">
            <TextField source="name"/>
          </ReferenceField>
          <BooleanField source="monday"/>
          <BooleanField source="tuesday"/>
          <BooleanField source="wednesday"/>
          <BooleanField source="thursday"/>
          <BooleanField source="friday"/>
          <BooleanField source="saturday"/>
          <BooleanField source="sunday"/>
          <TextField source="note" style={{maxWidth: '50em', whiteSpace: 'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // SessionList

export const SessionTitle=({record}) => <span>{record.name}</span> ;

export const SessionsEdit=(props) => (
  <Edit {...props} title={<SessionTitle/>}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs">
        <SelectInput source="name"/>
      </ReferenceInput>
      <ReferenceInput source="room_id" reference="rooms">
        <SelectInput source="name"/>
      </ReferenceInput>
      <BooleanInput source="monday"/>
      <BooleanInput source="tuesday"/>
      <BooleanInput source="wednesday"/>
      <BooleanInput source="thursday"/>
      <BooleanInput source="friday"/>
      <BooleanInput source="saturday"/>
      <BooleanInput source="sunday"/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Edit>
); // SessionEdit

export const SessionsCreate=(props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs">
        <SelectInput source="name"/>
      </ReferenceInput>
      <ReferenceInput source="room_id" reference="rooms">
        <SelectInput source="name"/>
      </ReferenceInput>
      <BooleanInput source="monday"/>
      <BooleanInput source="tuesday"/>
      <BooleanInput source="wednesday"/>
      <BooleanInput source="thursday"/>
      <BooleanInput source="friday"/>
      <BooleanInput source="saturday"/>
      <BooleanInput source="sunday"/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Create>
); // SessionCreate
