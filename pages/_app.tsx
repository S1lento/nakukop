import '../styles/globals.css'
import { StoreContext } from "storeon/react";
import { ChakraProvider } from "@chakra-ui/react"
import { store } from './store/store';

function MyApp({ Component, pageProps }) {
  return <StoreContext.Provider value={store}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </StoreContext.Provider>
}

export default MyApp
