export interface ContractInterface {
    contractId:number
    categories: string[]
    challenegeId: UserInterface
    creatorId: UserInterface
    comment: []
    content: string
    contractCurrency: string
    contractValue: number
    contractStatus: string
    createdDateTime: Date
    expiryDateTime: Date
    vote: []
    dislikeCount: number
    likeCount: number
}

export interface UserInterface {
    displayName: string
    email: string
    metamaskKey: string
}