'use strict';

angular.module('mtgshed.admin').controller('CardSetController', ['$scope', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', function ($scope, $stateParams, $location, Global, SetLists, fileReader) {
    $scope.global = Global;

    $scope.find = function() {
        SetLists.query(function(sets) {
            console.log(sets);
            $scope.sets = sets;
        });
    };

    $scope.findOne = function() {
        SetLists.get({
            id: $stateParams.id
        }, function(setList) {
            $scope.setList = setList;
        });
    };

    //an array of files selected
    $scope.files = [];

    //listen for the file selected event
    $scope.$on('fileSelected', function (event, args) {
        $scope.$apply(function () {
            //add the file object to the scope's files collection
            $scope.file = args.file;
            $scope.getFile();
        });
    });

    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsText($scope.file, $scope)
            .then(function(result) {
                $scope.cardSet = JSON.parse(result);
            });
    };

    $scope.$on('fileProgress', function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
        console.log($scope.progress);
    });
}]);
