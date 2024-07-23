import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex : 1
    },
    container: {
        flex : 1,
       alignItems : 'center',
    },
    imageView: {
        marginTop : 35
    },
    bottomView : {
        marginTop : 30,
        flexDirection : 'row',
        alignItems : 'center'
    },
    img : {
        height : 80,
        width : 80
    },
    secondImg: {
        marginLeft : 10
    },
    selectedImg: {
        width: 90,
        height: 90,
      },
});