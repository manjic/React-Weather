var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
    
//   render: function(){
//     return(
//        <h3>Examples component</h3>     
//     )
//   }
// });

var Examples = (props) => {

    return(
    	<div>
    		<h1 className="text-center">Examples</h1>
    		<p>Here a few example locations to try out:</p>
    	  <ol>
    	    <li>
    	    	<link to='/?location=Leeds'>Leeds</link>
    	    </li>
    	    <li>
    	    	<link to='/?location=London'>London</link>
    	    </li>
    	   </ol>  	
    	</div>
       
    )
};
    
module.exports = Examples;