import React from 'react';
import {translate} from 'admin-on-rest';
import { List, Responsive, SimpleList, Datagrid, TextField, Edit, Create, TextInput, SimpleForm, EditButton, LongTextInput, Filter, NumberField, NumberInput, required } from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/social/location-city';

export const BranchsIcon = Icon;

export const BranchFilter=(props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
    </Filter>
); // BranchFilter

export const BranchList=(props) => (
  <List {...props} perPage={20} filters={<BranchFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.address}
          tertiaryText={record => `${record.income} VNĐ`}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source="id"/>
          <TextField source="name"/>
          <TextField source="address"/>
          <TextField source="phone"/>
          <TextField source="fax"/>
          <TextField source="deputy"/>
          <NumberField source="income"/>
          <TextField source="note" style={{maxWidth: '20em', whiteSpace: 'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
    />
  </List>
); // export

const BranchTitle=translate(({record, translate}) => <span>{record.name}</span>);

export const BranchEdit=(props) => (
    <Edit title={<BranchTitle/>} {...props} >
        <SimpleForm>
            <TextInput source="name" validate={required}/>
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="fax" />
            <TextInput source="deputy" />
            <NumberInput source="income" />
            <LongTextInput source="note"/>
        </SimpleForm>
    </Edit>
); // BranchEdit

export const BranchCreate=(props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="name" validate={required}/>
          <TextInput source="address" />
          <TextInput source="phone" />
          <TextInput source="fax" />
          <TextInput source="deputy" />
          <NumberInput source="income" />
          <LongTextInput source="note"/>
        </SimpleForm>
    </Create>
); // BranchCreate
