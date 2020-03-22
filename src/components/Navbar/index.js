import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class NavBar extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3949ab',
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center',
        height:70,
        paddingBottom:7

    },
    title:{
        color:'#fff',
        fontSize:20
    }
});

