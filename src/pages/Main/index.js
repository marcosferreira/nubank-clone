import React from 'react';
import { Animated } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              }),
            }]
          }}>
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
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
