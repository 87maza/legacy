//application.js translates js files to jsx via gulp, gulp generated this file

var options = {
  title: 'Sent',
  header: 'learn react',
  description: 'how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days how i learned react in 0 days',
  imageUrl: 'https://pbs.twimg.com/profile_images/542406415415914497/I5xt0fLX.png'
};

// React, please render this class
var element = React.createElement(LegacyComponent, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
var LegacyButton = React.createClass({displayName: "LegacyButton",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title
    )
  }
});


var LegacyComponent = React.createClass({displayName: "LegacyComponent",
  render: function() {
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(LegacyButton, {title: this.props.title})
          )
        )
      )
    )
  }
});