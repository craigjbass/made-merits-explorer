// @flow

import { ViewMeritsPresenter, ViewMeritsUseCase } from '../boundary/viewMerits'

export default class ViewMerits implements ViewMeritsUseCase {
    execute (presenter: ViewMeritsPresenter) {
        presenter.present(
            {
                merits: [
                    {
                        date: '2017-01-01',
                        comment: 'Excellent cake',
                        from: '@craigjbass',
                        to: '@seb'
                    },
                    {
                        date: '2017-01-01',
                        comment: 'Excellent cake',
                        from: '@craigjbass',
                        to: '@seb'
                    }
                ]
            }
        )
    }
}
