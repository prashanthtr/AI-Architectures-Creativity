// Contains the agent API that proivdes the functionality for different
// kinds of agents.



// Turn taking agents.









// simple retrograde.

// input1: [ [1 3 3]]
// input2: [ [[1 2 3] [2 3 4]] ]

// output1: [ [1 3 3]]
//outpout2: [ [[1 3 3] [2 2 4]] ]

function retrograde (arr){

    //var getRandomGesture = randGest();
    var retro = [];
    for(i = 0; i < arr.length; i++){
        retro.push([arr[i][0], arr[arr.length-i-1][1], arr[i][2] ]);
    }
    return retro;

}



// Simulateneous playing agents.
