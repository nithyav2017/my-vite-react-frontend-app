class ClassComponent extends React.Component {
constructor(props) {
    super(props);
    this.state = {data: null, loading: true};
}

componentDidMount() {
    fectch('http://')
    .then(response => response.json())
    .then(data => this.setState({data: data, loading: false}))
    .catch(error => console.error('Error fetching data:', error));

}

render(){
    const {data, loading} = this.state;
    if(loading){
        return <div>Loading...</div>
    }

    return <div>Data: {JSON.stringify(data)}</div>
}

}