import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HeaderComponent = ({leftIcon, middleText, profile, cross}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{leftIcon}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.middleText}>{middleText}</Text>
      </View>
      <View style={styles.profileIcon}>
        <TouchableOpacity>
         {profile ?  <Image source={profile} /> : 
          <Text>{cross}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
