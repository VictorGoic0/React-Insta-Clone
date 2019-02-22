import React from 'react';

const authenticate = FirstComponent => SecondComponent => {
  return class extends React.Component {
    constructor() {
      super()
    }
    render() {
      return <FirstComponent />
    }
  }
}

export default authenticate;
