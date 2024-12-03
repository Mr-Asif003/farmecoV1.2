import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration

export default function Language() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      setCurrentLanguage(language);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.description}>{t('description')}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="English"
          onPress={() => changeLanguage('en')}
          color={currentLanguage === 'en' ? 'blue' : 'gray'}
        />
        <Button
          title="हिंदी"
          onPress={() => changeLanguage('hi')}
          color={currentLanguage === 'hi' ? 'blue' : 'gray'}
        />
        <Button
          title="मराठी"
          onPress={() => changeLanguage('mr')}
          color={currentLanguage === 'mr' ? 'blue' : 'gray'}
        />
        <Button
          title="తెలుగు"
          onPress={() => changeLanguage('te')}
          color={currentLanguage === 'te' ? 'blue' : 'gray'}
        />
        <Button
          title="தமிழ்"
          onPress={() => changeLanguage('ta')}
          color={currentLanguage === 'ta' ? 'blue' : 'gray'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
});
