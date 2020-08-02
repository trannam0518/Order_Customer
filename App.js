// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default () => {
  return <ScrollableTabView
    style={styles.container}
    renderTabBar={()=><DefaultTabBar backgroundColor='rgba(38, 33, 28, 0.2)' />}
    tabBarPosition='overlayBottom'
    
  >
    <ScrollView tabLabel='Customer'>
      {/* <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
      <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
      <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
      <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} /> */}
    </ScrollView>
    <ScrollView tabLabel='Order' >
      {/* <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
      <Icon name='logo-android' color='black' size={300} style={styles.icon} />
      <Icon name='logo-android' color='brown' size={300} style={styles.icon} /> */}
    </ScrollView>
    <ScrollView tabLabel="Report">

    </ScrollView>
  </ScrollableTabView>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});