angular.module('tictactoe', []).
    controller('controler', function($scope) {
        $scope.grid = [null, null, null].map(function() {
            return [0, 0, 0];
        });
        $scope.loopable = [0, 1, 2];

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
                return '_';
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

        function checkVector(x, y, dx, dy) {
            var initial = getCell(x, y);
            for(var i = 0; i < 2; ++i) {
                x += dx;
                y += dy;
                if(getCell(x,y) !== initial)
                    return 0;
            }
            return initial;
        }

        $scope.isWinningState = function() {
            var result;
            for(var i = 0; i < 3; ++i) {
                if((result = checkVector(i, 0, 0, 1)) !== 0)
                    return result;
                else if((result = checkVector(0, i, 1, 0)) !== 0)
                    return result;
            }

            if((result = checkVector(0, 0, 1, 1)) !== 0)
                return result;
            else if((result = checkVector(2, 0, -1, 0)) !== 0)
                return result;

            return 0;
        }

    });