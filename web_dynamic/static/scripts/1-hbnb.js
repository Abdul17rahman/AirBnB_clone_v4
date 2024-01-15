$('document').ready(function(){
	$('input[type="checkbox"]').change(function(){
		let selectedAmen = [];

		if($(this).is(':checked')){
			selectedAmen.push(amenity_id)
		}
		else{
			selectedAmen = selectedAmen.filter(id => id !== amenity_id)
		}
		$('.Amenities h4').text('Selected Amenities: ' + selectedAme.join(', '))
	})
})
