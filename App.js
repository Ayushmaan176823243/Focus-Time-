import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { colors } from './src/utils/colors';

import { Focus } from './src/Features/Focus';
import { sizes } from './src/utils/sizes';
import { Timer } from './src/Features/Timer';
import { Timing } from './src/Features/Timing';
import { FocusHistory } from './src/Features/FocusHistory';

// import{Ratan}  from './src/Features/ratan';n
// or any files within the Snack
// import AssetExample from './components/AssetExample';

export default function App() {
  const [currentsubject, setCurrentsubject] = useState(null);
  const [history, sethistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentsubject ? (
        <>
          <Focus addsubject={setCurrentsubject} />
          <View style={styles.focusehistory}>
            <FocusHistory history={history} />
          </View>
        </>
      ) : (
        <Timer
          focussubject={currentsubject}
          onTimerEnd={(subject) => {
            sethistory([...history,subject])
          }}
          clearsubject={() => setCurrentsubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
  focusehistory: {},
});
