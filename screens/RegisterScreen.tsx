import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenProps } from '../App';
import { Button, C, Field, Header } from '../components/UI';
export default function RegisterScreen({ goTo }: ScreenProps) {
 return <ScrollView style={{flex:1,backgroundColor:C.pale}} contentContainerStyle={s.page}><Header title="Crie sua conta" onBack={() => goTo('Login')}/><Text style={s.intro}>Comece a cuidar melhor das suas plantas.</Text><View style={s.form}><Field label="Nome completo" placeholder="Seu nome"/><Field label="E-mail" placeholder="seu@email.com" keyboardType="email-address"/><Field label="Senha" placeholder="Digite sua senha" secureTextEntry icon="eye-outline"/><Field label="Confirmar senha" placeholder="Confirme sua senha" secureTextEntry icon="eye-outline"/><Text style={s.terms}>□  Li e aceito os Termos de Uso e a Política de Privacidade</Text><Button title="Criar conta" onPress={() => goTo('Login')} style={{marginTop:14}}/><Text style={s.back} onPress={() => goTo('Login')}>Voltar para o login</Text></View></ScrollView>;
}
const s = StyleSheet.create({page:{padding:26,paddingTop:35},intro:{fontSize:12,color:C.muted,marginTop:-16,marginBottom:28},form:{},terms:{fontSize:11,color:'#657368',lineHeight:18,marginTop:2},back:{textAlign:'center',marginTop:18,fontSize:12,color:C.muted}});
