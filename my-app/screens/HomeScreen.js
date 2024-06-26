import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const HomeScreen = () => {
  const theme = useContext(ThemeContext); // Access the current theme using useContext
  const CCard = require('../assets/ccard.png'); 
  const Profile = require('../assets/profile.png'); 
  const Spotify = require('../assets/spotify.png'); 
  const Apple = require('../assets/apple.png'); 
  const Grocery = require('../assets/grocery.png');
  const moneyTransfer = require('../assets/moneyTransfer.png');  

  return (
    <ScrollView>
      <Container>
        <ProfileSection>
          <ProfileImage source={Profile} />
          <WelcomeText>
            <Text><b>Welcome back,</b></Text>
            <Text><br></br>Eric Atsu</Text>
          </WelcomeText>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={theme.iconColor} />
          </TouchableOpacity>
        </ProfileSection>

        <Card>
          <CardImage source={CCard} />
        </Card>

        <ButtonRow>
          <ActionButton>
            <CircleWrapper>
              <Ionicons name="arrow-up" size={24} color={theme.iconColor} />
            </CircleWrapper>
            <ButtonText><Text>Send</Text></ButtonText>
          </ActionButton>

          <ActionButton>
            <CircleWrapper>
              <Ionicons name="arrow-down" size={24} color={theme.iconColor} />
            </CircleWrapper>
            <ButtonText><Text>Receive</Text></ButtonText> 
          </ActionButton>
            
          <ActionButton>
            <CircleWrapper>
              <FontAwesome6 name="dollar" size={24} color={theme.iconColor} />
            </CircleWrapper>
            <ButtonText><Text>Loan</Text></ButtonText> 
          </ActionButton>

          <ActionButton>
            <CircleWrapper>
              <FontAwesome6 name="add" size={24} color={theme.iconColor} />
            </CircleWrapper>
            <ButtonText><Text>Topup</Text></ButtonText> 
          </ActionButton>

        </ButtonRow>

        <Transactions>
          <TouchableOpacity>
            <TransactionItem>
              <CircleWrapper>
                <TransactionIcon source={Apple} />
              </CircleWrapper>
              <TransactionInfo>
                <TransactionTitle><Text>Apple Store</Text></TransactionTitle>
                <TransactionCategory><Text>Entertainment</Text></TransactionCategory>
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$5.99</Text></TransactionAmount>
                <TransactionDate><Text>12/06/2024</Text></TransactionDate>
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <CircleWrapper>
                <TransactionIcon source={Spotify} />
              </CircleWrapper>
              <TransactionInfo>
                <TransactionTitle><Text>Spotify</Text></TransactionTitle>
                <TransactionCategory><Text>Music</Text></TransactionCategory>
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$12.99</Text></TransactionAmount>
                <TransactionDate><Text>13/06/2024</Text></TransactionDate>
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <CircleWrapper>
                <TransactionIcon source={moneyTransfer} />
              </CircleWrapper>
              <TransactionInfo>
                <TransactionTitle><Text>Money Transfer</Text></TransactionTitle>
                <TransactionCategory><Text>Transaction</Text></TransactionCategory>
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount positive><Text>+$300</Text></TransactionAmount>
                <TransactionDate><Text>14/06/2024</Text></TransactionDate>
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <CircleWrapper>
                <TransactionIcon source={Grocery} />
              </CircleWrapper>
              <TransactionInfo>
                <TransactionTitle><Text>Groceries</Text></TransactionTitle>
                <TransactionCategory><Text>Shopping</Text></TransactionCategory>
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$88</Text></TransactionAmount>
                <TransactionDate><Text>15/06/2024</Text></TransactionDate>
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
        </Transactions>
      </Container>
    </ScrollView>
  );
};

// Styled Components remain the same as in your original code

const Container = styled.View({
  padding: 20,
  backgroundColor: props => props.theme.background,
  height: '100%',
});

const ProfileSection = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
});

const ProfileImage = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: 10,
});

const WelcomeText = styled.Text({
  fontSize: 24,
  fontWeight: 'normal',
  color: props => props.theme.text,
});

const Card = styled.View({
  backgroundColor: props => props.theme.card,
  padding: 8,
  borderRadius: 10,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 8,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
});

const CardImage = styled.Image({
  width: '100%',
  height: 200,
  borderRadius: 20,
  resizeMode: 'center',
});

const ButtonRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
});


const ActionButton = styled(TouchableOpacity)({
  alignItems: 'center',
  justifyContent: 'center',
  width: 70, // Increased width to accommodate the text under the icon
  height: 100, // Increased height to accommodate the text under the icon
  borderRadius: 35, // Increased border radius to keep the circle shape
  marginBottom: 10,
});

const CircleWrapper = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'rgba(128, 128, 128, 0.3)', // Grey with 30% opacity
  marginBottom: 5, // Margin to create space between the icon and the text
});

const ButtonText = styled.Text({
  fontSize: 12,
  textAlign: 'center',
  color: props => props.theme.text,
  marginTop: 5, // Add some space above the text
});

const Transactions = styled.View({
  marginTop: 20,
});

const TransactionItem = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: props => props.theme.card,
});

const TransactionIcon = styled.Image({
  width: 24, // Size of the image should be less than CircleWrapper to center it
  height: 24,
});

const TransactionInfo = styled.View({
  flex: 1,
  paddingLeft: 20, // Increased padding to move text further away from the icon
});

const TransactionTitle = styled.Text({
  fontSize: 18,
  color: props => props.theme.text,
});

const TransactionCategory = styled.Text({
  fontSize: 14,
  color: props => props.theme.textSecondary,
});

const TransactionDetails = styled.View({
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const TransactionAmount = styled.Text(props => ({
  fontSize: 18,
  color: props.positive ? '#32CD32' : '#FF0000',
}));

const TransactionDate = styled.Text({
  fontSize: 14,
  color: props => props.theme.textSecondary,
});

export default HomeScreen;
