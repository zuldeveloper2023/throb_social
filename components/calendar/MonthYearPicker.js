import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text,TouchableOpacity } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import Moment from 'react-moment';
const MonthYearPicker = ({name,selected,setSelected,showPicker,setShowPicker,processChange}) => {
  const [date, setDate] = useState(new Date());
//   /const [show, setShow] = useState(showPicker);

  //const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;
      setShowPicker(false);
      setDate(selectedDate);
      const newD=moment(selectedDate).format('MMM YYYY');
      processChange(name,newD,setSelected);
      
    },
    [date, showPicker],
  );

  return (
    
    <SafeAreaView>
   
      
      {showPicker && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          //minimumDate={new Date()}
          maximumDate={new Date(2025, 5)}
          //locale="ko"
        />
      )}
    </SafeAreaView>
  );
};

export default MonthYearPicker;