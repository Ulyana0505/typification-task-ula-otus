const orderStates = [
    'initial',
    'inWork',
    'buyingSupplies',
    'producing',
    'fullfilled',
] as const

type OrderState = (typeof orderStates)[number]

type FilteredState = 'buyingSupplies' | 'producing'

export const getUserOrderStates = (
    orderStates: OrderState[]
): Array<Exclude<OrderState, FilteredState>> => {
    const filteredStates = [] as Array<Exclude<OrderState, FilteredState>>
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}
