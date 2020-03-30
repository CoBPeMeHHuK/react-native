import React from 'react';
import {View, StyleSheet,Text, ScrollView,Image} from 'react-native'
import Form from "../components/Form";
import News from "../components/Form/News";



export const MainScreen = ({removeNews,addNews,news,openNews})=> {

    let content = <ScrollView>
        { news.map(news=> <News onOpen={openNews} onRemove={removeNews} news={news} key={news.id} />) }
    </ScrollView>;
    if(news.length === 0){
        content = <View style={styles.imgWrap}>
            <Image style={styles.image}
            source={require('../../assets/no-items.png') }
            />
        </View>
    }
    return (
          <View>
              <Form onSubmit={addNews}/>
              {content}
          </View>
        );
};

const styles = StyleSheet.create({
        imgWrap:{
            height:300,
            justifyContent:'center',
            alignItems:'center',
            padding:30
        },
    image:{
            width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
});

