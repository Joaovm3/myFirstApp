import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'; //Linking é o que vai mandar msg no wpp

import * as MailComposer from 'expo-mail-composer'; //importação para enviar o email


import { useNavigation, useRoute } from '@react-navigation/native'; //import para navegar entre as páginas

import LogoImg from '../../assets/logo.png'; //Logo Be The Hero

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();

    const route = useRoute();    

    const incident = route.params.incident;

    const message = `Olá, ${incident.name} estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;


    function navigationBack () { //funcao que faz o botão de VOLTAR
        navigation.goBack()
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhastapp() {
         Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)   
    }

    return (
        <View style={styles.container} >
             <View style={styles.header}>
                <Image source={LogoImg} />

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident} >
            <Text style={styles.incidentProperty, { martinTop: 0 }}> ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf} </Text>

                        <Text style={styles.incidentProperty}> CASO: </Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}> VALOR: </Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL'
                             }).format(incident.value)}
                        </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhastapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>    
    );
}