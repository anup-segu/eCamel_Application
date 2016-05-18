var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');
var CompletedSalesIndex = require('./completed_sales_index');

var PopularItems = React.createClass({
  getInitialState: function() {
    return { popular_items: null, completed_sales: null };
  },

  handleEnterSubmit: function(e) {
    // if (e.nativeEvent.keyCode != 13) return;
    e.preventDefault();
    $.ajax({
      url: 'http://ecamel.herokuapp.com/api/popular_items?keyword=' + e.target.elements[0].value,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        this.setState({ popular_items: data });
      }
    });

    $.ajax({
      url: 'http://ecamel.herokuapp.com/api/completed_sale?keywords=' + e.target.elements[0].value,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        debugger;
        this.setState({ completed_sales: data });
        console.log(data);
      }
    });
  },

  handleButtonSubmit: function(){

  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleEnterSubmit}>
          <input placeholder='search items' />
          <input type="submit" value="Search" />
        </form>
        <CompletedSalesIndex data={this.state.completed_sales} />
      </div>
    );
  }

});

module.exports = PopularItems;
