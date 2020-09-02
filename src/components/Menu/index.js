import React from 'react'

import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://marcosferreira.github.io"
          size={80}
          color="#FFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
