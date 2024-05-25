import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import edit_styles from '../../styles/common/editscreens/editstyles';
import { AuthContext,UserContext } from '../../context/context';
import UpdateUser from '../../service/UpdateUser';
import AddressLocator from '../../components/location/AddressLocator';


export default function BioDetailsEdit({navigation}) {
    let user = useContext(UserContext);
    let token = useContext(AuthContext);
    const [dataItemData, setDataItemData] = React.useState(user.user);
    const [address, setAddress] = React.useState(dataItemData.address);
    
    const save=(navigation)=>{
        user.user=dataItemData;
        
        UpdateUser(user.user,token.userToken);
        user.setUser(user.user);
        navigation.navigate(user.user.first_name);
        return "";
    }
    return (

        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Text></Text>
                    
                    <View style={edit_styles.container}>
                    <Text style={GlobalStyles.OpeningContent}>We use the best tech to protect your data and privacy.</Text>
                        <Input xstyles={edit_styles.textInputCustom} placeholder='First name' onChange={(text) => setDataItemData({...dataItemData, first_name: text })} value={dataItemData.first_name}></Input>

                        <Input xstyles={edit_styles.textInputCustom} placeholder='Last name' onChange={(text) => setDataItemData({...dataItemData, last_name: text })} value={dataItemData.last_name}></Input>

                        <Input xstyles={edit_styles.textInputCustom} placeholder='Date of birth' onChange={(text) => setDataItemData({...dataItemData, dob: text })} value={dataItemData.dob}></Input>

                        <Input xstyles={edit_styles.textInputCustom} placeholder='Address' onChange={(text) => setDataItemData({...dataItemData, address: text })} value={dataItemData.address}></Input>
                        <AddressLocator placeholder='Address' address={dataItemData.address} setAddress={setAddress}></AddressLocator>
                        <Button
                            onPress={() => save(navigation)}
                        >
                            Save
                        </Button>
                    </View>

                </View >
            </ScrollView>
        </View>

    )
}
