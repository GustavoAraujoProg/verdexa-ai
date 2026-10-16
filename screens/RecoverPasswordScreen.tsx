import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenProps } from '../App';
import { Button, C, Field, Header } from '../components/UI';
export default function RecoverPasswordScreen({ goTo }: ScreenProps) {
 return <View style={s.page}><Header title="Recuperar senha" onBack={() => goTo('Login')}/><Text style={s.desc}>Digite seu e-mail e enviaremos um link para redefinir sua senha.</Text><View style={s.form}><Field label="E-mail" placeholder="seu@email.com" keyboardType="email-address"/><Button title="Enviar link de recuperação" onPress={() => goTo('Login')} style={{marginTop:10}}/><Text style={s.back} onPress={() => goTo('Login')}>Voltar para o login</Text></View></View>;
}
const s = StyleSheet.create({page:{flex:1,backgroundColor:C.pale,padding:26,paddingTop:34},desc:{fontSize:13,color:C.muted,lineHeight:21,marginTop:0},form:{marginTop:26},back:{textAlign:'center',fontSize:12,color:C.muted,marginTop:18}});
