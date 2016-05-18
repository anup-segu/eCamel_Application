var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');

var Search = React.createClass({
  getInitialState: function(){
    return({popular_items: []});
  },

  handlePopularItems: function(e){
    e.preventDefault();
    var input = e.target.elements[0].value
    if (input.length == 0){
      var url = 'http://ecamel.herokuapp.com/api/popular_items';
    } else {
      var url = 'http://ecamel.herokuapp.com/api/popular_items?keyword=' + input;
    }

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        debugger
        this.setState({popular_items: data});
      }.bind(this)
    })
  },

  render: function(){
    console.log(this.state.popular_items);
    return (
      <div>
        <form onSubmit={this.handlePopularItems}>
          <input placeholder='find Popular'/> 
          <input type='submit' />
        </form>
      </div>
    );
  }

});

module.exports = Search;