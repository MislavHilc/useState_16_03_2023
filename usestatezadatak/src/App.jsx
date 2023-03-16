import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John'
    };
  }

  handleMouseOver = () => {
    this.setState({ name: 'Doe' });
  };

  handleMouseOut = () => {
    this.setState({ name: 'John' });
  };

  render() {
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.state.name}
      </div>
    );
  }
}

export default App;
