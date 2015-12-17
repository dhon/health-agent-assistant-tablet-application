angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('formEntryCtrl', function($scope) {

})

.controller('restaurantFormCtrl', function($scope) {
  $scope.SubmitRestaurantForm = function(restaurant) {
    console.log('submitting');
    console.log(restaurant);
  };

  $scope.printReport = function(restaurant) {
    console.log('printing');
    console.log(restaurant);

    function checkField(field) {
      if (field) {
	console.log(field);
	return field;
      }
      else {
	return '';
      }
    }
    
    function boolText(bool) {
      if (bool) {
        return '[ √ ]';
      }
      else {
        return '[    ]';
      }
    }

    function dateText(date) {
      if (date) {
	return restaurant.date.getMonth() + '/' + restaurant.date.getDate() + '/' + restaurant.date.getFullYear();
      }
      else {
	return '';
      }
    }

    var docDefinition = {
      content: [
	{ text: 'Restaurant Inspection Report', fontSize: 22, alignment: 'center' },
	'\n',
	{ text: 'Restaurant Info', style: 'header' },
	'Name: ' + checkField(restaurant.name),
	'Date: ' + dateText(restaurant.date),
	'\n',
	'Address: ' + checkField(restaurant.address),
	'Telephone: ' + checkField(restaurant.telephone),
	'Owner: ' + checkField(restaurant.owner),
	'Person in Charge: ' + checkField(restaurant.pic),
	'Inspector: ' + checkField(restaurant.inspector),
	'Risk Level: ' + checkField(restaurant.riskLevel),
	'\n',
	'Time In: ' + checkField(restaurant.timeIn),
	'Time Out: ' + checkField(restaurant.timeOut),
	'\n',
	'Type of Operation(s): ' + checkField(restaurant.operationType),
	'Permit No.: ' + checkField(restaurant.permit),
	'\n',
	'Inspection Type: ' + checkField(restaurant.inspectionType),
	'Other: ' + checkField(restaurant.otherInspectionType),
	'Previous Inspection: ' + checkField(restaurant.previousInspection),
	'Date: ' + dateText(restaurant.previousInspectionDate),
	'\n',
	{ text: 'Food Protection Management', style: 'header' },
	boolText(restaurant.violationOne) + '\t1. PIC Assigned / Knowledgeable / Duties',
	'\n',
	{ text: 'Employee Health', style: 'header' },
	boolText(restaurant.violationTwo) + '\t2. Reporting of Diseases by Food Employee and PIC',
	boolText(restaurant.violationThree) + '\t3. Personnel with Infections Restricted / Excluded',
	'\n',
	{ text: 'Food from Approved Source', style: 'header' },
	boolText(restaurant.violationFour) + '\t4. Food and Water from Approved Source',
	boolText(restaurant.violationFive) + '\t5. Receiving / Condition',
	boolText(restaurant.violationSix) + '\t6. Tags / Records / Accuracy of Ingredient Statements',
	boolText(restaurant.violationSeven) + '\t7. Conformance with Approved Procedures / HACCP Plans',
	'\n',
	{ text: 'Protection from Contamination', style: 'header' },
	boolText(restaurant.violationEight) + '\t8. Separation / Segregation / Protection',
	boolText(restaurant.violationNine) + '\t9. Food Contact Surfaces Cleaning and Sanitizing',
	boolText(restaurant.violationTen) + '\t10. Proper Adequate Handwashing',
	boolText(restaurant.violationEleven) + '\t11. Good Hygienic Practices',
	boolText(restaurant.violationTwelve) + '\t12. Prevention of Contamination from Hands',
	boolText(restaurant.violationThirteen) + '\t13. Handwash Facilities',
	'\n',
	{ text: 'Protection from Chemicals', style: 'header' },
	boolText(restaurant.violationFourteen) + '\t14. Approved Food or Color Additives',
	boolText(restaurant.violationFifteen) + '\t15. Toxic Chemicals',
	'\n',
	{ text: 'Time?Temperature Controls (Potentially Hazardous Foods)', style: 'header' },
	boolText(restaurant.violationSixteen) + '\t16. Cooking Temperatures',
	boolText(restaurant.violationSeventeen) + '\t17. Reheating',
	boolText(restaurant.violationEighteen) + '\t18. Cooling',
	boolText(restaurant.violationNineteen) + '\t19. Hot and Cold Holding',
	boolText(restaurant.violationTwenty) + '\t20. Time as a Public Health Control',
	'\n',
	{ text: 'Requirements for Highly Susceptible Populations (HSP)', style: 'header' },
	boolText(restaurant.violationTwentyOne) + '\t21. Food and Food Preparation for HSP',
	'\n',
	{ text: 'Consumer Advisory', style: 'header' },
	boolText(restaurant.violationTwentyTwo) + '\t22. Posting of Consumer Advisories',
	'\n',
	'23. Management and Personnel: ' + checkField(restaurant.violationTwentyThree),
	'24. Food and Food Protection: ' + checkField(restaurant.violationTwentyFour),
	'25. Equipment and Utensils: ' + checkField(restaurant.violationTwentyFive),
	'26. Water, Plumbing, and Waste: ' + checkField(restaurant.violationTwentySix),
	'27. Physical Facility: ' + checkField(restaurant.violationTwentySeven),
	'28. Poisonous or Toxic Materials: ' + checkField(restaurant.violationTwentyEight),
	'29. Special Requirements: ' + checkField(restaurant.violationTwentyNine),
	'30. Other: ' + checkField(restaurant.violationThirty)
      ],
      
      styles: {
	header: {
	  fontSize: 18,
	}
      }
    }

    pdfMake.createPdf(docDefinition).open();
  };
})

.controller('septicFormCtrl', function($scope) {

})
 

 .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  console.log('MainCtrl');

  $scope.data = ["JavaScript", "Java", "Ruby", "Python", "Hello"];
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
