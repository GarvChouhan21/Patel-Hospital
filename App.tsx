import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputField } from './src/commonComponents/InputField'
import { useForm } from 'react-hook-form';
const App = () => {
  const {control} = useForm({mode: 'onBlur'});
  return (
    <View>
      <InputField
            {...{
              multiline: false,
              label: `asdasada`,
              inputlabel: `adaasd`,
              name: 'password',
              control,
              rules: {},
              keyboardType: 'normal',
              secureTextEntry: true,
            }}
          />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})