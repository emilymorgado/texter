import React, { Component } from 'react';
import { Header, Button, Input, Card, CardSection, Dropdown } from './common';

class NewContact extends Component {
  state = {
    name: '',
    nicknames: '',
    responseTime: 0
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
          <Dropdown
            onValueChange={(itemValue, itemIndex) => this.setState({responseTime: itemValue})}
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
