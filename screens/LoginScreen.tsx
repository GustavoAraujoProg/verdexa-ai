
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ScreenProps } from '../App';
import { Brand, Button, C, Field } from '../components/UI';

export default function LoginScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      <View style={s.brand}>
        <Brand />
      </View>

      <Text style={s.welcome}>Bem-vindo de volta!</Text>

      <Text style={s.sub}>
        Faça login para continuar.
      </Text>

      <View style={s.form}>
        <Field
          label="E-mail"
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Field
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          icon="eye-outline"
        />

        <Text
          style={s.forgot}
          onPress={() => goTo('Recover')}
        >
          Esqueci minha senha
        </Text>

        <Button
          title="Entrar"
          onPress={() => goTo('Home')}
          style={{ marginTop: 18 }}
        />
      </View>

      <Text style={s.signup}>
        Não tem uma conta?{' '}
        <Text
          style={s.link}
          onPress={() => goTo('Register')}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: C.pale,
    paddingHorizontal: 28,
    paddingTop: 54,
  },

  brand: {
    marginBottom: 42,
  },

  welcome: {
    fontSize: 22,
    fontWeight: '600',
    color: C.text,
    marginBottom: 7,
  },

  sub: {
    fontSize: 13,
    color: C.muted,
  },

  form: {
    marginTop: 30,
  },

  forgot: {
    textAlign: 'right',
    fontSize: 11,
    color: C.green,
    marginTop: 1,
  },

  signup: {
    textAlign: 'center',
    color: C.muted,
    fontSize: 12,
    marginTop: 38,
  },

  link: {
    color: C.green,
    fontWeight: '600',
  },
});
