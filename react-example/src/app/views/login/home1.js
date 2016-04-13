'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { getExample } from '../../actions/example_action';

class Home1 extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.reduxClick = this.reduxClick.bind(this);
    this.state = {
      number: 0,
    };
  }
  handleTouchTap(){
    this.setState({number: (this.state.number+1)});
  }

  componentWillMount(){

  }

  reduxClick(){
    const { dispatch } = this.props;
     dispatch(getExample());
  }

  render() {
    var exampleText = this.props.exampleText;
    console.log(exampleText);
    return(
      <div>欢迎来到登录界面{this.state.number}<a href="javascript:void(0);" onClick={this.handleTouchTap}>点击我</a>--------<a href="javasript:void(0);" onClick={this.reduxClick}>redux点击</a></div>
    )
  }
}

function mapDepartIndexState(state) {
  const { exampleText } = state.exampleReducer

  return {
    exampleText:exampleText
  }
}
export default connect(mapDepartIndexState)(Home1)

// export default Home1;
