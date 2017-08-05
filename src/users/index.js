import React from 'react';
import {List, Responsive, SimpleList, Datagrid, TextField, DateField, EditButton,
    Filter, TextInput, DateInput, Edit, Create, SimpleForm, required
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

export const UsersIcon = Icon;

export const UsersFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
    <DateInput label="users.date_from" source="birthday_gte"/>
    <DateInput label="users.date_to" source="birthday_lte"/>
  </Filter>
); // UsersFilter

export const UsersList=(props) => (
  <List {...props} perPage={25} filters={<UsersFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.phone}
          tertiaryText={record => record.birthday.toLocaleDateString()}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source="id"/>
          <TextField source="name"/>
          <TextField source="username"/>
          <DateField source="birthday"/>
          <TextField source="phone"/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // UsersList

export const UsersTitle=({record}) => <span>{record.name}</span>

export const UsersEdit=(props) => (
  <Edit {...props} title={<UsersTitle/>}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <TextInput source="username" validate={required}/>
      <TextInput source="password" validate={required} type='password'/>
      <DateInput source="birthday"/>
      <TextInput source="phone"/>
    </SimpleForm>
  </Edit>
); // UsersEdit

export const UsersCreate=(props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <TextInput source="username" validate={required}/>
      <TextInput source="password" validate={required} type='password'/>
      <DateInput source="birthday"/>
      <TextInput source="phone"/>
    </SimpleForm>
  </Create>
); // UsersEdit
