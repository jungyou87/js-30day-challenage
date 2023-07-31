var status = 
    // 'Green';
    // 'Yellow';
    'Red';
var emergencyVehicle = 
    // true;
    false;
var isInIntersection = 
    // true;
    false;

if ((status == 'Green' && !emergencyVehicle) || isInIntersection) {
    console.log('You can drive');
} else if (status == 'Yellow' && !emergencyVehicle && !isInIntersection) {
    console.log('Prepare to stop');
} else if (status == 'Red' || emergencyVehicle && !isInIntersection) {
    console.log('Do not drive');
}

// Results
// Light, Emergency, Intersection
// 'G, T, T' >> 'You can drive'
// 'G, F, T' >> 'You can drive'
// 'G, T, F' >> 'Do not drive'
// 'G, F, F' >> 'You can drive'

// 'Y, T, T' >> 'You can drive'
// 'Y, F, T' >> 'You can drive'
// 'Y, T ,F' >> 'Do not drive'
// 'Y, F, F' >> 'Prepare to stop'

// 'R, T, T' >> 'You can drive;
// 'R, F, T' >> 'You can drive'
// 'R, T ,F' >> 'Do not drive'
// 'R, F, F' >> 'Do not drive'