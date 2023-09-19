import BigNumber from "bignumber.js";

const DEFAULT_FORMAT = {
  prefix: "",
  decimalSeparator: ".",
  groupSeparator: ",",
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: " ",
  fractionGroupSize: 0,
  suffix: "",
};

export const toFormat = (num, ftm) => {
  const x = new BigNumber(num);
  BigNumber.config({ FORMAT: Object.assign({}, DEFAULT_FORMAT, ftm) });
  return x.toFormat();
};
