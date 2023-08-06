import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Cards = ({ item }) => {

    const handleAnswer = (linkVal) => {
    
        const url = linkVal
        Linking.openURL(url)
        .catch((err) => {
          console.error("Error opening in Link", err);
        })
    
        // console.warn("working");
      }

  return (
    <TouchableOpacity style={{ backgroundColor: "lightgray", padding: 10, margin:10, borderRadius: 10}}
      onPress={() => handleAnswer(item.link)}
      >
        <Text>{item.title}</Text>

      </TouchableOpacity>
  )
}

export default Cards