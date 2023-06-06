import React, {Component} from 'react';

class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName : ''
        }
    }
    handleInput(value){
        this.setState({studentName: value})
    }
    render() {
        return (
            <div>
                {console.log('render')}
                <h1>React Lifecycle</h1>
                <h1>hello {this.state.studentName}</h1>
                <input value={this.props.pageName}
                    onChange={(e) => this.handleInput(e.target.value)}
                />
            </div>
        );
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Component WILL RECIEVE PROPS!");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextState);
        if(nextState.studentName === 'abc'){
            return false;
        }
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

export default ComponentLifeCycle;
