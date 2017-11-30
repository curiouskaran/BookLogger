(function() {
    angular.module('app')
           .factory('dataService', dataService);

    function dataService(logger) {

        return {
            getAllBooks : getAllBooks,
            getAllReaders : getAllReaders
        };

        function getAllBooks() {
            logger.output('getting all books');

            return [
                {
                    books_id : 1,
                    tittle : 'Harry Potter and the Deathly Hallows',
                    author : 'JK Rowling',
                    year_published : 2000,
                },
                {
                    books_id : 2,
                    tittle : 'The Cat In the Hat',
                    author : 'Dr. Seuss',
                    year_published : 1957,
                },
                {
                    books_id : 3,
                    tittle : 'Encyclopedia Brown, Boy Detective',
                    author : 'Donald J. Sobol',
                    year_published : 1963,
                }
            ];
        }

        function getAllReaders() {
            logger.output('getting all readers');

            return [
                {
                    reader_id : 1,
                    name : "Karan",
                    weeklyReadingGoal : 315,
                    totalMinutesRead : 5600
                },
                {
                    reader_id : 2,
                    name : "Khushboo",
                    weeklyReadingGoal : 210,
                    totalMinutesRead : 3000
                },
                {
                    reader_id : 3,
                    name : "Abhishek Jaimani",
                    weeklyReadingGoal : 140,
                    totalMinutesRead : 600
                }
            ];
        }
        
    }

    dataService.$inject = ['logger'];
}());