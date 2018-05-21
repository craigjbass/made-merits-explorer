// @flow

export type PresentableMerit = {
    date: string,
    comment: string,
    from: string,
    to: string
}

export type PresentableMerits = {
    merits: PresentableMerit[]
}

export interface ViewMeritsPresenter {
    present(merits: PresentableMerits): void;
}

export interface ViewMeritsUseCase {
    execute(presenter: ViewMeritsPresenter): void;
}
