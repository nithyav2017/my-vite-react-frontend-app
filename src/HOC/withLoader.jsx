const withLoader = (WrappedComponent) => {
    return function IsLoadingComponent({isLoading, ...props}) {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return <WrappedComponent {...props} />;
    }
}
export default withLoader