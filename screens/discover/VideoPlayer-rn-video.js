// Load the module
import { StyleSheet, SafeAreaView,View, Text ,Dimensions} from "react-native";
import React, { useState, useRef } from 'react';
import Video, { VideoRef } from 'react-native-video';
import { createStackNavigator } from '@react-navigation/stack';
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //flex:1,
        display:'flex',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        //backgroundColor:'black'
        backgroundColor:'black'
    }
});

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
const VideoPlayer = () => {

    const background = require('../../assets/videos/background.mp4');
    const videoRef = useRef(null);
    const [abc, setAbc] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{headerShown:false}}/>
            <Video
                // Can be a URL or a local file.
                source={{ uri: "https://vdoservice2-destination920a3c57-wp5qfp1lxe25.s3.ap-southeast-2.amazonaws.com/071a0a66-6fe2-4439-b41e-b3167c35445d/AppleHLS1/3195394-uhd_3840_2160_25fps.m3u8aa" }}
                // Store reference  
                ref={(ref) => { setAbc(ref) }}
                // Callback when remote video is buffering                                      
                //onBuffer={onBuffer}
                // Callback when video cannot be loaded              
                //onError={onError}               
                style={styles1.backgroundVideo}
                controls={true}
                

            />
          
        </SafeAreaView>
    )
}

// Later on in your styles..
var styles1 = StyleSheet.create({
    backgroundVideo: {
        //position: 'relative',
        //paddingLeft:50,
        //alignContent:'center',
        //alignItems:'center',
        top:20,
        //left:50,
        
        //height: height,
        width: width,
       
    },
});

export default VideoPlayer;