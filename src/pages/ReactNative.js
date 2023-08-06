import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJSData } from '../store/reducers/applicationData';
import Cards from '../components/Cards';

const react_native_data = 'react-native'

const ReactNative = () => {

  const dispatch = useDispatch()

  const [ reactNativeQuestion, setReactNativeQuestion ] = useState([])

  const { list : reactNativeData, loading } = useSelector((state) => ({ ...state.question}))

  const getQuestions = useCallback(() => {
    dispatch(fetchAllJSData( react_native_data ))
},[react_native_data])

//FetchData
useEffect(() => {
  getQuestions()
}, [])

useEffect(() => {
  setReactNativeQuestion(reactNativeData)
},[reactNativeQuestion])



  const handleReactData = ({item, index}) => {

    return (
      <Cards item={item} />
    )
  }

  return !loading ? (
    <View style={{flex:1, }}>
      
        <FlatList
         data={reactNativeQuestion}
         renderItem = {handleReactData}
        />
    </View>
  ) : (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text>Loading</Text>
    </View>
  )
}

export default ReactNative

const styles = StyleSheet.create({})