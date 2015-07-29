'user strict';

angular.module('homeModule').controller('indexHomeController', ['registerUserConfigFactory', 'connectContactHomeFactory', '$location', '$scope', '$interval', '$modal', function (registerUserConfigFactory, connectContactHomeFactory, $location, $scope, $interval, $modal) {
	$scope.user = registerUserConfigFactory.getUser();

	$scope.softSignUp = function(){
		$modal.open({
			templateUrl: 'public/modules/auth/view/soft.signup.auth.view.html',
			controller: 'softSignUpAuthController',
			backdrop : 'static'
		});
	}

}]);