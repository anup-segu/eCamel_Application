var React = require('react');
var ReactDOM = require('react-dom');

var TopSellingItemsIndex = React.createClass({

  render: function(){
    return (
      <div>
        <ul>
        { 
          this.props.top_selling.map(function(item){
            return (
            <div>
              <li>
                {item.search.title}
              </li>
              <p><a href={item.search.productURL}>Link</a></p>
              <p>Min Price: ${item.search.priceRangeMax.__value__}</p>
              <p>Max Price: ${item.search.priceRangeMin.__value__}</p>
            </div>
            )
          }.bind(this))
        }
        </ul>
      </div>
    );
  }
});

module.exports = TopSellingItemsIndex;