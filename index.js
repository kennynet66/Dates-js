// const time = () => {
    
// };

// time();

class save {
    constructor() {}

    newClass(){
        console.log("hello");
    }

    getDate(){
        return Date.now()
    }
}

const Save = new save();

console.log(Save.getDate())