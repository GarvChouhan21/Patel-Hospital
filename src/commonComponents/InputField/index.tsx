import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller, useFormState} from 'react-hook-form';
import {styles} from './styles';
import { COLORS } from '../../utils/Colors';
import Icons from 'react-native-vector-icons/Feather'
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
  editable = true,
  defaultValue ,
  containerStyle,
}: any) => {
  const {errors}: any = useFormState({control});
  const [secureEntry, setSecureEntry] = useState<boolean>(secureTextEntry);
  const [value, setValue] = useState('');

  return (
    <View style={[styles.inputContainer, containerStyle]}>
     <Text style={styles.labelTextStyle}>{label}</Text>
      <Controller
        // defaultValue={defaultValue}
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
                    placeholderTextColor={COLORS.SECONDARY_GRAY}
                    onChangeText={text => field.onChange(text)}
                    multiline={multiline}
                    secureTextEntry={secureEntry}
                    value={field.value}
                    keyboardType={keyboardType}
                    defaultValue={defaultValue}
                    autoCapitalize="none"
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
                           <Icons name='eye' size={18} color={COLORS.SECONDARY_GRAY}></Icons>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => setSecureEntry(!secureEntry)}>
                          <Icons name='eye-off' size={18} color={COLORS.SECONDARY_GRAY}></Icons>
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
                </View>
              {errors && errors[name] && errors[name].message !== '' ? (
                <Text
                  style={{
                    color: COLORS.PRIMARY_RED,
                    fontSize: 14,
                    // marginTop: -8,
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
