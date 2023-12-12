const fs = require('fs');
fs.readFile('world.json', (err, data) => {
    if (err) {
        console.error(err);
    }
    let coordinates = [];
    data = JSON.parse(data.toString('utf-8'));
    console.log(data);
    data.forEach(item => {
        let subItem = item.geo_shape.geometry.coordinates;
        subItem.forEach(subArray => {
            if (subArray.length == 2) {
                //coordinate
                coordinates.push(subArray);
            }
            else {
                subArray.forEach(subArray2 => {
                    if (subArray2.length == 2) {
                        //coordinate
                        coordinates.push(subArray2);
                    }
                    else {
                        subArray2.forEach(subArray3 => {
                            if (subArray3.length == 2) {
                                //coordinate
                                coordinates.push(subArray3);
                            }
                       })
                    }
                })
            }
        })
    })
    let newCoordinates = [];
    for (let i = 0; i < coordinates.length; i+=65){
    newCoordinates.push(coordinates[i]);
    }
    fs.writeFileSync('world.js',`const world = ${JSON.stringify(newCoordinates)}; export default world;`)

})