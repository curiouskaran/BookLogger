(function() {
   var app = angular.module('app', []);

   app.provider('books', ['constants', function(constants) {
        this.$get = function() {

            var appName = constants.APP_TITTLE;
            var appDesc = constants.APP_DESCRIPTION;

            var version = constants.APP_VERSION;

            if(includeVersionInTittle) {
                appName += " " + version;
            }

            return {
                appName: appName,
                appDesc: appDesc
            };

        };

        var includeVersionInTittle = false;
        this.setIncludeVersionInTittle = function(value) {
            includeVersionInTittle = value;
        };
    }]);

    app.config(['booksProvider', function(booksProvider) {
        booksProvider.setIncludeVersionInTittle(false);
    }]);

//    app.config(function($provide) {


//        $provide.provider('books', function() {
//            this.$get = function() {

//             var appName = 'Book Logger';
//             var appDesc = 'Track which books you read.';

//             return {
//                 appName: appName,
//                 appDesc: appDesc
//             };

//            };
//        });


//    });


})();
