// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {styles} from './styles';
// import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
// import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
// import CommonButton from '../../commonComponents/commonButton';
// import {useNavigation} from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <HeaderComponent
//           isLeftIcon
//           isCenterText
//           centerText={SCREEN_CONSTANTS.HOMEPAGE.HEADING}
//           isRightProfile={true}
//           isRightComponent
//         />
//         <View style={styles.mainContainer}>
//           <View style={styles.container}>
//             <View style={styles.containerMain}>
//               <Image
//                 style={styles.image}
//                 source={require('../../../assets/images/dr.png')}
//               />
//               <View>
//                 <Text style={styles.reportName}>ODP</Text>
//                 <Text style={styles.reportDescription}>
//                   By Dr. Minakshi Verma
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.secondContainer}>
//               <Text style={styles.date}>12 March 2024</Text>
//             </View>
//           </View>

//           <View style={styles.imageContainer}>
//             <TouchableOpacity onPress={() => navigation.navigate('imageView')}>
//               <View>
//                 <Image source={require('../../../assets/images/ODP1.png')} />
//               </View>
//             </TouchableOpacity>
//             <View style={styles.imageStyle}>
//               <View style={styles.btn}>
//                 <CommonButton
//                   disable={false}
//                   isSelected={true}
//                   buttonText="Download Report"
//                   isLoading={false}
//                 />
//               </View>
//               <Image source={require('../../../assets/images/ODP2.png')} />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import CommonButton from '../../commonComponents/commonButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent
        isLeftIcon
        isCenterText
        centerText={SCREEN_CONSTANTS.HOMEPAGE.HEADING}
        isRightProfile={true}
        isRightComponent
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.containerMain}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/dr.png')}
              />
              <View>
                <Text style={styles.reportName}>ODP</Text>
                <Text style={styles.reportDescription}>
                  By Dr. Minakshi Verma
                </Text>
              </View>
            </View>
            <View style={styles.secondContainer}>
              <Text style={styles.date}>12 March 2024</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('imageView')}>
              <View>
                <Image source={require('../../../assets/images/ODP1.png')} />
              </View>
            </TouchableOpacity>
            <View style={styles.imageStyle}>
              <Image source={require('../../../assets/images/ODP2.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal : 16}}>
      <View style={styles.fixedButtonContainer}>
        <CommonButton
          disable={false}
          isSelected={true}
          buttonText="Download Report"
          isLoading={false}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

