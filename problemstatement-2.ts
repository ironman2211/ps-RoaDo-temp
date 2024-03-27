type Point = string;
type Trip = [Point, Point];

function isValidTrip(trip: Trip, pickupPoints: Set<Point>, dropPoints: Set<Point>, warehouses: Set<Point>): boolean {
    const [start, end] = trip;

    if (!(pickupPoints.has(start) || dropPoints.has(start) || warehouses.has(start))) return false;
    if (!(pickupPoints.has(end) || dropPoints.has(end) || warehouses.has(end))) return false;

    if (start === end) return false;

    return true;
}

function areLegitTrips(trips: Trip[], pickupPoints: Set<Point>, dropPoints: Set<Point>, warehouses: Set<Point>): boolean {
    const visitedPickupPoints = new Set<Point>();
    const visitedDropPoints = new Set<Point>();

    for (const trip of trips) {
        const [start, end] = trip;

        if (!isValidTrip(trip, pickupPoints, dropPoints, warehouses)) return false;

        if (pickupPoints.has(start)) visitedPickupPoints.add(start);
        if (dropPoints.has(end)) visitedDropPoints.add(end);
    }

    for (const point of pickupPoints) {
        if (!visitedPickupPoints.has(point)) return false;
    }
    for (const point of dropPoints) {
        if (!visitedDropPoints.has(point)) return false;
    }

    return true;
}
const pickups: Set<Point> = new Set(['A', 'B']);
const dropoffs: Set<Point> = new Set(['C', 'D']);
const warehouses: Set<Point> = new Set(['W']);

const trips1: Trip[] = [['A', 'W'], ['B', 'W'], ['W', 'C'], ['W', 'D']];
const trips2: Trip[] = [['A', 'W1'], ['B', 'W2'], ['W3', 'C'], ['W4', 'D']];

console.log("Trips 1 are legit:", areLegitTrips(trips1, pickups, dropoffs, warehouses)); 
console.log("Trips 2 are legit:", areLegitTrips(trips2, pickups, dropoffs, warehouses)); 
