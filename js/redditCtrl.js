var app = angular.module("richManReddit", []);

app.controller('redditCtrl',function($scope, $http, $location){

  $scope.redditItems ={};

  $http({
      url:'https://www.reddit.com/r/awww/.json',
      method:'GET'

  }).then(function success(response){
      console.log("yay", response);

      $scope.redditItems = response.data.data.children;

  }, function(error) {
      console.log("oops", error);
  });
  });

// $scope.author = $filter ('filter')($scope.redditItems.data, {author} ) [0];


// angular.forEach(response, function(item){
//   var redditItems = new redditItems();
//   redditItems.redditTitle = response.data.children.title;
//   redditItems.push(redditItems);
// })





//     $scope.grabInfo = function(blog){
//       console.log(blog);
//
//       sendInfo(blog);
//       $location.path('/index');
//
//     }
