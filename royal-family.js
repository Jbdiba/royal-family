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

let elizabethTwo = new Royal ("ElizabethTwo", [george , elizabeth]);
console.log(elizabethTwo.childOf());

let philip = new Royal ("Philip", []);

let charles = new Royal ("Charles", [philip , elizabethTwo]);
console.log(charles.childOf());

let diana = new Royal ("Diana", []);

let william = new Royal ("William", [charles , diana]);
console.log(william.childOf());