import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';

interface FormData {
  mobileNumber: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <Image
              resizeMode="cover"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/83afeb780dc441af807c431aa781a66c/1ab56648d11a2e67fc42e67c2a2a8ea1d50a8d1c02af034805db773f51471eb9?apiKey=83afeb780dc441af807c431aa781a66c&" }}
              style={styles.headerImage}
              accessible={true}
              accessibilityLabel="Farmeco logo"
            />
            <Text style={styles.headerText}>Farmeco</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.formTitle}>Create an account</Text>

            <View style={styles.inputContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/83afeb780dc441af807c431aa781a66c/70c1aea324cc5d56a74650a4c1503063ad0bccde01affe7cf89eedf10ef58ba6?apiKey=83afeb780dc441af807c431aa781a66c&" }}
                style={styles.inputIcon}
                accessible={true}
                accessibilityLabel="Mobile number icon"
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="rgba(196, 187, 184, 1)"
                value={formData.mobileNumber}
                onChangeText={(text) => setFormData({ ...formData, mobileNumber: text })}
                accessible={true}
                accessibilityLabel="Enter your mobile number"
                testID="mobile-input"
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/83afeb780dc441af807c431aa781a66c/73a9a94128b62a278e7c888c6293c1bc590582956db78c7374cdf3abb8efd54e?apiKey=83afeb780dc441af807c431aa781a66c&" }}
                style={styles.inputIcon}
                accessible={true}
                accessibilityLabel="Password icon"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(196, 187, 184, 1)"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry
                accessible={true}
                accessibilityLabel="Enter your password"
                testID="password-input"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/83afeb780dc441af807c431aa781a66c/73a9a94128b62a278e7c888c6293c1bc590582956db78c7374cdf3abb8efd54e?apiKey=83afeb780dc441af807c431aa781a66c&" }}
                style={styles.inputIcon}
                accessible={true}
                accessibilityLabel="Confirm password icon"
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="rgba(196, 187, 184, 1)"
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                secureTextEntry
                accessible={true}
                accessibilityLabel="Confirm your password"
                testID="confirm-password-input"
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              accessible={true}
              accessibilityLabel="Continue with sign up"
              accessibilityRole="button"
              testID="submit-button"
            >
              <Text style={styles.submitButtonText}>Continue</Text>
            </TouchableOpacity>

            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/83afeb780dc441af807c431aa781a66c/ea8d7a004687a3294bb59e0bcb07a7fbe4fb175d46aa8ab54459d79806ad973a?apiKey=83afeb780dc441af807c431aa781a66c&" }}
              style={styles.footerImage}
              accessible={true}
              accessibilityLabel="Decorative footer image"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  screenContainer: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: "100%",
    alignItems: "stretch",
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 20,
  },
  headerImage: {
    width: 293,
    aspectRatio: 0.96,
    maxWidth: "100%",
  },
  headerText: {
    fontFamily: "Aoboshi One",
    fontSize: 32,
    color: "rgba(0, 0, 0, 1)",
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: 30,
    paddingTop: 68,
    paddingBottom: 35,
    paddingHorizontal: 26,
    alignItems: "center",
  },
  formTitle: {
    color: "rgba(247, 241, 246, 1)",
    fontSize: 32,
    marginBottom: 20,
    fontFamily: "Archivo Black",
  },
  inputContainer: {
    borderRadius: 20,
    borderColor: "rgba(40, 172, 96, 0.8)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    width: "100%",
    maxWidth: 322,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: 'transparent',
  },
  inputIcon: {
    width: 27,
    aspectRatio: 1,
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "rgba(196, 187, 184, 1)",
    fontFamily: "Archivo Black",
  },
  submitButton: {
    borderRadius: 100,
    backgroundColor: 'rgba(40, 172, 96, 0.8)',
    marginTop: 49,
    width: 161,
    paddingVertical: 18,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Archivo Black",
  },
  footerImage: {
    width: 52,
    aspectRatio: 1.45,
    marginTop: 157,
  },
});

export default SignUpScreen;