import React, { useState } from "react";
import { SafeAreaView, View,Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./styles";


const DropdownComponent = ({heading, optionHeading, data}:any) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // const renderLabel = () => {
    //   if (value || isFocus) {
    //     return (
    //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
    //         Dropdown label
    //       </Text>
    //     );
    //   }
    //   return null;
    // };
    return (
        <View style={styles.mainContainer}>
          <View>
              <Text style={styles.labelTextStyle}>{heading}</Text>
          </View>
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `${optionHeading}` : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        
        />
      </View>
      
    );
}

export default DropdownComponent;