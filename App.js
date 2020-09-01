import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#8B10AE" />
      <Main />
    </>
  );
}
