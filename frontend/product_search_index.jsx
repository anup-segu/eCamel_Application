var React = require('react');
var PropTypes = React.PropTypes;

var ProductSearchResults = React.createClass({
  getInitialState: function() {
    return {
      data: null
    };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ data: newProps.data });
  },

  currencyFormat: function (num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },

  createList: function() {
    var items = this.state.data["item"];

    var itemsContent = items.map(function (item) {
      var ebayLink = item["viewItemURL"][0];
      var price = item["sellingStatus"][0]["currentPrice"][0]["__value__"];
      var priceFormatted = this.currencyFormat(Number(price));

      return (
        <li key={item["itemId"][0]} className="product_search_result">
          <div className="clearfix product_search_pane">
            <div className="product_search_image">
              <img src={item["galleryURL"][0]} />
            </div>
            <div className="product_search_result_content">
              <a href={ebayLink}>{item["title"][0]}</a>
              <p>Selling Price: {priceFormatted}</p>
            </div>
          </div>
        </li>
      );
    }.bind(this));

    return (
      <ul className="product_search_index">
        {itemsContent}
      </ul>
    );
  },

  render: function() {
    if (this.state.data) {
      return (
        <div>
          <h2>Product Search Results</h2>
          {this.createList()}
        </div>
      );
    } else {
      return <div />;
    }
  }

});

module.exports = ProductSearchResults;
