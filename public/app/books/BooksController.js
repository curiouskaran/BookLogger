(function() {
    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', BooksController]);

        function BooksController(books, dataService, logger, badgeService, $q) {
            var vm = this;

            vm.appName = books.appName;

           //In this way we can resolve a array of services
            var booksPromise = dataService.getAllBooks();
            var readersPromise = dataService.getAllReaders();

            $q.all([booksPromise, readersPromise])
                .then(getAllDataSuccess)
                .catch(getAllDataError);

            function getAllDataSuccess(dataArray) {
                vm.allBooks = dataArray[0];
                vm.allReaders = dataArray[1];
            }

            function getAllDataError(reason) {
                console.log(reason);
            }

            //way of reciving data from services without promises
            //vm.allBooks = dataService.getAllBooks();

            //way of reciving data from service with promises
            /* dataService.getAllBooks()
                 .then(getBooksSuccess, null, getBooksNotification)
                 .catch(errorCallBack)
                 .finally(getAllBooksComplete); */

            /* function getBooksSuccess(books) {
                //throw 'error in success';
                vm.allBooks = books;
            } */

            /* function getBooksError(reason) {
                console.log(reason);
            } */

            /* function errorCallBack(error) {
                console.log("Error Message: ", error);
            }

            function getBooksNotification(notification) {
                console.log('Promise Notification: ', notification);
            }

            function getAllBooksComplete() {
                console.log('getAllBooks has completed');
            }

            //vm.allReaders = dataService.getAllReaders();

            dataService.getAllReaders()
                .then(getReadersSuccess, null)
                .catch(errorCallBack)
                .finally(getAllReadersComplete);

            function getReadersSuccess(readers) {
                vm.allReaders = readers;
            }

            function getAllReadersComplete() {
                console.log('Recieved all readers from service');
            }
 */
            vm.getBadge = badgeService.retrieveBadge;


            logger.output('BooksController is created');
            
        }
}());