angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('formEntryCtrl', function($scope) {

})

.controller('restaurantFormCtrl', function($scope, $cordovaSQLite) {
	$scope.SubmitRestaurantForm = function(restaurant) {

		var query = "INSERT INTO test (name) VALUES (?)";

      	$cordovaSQLite.execute(db, query, [restaurant.name]).then(function(res){
          console.log(res);
      	}, function(err){
        	console.error(err);
      	});
		//console.log(test);
	}

	$scope.selectByName = function(name){
      var query = "SELECT name FROM test WHERE name = ?";
      $cordovaSQLite.execute(db, query, [name]).then(function(res){
        if(res.rows.length > 0){

			document.getElementById('data-value').innerHTML += res.rows.item(0).name;

        } else {
          console.log("No results found");
        }
      }, function(err){
        console.error(err);
      });
    }
})

.controller('septicFormCtrl', function($scope) {

})
 

  // .controller("sampleController", function($scope, $cordovaSQLite){

  //   $scope.insertRestaurant = function(name){
  //     var query = "INSERT INTO restaurant (name) VALUES (?)";
  //     console.log(name + " is inserted.");
  //     $cordovaSQLite.execute(db, query, [name]).then(function(res){
  //       console.log("INSERT ID -> " + res.insertId);
  //     }, 	function(err){
  //     });
  //   }

    