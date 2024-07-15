export function calculateTax(earnings) {
  try {
    if (earnings <= 12000) {
      return 0;
    } else if (earnings <= 36000) {
      return earnings * 0.2;
    } else if (earnings > 36000) {
      return earnings * 0.4;
    } else if (earnings <= 0) {
      throw new Error("Earnings have to be greater than zero");
    } else if (isNaN(earnings)) {
      throw new Error("The value entered is not a number");
    } else {
      throw new Error("Error calculating tax");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
