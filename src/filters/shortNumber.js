const SI = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

const shortNumber = (number, precision = 2) => {
    number = Number.parseFloat(number);

    if (number < 1) {
        return number;
    }

    const tier = Math.floor(Math.log10(number) / 3);

    if (tier === 0) {
        return number;
    }

    const suffix = SI[tier];
    const scale = 10 ** (tier * 3);
    const scaled = number / scale;
    const formatted = Number(scaled.toFixed(precision)) + suffix;

    return formatted;
};

export default shortNumber;
