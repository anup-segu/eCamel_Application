var React = require('react');
var ReactDOM = require('react-dom');
var PopularItems = require('./popular_items');

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <div>Hello World</div>
        <PopularItems />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
