import { ChakraProvider } from "@chakra-ui/react"

import styles from '../styles/Home.module.css'

export default function Home() {

  const test = (num: number): void => {
      console.log('zalupa');
  }

  return (
    <StoreContext.Provider value={store}>
    <ChakraProvider>
      <div className={styles.container}>
       123
      </div>
    </ChakraProvider>
    </StoreContext.Provider>
  )
}
