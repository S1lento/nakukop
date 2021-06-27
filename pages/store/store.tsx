// store.jsx
import { createContext } from 'react' // or preact
import axios from "axios"
import { createStoreon, StoreonModule } from 'storeon'
import { customContext } from 'storeon/react' // or storeon/preact

interface State {
  counter: number
}

// Events declaration: map of event names to type of event data
interface Events {

}

const dataModule: StoreonModule<any, any> = store => {
  store.on('@init', () => ({ data: [] }))
  store.on('fetch', async (data, state) => {
    const products = axios.get('/api/products')
    const names = axios.get('/api/names')
    const response = await Promise.all([products, names]);
    store.dispatch('fetch/success', response)
  })
  store.on('fetch/success', (data, response) => {
    const [products, names] = response;

    const result = Object.entries(names.data).map((data) => {
      const category = { id: +data[0], name: data[1].G };
      category.products = products.data.Value.Goods.map(product => {
        if (product.G !== category.id || product.P === 0) {
          return null;
        }
        const mappedInstance = {
          id: product.T,
          price: product.C,
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
    // it's a hack because documentation can't help with something harder, then counter or hello world
    data.data = result;
    return data;
  })
}




export const store = createStoreon<any, any>([dataModule])
const StoreContext = createContext(store)

// useStoreon will automatically recognize your storeon store and event types
export const useStoreon = customContext(StoreContext)
