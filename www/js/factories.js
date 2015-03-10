angular.module('buzu.factories', [])

.factory('Routes', function($http) {
	return {
		index: function() {
			return $http.get('../res/schedule.json');
		}
	};
});
