/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 16:49:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 16:35:06
 * @Descripttion:
 */
// import { Provider } from 'react-redux'
import { Provider } from './mReactRedux'

import store from './store'
import Count from './Count'

export default () => {
    return (
        <Provider store={store}>
            <Count a='1' b='2' c='3'></Count>
        </Provider>
    )
}
