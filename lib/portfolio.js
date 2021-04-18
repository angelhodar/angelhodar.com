const getPortfolioData = async () => {
  const response = await fetch(
    "https://gitconnected.com/v1/portfolio/angelhodar"
  );
  return await response.json();
};

export default getPortfolioData;
