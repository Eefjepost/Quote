import {SafeAreaView, StyleSheet} from "react-native";
import Home from './component/Home';

export default function App() {
  return (
  <SafeAreaView style={styles.container} >
      <Home />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1 
  },
});
