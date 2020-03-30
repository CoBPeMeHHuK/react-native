import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Button,Modal} from 'react-native';
import {THEME} from "../../theme";

export default function EditModal({visible,onCancel,value,onSave}){

    const [title,setTitle] = useState(value);
    const saveHandler =()=>{
      if(title.trim().length < 3){
            Alert.alert('Ошибка!',`Минимальная длина названия 3 символа`);
      }else{
          onSave(title);
      }
    };
    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.wrapper}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Введите название новости"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title="Отменить" color={THEME.DANGER_COLOR} onPress={onCancel}/>
                    <Button title="Сохранить" onPress={saveHandler}/>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    input:{
        padding:10,
        borderBottomColor:THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width:'80%'
    },
    buttons:{
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-around'

    }
});