import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Fontisto } from '@expo/vector-icons'
import { ActivityIndicator, Alert, Modal, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import LoginBannerImg from '../../assets/images/login.svg';
import LogoImg from '../../assets/images/logo.svg';
import TwitchIcon from '../../assets/images/twitch-icon.svg';

import { 
  Container,
  Content,
  LoginBanner, 
  LoginInfo, 
  Header, 
  Partner, 
  Description, 
  SignInButton,
  SignInButtonIcon,
  SignInButtonText 
} from './styles';

export function SignIn() {
  const { signIn, isLoggingIn } = useAuth();
  const theme = useTheme();

  // creates a function to handle sign in
  const handleSignIn = useCallback(() => {
    console.log('LogIn ativado!');
  }, []);
  
    // try to call and wait signIn
    // if fails, display an Alert with the title "Erro SignIn" and message "Ocorreu um erro ao tentar logar no app"

  return (
    <Container
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
    >
      <Content>
        <LoginBanner>
          <LoginBannerImg width="100%" />
        </LoginBanner>

        <LoginInfo>
          <Header>
            <LogoImg />
            <Partner>by twitch</Partner>
          </Header>

          <Description>
            Veja dados{'\n'}
            interessantes sobre{'\n'}
            o mundo da Twitch
          </Description>

          <SignInButton onPress={handleSignIn}>
            <SignInButtonIcon>
              <TwitchIcon />
            </SignInButtonIcon>

            <SignInButtonText>
              Entrar com Twitch
            </SignInButtonText>
          </SignInButton>
        </LoginInfo>
      </Content>

      <Modal 
        animationType="fade"
        visible={isLoggingIn}
        statusBarTranslucent
        transparent
      >
        <View
          style={{ flex: 1, backgroundColor: 'rgba(14, 14, 16, 0.5)' }}
        />
      </Modal>
    </Container>
  );
}