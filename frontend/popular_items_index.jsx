var React = require('react');
var ReactDOM = require('react-dom');

var PopularItemsIndex = React.createClass({

  render: function(){
    return (
      <div>
        <ul className='product_search_index'>
        { 
          this.props.popular_items.map(function(item){
            return (
              <li className='product_search_result'>
                <div className="clearfix product_search_pane">
                  <div className="product_search_result_content">
                    <p><a href={item.url}>{item.title}</a></p>  
                    <p>Current Price: ${item.current_price}</p>
                    <p>Watch Count: {item.watch_count}</p>
                  </div>
                </div>
              </li>
            )
          }.bind(this))
        }
        </ul>
      </div>
    );
  }
});

module.exports = PopularItemsIndex;