var app = angular.module('richManReddit');

app.factory('factory', function(){

var reddit ={ };

return{
  grabData: function(){
$http({
  url:'https://www.reddit.com/r/awww/.json',
  method:'GET'
}).then(function successfulCallback(response){
  masterObject = response;
}, function(error){
  console.log(error);
    });
    }
    }
    }
  });
