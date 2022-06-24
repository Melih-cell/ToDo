import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import styles from './HomeStyle'
import About from '../About.js/About'

const Home = () => {
  //State
  const [number, setNumber] = useState(0);
  const [idx, setIdx] = useState('');
  const [data, setData] = useState([]);

  //Array atama
  const handleButton = () => {
    setData([...data, idx]);
    setIdx('');
    setNumber(number + 1);
  }
  //About Props
  const handleAbout = ({ item, index }) =>
   <About setData=
   {setData} data={data}
    rend={item}
    n={number}
    stNum={setNumber}
    index={index} /> 

  return (
    <View style={styles.cont}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', margin: 30 }}>
        <Text style={styles.input}>Yapılacaklar: {idx} </Text>
        <Text style={{fontSize: 34}}>{number}</Text>
      </View>
      
        <FlatList data={data} renderItem={handleAbout}></FlatList>
      
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={(e) => setIdx(e)} style={{color: 'white'}}
        placeholder='Yapılacak...'
        placeholderTextColor='#c7c7c7'
        ></TextInput>
      </View>
      <TouchableOpacity onPress={handleButton} style={styles.button_container}>
        <Text style={styles.text_style}>Kaydet</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  )
}

export default Home