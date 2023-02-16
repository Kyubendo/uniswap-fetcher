export const fetchPairs = () => {
  return fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        pairs {
          id
          token0 {
            id
          }
          token1 {
            id
          }
        }
      }`,
    }),
  });
};
