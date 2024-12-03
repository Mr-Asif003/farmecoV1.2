import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/src/app/firebaseConfig";

export default function FarmerProductsScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stateFilter, setStateFilter] = useState("");
  const [pincodeFilter, setPincodeFilter] = useState("");

  // Fetch products from Firestore
  const fetchProducts = async () => {
    setLoading(true);
    try {
      let productsCollection = collection(db, "FarmerProducts");
      let q;

      if (stateFilter && pincodeFilter) {
        q = query(productsCollection, where("State", "==", stateFilter), where("pinCode", "==", pincodeFilter));
      } else if (stateFilter) {
        q = query(productsCollection, where("State", "==", stateFilter));
      } else if (pincodeFilter) {
        q = query(productsCollection, where("pinCode", "==", pincodeFilter));
      } else {
        q = productsCollection;
      }

      const querySnapshot = await getDocs(q);

      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      alert("Error fetching products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.cropImage }} style={styles.productImage} />
      <Text style={styles.productName}>{item.cropName}</Text>
      <Text style={styles.productDetails}>Price: ${item.Price}</Text>
      <Text style={styles.productDetails}>Quantity: {item.Quantity} kg</Text>
      <Text style={styles.productDetails}>State: {item.State}</Text>
      <Text style={styles.productDetails}>Pincode: {item.Pincode}</Text>
      <Text style={styles.productDetails}>
        Listed at: {new Date(item.listedAt.seconds * 1000).toLocaleDateString()}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Products</Text>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Filter by State"
          value={stateFilter}
          onChangeText={setStateFilter}
        />
        <TextInput
          style={styles.input}
          placeholder="Filter by Pincode"
          value={pincodeFilter}
          onChangeText={setPincodeFilter}
          keyboardType="numeric"
        />
        <Button title="Apply Filters" onPress={fetchProducts} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No products match the selected filters.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  filterContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 16,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDetails: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 32,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
