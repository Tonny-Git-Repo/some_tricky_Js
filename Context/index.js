//infinite Currying with function

const obj= {
    total: 0,
    add(a){
       this.total+=a;
       console.log(this.total)
       return this;
    },
    multiply(m){
        if(this.total== 0){
          this.total+=1;
        }

        this.total*=m
        console.log(this.total)
        return this;
        
    },
    divide(d){
        this.total/=d
        console.log(this.total)
        return this;
    },
    substract(s){
        this.total-=s;
        console.log(this.total)
        return this;
    }

}

const result = obj.substract(10).add(5).multiply(30).divide(10)
console.log(result.total)
console.log("------")
//infinite Currying simple

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}

console.log(add(1)(2)(3)(4)(5)(6)())


console.log("------")
//memotizer
function memoriseDummy(fn, context){
    const res = {};
    return function(...args){
        let dummyCache = JSON.stringify(args);
        if(!res[dummyCache]){

            res[dummyCache] = fn.call(  context || this, ...args);
        }
        
        return res[dummyCache]
    }
}


const dummy = (numb1, numb2) =>{
    for(let i =1 ; i <= 1000000000.; i++){}
    return numb1 +numb2
}
const memorizedDummy = memoriseDummy(dummy);

console.time("--before--")
console.log(memorizedDummy(9886,9987));
console.timeEnd("--before--")

console.time("--before--")
console.log(memorizedDummy(9886,9987));
console.timeEnd("--before--")