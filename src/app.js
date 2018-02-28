import React, { Component } from 'react';
import { View } from 'react-native';
// import { Header } from './components/common';
import NewContact from './components/NewContact';

class App extends Component {
    render() {
      return (
        <View>
          <NewContact />
        </View>
      );
    }
  }

export default App;
