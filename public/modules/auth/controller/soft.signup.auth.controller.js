'use strict';

angular.module('authModule').controller('softSignUpAuthController', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
	$scope.closeModal = function(){
		$modalInstance.close('cancel');
	}

	//show selected "step"
	$scope.step = function(num){
		switch(num){
			case 1:
				$scope.step1 = true;
				$scope.step2 = false;
				$scope.step3 = false;
				$scope.step4 = false;
				$scope.step5 = false;
				break;
			case 2:
				$scope.step1 = false;
				$scope.step2 = true;
				$scope.step3 = false;
				$scope.step4 = false;
				$scope.step5 = false;
				break;
			case 3:
				$scope.step1 = false;
				$scope.step2 = false;
				$scope.step3 = true;
				$scope.step4 = false;
				$scope.step5 = false;
				break;
			case 4:
				$scope.step1 = false;
				$scope.step2 = false;
				$scope.step3 = false;
				$scope.step4 = true;
				$scope.step5 = false;
				break;
			case 5:
				$scope.step1 = false;
				$scope.step2 = false;
				$scope.step3 = false;
				$scope.step4 = false;
				$scope.step5 = true;
				break;
		}
	}

	//init with step 1
	$scope.step(1);


}]);