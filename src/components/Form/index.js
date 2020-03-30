import React,{useState} from 'react';
import {View,StyleSheet,TextInput,Button,Alert} from 'react-native';
import {THEME} from '../../theme';

export default function Form ({onSubmit}){

    const [title,setTitle] = useState('');

    const pressHandler = ()=>{
        if(title.trim()){
            onSubmit(title);
            setTitle('');

        }else{
            Alert.alert('Название статьи не может быть пустым');
        }
    };
    return(
        <View style={styles.form}>
            <TextInput style={styles.input} onChangeText={(event)=>setTitle(event)} value={title}/>
            <Button style={styles.button} title="Добавить" onPress={pressHandler} />
        </View>
    );
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
        borderBottomColor:THEME.MAIN_COLOR,
        borderBottomWidth:2,
        height: '70%',
        padding:10
    },
    button:{
        height:'70%'
    }
});

