import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function News ({news,onRemove,onOpen}) {

        return (
            <TouchableOpacity
                onPress={()=>onOpen(news.id)}
                activeOpacity={0.5}
                onLongPress={()=>onRemove(news.id)}
            >
                <View style={styles.news}>
                    <Text>{news.title}</Text>
                </View>
            </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    news: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 5,
    }
});

