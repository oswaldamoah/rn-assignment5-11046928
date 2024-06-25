import React from 'react';
import { View, Switch, Text } from 'react-native';
import styled from 'styled-components/native';

const SettingsScreen = ({ toggleTheme, isDarkTheme }) => {
  return (
    <View>
      <HeaderText><Text>Settings</Text></HeaderText> {/* Wrap text in Text component */}
      <Container>
        <SettingItem>
          <SettingText><Text>Change Password</Text></SettingText> {/* Wrap text in Text component */}
        </SettingItem>
        <SettingItem>
          <SettingText><Text>Privacy Policy</Text></SettingText> {/* Wrap text in Text component */}
        </SettingItem>
        <SettingItem>
          <SettingText><Text>Language</Text></SettingText> {/* Wrap text in Text component */}
        </SettingItem>
        <SettingItem>
          <SettingText><Text>Contact Us</Text></SettingText> {/* Wrap text in Text component */}
       

</SettingItem>
<SettingItem>
  <SettingText><Text>My Profile</Text></SettingText> {/* Wrap text in Text component */}
</SettingItem>
<SettingItem>
  <SettingText><Text>Theme</Text></SettingText> {/* Wrap text in Text component */}
  <Switch value={isDarkTheme} onValueChange={toggleTheme} />
</SettingItem>
</Container>
</View>
);
};

const HeaderText = styled.Text`
font-size: 24px;
font-weight: bold;
text-align: center;
margin-top: 20px; /* Adjust margin-top as needed */
`;

const Container = styled.View`
padding: 20px;
background-color: ${(props) => props.theme.background};
height: 100%;
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
font-size: 18px;
color: ${(props) => props.theme.text};
`;

export default SettingsScreen;
