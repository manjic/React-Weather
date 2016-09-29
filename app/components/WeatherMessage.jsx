var React = require('react');

// var WeatherMessage = React.createClass({

//   render: function(){
//   	var {temp,location} = this.props;
  	
//     return(
//        <h3>Its {temp} degrees in {location}</h3>     
//     )
//   }
// });

// refactor to stateless function
// var WeatherMessage = (props) => {
// 		var {temp,location} = props;
//     return(
//        <h3>Its {temp} degrees in {location}</h3>     
//     )
//  };

// refactor props
// var WeatherMessage = ({temp, location}) => {
	var WeatherMessage = ({location, temp}) => {
    return(
       // <h3 className="text-center">Its {temp} degrees in {location}</h3>  
        <h3 className="text-center">It is it {temp}°F in {location}.</h3>   
    )
 };

    
module.exports = WeatherMessage;