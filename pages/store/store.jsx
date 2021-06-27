// store.jsx
import { createContext } from 'react' // or preact

import { createStoreon, StoreonModule } from 'storeon'
import { customContext } from 'storeon/react' // or storeon/preact



const StoreContext = createContext(store)

// useStoreon will automatically recognize your storeon store and event types
export const useStoreon = customContext(CustomContext)
