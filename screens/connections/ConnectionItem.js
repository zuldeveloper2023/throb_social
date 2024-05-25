import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Button from '../../components/Button';

function ConnectionItem({ dataItem }) {
    return (
        <View>
            <Text style={styles.textStyle}>{dataItem.firstName} {dataItem.lastName}</Text>
            <Text></Text>
            <Button>Connect</Button>
            
            
        
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
       
       fontWeight: 'bold',
    },
  });
  
export default ConnectionItem;