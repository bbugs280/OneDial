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
// When Input (keys) = 234
//    [ADG,ADH,ADI, AEG,AEH,AEI,AFG,AFH,AFI, BDG,BDH,BDI,BEG,BEH,BEI,BFG,BFH,BFI,CDG,CDH,CDI, CEG,CEH,CEI, CFG,CFH,CFI] n=3X3x3=27

// When Input (keys) = 237
//    [ADG,ADH,ADI, AEG,AEH,AEI,AFG,AFH,AFI, BDG,BDH,BDI,BEG,BEH,BEI,BFG,BFH,BFI,CDG,CDH,CDI, CEG,CEH,CEI, CFG,CFH,CFI] n=3x3x4=36

function generateT9Out(keys){
    var outputs = [];

    if (keys){
        for (var i=0;i< keys.length;i++){
            console.log(KEYPAD[keys[i]]);
            var keypad = KEYPAD[keys[i]];
            for (var j=0;j<keypad.length;j++){
                console.log("keypad = "+keypad[j]);
                //Check Output
                var letter = keypad[j];


                if (keys.length==1){
                    outputs.push(keypad[j]);
                    console.log("keypad = "+keypad[j] +" pused");
                }else{
                    for (var x in outputs){

                    }
                }
            }
        }
    }
    console.log(" Outputs = "+ outputs);
    return outputs;
}

