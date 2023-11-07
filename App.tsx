import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import AppBar from "./src/compenents/AppBar";
import Content from "./src/compenents/Content";
import { QueryClient } from "react-query";
import LottieView from 'lottie-react-native';

export default function App() {

  const client = new QueryClient();

  return (
    <NativeBaseProvider>
      <AppBar />
      <Box
        padding={"2%"}
      >
        {/* <LottieView
          source={"https://assets-v2.lottiefiles.com/a/7e8213a4-1182-11ee-a96f-cb8fa403e028/WYpWcexPuU.json"}
          autoPlay loop /> */}

        <Text mb={2} textAlign={"justify"}>
          Silahkan cari hero kalian, dan lihat apa role serta kemampuan spesialis dari setiap Hero!
        </Text>
        <Content />
      </Box>
    </NativeBaseProvider>
  );
}