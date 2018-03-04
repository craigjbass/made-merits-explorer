// @flow

type PresentableMerit = {
    date: string,
    comment: string,
    from: string,
    to: string
}
type PresentableMerits = {
    merits: PresentableMerit[]
}

export interface ViewMeritsPresenter {
    present(merits: PresentableMerits): void;
}

interface ViewMeritsUseCase {
    execute(presenter: ViewMeritsPresenter): void;
}

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
