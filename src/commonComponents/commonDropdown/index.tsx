import React, { useEffect, useState } from "react";
import {View,Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./styles";

const DropdownComponent = ({heading, optionHeading, data, onChange, clear}:any) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
      if (clear) {
        setValue(null); 
      }
    }, [clear]);
  
    return (
        <View style={styles.mainContainer}>
        <View>
            <Text style={styles.labelTextStyle}>{heading}</Text>
        </View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          itemTextStyle={styles.color}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `${optionHeading}` : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            onChange(item)
            setValue(item.value);
            setIsFocus(false);
          }}
        
        />
      </View>
      
    );
}

export default DropdownComponent;