import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/Navbar'
import Form from './src/components/Form'

export default function App() {
  return (
    <View>
        <NavBar title="This is NavBar!!!"/>
      <View style={styles.container}>
          <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:25,
      paddingVertical:20
  },
});
