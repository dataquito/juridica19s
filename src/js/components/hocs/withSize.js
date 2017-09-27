import React from 'react';
import _debounce from 'lodash.debounce';
export default function withSize(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width: 0
      };
      this.handleWidthChange = _debounce(this._handleWidthChange.bind(this), 300);
    }

    componentDidMount() {
      const node = this.node;
      this.setState((prevState, a) => {
        return { width: node.offsetWidth };
      }, window.addEventListener('resize', this.handleWidthChange , true));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWidthChange);
    }

    _handleWidthChange(width) {
      const node = this.node;
      this.setState({ width: node.offsetWidth });
    }

    render() {
      return (
        <div ref={node => {this.node = node}} className={this.props.className}>
          <WrappedComponent {...this.props} width={this.state.width}/>
        </div>
      );
    }
  };
}

