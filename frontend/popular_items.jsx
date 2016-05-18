var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');

var PopularItems = React.createClass({


  handleEnterSubmit: function(e){
    if (e.nativeEvent.keyCode != 13) return;
    $.ajax({
      url: 'http://ecamel.herokuapp.com/api/popular_items?keyword=' + e.currentTarget.value,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        debugger
      }
    })
  },

  handleButtonSubmit: function(){

  },

  render: function(){
    return (
      <input placeholder='find Popular' onKeyPress={this.handleEnterSubmit} />
    );
  }

});

module.exports = PopularItems;