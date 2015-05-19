angular.module('tictactoe', []).
    controller('controler', function($scope) {
        $scope.grid = [null, null, null].map(function() {
            return [0, 0, 0];
        });

        function getCell(x, y) {
            return $scope.grid[y][x];
        }

        function setCell(x, y, val) {
            $scope.grid[y][x] = val;
        }

        $scope.getCell = getCell;
        $scope.setCell = setCell;

        $scope.cellToString = function(x, y) {
            var val = getCell(x, y);
            if(val === 0)
                return ' ';
            else if(val === 1)
                return 'X';
            else if(val === -1)
                return '0'
        };

        $scope.currentPlayer = -1;

        $scope.switchPlayer = function() {
            $scope.currentPlayer = -$scope.currentPlayer;
        };

        $scope.placeTack = function(x, y) {
            // TODO: throw an error when the square is already occupied.
            if(getCell(x, y) !== 0)
                return alert('oh no! this cell is already occupied!');

            setCell(x, y, $scope.currentPlayer);

            scope.switchPlayer();
        };

        $scope.isWinningState = function() {
            for(var i = 0; i < 3; ++i) {
                for(var k = 0; k < 3; ++k) {
                    
                }
            }
        }

    });