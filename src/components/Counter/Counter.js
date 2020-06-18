import React from 'react';
import { Button } from '../Button';

class Counter extends React.Component {
  state = {
    isShown: true,
    counter: 1,
  }

  add = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))

    this.#showState();
  }

  hide = () => {
    this.setState({ isShown: false });
  }

  #showState = () => {
    console.log(this.state);
  }

  render() {
    return this.state.isShown ? (
      <div>
        <span>Counter = {this.state.counter}</span>
        <Button
          handleClick={this.add}
          title={'Add'}
          color={'success'}
        />
        <Button
          handleClick={this.hide}
          title={'X'}
          color={'danger'}
        />
        <hr />
        </div>
      ) : <></>
  }
}

export { Counter };
