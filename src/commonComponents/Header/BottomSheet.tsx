import React, { useRef } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import HeaderComponent from ".";
import Test from "./Test";

const BottomSheet = () => {
    const refRBSheet = useRef();
    return (
        <View style={{ flex: 1 }}>
            <Button
                title="OPEN BOTTOM SHEET"
                onPress={() => refRBSheet.current.open()}
            />
            <RBSheet
                ref={refRBSheet}
                useNativeDriver={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: '#000',
                    },
                    container: {
                        height: 300, 
                    }
                }}
                customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
                }}
                customAvoidingViewProps={{
                    enabled: false,
                }}>
                <Test />
            </RBSheet>
        </View>
    );
};

export default BottomSheet;
