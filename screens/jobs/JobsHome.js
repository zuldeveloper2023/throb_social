import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Jobs from './Jobs';

const JobsHome = () => {
  return (
    <View style={styles.container}>

      <Jobs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});

export default JobsHome;