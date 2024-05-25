import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import edit_styles from '../../styles/common/editscreens/editstyles';
import { useRoute } from '@react-navigation/native';
import { AuthContext,UserContext } from '../../context/context';
import getUsers from '../../service/UserService';
import UpdateUser from '../../service/UpdateUser';
import { v4 as uuidv4 } from 'uuid';
import { education } from '../../model/User';
import LocationAreaCity from '../../components/location/LocationAreaCity';
import StartEndMonthYear from '../common/StartEndMonthYear';
export default function EducationEdit({ navigation }) {
    const route = useRoute();
    let user = useContext(UserContext);
    let token = useContext(AuthContext);
    const { dataItem } = route.params;
    const [dataItemData, setDataItemData] = React.useState(dataItem ? dataItem : education);
    //const UserContextData = useContext(UserContext);

    const updateValue = (name, value) => {
        setDataItemData({ ...dataItemData, [name]: value });
    }

    const save = () => {
        if (dataItemData.key == null) {
            let userEducationsModified = user.user.educations.educations;
            dataItemData.key = dataItemData.key = uuidv4();
            userEducationsModified.push(dataItemData);
            user.user.educations.educations = userEducationsModified;
        }
        else {
            let userEducationsModified = user.user.educations.educations.map((item) => {
                if (item.key == dataItemData.key)
                    return dataItemData
                return item;
            });
            user.user.educations.educations = userEducationsModified;
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
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Qual name' onChange={(text) => setDataItemData({ ...dataItemData, qual_name: text })} value={dataItemData.qual_name}></Input>

                        <Input xstyles={edit_styles.textInputCustom} placeholder='School ' onChange={(text) => setDataItemData({ ...dataItemData, school: text })} value={dataItemData.school}></Input>


                        <LocationAreaCity name={'location'} placeholder={'location'} updateValue={updateValue} locationValue={dataItemData.location} />
                        <StartEndMonthYear dataItemData={dataItemData} updateValue={updateValue} />

                        <Input xstyles={edit_styles.textInputCustom} placeholder='Description' onChange={(text) => setDataItemData({ ...dataItemData, description: text })} value={dataItemData.description}></Input>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Grade' onChange={(text) => setDataItemData({ ...dataItemData, overall_grade: text })} value={dataItemData.overall_grade}></Input>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Area of study' onChange={(text) => setDataItemData({ ...dataItemData, areaofstudy: text })} value={dataItemData.areaofstudy}></Input>

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
