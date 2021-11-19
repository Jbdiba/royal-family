class Royal {
    constructor(name,parents){
        this.name = name,
        this.parents = parents,
        this.childOf = function () {
            return this.parents.map(parent => parent.name).join(' & ') || "unknown"
        }
    } 
}
module.exports = Royal

let george = new Royal ("George", []);
console.log (george.childOf());

let elizabeth = new Royal ("Elizabeth" , []);
console.log (elizabeth.childOf());

let elizabethTwo = new Royal ("Elizabeth2", ["George" , "Elizabeth"]);
console.log(elizabeth2.childOf());

let william = new Royal ("William", ["Charles" , "Diana"]);
console.log(william.childOf());

let charlotte = new Royal ("Charlotte", ["William" , "Catherine"]);
console.log(charlotte.childOf());orge