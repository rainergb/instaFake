import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function List(props){

    function carregaIcone(likeada){
        return likeada ? require('../img/heart_on.png') :
        require('../img/heart_off.png')
    }
    function mostraLikes (likers){
        if(likers === 0){
            return;
        }
        return(
            <Text style={styles.likes}> {likers} {likers > 1 ? 'Curtidas' : 'Curtida'}</Text>
        );
    }

    return(
        <View >
            <View style={styles.viewPerfil}>
                <Image 
                source={{uri: props.data.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUser}>
                    {props.data.nome}
                </Text>
            </View>
            <Image
                source={{uri: props.data.imgPublicacao}}
                style={styles.publicacao}
                resizeMode='cover'
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={carregaIcone(props.data.likeada)}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../img/chat.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>
            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>

        </View>
     );
}

const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUser: {
        color: '#fff',
        fontSize: 21, 
        marginLeft: 10
    },
    publicacao: {
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 10
    },
    icon: {
        marginRight: 15,
        height: 27,
        width: 27
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#fff',
        fontSize: 18
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 11
    },
    descRodape: {
        marginLeft: 11,
        fontSize: 15,
        color: '#fff',
        marginBottom: 20
    }

});