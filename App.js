import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavBar from './src/components/Navbar';
import Form from './src/components/Form';
import News from './src/components/Form/News';

export default function App() {

    const [news, setNews] = useState([]);

    const addNews = (title) => {
        setNews(prev => [...prev,
            {
                id: new Date().toString()+Math.random(),
                title
            }])
    };


    return (
        <View>
            <NavBar title="This is NavBar!!!"/>
            <View style={styles.container}>
                <Form onSubmit={addNews}/>
                <View>
                    { news.map(news=> <News news={news} key={news.id} />) }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20
    },
});
