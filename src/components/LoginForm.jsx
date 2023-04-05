import React from 'react';
import {Text , Button, TextInput, View} from 'react-native'

export default function LoginForm () {

    return (
        <View>
            <TextInput placeholder='Email'></TextInput>
            <TextInput placeholder='Contraseña '></TextInput>
            <Button title='Enviar' onPress={()=> console.log("Enviado")}></Button>
        </View>
    )
}