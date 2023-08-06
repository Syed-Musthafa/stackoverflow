import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import icon from '../exports/icon'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJSData } from '../store/reducers/applicationData';
import Cards from '../components/Cards';

const node_data = 'node.js'

const Node = () => {
const dispatch = useDispatch()

const [ nodeQuestion, setNodeQuestion ] = useState([])

const { list : nodeData, loading } = useSelector((state) => ({ ...state.question}))

const getQuestions = useCallback(() => {
  dispatch(fetchAllJSData( node_data ))
},[node_data])

//FetchData
useEffect(() => {
getQuestions()
}, [])

useEffect(() => {
  setNodeQuestion(nodeData)
},[nodeQuestion])


const handleNodeData = ({item, index}) => {

  return (
    <Cards item={item} />
  )
}

return !loading ? (
  <View style={{flex:1, }}>
    
      <FlatList
       data={nodeQuestion}
       renderItem = {handleNodeData}
      />
  </View>
) : (
  <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>

    <Text>Loading</Text>
  </View>
)
}

export default Node

const styles = StyleSheet.create({})