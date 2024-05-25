import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import edit_styles from '../../styles/common/editscreens/editstyles';
import { useRoute } from '@react-navigation/native';
import { AuthContext,UserContext } from '../../context/context';
import getUsers from '../../service/UserService';
import UpdateUser from '../../service/UpdateUser';
import { v4 as uuidv4 } from 'uuid';
import { experience } from '../../model/User';

import MonthYearPickerWrap from '../../components/calendar/MonthYearPickerWrap';
import LocationAreaCity from '../../components/location/LocationAreaCity';
import StartEndMonthYear from '../common/StartEndMonthYear';
export default function ExperienceEdit({ navigation }) {
    const route = useRoute();
    let user = useContext(UserContext);
    let token = useContext(AuthContext);
    const { dataItem } = route.params;
    const [dataItemData, setDataItemData] = React.useState(dataItem ? dataItem : experience);

    const updateValue = (name, value) => {
        setDataItemData({ ...dataItemData, [name]: value });
    }

    const save = () => {
        if (dataItemData.key == null) {
            let userExperiencesModified = user.user.experiences.experiences;
            dataItemData.key = dataItemData.key = uuidv4();
            userExperiencesModified.push(dataItemData);
            user.user.experiences.experiences = userExperiencesModified;
        }
        else {
            let userExperiencesModified = user.user.experiences.experiences.map((item) => {
                if (item.key == dataItemData.key) {
                    return dataItemData
                }
                return item;
            });
            user.user.experiences.experiences = userExperiencesModified;
        }
        UpdateUser(user.user, token.userToken);
        user.setUser(user.user);
        return "";
    }


    //const [educationItemData, setEducationItemData] = React.useState(dataItem);
    return (

        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Text></Text>

                    <View style={edit_styles.container}>
                        <Text style={GlobalStyles.OpeningContent}>We use the best tech to protect your data and privacy.</Text>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Job title' onChange={(text) => setDataItemData({ ...dataItemData, job_title: text })} value={dataItemData.job_title}></Input>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Employment type' onChange={(text) => setDataItemData({ ...dataItemData, emp_type: text })} value={dataItemData.emp_type}></Input>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Company' onChange={(text) => setDataItemData({ ...dataItemData, company: text })} value={dataItemData.company}></Input>
                        <LocationAreaCity name={'location'} placeholder={'location'} updateValue={updateValue} locationValue={dataItemData.location}/>
                        <StartEndMonthYear dataItemData={dataItemData} updateValue={updateValue}  />
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Description' onChange={(text) => setDataItemData({ ...dataItemData, description: text })} value={dataItemData.description}></Input>
                        <Button
                            onPress={() => save()}
                        >
                            Save
                        </Button>
                    </View>

                </View >
            </ScrollView>
        </View>

    )
}
