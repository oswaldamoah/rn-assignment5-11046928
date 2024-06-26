import React from 'react';
import { View, Switch, Text } from 'react-native';
import styled from 'styled-components/native';

const SettingsScreen = ({ toggleTheme, isDarkTheme }) => {
  return (
    <MainContainer>
      <HeaderText>Settings</HeaderText>
      <Container>
        <SettingItem>
          <SettingText>Change Password</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Privacy Policy</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Language</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Contact Us</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>My Profile</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Theme</SettingText>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </SettingItem>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const HeaderText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 20px;
`;

const Container = styled.View`
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.card};
`;

const SettingText = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.text};
`;

export default SettingsScreen;
