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

        $scope.clearBoard = function() {
            for(x in $scope.loopable){
                for(y in $scope.loopable){
                    $scope.setCell(x, y, 0);
                }
            }
        }

        $scope.getCell = getCell;
        $scope.setCell = setCell;

        function translate(pid) {
            if(pid === 0)
                return ' ';
            else if(pid === -1)
                return 'O';
            else if(pid === 1)
                return 'X';
        }
        $scope.translate = translate;


        $scope.cellToString = function(x, y) {
            return translate(getCell(x, y));
        };

        $scope.currentPlayer = -1;

        $scope.switchPlayer = function() {
            $scope.currentPlayer = -$scope.currentPlayer;
        };

        $scope.placeTack = function(x, y) {
            if(getCell(x, y) !== 0){
                //return alert('oh no! this cell is already occupied!');
            }

            if((winner = $scope.isWinningState()) !== 0) $scope.clearBoard();

            setCell(x, y, $scope.currentPlayer);

            $scope.switchPlayer();
            $scope.$apply();

            var winner;
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
            else if((result = checkVector(2, 0, -1, 1)) !== 0)
                return result;

            return 0;
        }

    });