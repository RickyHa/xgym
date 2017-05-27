import React from 'react';
import {List, Responsive, SimpleList, TextField, NumberField, NumberInput, LongTextInput, Edit, Create
  , Filter, TextInput, Datagrid, ReferenceField, ReferenceInput, EditButton, SelectInput, SimpleForm, SelectField
  , required
} from 'admin-on-rest/lib/mui';
import Icon from 'material-ui/svg-icons/editor/monetization-on';

export const PackagesIcon = Icon;

export const PackageFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
  </Filter>
); // RoomFilter

export const PackageList=(props) => (
  <List {...props} filters={<PackageFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.amount}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source='id'/>
          <TextField source='name'/>
          <ReferenceField source="branch_id" reference="branchs">
            <TextField source="name"/>
          </ReferenceField>
          <SelectField
            source="form_id"
            choices={[
              {id:'1', name:'resources.packages.fields.form_month'},
              {id:'2', name:'resources.packages.fields.form_session'},
            ]}
            />
          <NumberField source="number" />
          <NumberField source="amount" />
          <TextField source="note" style={{maxWidth: '50em', whiteSpace: 'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // RoomList

export const PackageTitle=({record}) => <span>{record.name}</span> ;

export const PackageEdit=(props) => (
  <Edit {...props} title={<PackageTitle/>}>
    <SimpleForm >
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs" allowEmpty validate={required}>
        <SelectInput source="name"/>
      </ReferenceInput>
      <SelectInput
        source="form_id"
        choices={[
          {id:'1', name:'resources.packages.fields.form_month'},
          {id:'2', name:'resources.packages.fields.form_session'},
        ]}
        />
      <NumberInput source="number" />
      <NumberInput source="amount" />
      <LongTextInput source="note"/>
    </SimpleForm>
  </Edit>
); // RoomEdit



export const PackageCreate=(props) => (
  <Create {...props}>
    <SimpleForm >
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs" allowEmpty validate={required}>
        <SelectInput source="name"/>
      </ReferenceInput>
      <SelectInput
        source="form_id"
        choices={[
          {id:'1', name:'resources.packages.fields.form_month'},
          {id:'2', name:'resources.packages.fields.form_session'},
        ]}
        />
      <NumberInput source="number" />
      <NumberInput source="amount" />
      <LongTextInput source="note"/>
    </SimpleForm>
  </Create>
); // RoomCreate
