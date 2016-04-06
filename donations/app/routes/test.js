import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		function retrieveData(callback){
			jQuery.ajax({
	            url: 'http://sergiopalooza.com/test.php',
	            timeout: 1000,
	            async: false,
	            success: function(data){
	                if(callback!=null){
	                	callback(data);
	                }
	            }
		    });
		}
		
		var parsedJson;
		retrieveData(function(data){
			parsedJson = data;
			parsedJson = JSON.parse(parsedJson);
			parsedJson = parsedJson.items;
			parsedJson.sort(function(a, b) {
    			return parseFloat(b.donations) - parseFloat(a.donations);
			});
		});
		
		return parsedJson;
	}
});
