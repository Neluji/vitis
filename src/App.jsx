import React from 'react'
import NavBar from 'components/NavBar/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: ['G1', 'G2', 'G3']
    }
  }
  
  render() {
    return (
      <NavBar groups={this.state.groups} />
    )
  }
}

export default App;
