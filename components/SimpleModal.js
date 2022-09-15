import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions, 
} from 'react-native'

const SimpleModal = () => {

    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View>
                
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create(){
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
}



export {SimpleModal}