import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native'; // Import Text from react-native
import styled, { ThemeContext } from 'styled-components/native'; // Import ThemeContext
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
            <Text><b>Welcome back,</b></Text> {/* Wrap text in Text component */}
            <Text>Eric Atsu</Text> {/* Wrap text in Text component */}
          </WelcomeText>
          <TouchableOpacity>
            {/* Use theme.iconColor to set the color dynamically */}
            <Ionicons name="search-outline" size={24} color={theme.iconColor} />
          </TouchableOpacity>
        </ProfileSection>

        <Card>
          <CardImage source={CCard} />
        </Card>

        <ButtonRow>
          <ActionButton>
            <Ionicons name="arrow-up" size={24} color={theme.iconColor} />
            <ButtonText><Text>Send</Text></ButtonText> {/* Wrap text in Text component */}
          </ActionButton>

          <ActionButton>
            <Ionicons name="arrow-down" size={24} color={theme.iconColor} />
            <ButtonText><Text>Receive</Text></ButtonText> {/* Wrap text in Text component */}
          </ActionButton>
            
          <ActionButton>
            <FontAwesome6 name="dollar" size={24} color={theme.iconColor} />
            <ButtonText><Text>Loan</Text></ButtonText> {/* Wrap text in Text component */}
          </ActionButton>

          <ActionButton>
            <FontAwesome6 name="add" size={24} color={theme.iconColor} />
            <ButtonText><Text>Topup</Text></ButtonText> {/* Wrap text in Text component */}
          </ActionButton>

        </ButtonRow>

        <Transactions>
          <TouchableOpacity>
            <TransactionItem>
              <TransactionIcon source={Apple} />
              <TransactionInfo>
                <TransactionTitle><Text>Apple Store</Text></TransactionTitle> {/* Wrap text in Text component */}
                <TransactionCategory><Text>Entertainment</Text></TransactionCategory> {/* Wrap text in Text component */}
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount positive><Text>+$300</Text></TransactionAmount> {/* Wrap text in Text component */}
                <TransactionDate><Text>12/06/2024</Text></TransactionDate> {/* Wrap text in Text component */}
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <TransactionIcon source={Spotify} />
              <TransactionInfo>
                <TransactionTitle><Text>Spotify</Text></TransactionTitle> {/* Wrap text in Text component */}
                <TransactionCategory><Text>Music</Text></TransactionCategory> {/* Wrap text in Text component */}
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$88</Text></TransactionAmount> {/* Wrap text in Text component */}
                <TransactionDate><Text>13/06/2024</Text></TransactionDate> {/* Wrap text in Text component */}
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <TransactionIcon source={moneyTransfer} />
              <TransactionInfo>
                <TransactionTitle><Text>Money Transfer</Text></TransactionTitle> {/* Wrap text in Text component */}
                <TransactionCategory><Text>Transaction</Text></TransactionCategory> {/* Wrap text in Text component */}
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$5.99</Text></TransactionAmount> {/* Wrap text in Text component */}
                <TransactionDate><Text>14/06/2024</Text></TransactionDate> {/* Wrap text in Text component */}
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <TransactionItem>
              <TransactionIcon source={Grocery} />
              <TransactionInfo>
                <TransactionTitle><Text>Groceries</Text></TransactionTitle> {/* Wrap text in Text component */}
                <TransactionCategory><Text>Shopping</Text></TransactionCategory> {/* Wrap text in Text component */}
              </TransactionInfo>
              <TransactionDetails>
                <TransactionAmount negative><Text>-$12.99</Text></TransactionAmount> {/* Wrap text in Text component */}
                <TransactionDate><Text>15/06/2024</Text></TransactionDate> {/* Wrap text in Text component */}
              </TransactionDetails>
            </TransactionItem>
          </TouchableOpacity>
          {/* Add more transactions as needed */}
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
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
});

const CardImage = styled.Image({
  width: '100%',
  height: 270,
  borderRadius: 10,
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
  width: 60,
  height: 60,
  borderRadius: 30,
  marginBottom: 10,
});

const ButtonText = styled.Text({
  fontSize: 12,
  marginTop: 5,
  textAlign: 'center',
  color: props => props.theme.text,
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
  width: 30,
  height: 30,
  marginRight: 10,
});

const TransactionInfo = styled.View({
  flex: 1,
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
