'use strict';

angular.module('mtgshed.admin').controller('CardSetController', ['$scope', '$http', '$stateParams', '$location', 'Global', 'SetLists', 'fileReader', function ($scope, $http, $stateParams, $location, Global, SetLists, fileReader) {
    $scope.global = Global;
    $scope.cardSet = [];

    $scope.find = function() {
        SetLists.query(function(sets) {
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
            .success(function(data) {
                count++;
                $scope.currentUpdatedMessage = 'Updating ' + code + ' ( ' + count + ' of ' + setCodes.length + ')';
                console.log($scope.currentUpdatedMessage);
                $scope.addCardsToSet(code,$scope.cardSet[code].cards);  
            }).error(function(data, status) {
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
        });
    };

    $scope.$on('fileProgress', function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });

    $scope.addCardsToSet = function(code, cards, completed) {
        $http.post('/api/sets/' + code + '/cards', $scope.cardSet[code].cards)
        .success(function(data) {
            completed(null,data);
        }).error(function(data, status) {
            completed(data,null);
        });
    };

    $scope.updateCardSet = function(cardset, $event) {
        var button = angular.element($event.target);
        button.html('saving...').addClass('disabled');
        var cardSet = new SetLists(cardset);
        cardSet.$save(function(response) {
            button.html('saving cards...');
            $scope.addCardsToSet(cardset.code, cardset. cards, function(e,data){
                button.removeClass('btn-primary').addClass('btn-success').addClass('disabled').html('completed');
            });
        });
    };

}]);
