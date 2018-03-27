import React from 'react';
import { View, Text, PickerIOS } from 'react-native';

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
    <PickerIOS
      style={styles.pickerStyle}
      selectedValue={props.responseTime}>
      {timeOptions.map(timeOption =>
        (
          <PickerIOS.Item
            key={timeOption.label}
            label={timeOption.label}
            value={timeOption.value}
          />
      ))}
    </PickerIOS>
  )
}



const styles = {
  pickerStyle: {
    backgroundColor: 'blue',
    flex: 1
  }
};

export { Dropdown };
