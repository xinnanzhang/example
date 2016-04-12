'use strict';

var React = require('react');

var Home1 = React.createClass({
  componentWillMount: function() {
    alert();
  },
  render: function() {
	  return <div>欢迎来到登录界面999</div>;
  }
});

module.exports = Home1;
