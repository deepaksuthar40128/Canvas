const fs = require('fs');
fs.readFile('india.json', (err, data) => {
    if (err) {
        console.error(err);
    }
    let coordinates = [];
    data = JSON.parse(data.toString('utf-8'));
    data = data.features; 
    data.forEach(state => {
        let subItem = state.geometry.coordinates;
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
    for (let i = 0; i < coordinates.length; i += 90) {
        newCoordinates.push(coordinates[i]);
    }
    fs.writeFileSync('india.js', `const india = ${JSON.stringify(newCoordinates)}; export default india;`)

})