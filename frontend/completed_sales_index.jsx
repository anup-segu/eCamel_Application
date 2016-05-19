var React = require('react');
var PropTypes = React.PropTypes;

var CompletedSalesIndex = React.createClass({
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

  createStats: function() {
    var categories = Object.keys(this.state.data["categories"]);
    var categoryID = categories[0];
    var stats = this.state.data["categories"][categoryID]["statistics"];

    return (
      <div>
        <h4>Average Selling Price: {this.currencyFormat(Number(stats["average"]))}</h4>
        <h4>Highest Selling Price: {this.currencyFormat(Number(stats["max"]))}</h4>
        <h4>Lowest Selling Price Price: {this.currencyFormat(Number(stats["min"]))}</h4>
        <br/>
      </div>
    );
  },

  createList: function() {
    var categories = Object.keys(this.state.data["categories"]);
    var categoryID = categories[0];
    var items = this.state.data["categories"][categoryID]["items"];

    var itemsContent = items.map(function (item) {
      return (
        <li className="product_search_result" key={item["id"]}>
          <div className="clearfix product_search_pane">
            <div className="product_search_result_content">
              <p><a href={item["url"]}>{item["title"]}</a></p>
              <p>Sales Price: {this.currencyFormat(Number(item["price"]))}</p>
              <p>Ended on: {item["end_time"].slice(0,10)}</p>
            </div>
          </div>
        </li>
      );
    }.bind(this));

    return (
      <ul className="product_search_index">
        { itemsContent }
      </ul>
    );
  },

  render: function() {
    if (this.state.data) {
      return (
        <div>
          <h2>Recently Completed Sales</h2>
          {this.createStats()}
          {this.createList()}
        </div>
      );
    } else {
      return <div />;
    }
  }

});

module.exports = CompletedSalesIndex;
