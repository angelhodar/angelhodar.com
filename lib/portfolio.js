const extendProjectsData = async (projects) => {
  return await Promise.all(
    projects.map(async (p) => {
      const response = await fetch(
        `https://api.github.com/repos/angelhodar/${p.name}`
      );
      const { forks, stargazers_count } = await response.json();
      p.forks = forks;
      p.stargazers_count = stargazers_count;
      return p;
    })
  );
};

const getPortfolioData = async () => {
  const response = await fetch(
    "https://gitconnected.com/v1/portfolio/angelhodar"
  );
  let data = await response.json();
  data.projects = await extendProjectsData(data.projects);
  return data;
};

export default getPortfolioData;
