import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Card() {
  return (
    <Container>
      <CardHeader>
        <MaterialIcons name="attach-money" size={28} color="#666" />
        <MaterialIcons name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 197.611,65</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Transferência de R$ 20,00 recebida de Diego Schell Fernandes hoje às 18:00h
            </Annotation>
      </CardFooter>
    </Container>
  );
}
