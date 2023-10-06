import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const Welcome = () => {
    const [hoTen, setHoTen] = useState('Chưa có người iu');

    return (
        <View>
            <Text>Nguyễn Hữu Hoà {hoTen}</Text>
            <Button title='Bấm vào đây' onPress={() =>setHoTen('Đã có người iu')} />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})