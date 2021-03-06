angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('formEntryCtrl', function($scope) {

})

.controller('restaurantFormCtrl', function($scope, $cordovaSQLite, $ionicPopup) {

  $scope.SubmitRestaurantForm = function(restaurant) {

    var alertPopup = $ionicPopup.alert({
     title: 'Success!',
     template: 'Data was successfully entered.'
   });

    var restQuery = "INSERT INTO RESTAURANT (NAME, ADDRESS, PERSONINCHARGE) VALUES (?,?,?)";
    var ownerQuery = "INSERT INTO OWNER (OWNERNAME, TELEPHONENUMBER) VALUES (?,?)";

    // insert restaurant table
    $cordovaSQLite.execute(db, restQuery, [restaurant.name, restaurant.address, restaurant.pic]).then(function(res){
      console.log(res);
    }, function(err){
      console.error(err);
    });

    // insert owner tables
    $cordovaSQLite.execute(db, ownerQuery, [restaurant.owner, restaurant.telephone]).then(function(res){
      console.log(res);
    }, function(err){
      console.error(err);
    });
  }
})


.controller('GeoCtrl',function($scope){
  $scope.getLocation = function(){
    //seek gps/wifi/cell service to get geo infomation
    if(navigator.geolocation)
    {
    //get position data
      navigator.geolocation.getCurrentPosition(success,fail);
    }else{
      window.alert("fail accessing GPS");
    }
  }
  //if the position is successfully retreived, do passing
  function success(position){
    window.alert("latitude: " + position.coords.latitude + "\nlongitude: "+ position.coords.longitude);
  }

  function fail()
  {
    window.alert("fail recieving message from source");
  }
})


.controller('septicFormCtrl', function($scope, $ionicPopup) {

  $scope.yesFilter = function() {
    $scope.filterPresent = true;
  }

  $scope.noFilter = function() {
    $scope.filterPresent = false;
  }

  $scope.SubmitSepticForm = function(septic) {
    console.log(septic);
   var alertPopup = $ionicPopup.alert({
     title: 'Success!',
     template: 'This data will upload upon connection.'
   });
 }

})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $cordovaSQLite) {
  console.log('MainCtrl');

  $scope.data = ["JavaScript", "Java", "Ruby", "Python", "Hello"];


  $scope.selectRestaurants = function() {

    var query = "SELECT * FROM RESTAURANT";
    $cordovaSQLite.execute(db, query, []).then(function(res){
      if(res.rows.length > 0){
     
        var temp = new Array();
		

		for( i = 0; i < res.rows.length; i++)
		{

			console.log("i = " + i);
			console.log(res.rows[i]);


		    temp.push(res.rows[i]);
		}


		$scope.restaurants = temp


		console.log(temp);

      } else {
        console.log("No results found");
      }
    }, function(err){
      console.error(err);
    });
  }


})


.directive('searchBar', [function() {
  return {
    scope: {
      ngModel: '='
    },
    require: ['^ionNavBar', '?ngModel'],
    restrict: 'E',
    replace: true,
    template: '<ion-nav-buttons side="right">' +
      '<div class="searchBar">' +
      '<div class="searchTxt" ng-show="ngModel.show">' +
      '<div class="bgdiv"></div>' +
      '<div class="bgtxt">' +
      '<input type="text" placeholder="Search..." ng-model="ngModel.txt">' +
      '</div>' +
      '</div>' +
      '<i class="icon placeholder-icon" ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></i>' +
      '</div>' +
      '</ion-nav-buttons>',

    compile: function(element, attrs) {
      var icon = attrs.icon || (ionic.Platform.isAndroid() && 'ion-android-search') || (ionic.Platform.isIOS() && 'ion-ios7-search') || 'ion-search';
      angular.element(element[0].querySelector('.icon')).addClass(icon);

      return function($scope, $element, $attrs, ctrls) {
        var navBarCtrl = ctrls[0];
        $scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;

      };
    },
    controller: ['$scope', '$ionicNavBarDelegate', function($scope, $ionicNavBarDelegate) {
      var title, definedClass;
      $scope.$watch('ngModel.show', function(showing, oldVal, scope) {
        if (showing !== oldVal) {
          if (showing) {
            if (!definedClass) {
              var numicons = $scope.navElement.children().length;
              angular.element($scope.navElement[0].querySelector('.searchBar')).addClass('numicons' + numicons);
            }

            title = $ionicNavBarDelegate.title();
            $ionicNavBarDelegate.setTitle('');
          } else {
            $ionicNavBarDelegate.setTitle(title);
          }
        } else if (!title) {
          title = $ionicNavBarDelegate.title();
        }
      });
    }]
  };
}]);
