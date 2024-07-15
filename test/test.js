import { assert } from "chai";
import { calculateTax } from "../calculate-tax.js";
import { describe, it } from "mocha";

describe("taxcalculation", function () {
  it("should return no pay for earns less than 12,000", function () {
    assert.equal(calculateTax(12000), 0);
  });
  it("should return 20% tax for earns between 12,000 and  36,000", function () {
    assert.equal(calculateTax(30000), 0.2 * 30000);
  });
  it("should return 40% tax for earns higher than 36,000", function () {
    assert.equal(calculateTax(40000), 0.4 * 40000);
  });
  
});
