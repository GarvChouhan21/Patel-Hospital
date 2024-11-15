import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {useState} from 'react';

const ImageView = () => {
  const [image, setImage] = useState('ODP1');

  const toggleImage = (imageName: any) => {
    setImage(imageName);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent isLeftIcon />
      <View style={styles.container}>
        <View style={styles.imageView}>
          {image === 'ODP1' && (
            <Image source={require('../../../assets/images/ODP1.png')} />
          )}
          {image === 'ODP2' && (
            <Image source={require('../../../assets/images/ODP2.png')} />
          )}
        </View>

        <View style={styles.bottomView}>
          <View>
            <TouchableOpacity onPress={() => toggleImage('ODP1')}>
              <Image
                source={require('../../../assets/images/ODP1.png')}
                style={[styles.img, image === 'ODP1' && styles.selectedImg]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondImg}>
            <TouchableOpacity onPress={() => toggleImage('ODP2')}>
              <Image
                source={require('../../../assets/images/ODP2.png')}
                style={[styles.img, image === 'ODP2' && styles.selectedImg]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImageView;
