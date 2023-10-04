const contracts = {
  marketplace: {
    0: "addr_test1wryrfle2apezn8swpdq8f3ug8ulxdkckm4matgntdxq77zgx8cpwn",
    1: "",
  },
  oracle: {
    0: "addr_test1wpeawe0aq035v4p2rndkkgaslnauf8uzd9fgcckkz0eycjqwxctk7",
    1: "",
  },
  escrow: {
    0: "addr_test1wzma95ht2kzq0xr2r64ncseygz7xkmy8a8vnsxfqn3nr3yc8ys43c",
    1: "",
  },
};

export default (() => {
  let result = {};
  for (const key in contracts) {
    result[key] = contracts[key][process.env.NEXT_PUBLIC_NETWORK_ID];
  }

  return result;
})();
