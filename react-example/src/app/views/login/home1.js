'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { addExample,queryExample } from '../../actions/example_action';

class Home1 extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.reduxClick = this.reduxClick.bind(this);
    this.addExample = this.addExample.bind(this);
    this.showExample = this.showExample.bind(this);
    this.state = {
      number: 0,
    };
  }
  handleTouchTap(){
    this.setState({number: (this.state.number+1)});
  }

  componentWillMount(){
    const { dispatch } = this.props;
     dispatch(queryExample());
  }

  reduxClick(){

  }

  addExample(){
    const { dispatch } = this.props;
     dispatch(addExample({name:"zxn",age:"18"}));
    //  dispatch(queryExample());
  }

  showExample(){
    let exampleList = this.props.queryExample;
    if(exampleList.length > 0){
      let showList= exampleList.map(function(obj,i){
        return <div>姓名:{obj.name}-----年龄{obj.age}</div>
      }.bind(this));
      return(
        <div>
          {showList}
        </div>
      )
    }

  }

  render() {
    return(
      <div>
        欢迎来到登录界面{this.state.number}<a href="javascript:void(0);" onClick={this.handleTouchTap}>点击我</a>--------<a href="javasript:void(0);" onClick={this.reduxClick}>redux点击</a>
        <div>
          <a href="javasript:void(0);" onClick={this.addExample}>添加</a>
        </div>
        <div>
          {this.showExample()}
        </div>
      </div>
    )
  }
}

function mapDepartIndexState(state) {
  const { addExample,queryExample } = state.exampleReducer

  return {
    addExample:addExample,
    queryExample:queryExample
  }
}
export default connect(mapDepartIndexState)(Home1)

// export default Home1;
