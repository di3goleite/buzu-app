angular.module('buzu.controllers', [])

.controller('RoutesCtrl', function($scope, Routes) {
	console.log('hue');

	Routes.index()
	.success(function(data) {
		console.log(data);
	})
	.error(function(error) {
		console.error(error);
	});
});
