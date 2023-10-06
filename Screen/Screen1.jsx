import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
    const {navigation} = props;
    const ClikNe = ()=>{
        navigation.navigate('Screen2')
    }
  return (
    <View>
      <Text>Screen1</Text>
      <Pressable style={styles.pressable} onPress={ClikNe}>
      <Text style={styles.text}>Go to Screen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

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