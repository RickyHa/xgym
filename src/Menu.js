import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { translate, DashboardMenuItem } from 'admin-on-rest';
import { BranchsIcon } from './branchs';
import { MembersIcon } from './members';
import { PackagesIcon } from './packages';
import { RoomsIcon } from './rooms';
import { SessionsIcon } from './sessions';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const items=[
  {name: 'branchs', icon: <BranchsIcon/>},
  {name: 'members', icon: <MembersIcon/>},
  {name: 'packages', icon: <PackagesIcon/>},
  {name: 'rooms', icon: <RoomsIcon/>},
  {name: 'sessions', icon: <SessionsIcon/>},
]; // items

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onTouchTap={onMenuTap} />
        {items.map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/${item.name}`} />}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onTouchTap={onMenuTap}
            />
        ))}
        <MenuItem
            containerElement={<Link to="/configuration" />}
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
            onTouchTap={onMenuTap}
        />
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
