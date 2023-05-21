var app = angular.module('todoApp', []);

app.controller('todoCtrl', function($scope) 
{
	$scope.todos = [
		{text:'Learn AngularJS', done:true},
		{text:'Build a to-do list', done:false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.newTodo, done:false});
		$scope.newTodo = '';
	};

	$scope.remove = function(todo) {
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
	};
    $scope.complete = function() {
		$scope.todos=[]
	};
});