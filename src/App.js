// @flow

import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import configureStore from './redux/store/configureStore'
import HomePage from './page/home'
import MeritList from './components/MeritList'
import ReduxViewMeritsPresenter from './presenter/ReduxViewMeritsPresenter'
import ViewMerits from './useCase/viewMerits'

const store = configureStore()
const presenter = new ReduxViewMeritsPresenter(store)
const viewMerits = new ViewMerits()

const ConnectedMeritList = connect()()

export default (
    <Provider store={store}>
        <HomePage
            meritList={MeritList}
            event={() => viewMerits.execute(presenter)}
        />
    </Provider>
)
