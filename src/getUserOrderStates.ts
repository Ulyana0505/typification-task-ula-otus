const orderStates = [
    'initial',
    'inWork',
    'buyingSupplies',
    'producing',
    'fullfilled',
] as const

type OrderState = (typeof orderStates)[number]

export const getUserOrderStates = (orderStates: OrderState[]): string[] => {
    const filteredStates = [] as string[]
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}
