import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import settings from '~/settings';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';

const {theme} = settings;

const styles = StyleSheet.create({
  root: {paddingBottom: 20, marginTop: 0},
  title: {textAlign: 'center', fontSize: 30, backgroundColor: 'red'},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: theme.hoverColor,
  },
  focusCell: {
    borderColor: theme.hoverColor,
    color: theme.hoverColor,
  },
});

const CELL_COUNT = 6;

const App = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  console.log('value=', value);

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <CodeField
          ref={ref}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;
