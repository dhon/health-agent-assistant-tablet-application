/*
Geographic Infomation System class
Function: get infomation from possible geoinfomation providers 
and passed longitude and latitude data to user interface and 
the form data.
*/
angular.module('gis', ['ionic'])
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
    document.getElementById("la").innerHTML = position.coords.latitude;
    document.getElementById("lg").innerHTML = position.coords.longitude;
  }

  function fail()
  {
    window.alert("fail recieving message from source");
  }
})





.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
