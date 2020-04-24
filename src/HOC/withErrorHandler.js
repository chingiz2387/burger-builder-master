import React, {Component, Fragment} from 'react';
import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {    
    constructor(props) {
      super(props);
      
      this.state = {
        error: null
      };
      
      this.interceptorId = axios.interceptors.response.use(res => res, () => {
        this.setState({error: true});
      });
    }
    
    componentWillUnmount() {
      axios.interceptors.response.eject(this.interceptorId);
    }
    
    errorDismissed = () => {
      this.setState({error: null});
      this.props.history.push('/');
    };
    
    render() {
      return (
        <Fragment>
          <Modal
            closed={this.errorDismissed}
            show={this.state.error}
          >
            Network Error!!!
          </Modal>
          <WrappedComponent
            {...this.props}
          />
        </Fragment>
      )
    }
    
  }
};

export default withErrorHandler;
