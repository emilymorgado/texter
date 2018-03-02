import React, { Component } from 'react';
import { Header, Button, Input, Card, CardSection } from './common';

class NewContact extends Component {
  state = {
    name: 'Name',
    nicknames: 'Names and nicknames this person calls you'
  };

  render() {
    return (
      <Card>

        <Header headerText="New Contact" />

        <CardSection>
          <Input
            placeholder="Name"
            label="Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Names/Nicknames they call you"
            label="Your names/nicknames"
            value={this.state.nicknames}
            onChangeText={nicknames => this.setState({ nicknames })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Save
          </Button>
        </CardSection>

      </Card>
    );
  }
}
export default NewContact;
