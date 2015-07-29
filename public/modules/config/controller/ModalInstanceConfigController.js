'use strict';

angular.module('smsconfirm').controller('ModalInstanceConfigController', ['$scope', '$rootScope', '$modalInstance', function ($scope, $rootScope, $modalInstance) {
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}
}]);