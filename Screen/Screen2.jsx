import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
    const {navigation} = props;
    const ClikNeNe = ()=>{
        navigation.navigate('Screen1')
    }
  return (
    <View>
      <Text>Screen2</Text>
      <Pressable style={styles.pressable} onPress={ClikNeNe}>
      <Text style={styles.text}>Go to Screen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    pressable:{
        height:35,
        backgroundColor:'blue',
        borderRadius:10
    }, 
    text:{
        color:'black'
    }
})