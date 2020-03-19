

function slugerion(...args){
    return args.join(' ').split(' ').join('-');
}


module.exports = {slugerion}

console.log('hello slugerion')