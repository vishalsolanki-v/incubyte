import { describe, expect, it } from "vitest";
import { add } from "./stringCalculator";

describe("First Test case for Empty String",()=>{
    it("should return 0 if string is empty",()=>{
        expect(add("")).toBe(0);
    })
     it("should return sum of 123",()=>{
        expect(add("123")).toBe(6);
    })
})