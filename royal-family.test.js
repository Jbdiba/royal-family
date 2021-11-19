const { test, expect } = require('@jest/globals')
const Royal = require('./royal-family')

describe('Royal class', () => {
    
    test('has name', () => {
        //stub constructor with the name Elizabeth
        const testRoyal = new Royal('Elizabeth')
        //spy on contructor to see that it has the property name
        //with the value Elizabeth (str)
        expect(testRoyal.name).toBe('Elizabeth')
    })

    test('has parents', () => {
        //stub with two parents
        let william = {name:"William", parents:null}
        let charlotte = {name:"Charlotte", parents:null}
        const testRoyal = new Royal('Elizabeth',[william,charlotte])
        expect(testRoyal.parents).toStrictEqual([william,charlotte])
        //test null parents
        const testRoyal2 = new Royal('Caitlin',null)
        expect(testRoyal2.parents).toStrictEqual(null)
    })

    test('child of', () => {
        //stub with two parents
        let william = {name:"William", parents:null}
        let charlotte = {name:"Charlotte", parents:null}
        const testRoyal = new Royal('Elizabeth',[william,charlotte])
        expect(testRoyal.childOf()).toBe("William & Charlotte")
    })

})
