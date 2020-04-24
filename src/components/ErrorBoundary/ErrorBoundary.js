import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorInfo: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidCatch(error) {
        this.setState({hasError: true, errorInfo: error.message});
    }


    render() {
        if (this.state.hasError) {
            return <div>Something wrong happened</div>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
