import React from 'react';

import {List, Datagrid, TextField, DateField, ReferenceField, EditButton, NumberField, DisabledInput
  ,Edit, Create, Filter, TextInput, DateInput, ReferenceInput, SelectInput, SimpleForm, required
} from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/action/book';

export const UnregistersIcon = Icon;

export const UnregistersFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
  </Filter>
); // UnregistersFilter



export const UnregistersList=(props) => (
  <List {...props} filters={<UnregistersFilter/>}>
    <Datagrid>
      <TextField source='id'/>
      <ReferenceField source='register_id' reference='registers'>
        <TextField source='name'/>
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
); // RegisterrsList

export const UnregistersTitle=({record}) => <span>{record.name}</span>;
export const UnregistersEdit=(props) => (
<Edit {...props} title={<UnregistersTitle/>}>
    <SimpleForm>
      <ReferenceInput source='register_id' reference='registers' allowEmpty validate={required}>
        <SelectInput source='name'/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
); // UnregistersEdit

export const UnregistersCreate=(props) => (
  <Create {...props}>
  <SimpleForm>
    <ReferenceInput source='register_id' reference='registers' allowEmpty validate={required}>
      <SelectInput source='name'/>
    </ReferenceInput>
  </SimpleForm>
  </Create>
); // UnregistersCreate
