import React, {useState} from 'react';
import {StyleSheet, Alert, View,Text} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


import NavBar from './src/components/Navbar';
import {MainScreen} from "./src/screens/MainScreen";
import NewsScreen from "./src/screens/NewsScreen";


async function loadAppApplication() {
    await Font.loadAsync({
        'Circe': require('./assets/fonts/circe.ttf')
    })
}


export default function App() {
    const [news, setNews] = useState([
        {
            'id':'1',
            'title':'Иван'
        },
        {
            'id':'2',
            'title':'Андрей'
        }
    ]);
    const [newsId,setNewsId] = useState(null);

    const updateNews = (id,title) =>{
        setNews(old =>old.map(news =>{
                if(news.id === id) news.title = title;
                return news;
        }));


    };

    const addNews = (title) => {
        setNews(prev => [...prev,
            {
                id: new Date().toString()+Math.random(),
                title
            }])
    };

    const removeNews = id =>{
        const newsElement = news.find(news => news.id === id);
        Alert.alert(
            'Удаление элемента',
            `Вы уверены что хотите удалить "${newsElement.title}" ?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить', onPress: () => {
                        setNewsId(null);
                        setNews(prev => prev.filter(news => news.id !== id))
                    }
                },
            ],
            {cancelable: true},
        );

    };

    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadAppApplication()}
                onError={err=>console.log('ERROR')}
                onFinish={() => {
                    setIsReady(true);
                }}
            />
        )
    }

    let content;

    if(newsId){

        const selectedNews = news.find(news => news.id === newsId);
        content = <NewsScreen
            news={selectedNews}
            goBack={()=>{
                setNewsId(null);
            }}
            removeNews={removeNews}
            onSave={updateNews}
        />
    } else{
        content = <MainScreen
            removeNews={removeNews}
            addNews={addNews}
            news={news}
            openNews={setNewsId}
        />;
    }

    return (
        <View>
            <NavBar title=""/>
            <Text style={styles.title}>Какой-то текст</Text>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    title:{
        fontFamily:'Circe'
    }
});
