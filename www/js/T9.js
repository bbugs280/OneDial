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
//    [ADG,ADH,ADI, AEG,AEH,AEI,AFG,AFH,AFI, BDG,BDH,BDI,BEG,BEH,BEI,BFG,BFH,BFI,CDG,CDH,CDI, CEG,CEH,CEI, CFG,CFH,CFI] n=3x3x4=36

function generateT9Out(keys){
    var outputs = [];
    var elementSize = keys.length;
    var totalOfCombination = 0;

    //Calc how many combination
    for (var i=keys.length-1;i>=0;i--){
        var keypad = KEYPAD[keys[i]];
//        totalOfCombination = keypad.length * totalOfCombination;
        fillOutput(outputs, keypad);
    }
    console.log("totalOfCombination = "+totalOfCombination);



//    for (var x=0;x<elementSize;x++){
//        for (var y=0;y<keys.length;y++){
//            console.log(KEYPAD[keys[y]]);
//            var keypad = KEYPAD[keys[y]]
//            for (var i=0;i<keypad.length;i++){
//                outputs[];
//            }
//        }
//    }

//    if (keys){
//        for (var i=0;i< keys.length;i++){
//            console.log(KEYPAD[keys[i]]);
//            var keypad = KEYPAD[keys[i]];
//            for (var j=0;j<keypad.length;j++){
//                console.log("keypad = "+keypad[j]);
//                //Check Output
//                var letter = keypad[j];
//
//
//                if (keys.length==1){
//                    outputs.push(keypad[j]);
//                    console.log("keypad = "+keypad[j] +" pused");
//                }else{
//                    for (var x in outputs){
//
//                    }
//                }
//            }
//        }
//    }
    console.log(" Outputs = "+ outputs);
    return outputs;
}

function fillOutput(outputs, keypad){
    console.log("fillOutput > outputs start = "+outputs);
    if (outputs.length == 0){
        for (var i=0;i<keypad.length;i++){
            outputs.push(keypad[i]);
        }
    }else{
        console.log("fillOutput > outputs not empty = "+outputs);
        //create / duplicate elements for the next set
        for (var i=0;i<outputs.length;i++){
            
        }

        for (var i=0;i<outputs.length;i++){
            console.log("fillOutput > outputs element loop start = "+outputs);
            var element = outputs[i];
            for (var j=0;j<keypad.length;j++){
                console.log("fillOutput > keypad loop start = "+element + keypad[j]);
                element = keypad[j] + element;
                outputs[i] = element;
            }
        }
    }
    console.log("fillOutput > outputs end = "+outputs);

}
