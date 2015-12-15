angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('page', {
      url: '/page3',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    .state('search', {
      url:'/search',
      templateUrl: 'templates/search.html',
      controller: 'MainCtrl'
    })
      
        
    .state('formEntry', {
      url: '/page5',
      templateUrl: 'templates/formEntry.html',
      controller: 'formEntryCtrl'
    })



    .state('restaurantForm', {
      url: '/restaurantForm',
      templateUrl: 'templates/restaurant.html',
      controller: 'restaurantFormCtrl'
    })
        
      

    .state('septicForm', {
      url: '/septicForm',
      templateUrl: 'templates/septic.html',
      controller: 'septicFormCtrl'
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page3');

});