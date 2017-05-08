import React from 'react';
import {translate} from 'admin-on-rest';
import { List, Responsive, SimpleList, Datagrid, TextField, Edit, Create, TextInput, SimpleForm, EditButton, LongTextInput, Filter, NumberField, NumberInput } from 'admin-on-rest/lib/mui';

export const BranchFilter=(props) => (
    <Filter {...props}>
        <TextInput label="global_search" source="q" alwaysOn />
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
          <TextField source="name" label="branchs_name"/>
          <TextField source="address" label="branchs_address"/>
          <TextField source="phone" label="branchs_phone"/>
          <TextField source="fax" label="branchs_fax"/>
          <TextField source="deputy" label="branchs_deputy"/>
          <NumberField source="income" label="branchs_income"/>
          <TextField source="note" label="global_note" style={{maxWidth: '20em', whiteSpace: 'nowrap'}}/>
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
            <TextInput source="name" />
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
          <TextInput source="name" />
          <TextInput source="address" />
          <TextInput source="phone" />
          <TextInput source="fax" />
          <TextInput source="deputy" />
          <NumberInput source="income" />
          <LongTextInput source="note"/>
        </SimpleForm>
    </Create>
); // BranchCreate
