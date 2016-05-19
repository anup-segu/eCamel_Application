var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var PopularItemsIndex = require('./popular_items_index');
var CompletedSalesIndex = require('./completed_sales_index');
var TopSellingItemsIndex = require('./top_selling_items_index');
var ProductSearchIndex = require('./product_search_index');

var Search = React.createClass({
  getInitialState: function(){
    return({
      top_selling: [],
      popular_items: [],
      completed_sales: null,
      product_searches: null,
      selected: null
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
      var product_searches_url = 'http://ecamel.herokuapp.com/api/product_search?keywords=' + input;
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

    if (product_searches_url) {
      $.ajax({
        url: product_searches_url,
        method: 'GET',
        dataType: 'json',
        success: function(data){
          this.setState({product_searches: data});
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

  generateCategory: function(){
    if (this.state.selected == 'popular') {
      return (
        <PopularItemsIndex popular_items={this.state.popular_items} />
      )
    } else if (this.state.selected == 'product') {
      return (
        <ProductSearchIndex data={this.state.product_searches} />
      )
    } else if (this.state.selected == 'completed') {
      return (
        <CompletedSalesIndex data={this.state.completed_sales} />
      )
    } else {
      return (
        <div>
          <PopularItemsIndex popular_items={this.state.popular_items} />
          <CompletedSalesIndex data={this.state.completed_sales} />
          <ProductSearchIndex data={this.state.product_searches} />
        </div>
      )
    }
  },

  render: function(){
    var category = this.generateCategory();
    return (
      <div>
      <ul className="nav navbar-nav">
        <li className="active" onClick={this.setState({selected: 'popular'})}><a href="#">Popular Items</a></li>
        <li onClick={this.setState({selected: 'product'})}><a href="#">Product Search</a></li>
        <li onClick={this.setState({selected: 'completed'})}><a href="#">Completed Sales</a></li>
      </ul>
        <form className='navbar-form navbar-left' onSubmit={this.requestData}>
          <div className='form-group'>
            <input className='form-control' placeholder='Search'/>&nbsp;
            <input className="btn btn-default" type='submit' />
          </div>
        </form>
        <form className='navbar-form navbar-left' onSubmit={this.requestTopSelling}>
          <input className='btn btn-default' type='submit' value='find Top Selling'/>
        </form>
        <TopSellingItemsIndex top_selling={this.state.top_selling} />
        {category}
      </div>
    );
  }

});

module.exports = Search;
