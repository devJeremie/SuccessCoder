import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

const CourseItem = (props) => {
  return (
    <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
            <Image 
                source={{uri: props.image}}
                style={styles.image}
            />
        </View>
        <View style={styles.courseContainerDetails}>
            <Text style={styles.courseText}></Text>
            <Text style={styles.coursePrice}></Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: globalStyles.lightGrey,
        borderWidth: 1,
    },
    imageContainer: {
       width: '100%',
       height: '60%', 
    },
    image: {
        width: '100%',
        height: '100%',
    },
    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10,
    },

})

export default CourseItem