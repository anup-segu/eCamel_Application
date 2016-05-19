var React = require('react');
var ReactDOM = require('react-dom');

var TopSellingItemsIndex = React.createClass({

  render: function(){
    return (
      <div>
        <ul className="product_search_index">
        { 
          this.props.top_selling.map(function(item){
            return (
            <div>
              <li className="product_search_result">
                <div className="clearfix product_search_pane">
                  <div className="product_search_result_content">
                    <p><a href={item.search.productURL}>{item.search.title}</a></p>
                    <p>Min Price: ${item.search.priceRangeMax.__value__}</p>
                    <p>Max Price: ${item.search.priceRangeMin.__value__}</p>
                  </div>
                </div>
              </li>
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