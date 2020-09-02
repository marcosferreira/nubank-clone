import React from 'react'

import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

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

    </Container>
  )
}
