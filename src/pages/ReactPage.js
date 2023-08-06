
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJSData } from '../store/reducers/applicationData';
import Cards from '../components/Cards';

const react_data = 'reactjs'

const ReactPage = () => {

  const dispatch = useDispatch()

  const [ reactQuestion, setReactQuestion ] = useState([])

  const { list : reactData, loading } = useSelector((state) => ({ ...state.question}))

  const getQuestions = useCallback(() => {
    dispatch(fetchAllJSData( react_data ))
},[react_data])

//FetchData
useEffect(() => {
  getQuestions()
}, [])

useEffect(() => {
  setReactQuestion(reactData)
},[reactQuestion])



  const handleReactData = ({item, index}) => {

    return (
      <Cards item={item} />
    )
  }

  return !loading ? (
    <View style={{flex:1, }}>
      
        <FlatList
         data={reactQuestion}
         renderItem = {handleReactData}
        />
    </View>
  ) : (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text>Loading</Text>
    </View>
  )
}

export default ReactPage

const styles = StyleSheet.create({})