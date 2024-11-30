import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { doc, updateDoc } from "firebase/firestore";
import { auth ,db } from "../../firebaseConfig";
import index from "../../(main)/farmer/(tabs)";

export default function RoleSelectionScreen() {
    const router=useRouter()
  const selectRole = async (role) => {
    const user = auth.currentUser;

    try {
      await updateDoc(doc(db, "users", user.uid), {
        role,
      });

      switch (role) {
        case "Farmer":
            router.push("../../(main)/farmer/(tabs)");
          break;
        case "Consumer":
            router.push("../../(main)/consumer/ConsumerIndex");
          break;
        case "Admin":
            router.push("../../(main)/admin/AdminIndex");
          break;
      }
    } catch (error) {
      alert("Error selecting role: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Button title="Farmer" onPress={() => selectRole("Farmer")} />
      <Button title="Consumer" onPress={() => selectRole("Consumer")} />
      <Button title="Admin" onPress={() => selectRole("Admin")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});