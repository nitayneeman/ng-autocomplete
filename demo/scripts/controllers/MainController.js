/**
 * Created by nitay on 9/23/14.
 */
'use strict';

myApp.controller('MainController', function ($scope) {
    $scope.proposals = ['boat', 'bear', 'dog', 'drink', 'elephant', 'fruit'];
    $scope.submit = function () {
        console.log('Submitted');
    }
});