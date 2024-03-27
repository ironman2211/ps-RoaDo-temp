function isValidTrip(trip, pickupPoints, dropPoints, warehouses) {
    var start = trip[0], end = trip[1];
    if (!(pickupPoints.has(start) || dropPoints.has(start) || warehouses.has(start)))
        return false;
    if (!(pickupPoints.has(end) || dropPoints.has(end) || warehouses.has(end)))
        return false;
    if (start === end)
        return false;
    return true;
}
function areLegitTrips(trips, pickupPoints, dropPoints, warehouses) {
    var visitedPickupPoints = new Set();
    var visitedDropPoints = new Set();
    for (var _i = 0, trips_1 = trips; _i < trips_1.length; _i++) {
        var trip = trips_1[_i];
        var start = trip[0], end = trip[1];
        if (!isValidTrip(trip, pickupPoints, dropPoints, warehouses))
            return false;
        if (pickupPoints.has(start))
            visitedPickupPoints.add(start);
        if (dropPoints.has(end))
            visitedDropPoints.add(end);
    }
    for (var _a = 0, pickupPoints_1 = pickupPoints; _a < pickupPoints_1.length; _a++) {
        var point = pickupPoints_1[_a];
        if (!visitedPickupPoints.has(point))
            return false;
    }
    for (var _b = 0, dropPoints_1 = dropPoints; _b < dropPoints_1.length; _b++) {
        var point = dropPoints_1[_b];
        if (!visitedDropPoints.has(point))
            return false;
    }
    return true;
}
var pickups = new Set(['A', 'B']);
var dropoffs = new Set(['C', 'D']);
var warehouses = new Set(['W']);
var trips1 = [['A', 'W'], ['B', 'W'], ['W', 'C'], ['W', 'D']];
var trips2 = [['A', 'W1'], ['B', 'W2'], ['W3', 'C'], ['W4', 'D']];
console.log("Trips 1 are legit:", areLegitTrips(trips1, pickups, dropoffs, warehouses));
console.log("Trips 2 are legit:", areLegitTrips(trips2, pickups, dropoffs, warehouses));
