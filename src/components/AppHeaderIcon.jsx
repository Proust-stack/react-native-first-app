import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    HeaderButton,
  } from 'react-navigation-header-buttons';
import { THEME } from '../theme';

const AppHeaderIcon = (props) => {
    return <HeaderButton 
    {...props}
    iconSize={24} 
    IconComponent={Ionicons}
    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
    />
};

export default AppHeaderIcon;