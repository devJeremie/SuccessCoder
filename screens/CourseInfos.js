import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';

const CourseInfos = ({navigation, route}) => {
     const courseId =  route.params.courseId;
    /*FAIT DANS LE CoURSESTACKNAVIGATOR ECRAN DETAILS EN PLUS SIMPLE
     //methode find pour recuperer les elements dans l'array, on aura acces si l'id est le bon 
     const selectedCourse = useSelector(state => state.courses.existingCourses.find( course => course.id === courseId))

    //je prend le cours recuperer et je le recupere avec son title
    useEffect(() => {
        navigation.setOptions({
            title: selectedCourse.title
        })
        selectedCourse.title;
    },[navigation]);
     */
  return (
    <View>
      <Text>CourseInfos</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CourseInfos;