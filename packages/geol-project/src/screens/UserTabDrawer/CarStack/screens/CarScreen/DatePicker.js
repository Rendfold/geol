import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Container, Header, Content, DatePicker, Text} from 'native-base';

const DatePickerComponent = ({handleChange}) => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    handleChange(currentDate);
  };

  return (
    <Content>
      <DatePicker
        defaultDate={new Date(2020, 6, 23)}
        minimumDate={new Date(2020, 6, 23)}
        maximumDate={new Date(2021, 12, 31)}
        locale={'en'}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={'fade'}
        androidMode={'default'}
        placeHolderText="Select date"
        placeHolderTextStyle={{color: '#d3d3d3'}}
        onDateChange={onChange}
        disabled={false}
      />
    </Content>
  );
};

export default DatePickerComponent;
