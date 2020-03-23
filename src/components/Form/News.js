import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class Form extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.news}>
               <Text>{ this.props.news.title }</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
   news:{
        flexDirection:'row',
       alignItems:'center',
       padding:15,
       borderWidth:1,
       borderColor:'#eee',
       borderRadius:5,
       marginBottom:5
   }
});

