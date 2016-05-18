var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');
var CompletedSalesIndex = require('./completed_sales_index');

var Search = React.createClass({
  getInitialState: function(){
    return({
      popular_items: [],
      completed_sales: null,
    });
  },

  handlePopularItems: function(e){
    e.preventDefault();
    var input = e.target.elements[0].value;
    if (input.length == 0){
      var url = 'http://ecamel.herokuapp.com/api/popular_items';
    } else {
      var url = 'http://ecamel.herokuapp.com/api/popular_items?keyword=' + input;
      var completed_sales_url = 'http://ecamel.herokuapp.com/api/completed_sale?keywords=' + input;
    }

    $.ajax({
      url: url,
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

  render: function(){
    return (
      <div>
        <form onSubmit={this.handlePopularItems}>
          <input placeholder='find Popular'/>
          <input type='submit' />
        </form>
        <CompletedSalesIndex data={this.state.completed_sales} />
      </div>
    );
  }

});

module.exports = Search;
