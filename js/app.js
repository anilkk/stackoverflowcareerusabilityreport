(function() {
    angular.module('stackoverflowApp', ['ngAnimate', 'ui.bootstrap'])
        .controller('TabsDemoCtrl', function($scope, $window) {
            $scope.tabs = [{
                title: 'Dynamic Title 1',
                content: 'Dynamic content 1'
            }, {
                title: 'Dynamic Title 2',
                content: 'Dynamic content 2'
            }];
        });
})();
