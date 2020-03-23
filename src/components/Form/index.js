import React,{Component,useState} from 'react';
import {View,StyleSheet,TextInput,Button} from 'react-native'

export default class Form extends Component{
    constructor(props) {
        super(props);
    }
    render(){

        const [value,setValue] = useState('');

        const pressHandler = ()=>{
            this.props.onSumbit(value);
            setValue('');
        };
        return(
            <View style={styles.form}>
                <TextInput style={styles.input} onChangeText={setValue} value={value} placeholder="Введите название новости"/>
                <Button style={styles.button} title="Button" onPress={pressHandler} />
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
        justifyContent:'space-between',
        marginBottom:10
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

