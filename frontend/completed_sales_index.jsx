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

  createList: function() {
    var categories = Object.keys(this.state.data["categories"]);
    var categoryID = categories[0];
    var items = this.state.data["categories"]["items"];

    var itemsContent = items.map(function (item) {
      return (
        <li key={item["id"]}>
          <a href={item["url"]}>{item["title"]}</a>
          <p>Sales Price: {item["price"]}</p>
          <p>Ended on: {item["end_time"].slice(0,10)}</p>
        </li>
      );
    });

    return (
      <ul>
        { itemsContent }
      </ul>
    );

  },

  render: function() {
    if (this.state.data) {
      return (
        this.createList()
      );
    } else {
      return <div />;
    }
  }

});

module.exports = CompletedSalesIndex;
