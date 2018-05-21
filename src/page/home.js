// @flow

import React, { Component } from 'react'

type Props = {
    event: () => void,
    meritList: any
}

export default class Home extends Component<Props> {
    componentWillMount () {
        this.props.event()
    }

    render () {
        const MeritList = this.props.meritList
        return <MeritList />
    }
}
