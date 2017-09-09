import React, { Component } from 'react';
import OptionList from '../OptionComponent/index';
import OptionFakeData from '../../service/fakeData/optionList';
//styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: OptionFakeData.optionList,
    }

  }
  handleOptionClick(updatedData) {
    this.setState({
      data: updatedData
    });
    console.log('hi.. some one clicked', updatedData);
  }
  render() {
    return (
      <div className="App">
        <OptionList
          title='choose any option'
          optionArr={this.state.data}
          onItemClick={(data) => this.handleOptionClick(data)}
        />
      </div>
    );
  }
}

export default App;
