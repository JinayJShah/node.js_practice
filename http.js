const url =  require('url');

const myUrl = new URL ('http://www.google.com:1000/hello.html? id=hftugb&name =fv');

// serialized url

console.log(myUrl.href);
console.log(myUrl.toString());


//host (root domain)

console.log(myUrl.host);
//host name (does not include port)
console.log(myUrl.hostname);

//path name

console.log(myUrl.pathname);

//serialize query

console.log(myUrl.search);
// parameters objects

console.log(myUrl.searchParams);

// add params

myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

//loopthrough param

myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));


