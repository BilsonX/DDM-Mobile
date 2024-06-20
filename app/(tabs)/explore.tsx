import React from 'react';
import { Image, StyleSheet, Platform, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/logo.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://wa.me/qr/5D2XL6JUTF74P1')}>
            <ThemedText style={styles.text}>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/7.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/luis-ros%C3%A1rio-752b09314/')}>
            <ThemedText style={styles.text}>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/8.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('mailto:luisfelipesouzaferreirarosario@gmail.com')}>
            <ThemedText style={styles.text}>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/BilsonX')}>
            <ThemedText style={styles.text}>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://br.pinterest.com/luisfelipesouzaferreirarosario/')}>
            <ThemedText style={styles.text}>Pinterest</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518991376172')}>
            <ThemedText style={styles.text}>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://www.instagram.com/bilson_x/')}>
            <ThemedText style={styles.text}>Instagram</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ajusta o modo de redimensionamento conforme necessário
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
  },
  titleContainer: {
      paddingHorizontal: 20,
      paddingVertical: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#444',
      backgroundColor: '#222',
      marginBottom: 16,
      borderRadius: 12,  
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20, // espaço adicional acima do conteúdo
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: '#222', // fundo cinza escuro
    borderRadius: 50, // bordas mais arredondadas
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
  },
  icon: {
    width: 36, // ícone um pouco menor
    height: 36,
    marginRight: 12, // mais espaço entre ícones
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF', // cor de texto branca
    marginLeft: 8, // espaço entre ícone e texto
  },
});
