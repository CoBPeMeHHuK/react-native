import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {THEME} from '../theme';
import {AppCard} from "../components/ui/AppCard";
import EditModal from "../components/EditModal";

export default function NewsScreen({goBack, news,removeNews,onSave}) {

    const [modal,setModal] = useState(false);
    const saveHandler = title =>{
        onSave(news.id,title);
        setModal(false);
    };
    return (
        <View>
            <EditModal onSave={saveHandler} value={news.title} onCancel={()=>setModal(false)} visible={modal}/>
            <AppCard>
                <Text style={styles.title}>{news.title}</Text>
                <Button title="Редактировать" onPress={()=>setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.GREY_COLOR} title="Назад" onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => {
                       removeNews(news.id)
                    }}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width:'40%'
    },
    title:{
        fontSize:20
    }
});

