const getPortfolioData = async () => {
  const response = await fetch(
    "https://gitconnected.com/v1/portfolio/angelhodar"
  );
  const data = await response.json();
  return data;
};

export default getPortfolioData;
