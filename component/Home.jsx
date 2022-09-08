import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
// import Share from "react-native-share";

function Home() {
  let [quote, setQuote] = React.useState("");

  const getQuote = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "675f0b4b63msh2105eeb9b393eccp140c75jsn8b338c969cec",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setQuote(response.content);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setQuote("Oops, something went wrong.");
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  // const share = async (quote) => {
  //   try {
  //     await Share.open(quote);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const shareToEmail = async () => {
  //   const shareOptions = {
  //     title: "Share Quote",
  //     email: "email@example.com",
  //     social: Share.Social.EMAIL,
  //     message: quote,
  //   };

  //   try {
  //     const ShareResponse = await Share.shareSingle(shareOptions);
  //     console.log("Response =>", ShareResponse);
  //     setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log("Error =>", error);
  //     setResult("error: ".concat(getErrorString(error)));
  //   }
  // };

  // const shareToTwitter = async () => {
  //   const shareOptions = {
  //     title: "Share Quote",
  //     email: "email@example.com",
  //     social: Share.Social.EMAIL,
  //     message: quote,
  //   };

  //   try {
  //     const ShareResponse = await Share.shareSingle(shareOptions);
  //     console.log("Response =>", ShareResponse);
  //     setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log("Error =>", error);
  //     setResult("error: ".concat(getErrorString(error)));
  //   }
  // };

  // const shareToEmail = async () => {
  //   const shareOptions = {
  //     title: "Share Quote",
  //     email: "email@example.com",
  //     social: Share.Social.EMAIL,
  //     message: quote,
  //   };
  
  //   try {
  //     const ShareResponse = await Share.shareSingle(shareOptions);
  //     console.log("Response =>", ShareResponse);
  //     setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log("Error =>", error);
  //     setResult("error: ".concat(getErrorString(error)));
  //   }
  // };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.text}>
        <Text style={styles.headerText}>Welcome to Quote app</Text>
      </View>
      <View Styles={styles.textQuote}>
        <Text>{quote}</Text>
      </View>

      <View style={styles.social}>
        <Feather
          name="mail"
          size={30}
          color="#808000"
          style={{ marginRight: 20 }}
          // onPress={() => {shareToEmail}}
        />
        <Feather
          name="twitter"
          size={30}
          color="#808000"
          style={{ marginRight: 20 }}
          // onPress={() => {shareToTwitter}}
        />
        <Feather
          name="linkedin"
          size={30}
          color="#808000"
          style={{ marginRight: 20 }}
          // onPress={() => {shareToWhatsapp}}
        />
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "80%",
    margin: 30,
  },
  headerText: {
    color: "#808000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 80,
  },
  text: {
    marginTop: 30,
  },
  textQuote: {
    width: "90%",
    marginTop: 50,
  },
  social: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
