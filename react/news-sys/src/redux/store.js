/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-31 17:20:30
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 12:02:27
 * @Descripttion: 
 */
import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'

const pReducer = persistReducer({
    key: 'root',
    storage,
    blacklist: 'loadingReducer'
}, reducer)
const store = createStore(pReducer)
const persistor = persistStore(store)


export {
    store,
    persistor
}