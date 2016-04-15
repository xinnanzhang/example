'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { queryExample,addExample,deleteExample } from '../../actions/example_action';

class Home1 extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.addExample = this.addExample.bind(this);//构造函数里面绑定
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

  addExample(){
    const { dispatch } = this.props;
    dispatch(addExample({name:"zxn",age:"18"}));
  }
  deleteExample(id){
    const { dispatch } = this.props;
    dispatch(deleteExample(id));
  }

  showExample(){
    let exampleList = this.props.queryExample;
    if(exampleList.length > 0){
      let showList= exampleList.map(function(obj,i){
        return <div style={{backgroundColor:"#690",marginTop:"5"}} key={i} onClick={this.deleteExample.bind(this,i)}>姓名:{obj.name}-----年龄{obj.age}</div>
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
        欢迎来到登录界面{this.state.number}<a href="javascript:void(0);" onClick={this.handleTouchTap.bind(this)}>点击我</a>
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
