import { shuffle } from "utils";

// test case for shuffle
describe('shuffle', () => {
    it('returns an array with the same length after shuffle', () =>{
        const array = [1,2,3]
        shuffle(array)
        expect(array).toHaveLength(3)   //make sure that the array after shuffle is the same
    })

    it('returns an array with the same content after shuffle', () =>{
        const array = [1,2,3,4]
        shuffle(array)
        console.log(array)
        expect(array).toContain(1)      //make sure that the content of the array is the same after shuffle
        expect(array).toContain(2)
        expect(array).toContain(3)
        expect(array).toContain(4)
    })
})