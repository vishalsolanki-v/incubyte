import { describe, expect, it } from "vitest";
import { add, validateNumberString } from "./stringCalculator";

describe("String Calculator",()=>{
    it("should return 0 if string is empty",()=>{
        expect(add("")).toBe(0);
    })
     it("should return sum of 1,2,3",()=>{
        expect(add("1,2,3")).toBe(6);
    })
    it("should validate number string for all non numeric character expect comma and space",()=>{
        expect(validateNumberString("1,2,3 3 3,3")).toBe(false)
        expect(validateNumberString("1,2,3 ?3 3,3")).toBe(true)
    })
    it("should handle single number", () => {
    expect(add("5")).toBe(5);
  });
 it("should handle large numbers", () => {
    expect(add("100000,200000,300000")).toBe(600000);
  });
})