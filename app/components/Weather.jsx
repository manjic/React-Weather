var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false
		}
	},

  handleSearch: function (location) {
  	
  	var that = this;
 
  	this.setState({
  		isLoading: true,
  		errorMessage: undefined
  	});

  	// openWeatherMap.getTemp(location).then(function (temp) {i
  		 openWeatherMap.getTemp(location).then(function (objData) {
	  		that.setState({
	  		isLoading: false,
	  		// location: location,
	  		// temp: temp
	  		location: objData.location,
	  		temp: objData.temp
	  	});
  	}, function (e) {
  			that.setState({
  			isLoading: false,
  			errorMessage: e.message
  		});
  		alert(errorMessage);
  	});	
  },

  render: function(){

  	var {isLoading,location,temp, errorMessage} = this.state;

  	function renderMessage () {
  		if (isLoading) {
  			return <h3 className="text-center">Fetching Data...</h3>;
  		} else if (temp && location) {
  			return <WeatherMessage temp={temp} location={location}/>;
  		}
  	}

  	function renderError () {
  		if (typeof errorMessage === 'string') {
  			return (
  				<ErrorModal message={errorMessage}/>
  			)
  		}
  	}

    return(
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
       	<WeatherForm onSearch={this.handleSearch}/>
       	{renderMessage()}
       	{renderError()}
			</div>
    )
  }
});
    
module.exports = Weather;