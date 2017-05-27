import React from 'react';
import {List, Responsive, SimpleList, Datagrid, TextField, DateField, SelectField, EditButton,
    Filter, TextInput, DateInput, Edit, Create, SimpleForm, SelectInput, required, TabbedForm,
    FormTab, ReferenceManyField, ReferenceField, NumberField
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

export const MembersIcon = Icon;

export const MembersFilter=(props) => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
    <DateInput label="members.date_from" source="birthday_gte"/>
    <DateInput label="members.date_to" source="birthday_lte"/>
  </Filter>
); // MembersFilter

export const MembersList=(props) => (
  <List {...props} perPage={25} filters={<MembersFilter/>}>
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
          <DateField source="birthday"/>
          <TextField source="phone"/>
          <SelectField
            source="source_id"
            choices={[
              {id:'1', name:'resources.members.fields.source_individual'},
              {id:'2', name:'resources.members.fields.source_introduce'}
            ]}
            />
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // MembersList

export const MembersTitle=({record}) => <span>{record.name}</span>

export const MembersEdit=(props) => (
  <Edit {...props} title={<MembersTitle/>}>
    <TabbedForm>
      <FormTab label='resources.members.tabs.info'>
        <TextInput source="name" validate={required}/>
        <DateInput source="birthday"/>
        <TextInput source="phone"/>
        <SelectInput
          source="source_id"
          choices={[
            {id:'1', name:'resources.members.fields.source_individual'},
            {id:'2', name:'resources.members.fields.source_introduce'}
          ]}
          validate={required}
          />
      </FormTab>
      <FormTab label='resources.members.tabs.registers'>
        <ReferenceManyField addLabel={false} reference="registers" target="member_id">
          <Datagrid>
            <TextField source='id'/>
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
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
); // MembersEdit

export const MembersCreate=(props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <DateInput source="birthday"/>
      <TextInput source="phone"/>
      <SelectInput
        source="source_id"
        choices={[
          {id:'1', name:'resources.members.fields.source_individual'},
          {id:'2', name:'resources.members.fields.source_introduce'}
        ]}
        validate={required}
        />
    </SimpleForm>
  </Create>
); // MembersEdit
