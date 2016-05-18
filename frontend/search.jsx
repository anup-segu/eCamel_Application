var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');
var CompletedSalesIndex = require('./completed_sales_index');
var TopSellingItemsIndex = require('./top_selling_items_index');

var Search = React.createClass({
  getInitialState: function(){
    return({
      top_selling: [],
      popular_items: [],
      completed_sales: null
    });
  },

  requestData: function(e){
    e.preventDefault();
    var input = e.target.elements[0].value;
    if (input.length == 0){
      var popular_items_url = 'http://ecamel.herokuapp.com/api/popular_items';
    } else {
      var popular_items_url = 'http://ecamel.herokuapp.com/api/popular_items?keyword=' + input;
      var completed_sales_url = 'http://ecamel.herokuapp.com/api/completed_sale?keywords=' + input;
    }

    $.ajax({
      url: popular_items_url,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        this.setState({popular_items: data});
      }.bind(this)
    });

    if (completed_sales_url) {
      $.ajax({
        url: completed_sales_url,
        method: 'GET',
        dataType: 'json',
        success: function(data){
          this.setState({completed_sales: data});
        }.bind(this)
      });
    }
  },

  requestTopSelling: function(e){
    e.preventDefault();
    $.ajax({
      url: 'http://ecamel.herokuapp.com/api/top_selling_items',
      method: 'GET',
      dataType: 'json',
      success: function(data){
        this.setState({top_selling: data});
      }.bind(this)
    })
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.requestData}>
          <input placeholder='find Popular'/>
          <input type='submit' />
        </form>
        <form onSubmit={this.requestTopSelling}>
          <input type='submit' value='find Top Selling'/>
        </form>
        <PopularItemsIndex popular_items={this.state.popular_items} />
        <CompletedSalesIndex data={this.state.completed_sales} />
        <TopSellingItemsIndex top_selling={this.state.top_selling} />
      </div>
    );
  }

});

module.exports = Search;
