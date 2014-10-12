(function(){
	var app = angular.module('gemStore',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{ name: 'Dodecahedron', price: 2.95, description: 'desc product 1. . .',  canPurchase: true },
		{ name: 'Pentagonal Gem',price: 3.15, description: 'desc product 2. . .',	canPurchase: false},
		];
})();