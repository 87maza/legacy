var React = require('react');
var LegacyButton = require('./legacyButton');

module.exports = React.createClass({
    render: function() {
      return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              <LegacyButton title={this.props.title} />
            </p>
          </div>
        </div>
      </div>
    }
  });