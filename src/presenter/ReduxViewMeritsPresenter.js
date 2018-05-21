// @flow

import { ViewMeritsPresenter } from '../boundary/viewMerits'
import type { PresentableMerits } from '../boundary/viewMerits'

export default class ReduxViewMeritsPresenter implements ViewMeritsPresenter {
    store: any;

    constructor (store: any) {
        this.store = store
    }

    present (merits: PresentableMerits) {
        this.store.dispatch({ type: 'MERITS', ...merits })
    }
}
