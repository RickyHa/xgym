import React from 'react';

import {List, Responsive, SimpleList, Datagrid, TextField, LongTextInput, DateField, NumberField,
  EditButton, Edit, Create, SimpleForm, TextInput, DateInput, NumberInput, required, Filter
} from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/maps/local-offer';

export const PromotionsIcon = Icon;

export const PromotionsFilter=(props) =>(
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn/>
  </Filter>
); // PromotionsFilter

export const PromotionsList=(props) => (
  <List {...props} filters={<PromotionsFilter/>}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.discount}
          tertiaryText={record => record.date_from.toLocaleDateString()}
          />
      } // small
      medium={
        <Datagrid>
          <TextField source='id'/>
          <TextField source='name'/>
          <NumberField source='discount'/>
          <DateField source='date_from'/>
          <DateField source='date_to'/>
          <TextField source='note' style={{maxWidth:'50em', whiteSpace:'nowrap'}}/>
          <EditButton/>
        </Datagrid>
      } // medium
      />
  </List>
); // PromotionsList

export const PromotionsTitle=({record}) => <span>{record.name}</span>;

export const PromotionsEdit=(props) => (
  <Edit {...props} title={<PromotionsTitle/>}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <NumberInput source="discount" validate={required}/>
      <DateInput source="date_from"/>
      <DateInput source="date_to"/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Edit>
); // PromotionsEdit

export const PromotionsCreate=(props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required}/>
      <NumberInput source="discount" validate={required}/>
      <DateInput source="date_from"/>
      <DateInput source="date_to"/>
      <LongTextInput source="note"/>
    </SimpleForm>
  </Create>
); // PromotionsCreate
