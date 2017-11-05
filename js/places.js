(function(){
	var places = [];
	function getData(onSuccess) {
		// var _places = places;
		$.getJSON('//localhost/project/api/places.json', function(json, textStatus) {
				places = json.places;
				onSuccess();
		});
		return false;
	}
	function renderPlace(place){
		return `<div class='place'>
					<img src="`+place.image+`" alt="" />
					<div class="place__info">
						<h4>`+place.name+`</h4>
						<p>`+place.distance+`</p>
					</div>
				</div>`
	};
	function renderView(){
		for (var i = 0; i < places.length; i++) {
			$('#list').append(renderPlace(places[i]));
		}
	};
	function INIT(){
		getData(renderView);
	};
	INIT();
})();