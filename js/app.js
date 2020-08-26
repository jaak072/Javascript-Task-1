$(document).ready(function(){
	$("#nav2").append("<h6>Your Current Location is&nbsp:--&nbsp&nbsp&nbspAllow Location access</h6>");
	window.navigator.geolocation.getCurrentPosition(function(data){
	let latitude = data.coords.latitude;
	console.log(latitude);
	let longitude = data.coords.longitude;
	console.log(longitude);
		

	$.ajax({
		'url':'https://api.opencagedata.com/geocode/v1/json?q='+ latitude +'+'+ longitude +'&key=4b00397a13d34c4e837db90b6dfe2188',
		success:function(data){
			let city=data['results']['0']['components']['city'];
			let state=data['results']['0']['components']['state'];
			let country=data['results']['0']['components']['country'];
				
			$("#nav2").html("<h6>Your Current Location is&nbsp:--&nbsp&nbsp"+city + "," + state + "," + country +  ".</h6>");

			$.ajax({
				'url':'https://api.unsplash.com/search/photos?client_id=UqzOugdsGggpdT8Z0l1Nl_49YW1DP34nEN2k-uepDvM&query='+ country +'',
					
				success:function(data){
					let results = data.results;
						
					$.each( results, function( key, value ) {
	 					
	 					if(key===8){
	 						return false;
	 					}
	 				image= value.urls.regular;
	 					
	 					$('#img').append('<div class="col-md-6 mt-4" style="margin:auto"><div style="width: 100%; margin:auto; border: 2px red solid; border-radius:85% 23% 93% 42% / 14% 19% 14% 30% ;overflow: hidden;"><img style="height:350px; width:100%;" src="'+ image +'"></div></div>');
	 						
	 				});

				},
				error:function(){
					alert:("Error Occurred!");
				}
			});


			$.ajax({
				'url':'https://api.unsplash.com/search/photos?client_id=UqzOugdsGggpdT8Z0l1Nl_49YW1DP34nEN2k-uepDvM&query='+ state +'',
					
				success:function(data){
					let results = data.results;
						
					$.each( results, function( key, value ) {
	 					
	 					if(key===7){
	 						return false;
	 					}
	 				image= value.urls.regular;
	 					
	 					$('#img').append('<div class="col-md-6 mt-4" style="margin:auto"><div style="width: 100%; margin:auto; border: 2px red solid; border-radius:85% 23% 93% 42% / 14% 19% 14% 30% ;overflow: hidden;"><img style="height:350px; width:100%;" src="'+ image +'"></div></div>');
	 						
	 				});

				},
				error:function(){
					alert:("Error Occurred!");
				}
			});

		},
		error:function(){
			alert("Error Occurred!");
		}
	});

	});
})
