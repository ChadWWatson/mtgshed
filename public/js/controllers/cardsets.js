'use strict';

angular.module('mtgshed.admin').controller('CardSetController', ['$scope', '$http', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', function ($scope, $http, $stateParams, $location, Global, SetLists, fileReader) {
    $scope.global = Global;
    $scope.cardSet = [];

    $scope.find = function() {
        SetLists.query(function(sets) {
            console.log(sets);
            $scope.sets = sets;
        });
    };


    $scope.updateSet = function() {
        var setCodes = [];
        var count = 0;

        for(var i in $scope.cardSet){
            setCodes.push(i);
        }
        angular.forEach(setCodes, function(code, key){
            $http.post('/api/sets', $scope.cardSet[code])
            .success(function(data, status, headers, config) {
                count++;
                $scope.currentUpdatedMessage = 'Updating ' + code + ' ( ' + count + ' of ' + setCodes.length + ')';
                console.log($scope.currentUpdatedMessage);  
            }).error(function(data, status, headers, config) {
                $scope.status = status;
            });
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
            console.log($scope.cardSet);
        });
    };

    $scope.$on('fileProgress', function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
        console.log($scope.progress);
    });

}]);
