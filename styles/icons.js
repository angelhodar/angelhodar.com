import {
  SiCplusplus,
  SiCsharp,
  SiJava,
  SiReact,
  SiNodeDotJs,
  SiDocker,
  SiMongodb,
  SiUnity,
  SiUnrealengine,
  SiHtml5,
  SiNextDotJs,
  SiPostgresql,
  SiGit,
  SiVisualstudiocode,
  SiHeroku,
  SiDigitalocean,
} from "react-icons/si";

import Image from "next/image";

const getCustomIcon = (file) => {
  return () => <Image src={`/${file}.svg`} width={50} height={50} />;
};

const icons = [
  {
    name: "react",
    icon: SiReact,
    lightColor: "blue.300",
    darkColor: "blue.300",
  },
  {
    name: "vue",
    icon: getCustomIcon("vue"),
    lightColor: "green.400",
    darkColor: "green.400",
  },
  {
    name: "nodejs",
    icon: SiNodeDotJs,
    lightColor: "green.600",
    darkColor: "green.600",
  },
  {
    name: "docker",
    icon: SiDocker,
    lightColor: "blue.500",
    darkColor: "blue.500",
  },
  {
    name: "mongodb",
    icon: SiMongodb,
    lightColor: "green.500",
    darkColor: "green.500",
  },
  {
    name: "python",
    icon: getCustomIcon("python"),
    lightColor: "#ffd94a",
    darkColor: "#ffd94a",
  },
  {
    name: "javascript",
    icon: getCustomIcon("javascript"),
    lightColor: "black",
    darkColor: "white",
  },
  {
    name: "java",
    icon: SiJava,
    lightColor: "orange.500",
    darkColor: "orange.500",
  },
  {
    name: "csharp",
    icon: SiCsharp,
    lightColor: "purple.600",
    darkColor: "purple.600",
  },
  {
    name: "cplusplus",
    icon: SiCplusplus,
    lightColor: "blue.600",
    darkColor: "blue.600",
  },
  {
    name: "unity",
    icon: SiUnity,
    lightColor: "black",
    darkColor: "white",
  },
  {
    name: "unrealengine",
    icon: SiUnrealengine,
    lightColor: "black",
    darkColor: "white",
  },
  {
    name: "html",
    icon: SiHtml5,
    lightColor: "orange.500",
    darkColor: "orange.500",
  },
  {
    name: "nextjs",
    icon: SiNextDotJs,
    lightColor: "gray.700",
    darkColor: "gray.200",
  },
  {
    name: "postgresql",
    icon: SiPostgresql,
    lightColor: "blue.800",
    darkColor: "blue.500",
  },
  {
    name: "firebase",
    icon: getCustomIcon("firebase"),
    lightColor: "#fbc125",
    darkColor: "#fbc125",
  },
  {
    name: "git",
    icon: SiGit,
    lightColor: "orange.500",
    darkColor: "orange.500",
  },
  {
    name: "vscode",
    icon: SiVisualstudiocode,
    lightColor: "blue.500",
    darkColor: "blue.500",
  },
  {
    name: "digitalocean",
    icon: SiDigitalocean,
    lightColor: "blue.400",
    darkColor: "blue.400",
  },
  {
    name: "heroku",
    icon: SiHeroku,
    lightColor: "purple.600",
    darkColor: "purple.600",
  },
];

const getSkillIcon = (name) => {
  return icons.find((icon) => icon.name === name);
};

export { getSkillIcon };
