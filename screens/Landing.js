import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import CourseItem from '../components/CourseItem'
import EmptyMsg from '../components/EmptyMsg'

const Landing = ({ navigation }) => {

  const existingCourses = useSelector(state => state.courses.existingCourses)

  if ( existingCourses.length ) {
    return (
      <FlatList 
        data={existingCourses}
        renderItem={({item}) => (
          <CourseItem 
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigation.navigate('Details', {
              courseId: item.id,
              title: item.title
            })}
            onAddToCart={() => alert("Panier")}
          />
        )}
        //keyExtractor={id}
      />
    )
  } else {
    return <EmptyMsg text="Pas de cours à afficher"/>
  }

 
}

export default Landing

const styles = StyleSheet.create({})