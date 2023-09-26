import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import CourseItem from '../components/CourseItem'

const Landing = () => {

  const existingCourses = useSelector(state => state.courses.existingCourses)

  return (
    <FlatList 
      data={existingCourses}
      renderItem={({item}) => (
        <CourseItem 
          image={item.image}
          title={item.title}
          price={item.price}
        />
      )}
    />
  )
}

export default Landing

const styles = StyleSheet.create({})