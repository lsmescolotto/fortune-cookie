import React, { useState } from 'react';
import {
  Image,
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';



function App(): React.JSX.Element {
  const quotes = [
    "When you have a dream, you've got to grab it and never let go.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you're the pilot.",
    "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
  ]
  const [openCookie, setOpenCookie] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const handleOpenAndCloseCookie = () => {
    setOpenCookie((state) => !state)
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <SafeAreaView style={style.container}>
      {openCookie ?
        <Image style={style.img} source={require(`./images/opened-fortune-cookie.jpg`)}/> : 
        <Image style={style.img} source={require(`./images/closed-fortune-cookie.jpg`)}/> }
      {openCookie &&
        <Text style={style.quote}>{currentQuote}</Text>
      }
      <TouchableOpacity style={style.button} onPress={handleOpenAndCloseCookie} >
        <Text style={style.buttonText}>Read your fortune</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7B2B7",
    gap: 16
  },
  quote: {
    maxWidth: "70%",
    textAlign: "center"
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 10
  },
  button: {
    width: 175,
    height: 50,
    backgroundColor: "#F7717D",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 16
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16
  }
})

export default App;

