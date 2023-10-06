import { View, Text, Button, document } from 'react-native'
import React, {useState, useEffect } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <View>
      <Text>I've rendered {count} times!</Text>
     
    </View>
  )
}

export default Demo