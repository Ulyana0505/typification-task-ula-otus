const orderStates = [
    'initial',
    'inWork',
    'buyingSupplies',
    'producing',
    'fullfilled',
] as const

type OrderState = (typeof orderStates)[number]

export const getUserOrderStates = (orderStates: OrderState[]): OrderState[] => {
    const filteredStates = [] as OrderState[]
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}
