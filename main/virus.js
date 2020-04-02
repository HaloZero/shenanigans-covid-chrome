// Get all the elements that you care about into an array
$(function() {
	document.body.innerHTML = document.body.innerHTML.replace(/Coronavirus/g, 'Shenanigans');
	document.body.innerHTML = document.body.innerHTML.replace(/coronavirus/g, 'shenanigans');
	document.body.innerHTML = document.body.innerHTML.replace(/Covid-19/g, 'Shenanigans');
	document.body.innerHTML = document.body.innerHTML.replace(/covid-19/g, 'Shenanigans');
	// let elements = Array.prototype.slice.call(document.querySelectorAll("p, span, h1, h2, h3, h4"));

	// // Loop over the items in the array
	// elements.forEach(function(el){
	//   // Do the replace on the element
	//   el.textContent = el.textContent.replace(/Covid-19/gi, "Shenanigans");
	//   el.textContent = el.textContent.replace(/Coronavirus/gi, "Shenanigans");
	// });	
})
