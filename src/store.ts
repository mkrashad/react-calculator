import {createTypedHooks,  createStore } from "easy-peasy"
import storeModel, { StoreModel } from "./model/StoreModel"

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const store = createStore(storeModel)

export default store;