(function(){
	var places = [];
	function getData(onSuccess) {
		// var _places = places;
		$.getJSON('api/places.json', function(json, textStatus) {
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

function showMenu(){
	$('#menuList').removeClass('hide');
	$('#backdropL').removeClass('hide');
}
function hideMenu(){
	$('#menuList').addClass('hide');
	$('#backdropL').addClass('hide');
}
function toggleMenu(){
	$('#menuList').toggleClass('hide');
	$('#backdropL').toggleClass('hide');
}
$('#button_menu').click(toggleMenu);
$('#backdropL').click(hideMenu);
