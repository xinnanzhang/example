'use strict';

import React from 'react';

class Home1 extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      number: 0,
    };
  }
  handleTouchTap(){
    this.setState({number: (this.state.number+1)});
  }

  componentWillMount(){
    alert();
  }

  render() {
    return(
      <div>欢迎来到登录界面{this.state.number}<a href="javascript:void(0);" onClick={this.handleTouchTap}>点击我</a></div>
    )
  }
}

export default Home1;
