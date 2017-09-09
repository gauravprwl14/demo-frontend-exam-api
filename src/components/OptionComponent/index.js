import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionItem from './optionItem';

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localOptionArr: this.props.optionArr,
    }
  }



  handleClick(e, clickOptionIndex) {
    // this.state.localOptionArr[clickOptionIndex].selectedItem = false;
    const optionArr = this.state.localOptionArr;
    optionArr[clickOptionIndex] = !optionArr[clickOptionIndex].selectedItem;
    // optionArr[clickOptionIndex] = optionArr[]
    this.setState({
      localOptionArr: [...optionArr]
    }, () => {
      this.props.onItemClick(this.state.localOptionArr);
    });

  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.title
          }
        </div>
        {
          this.props.optionArr & this.props.optionArr.length
          ?
          <div> Sorry NO list avaliable </div>
          :
          this.state.localOptionArr.map((optionObj, index) => <OptionItem
              key={index}
              onItemClick={(e) => this.handleClick(e, index)}
              itemLabel={optionObj.label}
              id={this.props.id}
              itemSelected={optionObj.itemSelected}
            />
          )

        }

      </div>
    );
  }
}

OptionList.propTypes = {
  title: PropTypes.string.isRequired,
  optionArr: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default OptionList
