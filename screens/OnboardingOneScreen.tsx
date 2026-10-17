
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ScreenProps } from '../App';
import { Button, C, LeafArt } from '../components/UI';

export default function OnboardingOneScreen({
  goTo,
}: ScreenProps) {
  return (
    <View style={s.page}>
      <View style={s.skip}>
        <Text
          onPress={() => goTo('Login')}
          style={s.skipText}
        >
          Pular
        </Text>
      </View>

      <LeafArt variant={0} />

      <Text style={s.title}>
        Fotografe sua planta
      </Text>

      <Text style={s.desc}>
        Tire uma foto da folha da sua planta com facilidade.
      </Text>

      <View style={s.dots}>
        <View style={s.active} />
        <View style={s.dot} />
        <View style={s.dot} />
      </View>

      <Button
        title="Próximo"
        onPress={() => goTo('Onboarding2')}
      />

      <Text
        style={s.skipBottom}
        onPress={() => goTo('Login')}
      >
        Pular
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: C.pale,
    padding: 26,
    justifyContent: 'center',
  },

  skip: {
    alignItems: 'flex-end',
    marginBottom: 18,
  },

  skipText: {
    color: C.muted,
    fontSize: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: C.text,
    textAlign: 'center',
    marginBottom: 9,
  },

  desc: {
    fontSize: 13,
    color: C.muted,
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 12,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginTop: 30,
    marginBottom: 28,
  },

  active: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: C.green,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#BCC7B8',
  },

  skipBottom: {
    textAlign: 'center',
    color: C.muted,
    fontSize: 12,
    marginTop: 16,
  },
});
