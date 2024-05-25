import { View, TouchableHighlight } from 'react-native';
import MonthYearPicker from './MonthYearPicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import edit_styles from '../../styles/common/editscreens/editstyles';
import Input from '../Input';
export default function MonthYearPickerWrap({
    selectedDate,
    setSelectedDate,
    show,
    setShow,
    dataItemData,
    name,
    placeholderValue,
    processChange
}) {
    return (
        <View>
            <Input xstyles={edit_styles.textInputCustom} placeholder={placeholderValue}  value={selectedDate}></Input>
            <TouchableHighlight style={{ marginTop: -40, marginLeft: 320, paddingBottom: 20 }}
                onPress={() => setShow(true)}
            >
                <AntDesign name="calendar" size={20} />
            </TouchableHighlight>
            <MonthYearPicker name={name} setShowPicker={setShow} showPicker={show} selected={selectedDate} setSelected={setSelectedDate} processChange={processChange}/>


        </View>
    );
}