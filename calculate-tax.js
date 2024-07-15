export function calculateTax(earnings){
    if (earnings <= 12000) {
        return 0;
    }
    else if (earnings <= 36000) {
        return earnings * 0.2;
    }
    else if (earnings > 36000) {
        return earnings * 0.4;
    }

}