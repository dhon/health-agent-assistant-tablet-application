angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('formEntryCtrl', function($scope) {

})

.controller('restaurantFormCtrl', function($scope) {
	$scope.SubmitRestaurantForm = function(restaurant) {
		console.log(restaurant);
	}
})

.controller('septicFormCtrl', function($scope) {

})
 