import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'


const About = ({ rend, data, index, setData, stNum, n}) => {
    const handleDelete = () => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        stNum(n -= 1)
    }

  return (
    <View style={styles.container}>
        <Text style={{color: 'white'}}>{rend}</Text>
        <Button title="Delete"style={{color: 'white',}} onPress={handleDelete}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#a4a4a4',
        borderRadius: 8,
        margin: 5,
        padding: 8,
        backgroundColor: '#636363',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default About