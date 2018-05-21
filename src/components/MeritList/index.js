// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { PresentableMerits } from '../../boundary/viewMerits'

class MeritList extends Component<PresentableMerits> {
    render () {
        if (this.props.merits === undefined) return (<span />)

        return (
            <div className="App">
                <ul>
                    {
                        this.props.merits.map((merit) => {
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

export default connect(
    ({ merits }) => (merits)
)(MeritList)

