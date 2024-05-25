import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import edit_styles from '../../styles/common/editscreens/editstyles';
import { AuthContext,UserContext } from '../../context/context';
import UpdateUser from '../../service/UpdateUser';


export default function CareerObjectiveEdit(navigation) {
    let user = useContext(UserContext);
    let token = useContext(AuthContext);
    const [dataItemData, setDataItemData] = React.useState(user.user);

    const save = () => {
        user.user = dataItemData;

        UpdateUser(user.user, token.userToken);
        user.setUser(user.user);
        return "";
    }
    return (

        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Text></Text>

                    <View style={edit_styles.container}>
                        <Text style={GlobalStyles.OpeningContent}>We use the best tech to protect your data and privacy.</Text>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='Career objective' onChange={(text) => setDataItemData({ ...dataItemData, career_objective: text })} value={dataItemData.career_objective}></Input>

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
