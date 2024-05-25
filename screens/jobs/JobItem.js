import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Button from '../../components/Button';

function JobItem({ dataItem }) {
    return (
        <View>
            <Text style={styles.textStyle}>{dataItem.jobtitle} </Text>
            <Text >{dataItem.location} </Text>
            <Text >{dataItem.country} </Text>
            <Text></Text>
            <Button>Apply</Button>



        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
    },
});

export default JobItem;