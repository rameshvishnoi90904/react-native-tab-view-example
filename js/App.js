
import React, {Fragment} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Text,
    Image
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import Feeds from './components/Feeds';
import Weather from './components/Weather';
import Profile from './components/Profile';

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First', logo:require('./icons/icon1.png') },
      { key: 'second', title: 'Second', logo:require('./icons/icon2.png') },
      { key: 'third', title: 'Third', logo:require('./icons/icon3.png') },
      { key: 'fourth', title: 'Fourth' , logo:require('./icons/icon4.png')},
      { key: 'five', title: 'Fiveth', logo:require('./icons/icon5.png') }
    ],
  };

    _renderTabBar = props => {
        console.log(props.navigationState.routes);
      return (
        <Animated.View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity
                key={route.key}
                style={[styles.tabItem, (props.navigationState.index == i) && styles.activeTabItem, (i == 0  || i == props.navigationState.routes.length - 1) && styles.edgeTabItem]}
                onPress={() => this.setState({ index: i })}>
                    {(props.navigationState.index == i) && <Image source={require('./icons/leftarrow.png')} style={[styles.arrow, (i == 0) && styles.hideIcon]}/>}
                    <Image source={route.logo} style={[styles.tabIcon, (props.navigationState.index == i) && styles.activeTabIcon]}/>
                    {(props.navigationState.index == i) && <Image source={require('./icons/rightarrow.png')} style={[styles.arrow,(i == props.navigationState.routes.length - 1) && styles.hideIcon]}/>}

              </TouchableOpacity>
            );
          })}
        </Animated.View>
      );
    };

  render() {
    return (
        <Fragment>
            <StatusBar backgroundColor="#0091ea" barStyle="light-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <TabView
                navigationState={this.state}
                tabBarPosition="bottom"
                renderTabBar={this._renderTabBar}
                indicatorContainerStyle={{padding: 32}}
                renderScene={SceneMap({
                    first: Feeds,
                    second: Weather,
                    third: Profile,
                    fourth: Profile,
                    five: Profile,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
            </SafeAreaView>
        </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#01579b',
    height: 65
  },
  tabItem: {
    flex: 1,
    // paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#03a9f4',
    marginEnd: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  activeTabItem:{
      backgroundColor: '#0288d1',
      paddingHorizontal: 8,
      // paddingBottom: 16
  },
  edgeTabItem:{
      // paddingHorizontal: 16
  },
  tabIcon:{
      width: 32,
      height: 32,
      marginHorizontal: 4
  },
  activeTabIcon:{
      width: 40,
      height: 40
  },
  arrow:{
      width: 18,
      height: 32,
  },
  hideIcon:{
      opacity: 0,
      width : 10
  }
});
