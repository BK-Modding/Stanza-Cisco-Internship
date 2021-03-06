var app = angular.module("quickbooks");
app.service('searchService', function($http, userService) {
    var searchService = [];
    searchService.finalSearch = function(toSearch) {
        { // Function to get New Books
            return $http({
                method: "GET",
                url: `./search?search=${toSearch}`,
                headers: { 'Content-Type': 'application/json', 'x-access-token': userService.getToken() } // Setting Headers, Function call to get getToken() to send to db
            }).then(function(responses) { // Promise Success

                //console.log(responses.data);
                searchService.responses = responses.data; // Return
                return responses.data;
            });
        }
    }
    searchService.getResponses = () => { return searchService.responses };
    
searchService.getUser = function(toSearch){
     return $http({
                method: "GET",
                url: `./searchUser?search=${toSearch}`,
                headers: { 'Content-Type': 'application/json', 'x-access-token': userService.getToken() } // Setting Headers, Function call to get getToken() to send to db
            }).then(function(responses) { // Promise Success

                //console.log(responses.data);
                //searchService.responses = responses.data; // Return
                return responses.data;
            });
}
return searchService;
});
