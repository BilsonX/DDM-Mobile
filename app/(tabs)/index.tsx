import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#333', dark: '#111' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.jpg')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.sectionContainer}>
        <View style={styles.circularImageContainer}>
          <Image
            source={require('@/assets/images/foto.jpeg')}
            style={styles.circularImage}
          />
        </View>
        <ThemedText type="title" style={styles.titleText}>
          Bem-vindo ao MikotoPlace's!
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Sobre o app:
        </ThemedText>
        <ThemedText style={styles.description}>
          MikotoPlace's oferece a solução perfeita para centralizar o gerenciamento de suas redes sociais.
          Conecte-se e sincronize suas contas de várias plataformas, como Facebook, Twitter, Instagram, LinkedIn e outras,
          simplificando a interação e visualização de suas redes em um só lugar. Simplifique sua presença online com MikotoPlace's.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Sobre mim:
        </ThemedText>
        <ThemedText style={styles.description}>
          Olá! Eu sou Luis Rosário e estou desenvolvendo uma nova plataforma de Redes Sociais. Junte-se a nós para uma experiência online mais conectada e significativa!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    backgroundColor: '#222',
    marginBottom: 16,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 18,
    color: '#CCCCCC',
    lineHeight: 26,
    textAlign: 'justify',
  },
  circularImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // half of width and height to make it circular
  },
});
