var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search');

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <div>Hello World</div>
        <Search />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
