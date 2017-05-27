import React from 'react';
import {List, Responsive, SimpleList, TextField, NumberField, NumberInput, LongTextInput, Edit, Create
  , Filter, TextInput, Datagrid, ReferenceField, ReferenceInput, EditButton, SelectInput, SimpleForm, choices, SelectField
  , required
} from 'admin-on-rest/lib/mui';
import Icon from 'material-ui/svg-icons/social/domain';

export const RoomsIcon = Icon;

export const RoomFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
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
          <TextField source='name'/>
          <ReferenceField source="branch_id" reference="branchs">
            <TextField source="name"/>
          </ReferenceField>
          <SelectField
            label="global_status"
            source="status_id"
            choices={[
              {id:'1', name:'resources.rooms.fields.empty'},
              {id:'2', name:'resources.rooms.fields.rooms_used'},
              {id:'3', name:'resources.rooms.fields.rooms_unused'}
            ]}
            />
          <NumberField source="acreage" />
          <TextField source="note" style={{maxWidth: '50em', whiteSpace: 'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // RoomList

export const RoomTitle=({record}) => <span>{record.name}</span> ;

export const RoomEdit=(props) => (
  <Edit {...props} title={<RoomTitle/>}>
    <SimpleForm >
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs" allowEmpty validate={required}>
        <SelectInput source="name"/>
      </ReferenceInput>
      <SelectInput
        source="status_id"
        choices={[
          {id:'1', name:'resources.rooms.fields.empty'},
          {id:'2', name:'resources.rooms.fields.rooms_used'},
          {id:'3', name:'resources.rooms.fields.rooms_unused'}
        ]}
        validation={choices(['m','f'], 'room_status_invalid')}
        validate={required}
        />
      <NumberInput source="acreage" validate={required}/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Edit>
); // RoomEdit



export const RoomCreate=(props) => (
  <Create {...props}>
    <SimpleForm >
      <TextInput source="name" validate={required}/>
      <ReferenceInput source="branch_id" reference="branchs" allowEmpty validate={required}>
        <SelectInput source="name"/>
      </ReferenceInput>
      <SelectInput
        source="status_id"
        choices={[
          {id:'1', name:'resources.rooms.fields.empty'},
          {id:'2', name:'resources.rooms.fields.rooms_used'},
          {id:'3', name:'resources.rooms.fields.rooms_unused'}
        ]}
        validation={choices(['m','f'], 'room_status_invalid')}
        validate={required}
        />
      <NumberInput source="acreage" validate={required}/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Create>
); // RoomCreate
