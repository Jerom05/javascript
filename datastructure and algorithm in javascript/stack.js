let stack =[]
let words= 'myWords'
let rwords=''
for(let i=0;i<words.length;i++){
    stack.push(words[i]);
}
for(i=0;i<words.length;i++){
    rwords += stack.pop();
}

if(rwords ===words){
    console.log(`${words} is a palindrome`)
}else{
    console.log(`${words} is not a palindrome`)
}


const Stack = function(){
    this.count = 0;
    this.storage = {};

    this.push= (value)=>{
        this.storage[this.count] = value;
        this.count++;
    }
    this.pop = (value)=>{
        if(this.count===0){
            return undefined
        }
        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    this.size = ()=>{
        return this.count;
    }

    this.peek = ()=>{
        return this.storage[this.count-1]
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2)
console.log(myStack.peek())