/**
 * Created by Admin on 5/27/16.
 */
var _ = require('lodash')
var newarr = [];
var firstarr = [];

function permute(str) {

    newstr = str;
    do {
        newstr = newstr.slice(1) + newstr[0];
        firstarr.push(newstr)

    } while (newstr !== str);

  //  console.log(firstarr)

    for (var e in firstarr) {
       permutearr(firstarr[e],1, firstarr[e])
    }
    console.log(_.uniq(newarr));
    console.log('Total Permutations: ' + _.uniq(newarr).length)
    return _.uniq(newarr);

}

function permutearr(str, chars, org) {
   // if (chars === undefined) chars=1;
    var first = str.slice(0, chars);
    var permuted;
    var newstr = str.slice(chars);
    do {
        newstr = newstr.slice(1) + newstr[0];
        permuted = first + newstr;
        if (chars < str.length-1) {
            newarr.push(permuted);
            permutearr(permuted, chars + 1, org);
        }
    } while (permuted !== str);



}

permute('abcd');



