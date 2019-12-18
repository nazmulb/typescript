var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
})(Responses || (Responses = {}));
console.log(Responses.No);
// String enums
var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Down"] = "DOWN";
    Directions["Left"] = "LEFT";
    Directions["Right"] = "RIGHT";
})(Directions || (Directions = {}));
console.log(Directions.Up);
