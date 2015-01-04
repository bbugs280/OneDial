/**
 * Created by vincent on 2/1/15.
 */
var KEYPAD = {};

KEYPAD['2']='ABC';
KEYPAD['3']='DEF';
KEYPAD['4']='GHI';
KEYPAD['5']='JKL';
KEYPAD['6']='MNO';
KEYPAD['7']='PQRS';
KEYPAD['8']='TUV';
KEYPAD['9']='WXYZ';

// When Input (keys) = 2
//    [A, B, C] n=3
//
// When Input (keys) = 23
//    [AD, AE, AF, BD, BE, BF, CD, CE, CF]  n=3x3=9
//
// When Input (keys) = 27
//    [AP, AQ, AR, AS, BP, BQ, BR, BP, CP, CQ, CS, CP]  n=3x4=12
//
// When Input (keys) = 234
//    [ADG,ADH,ADI, AEG,AEH,AEI,AFG,AFH,AFI,
// BDG,BDH,BDI,BEG,BEH,BEI,BFG,BFH,BFI,
// CDG,CDH,CDI, CEG,CEH,CEI, CFG,CFH,CFI] n=3X3x3=27

// When Input (keys) = 237
//    [ADP,ADQ,ADR,ADS,AEP,AEQ,AER,AES,AFP,AFQ,AFR,AFS,BDP,BDQ,BDR,BDS,BEP,BEQ,BER,BES,BFP,BFQ,BFR,BFS,CDP,CDQ,CDR,CDS,CEP,CEQ,CER,CES,CFP,CFQ,CFR,CFS] n=3x3x4=36

function generateT9Out(keys){
    var outputs = [];
    var currentCombination = 0;

    //Calc how many combination
    for (var i=keys.length-1;i>=0;i--){
        var keypad = KEYPAD[keys[i]];

//        totalOfCombination = keypad.length * totalOfCombination;
//        console.log("currentCombination " + currentCombination);
        outputs=fillOutput(outputs, keypad, currentCombination);
        if (currentCombination ==0){
            currentCombination = keypad.length;
        }else{
            currentCombination = currentCombination*keypad.length;
        }
    }
    console.log(" Outputs Count = "+ outputs.length);
    console.log(" Outputs = "+ outputs);
    return outputs;
}

function fillOutput(outputs, keypad, currentCombination){
    console.log("fillOutput > outputs start = "+outputs);
    if (outputs.length == 0){
        for (var i=0;i<keypad.length;i++){
            outputs.push(keypad[i]);
        }
    }else{
        console.log("fillOutput > outputs not empty = "+outputs);
        //create / duplicate elements for the next set
        outputs = fillArray(outputs, keypad.length);
//        console.log("fillOutput > fillArray = "+outputs);
        for (var j=0;j<keypad.length;j++){
//            console.log("fillOutput > keypad loop start = "+ keypad[j]);
            var startIndex = (j)*currentCombination;
            var endIndex = startIndex+currentCombination;
//            console.log("Range of Index");
//            console.log(startIndex);
//            console.log(endIndex);
            for (var i=startIndex;i<endIndex;i++){
//                console.log("index = "+ i);
//                console.log("output before element = "+ outputs[i]);
                outputs[i] = keypad[j]+outputs[i];
//                console.log("output element = "+ outputs[i]);
            }
        }

    }
//    console.log("fillOutput > outputs end = "+outputs);
    return outputs;
}

function fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr = arr.concat(value);
    }
    return arr;
}