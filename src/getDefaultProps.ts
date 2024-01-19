export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): Partial<T> | undefined => {
    return component.defaultProps
}
