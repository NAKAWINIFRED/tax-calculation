import { assert } from "chai";
import { calculateTax } from "../calculate-tax.js";
import { describe, it } from "mocha";

describe('taxcalculation' , function() {
    it('should return no pay for earns less than 12000' , function(){
      assert.equal(calculateTax(12000), 0)
    });
    
});