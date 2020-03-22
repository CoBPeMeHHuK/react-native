import React,{Component} from 'react';
import {View,StyleSheet,TextInput,Button} from 'react-native'

export default class Form extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.form}>
                <TextInput style={styles.input}/>
                <Button style={styles.button} title="Button" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    form:{
        width:'100%',
        flexDirection:'row',
        alignItems:"flex-end",
        height:70,
        justifyContent:'space-between'
    },
    input:{
        width:'70%',
        borderStyle:'solid',
        borderBottomColor:'#3949ab',
        borderBottomWidth:2,
        height: '70%',
        padding:10
    },
    button:{
        height:'70%'
    }
});

