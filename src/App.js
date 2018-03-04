// @flow

import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import './App.css'
import { default as ViewMerits, ViewMeritsPresenter } from './use_case/view_merits'
import configureStore from './redux/store/configureStore'

type Props = {
    event: () => void,
    merits: any
}

class App extends Component<Props> {
    componentWillMount () {
        this.props.event()
    }

    render () {
        if (this.props.merits.merits === undefined) return (<span />)
        return (
            <div className="App">
                <ul>
                    {
                        this.props.merits.merits.map((merit) => {
                            return (<li>
                                {merit.comment}
                                {merit.date}
                                {merit.from}
                                {merit.to}
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

class Binding implements ViewMeritsPresenter {
    store;
    viewMerits: ViewMerits;

    constructor (store) {
        this.store = store
        this.viewMerits = new ViewMerits()
    }

    event () {
        this.viewMerits.execute(this)
    }

    present (merits) {
        this.store.dispatch({ type: 'MERITS', ...merits })
    }
}

const store = configureStore()
const ConnectedApp = connect(state => state)(App)
const eventBinder = new Binding(store)

export default (
    <Provider store={store}>
        <ConnectedApp event={eventBinder.event.bind(eventBinder)} />
    </Provider>
)
