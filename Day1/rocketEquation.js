let moduleArray = [
    128270,
    147113,
    61335,
    78766,
    119452,
    116991,
    70640,
    145446,
    117606,
    135046,
    70489,
    131072,
    67955,
    66424,
    126450,
    101418,
    90225,
    66004,
    136510,
    61695,
    143880,
    53648,
    58699,
    119214,
    83838,
    95895,
    66388,
    66755,
    120223,
    79310,
    93828,
    136686,
    108958,
    140752,
    85343,
    103800,
    126602,
    147726,
    88228,
    83380,
    77877,
    61922,
    75448,
    67095,
    60888,
    136692,
    63271,
    113742,
    68854,
    86904,
    110243,
    104642,
    141854,
    71205,
    76729,
    138540,
    134142,
    62517,
    63306,
    71363,
    126146,
    74749,
    76716,
    59135,
    62449,
    110575,
    134030,
    84072,
    122698,
    96891,
    69976,
    94501,
    149180,
    57944,
    64873,
    68192,
    138238,
    119185,
    137570,
    79274,
    111040,
    142586,
    120872,
    63586,
    78628,
    122704,
    147951,
    102593,
    105562,
    55180,
    64450,
    87466,
    112522,
    60000,
    149885,
    52154,
    80633,
    61867,
    86380,
    136024
];
let fuel = [];
let fuelTotal; //3232358
function fuelEquation(mass){
    let fuel = Math.floor(mass/3)-2; // calculates initial fuel for module
    let fuelX = fuel;
    let fuelY;
    while (fuelX > 0) { // calculates additional fuel required for mass of fuel
        fuelY = Math.floor(fuelX/3)-2;
        if (fuelY <= 0){
            return fuel;
        };
        fuel += fuelY;
        fuelX = fuelY;
    }
    return fuel;
}
function fuelUpper(){
    moduleArray.forEach(mass => fuel.push(fuelEquation(mass)));
    function sum(total, num){
        return total + num;
    }
    fuelTotal = fuel.reduce(sum);
    console.log("Fuel for Modules: " + fuelTotal);
}
fuelUpper();
// Above used to calculate fuel needed for rocket.