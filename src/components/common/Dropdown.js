import React from 'react';
import { View, Text, Picker } from 'react-native';

const timeOptions = [
  {
    label: 'Flexible',
    value: '0'
  },
  {
    label: 'Immediate',
    value: '1'
  },
  {
    label: 'Fast',
    value: '2'
  },
  {
    label: 'Moderate',
    value: '3'
  },
  {
    label: 'Slow',
    value: '4'
  }
];

const Dropdown = (props) => {

  return(

      <Picker
        selectedValue={props.responseTime}
        onValueChange={props.onValueChange}
        style={styles.containerStyle}>

        {timeOptions.map(timeOption =>
          (
            <Picker.Item
              key={timeOption.label}
              label={timeOption.label}
              value={timeOption.value}
            />
        ))}

      </Picker>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  pickerStyle: {
    backgroundColor: 'blue'
  }
};

export { Dropdown };
