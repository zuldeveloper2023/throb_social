import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import VideoPlayer from '../discover/VideoPlayer';
import { Text } from 'react-native-elements';
import VideoPlayera from '../discover/VideoPlayera';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} 
    >
        <Text>sskksk</Text>
        <VideoPlayera/>
        </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = () => (
    <SceneMap first={FirstRoute} second={SecondRoute} />
);

export default function HomeCentral() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'For you' },
        { key: 'second', title: 'Following' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
              })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //paddingLeft:30,
        paddingTop: 20,
        backgroundColor: 'white'
        //marginTop: StatusBar.currentHeight || 0,
    },
    customButtonStyle: {
        marginBottom: 30
    }
});
