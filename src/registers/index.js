import React from 'react';

import {List, Datagrid, TextField, DateField, ReferenceField, EditButton, NumberField, DisabledInput
  ,Edit, Create, Filter, TextInput, DateInput, ReferenceInput, SelectInput, SimpleForm, required
} from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/action/book';

export const RegistersIcon = Icon;

export const RegistersFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
  </Filter>
); // RegistersFilter



export const RegistersList=(props) => (
  <List {...props} filters={<RegistersFilter/>}>
    <Datagrid>
      <TextField source='id'/>
      <ReferenceField source='member_id' reference='members'>
        <TextField source='name'/>
      </ReferenceField>
      <ReferenceField source='package_id' reference='packages'>
        <TextField source='name'/>
      </ReferenceField>
      <ReferenceField source='promotion_id' reference='promotions'>
        <TextField source='name'/>
      </ReferenceField>
      <DateField source='date_from'/>
      <DateField source='date_to'/>
      <NumberField source='amount'/>
      <EditButton/>
    </Datagrid>
  </List>
); // RegisterrsList

export const RegistersTitle=({record}) => <span>{record.name}</span>;
// export const Amount = (props) => <DisabledInput source={record => record.amount} {...props} />;
export const RegistersEdit=(props) => (
  <Edit {...props} title={<RegistersTitle/>}>
    <SimpleForm>
      <ReferenceInput source='member_id' reference='members' allowEmpty validate={required}>
        <SelectInput source='name'/>
      </ReferenceInput>
      <ReferenceInput source='package_id' reference='packages' allowEmpty validate={required}>
        <SelectInput source='name' optionText = {(r) => {console.log(r); r.amount = 10; return r.name;}}/>
      </ReferenceInput>
      <ReferenceInput source='promotion_id' reference='promotions' allowEmpty>
        <SelectInput source='name'/>
      </ReferenceInput>
      <DateInput source='date_from' validate={required}/>
      <DateInput source='date_to' validate={required}/>
      <DisabledInput source='amount'/>
    </SimpleForm>
  </Edit>
); // RegistersEdit

export const RegistersCreate=(props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source='member_id' reference='members' allowEmpty validate={required}>
        <SelectInput source='name'/>
      </ReferenceInput>
      <ReferenceInput source='package_id' reference='packages' allowEmpty validate={required}>
        <SelectInput source='name'/>
      </ReferenceInput>
      <ReferenceInput source='promotion_id' reference='promotions' allowEmpty>
        <SelectInput source='name'/>
      </ReferenceInput>
      <DateInput source='date_from' validate={required}/>
      <DateInput source='date_to' validate={required}/>
      <DisabledInput source='amount'/>
    </SimpleForm>
  </Create>
); // RegistersCreate
