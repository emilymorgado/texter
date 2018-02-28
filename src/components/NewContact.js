import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Input } from './common';

class NewContact extends Component {
  state = {
    name: 'Name',
    nicknames: 'Names and nicknames this person calls you'
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          style={{ height: 20, width: 100 }}
        />
        <TextInput
          value={this.state.nicknames}
          onChangeText={nicknames => this.setState({ nicknames })}
          style={{ height: 20, width: 100 }}
        />
        <Button>
          Save
        </Button>
      </View>
    );
  }
}
export default NewContact;
