import React from 'react';
import { View } from 'react-native';
import MonthYearPickerWrap from '../../components/calendar/MonthYearPickerWrap';
export default function StartEndMonthYear({ dataItemData,updateValue }) {

    const [selectedStartDate, setSelectedStartDate] = React.useState(dataItemData.start_date);
    const [selectedEndDate, setSelectedEndDate] = React.useState(dataItemData.end_date);
    const [showStart, setShowStart] = React.useState(false);
    const [showEnd, setShowEnd] = React.useState(false);

    const processChange=(name,value,callback)=>{
        updateValue(name,value);
        callback(value);
    }

    return (
        <View>
            <MonthYearPickerWrap name='start_date' selectedDate={selectedStartDate} processChange={processChange} setSelectedDate={setSelectedStartDate} show={showStart} setShow={setShowStart} dataItemData={dataItemData} placeholderValue='Start' />
            <MonthYearPickerWrap name='end_date' selectedDate={selectedEndDate} processChange={processChange} setSelectedDate={setSelectedEndDate} show={showEnd} setShow={setShowEnd} dataItemData={dataItemData} placeholderValue='End' />
            
        </View>
    );
}