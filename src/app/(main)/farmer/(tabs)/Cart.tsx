import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const TypeSelectionScreen = () => {
  const [selectedType, setSelectedType] = useState(null);

  const types = [
    { id: 1, name: 'Type 1' },
    { id: 2, name: 'Type 2' },
    { id: 3, name: 'Type 3' },
  ];

  return (
    <View style={styles.container}>
      {types.map((type) => (
        <TouchableOpacity
          key={type.id}
          style={styles.option}
          onPress={() => setSelectedType(type.id)}
        >
          <BlurView
            intensity={selectedType === type.id ? 50 : 30}
            tint={selectedType === type.id ? 'light' : 'dark'}
            style={styles.blurView}
          >
            <Text style={styles.optionText}>
              {type.name} {selectedType === type.id ? '(Selected)' : ''}
            </Text>
          </BlurView>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    width: '80%',
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TypeSelectionScreen;
