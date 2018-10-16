var object =[5, [22], [[14]], [[4]],[5,6]]
    result = Object.keys(object).reduce(function (r, k) {
        return r.concat(k, object[k]);
    }, []);
    
console.log(result);
