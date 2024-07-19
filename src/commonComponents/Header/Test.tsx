import React from "react";
import { View } from "react-native";
import HeaderComponent from ".";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { ShareIconoh } from "../../../assets/images/profile.png";

import Cross from 'react-native-vector-icons/Entypo'
const ShareIconoh = require( "../../../assets/images/profile.png")
const Test = () => {
    const backArrow = <Icon name="arrow-back" size={25} color="#000000"/>;
    const crossIcon = <Cross name="cross" size={25} color="#000000"/>
    return (
            <HeaderComponent 
                leftIcon = {backArrow}
                middleText = "My Reports"
                profile = {ShareIconoh}
                cross = {crossIcon}
            />
        
    );
}

export default Test;