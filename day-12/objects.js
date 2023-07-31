let cars = {
    "Honda" : "Crv",
    "Ford" : "F150",
    "Jeep" : 'Wrangler',
    "Chrysler" : "Pacifica"
}

for (const make in cars) {
    if (Object.hasOwnProperty.call(cars, make)) {
        const car = cars[make];
        console.log(car);
        if (make==='Ford') {
            delete cars[make];
            break;
        }
    }
}

console.log(cars);