var registration = /(?:(?:2[1-9]|[3-9][0-9])|(?:0[1-9]|1[0-9]))(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[12][0-9]{6}/g
var phone = /(?:010[\-' '\,]?[0-9]{4}|01[16789][\-' '\,]?[0-9]{3})[\-' '\,]?[0-9]{4}/g
var email = /(?:[0-9a-zA-Z][-_.*0-9a-zA-Z]{3,19})@(?:[0-9a-zA-Z][-_.*0-9a-zA-Z]+)\.(?:com|net|co\.kr|ne\.kr|or\.kr|re\.kr|pe\.kr|go\.kr|mil\.kr|ac\.kr|hs\.kr|ms\.kr|es\.kr|sc\.kr|kg\.kr)/g
var test = '0105654709374989387293971004271831809029384940321217831500104680709306403032648420';
var test2 = '0105654709374989387293971004 27183180902938494032121783150010-4680-709306403032648420'
var test3 = 'asdi aoisdjoasi@hanmail.comjdoajsodi234234234joi0104@naver.com3840293840'
console.log(test.match(registration));
console.log(test.match(phone));
console.log(test2.match(registration));
console.log(test2.match(phone));
console.log(test3.match(email));
