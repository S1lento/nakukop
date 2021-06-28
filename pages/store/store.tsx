import { createContext } from 'react'
import axios from "axios"
import { createStoreon, StoreonModule } from 'storeon'
import { customContext } from 'storeon/react'

import { Category, MappingData, Instance, State, Events } from './storeInterfaces'

const addToCartModule: StoreonModule<any, Events> = store => {
  store.on('@init', () => ({ cart: [] }))
  store.on('add', (state, value) => {
    console.log(state, value, 'problem here')
    return { cart: [...state.cart, value] }
  })
  store.on('delete', (state, value) => {
    console.log(state, value, 'in delete');
  })
}

const dataModule: StoreonModule<any, any> = store => {
  store.on('@init', () => {
    store.dispatch('fetch');
  })
  store.on('fetch', async (data, state) => {
    const products = axios.get('/api/products')
    const names = axios.get('/api/names')
    const response = await Promise.all([products, names]);
    store.dispatch('fetch/success', response)
  })
  store.on('fetch/success', (data, response) => {
    const [products, names] = response;
    const result = Object.entries(names.data).map((data: MappingData) => {
      const category: Category = { id: +data[0], name: data[1].G };
      console.log(category, 'category');

      category.products = products.data.Value.Goods.map(product => {
        if (product.G !== category.id || product.P === 0) {
          return null;
        }
        const mappedInstance: Instance = {
          id: product.T,
          // between 50 and 80 random value
          price: Math.ceil(product.C * 50 + Math.random() * (80 + 1 - 50)),
          groupId: product.G,
          amount: product.P,
          isDisabled: false
        }
        if (!data[1].B.hasOwnProperty(mappedInstance.id)) return null;
        mappedInstance.name = data[1].B[mappedInstance.id].N
        return mappedInstance;
      }).filter(Boolean)

      if (category.products.length === 0) {
        category.isDisabled = true;
      }
      return category;
    })

    data.data = result;
    return data;
  })
}




export const store = createStoreon<any, any>([dataModule, addToCartModule])
const StoreContext = createContext(store)

export const useStoreon = customContext(StoreContext)
