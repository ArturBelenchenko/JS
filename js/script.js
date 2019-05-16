var text = 'Hello World!';
console.log(text);

var num = 12345;
console.log(num);

var bolean = 'true || false';
console.log(bolean);

var arr = [1, 2, 3, 4, 5];
console.log(arr);

var obj = {firstname:'Сергей', lastname:'Алексеенко'};
console.log(Object.values(obj));

var n = 12.3456789;
var res = n.toFixed(2);
console.log(res);

var a = 10;
var b = a++;
console.log(a);
console.log(b);
var a = 10;
var b = ++a;
console.log(a);
console.log(b);

var rn = 'rn';
var tn = 8;
var qt = true;
tn += 2;
console.log(tn);
qt += 1;
console.log(qt);
rn += false;
console.log(rn);

var we = 7;
we -= 2;
console.log(we);
var ty = 30;
ty /= 3;
console.log(ty);
var fg = 75;
fg %= 4;
console.log(fg);

console.log(Math.PI);

var x = Math.round(89.279);
console.log(x);

console.log(Math.floor(Math.random()*10));

console.log(Math.pow(2,5));

var uh = 'Алексей';
console.log(uh.length);

var str = 'Сергеенко Виктор Владимирович';
console.log(str.indexOf('Владимирович'));

var strn = 'Сергей Виктор Александр';
if (~strn.indexOf('тор')) {
    console.log('coincidence');
}

var strk = /Николай/;
var stre = 'Николай любит суши';
var strnw = stre.replace(strk, 'Андрей');
console.log(strnw);

var textmessage = 'Привет Олег!';
console.log(textmessage.toUpperCase());

var Str = 'ПРИВЕТ СЕРГЕЙ!';
console.log(Str.toLowerCase());



