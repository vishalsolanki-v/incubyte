import { describe, expect, it } from "vitest";
import { add, validateNumberString } from "./stringCalculator";

describe("First Test case for Empty String",()=>{
    it("should return 0 if string is empty",()=>{
        expect(add("")).toBe(0);
    })
     it("should return sum of 1,2,3",()=>{
        expect(add("1,2,3")).toBe(6);
    })
    it("should validate string",()=>{
        expect(validateNumberString("1,2,3 3 3,3")).toBe(false)
        expect(validateNumberString("1,2,3 ?3 3,3")).toBe(true)
    })
})