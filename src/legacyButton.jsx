var React = require('react');

module.exports = React.createClass({
	render: function() {
	  return <button onClick={this.props.userClicked} className="btn btn-success" type="button">
	    {this.props.title}
	  </button>
	}
});

