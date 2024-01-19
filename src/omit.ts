export const omit = <T extends Record<any, any>, K extends keyof T>(
    obj: T,
    keyToOmit: K
): object => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [keyToOmit]: _, ...withoutKey } = obj
    return withoutKey
}
