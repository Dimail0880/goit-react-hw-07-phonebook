const pushError = (message) => {
  this.setState({
    isError: true,
    errorMessage: `${message}`,
  });
  setTimeout(() => {
    this.setState({ isError: false });
  }, 2500);
};
export default pushError;
