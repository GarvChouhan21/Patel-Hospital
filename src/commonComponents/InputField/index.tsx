import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Controller, useForm, useFormState} from 'react-hook-form';
import {styles} from './styles';
import { COLORS } from '../../utils/Colors';
// import {Colors} from '../../utils/Colors';
// import {
//   CheckedIcon,
//   CloseEyeIcon,
//   OpenEyeIcon,
//   UncheckedIcon,
// } from '../../../assets/images';

export const InputField = ({
  multiline = false,
  label = '',
  inputlabel = '',
  name,
  control,
  rules,
  customStyle,
  keyboardType,
  secureTextEntry = false,
  inputType = 'normal',
  editable = true,
  defaultValue = '',
  containerStyle,
  phoneInput,
  defaultCode,
}: any) => {
  const {errors}: any = useFormState({control});
  const [secureEntry, setSecureEntry] = useState<boolean>(secureTextEntry);
  const [value, setValue] = useState('');

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {label !== '' && <Text style={styles.labelTextStyle}>{label}</Text>}
      <Controller
        defaultValue={defaultValue}
        control={control}
        render={({field}) => {
          return (
            <>
                <View
                  style={[
                    styles.commonContainerStyle,
                    {...customStyle},
                    {...(secureTextEntry && styles.passwordInputStyle)},
                    multiline === true
                      ? styles.multilineInputContainerStyle
                      : styles.commontInput,
                  ]}>
                  <TextInput
                    allowFontScaling={false}
                    placeholder={`${inputlabel}`}
                    placeholderTextColor={COLORS.secondaryGray}
                    onChangeText={text => field.onChange(text)}
                    multiline={multiline}
                    secureTextEntry={secureEntry}
                    value={field.value}
                    keyboardType={keyboardType}
                    style={[
                      styles.font,
                      {...(secureTextEntry && {width: '90%'})},
                      multiline === true
                        ? styles.multilineInputStyle
                        : styles.commontInput,
                    ]}
                    editable={editable}
                  />
                  {secureTextEntry && (
                    <View style={{}}>
                      {secureEntry ? (
                        <TouchableOpacity
                          onPress={() => setSecureEntry(!secureEntry)}>
                          {/* <OpenEyeIcon /> */}
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => setSecureEntry(!secureEntry)}>
                          {/* <CloseEyeIcon /> */}
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
                </View>
              {errors && errors[name] && errors[name].message !== '' ? (
                <Text
                  style={{
                    // color: COLORS.primaryRed,
                    fontSize: 14,
                    marginTop: -8,
                  }}>
                  {errors[name].message}
                </Text>
              ) : (
                ''
              )}
            </>
          );
        }}
        name={name}
        rules={rules}
      />
    </View>
  );
};

export const CheckBoxInput = ({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: (value: boolean) => any;
}) => {
  return (
    <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
      {/* {isSelected ? <CheckedIcon /> : <UncheckedIcon />} */}
    </TouchableOpacity>
  );
};
