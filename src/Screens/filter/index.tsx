import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import DatePicker from 'react-native-date-picker';
import DropdownComponent from "../../commonComponents/commonDropdown";
import { styles } from "./styles";
import ButtonComponent from "./button";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const FilterComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

    const formatDate = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const handleStartDatePress = () => {
        setOpenStartDatePicker(true);
    };

    const handleEndDatePress = () => {
        setOpenEndDatePicker(true);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setOpenStartDatePicker(false);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setOpenEndDatePicker(false);
    };

    const handleStartDateCancel = () => {
        setOpenStartDatePicker(false);
    };

    const handleEndDateCancel = () => {
        setOpenEndDatePicker(false);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <DropdownComponent heading="Doctor" optionHeading="Select Doctor" data={data} />
                <DropdownComponent heading="Test" optionHeading="Select Test" data={data} />

                <View>
                    <Text style={styles.labelTextStyle}>Date</Text>
                </View>

                <View style={styles.dateView}>
                    <View style={styles.date}>
                        <TouchableOpacity onPress={handleStartDatePress}>
                            <Text style={styles.txt}>{formatDate(startDate)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stroke}>
                        <Image source={require('../../../assets/images/Stroke.png')} />
                    </View>
                    <View style={styles.date}>
                        <TouchableOpacity onPress={handleEndDatePress}>
                            <Text style={styles.txt}>{formatDate(endDate)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <DatePicker
                    modal
                    open={openStartDatePicker}
                    date={startDate}
                    onConfirm={handleStartDateChange}
                    onCancel={handleStartDateCancel}
                />

                <DatePicker
                    modal
                    open={openEndDatePicker}
                    date={endDate}
                    onConfirm={handleEndDateChange}
                    onCancel={handleEndDateCancel}
                />

                <View style={styles.btn}>
                    <ButtonComponent text="Submit" color='#FFFFFF' bgColor='#007EFA'/>
                    <ButtonComponent text="Clear All" color='#000000' bgColor='#FFFFFF'/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default FilterComponent;
