var React = require('react');
var ReactDOM = require('react-dom');

var PopularItemsIndex = React.createClass({

  render: function(){
    return (
      <div>
        Popular Items
        <ul>
        { 
          this.props.popular_items.map(function(item){
            return (
            <div>
              <li>
                {item.title}
              </li>
              <p><a href={item.url}>Link</a></p>
              <p>Current Price: ${item.current_price}</p>
              <p>Watch Count: {item.watch_count}</p>
            </div>
            )
          }.bind(this))
        }
        </ul>
      </div>
    );
  }
});

module.exports = PopularItemsIndex;