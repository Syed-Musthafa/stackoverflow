import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const IconHolder = ({ source, size }) => {
    return (
        <View>
            <Image
                source={source}
                style={{ height: 25, width: 25 }}
            />
        </View>
    )
}

export default IconHolder

const styles = StyleSheet.create({})