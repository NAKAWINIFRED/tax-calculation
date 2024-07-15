import { assert } from "chai";
import { calculateTax } from "../calculate-tax.js";
import { describe, it } from "mocha";

describe('taxcalculation' , function() {
    it('should return no pay for earns less than 12000' , function(){
      assert.equal(calculateTax(12000), 0)
    });
    it('should return 20% tax for earns between 12000 and  36000' , function(){
        assert.equal(calculateTax(30000), 0.2*30000)
      });
});