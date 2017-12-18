class Logger extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    componentWillMount() {
        console.log('componentWillMount is triggered')
    }
    componentDidMount(e) 
}