function MainController ($scope) {

	$scope.likes = 0;
	$scope.text = "Likes";
	$scope.operator = "-";

	$scope.changeLikeButton = function(){
		if ($scope.operator === '-'){
			$scope.likes += 1;
		} else {
			$scope.likes -= 1;
		}
	}

	$scope.toggle = function () {
		if ($scope.operator === '+') {
			$scope.operator = '-';
		} else {
			$scope.operator = '+';
		}
	}
}

MainController.$inject = ['$scope'];
export { MainController };