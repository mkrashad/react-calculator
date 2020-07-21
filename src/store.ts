import storeModel from "./model/storeModel"
import { createStore } from "easy-peasy"

const store = createStore(storeModel)

export default store;