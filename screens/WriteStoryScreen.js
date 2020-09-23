import React from 'react';
import {Text, StyleSheet,View, TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';


export default class WriteStory extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.view} behavior="padding" enabled >
            
                <Header backgroundColor={'pink'}
        centerComponent={{
          text:"Write A Story",
          style:{fontSize:18, fontFamily:"bold"}
        }}/>
            <TextInput
          style={styles.inputBox}
          placeholder="Title of the story"
         />
            <TextInput
          style={styles.inputBox}
          placeholder="Author"
         />
          <TextInput
          multiline
          style={[styles.inputBox,{height:300}]}
          placeholder="Write your story"
          
          />
         <TouchableOpacity style={styles.submitButton}>
         <Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>Submit</Text>
         </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    inputBox:{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
         textAlign:'center',
        marginTop:20,
        marginLeft:10},

        submitButton:{
            backgroundColor: '#FBC02D',
            width: 100,
            height:50,
            textAlign:"center",
            justifyContent:"center",
            marginLeft:110,
            marginTop:20
          },
    })
