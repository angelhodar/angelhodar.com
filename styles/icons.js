import {
  SiCplusplus,
  SiCsharp,
  SiJava,
  SiJavascript,
  SiPython,
  SiReact,
  SiVueDotJs,
  SiNodeDotJs,
  SiDocker,
  SiMongodb,
  SiUnity,
  SiUnrealengine,
  SiHtml5,
  SiNextDotJs,
  SiPostgresql,
  SiGit,
  SiUbuntu,
  SiFirebase,
} from "react-icons/si";

const icons = [
  {
    name: "react",
    icon: SiReact,
    lightColor: "blue.300",
    darkColor: "blue.300"
  },
  {
    name: "vue",
    icon: SiVueDotJs,
    lightColor: "green.400",
    darkColor: "green.400"
  },
  {
    name: "nodejs",
    icon: SiNodeDotJs,
    lightColor: "green.600",
    darkColor: "green.600"
  },
  {
    name: "docker",
    icon: SiDocker,
    lightColor: "blue.500",
    darkColor: "blue.500"
  },
  {
    name: "mongodb",
    icon: SiMongodb,
    lightColor: "green.500",
    darkColor: "green.500"
  },
  {
    name: "python",
    icon: SiPython,
    lightColor: "yellow.300",
    darkColor: "yellow.300"
  },
  {
    name: "javascript",
    icon: SiJavascript,
    lightColor: "black",
    darkColor: "white"
  },
  {
    name: "java",
    icon: SiJava,
    lightColor: "orange.500",
    darkColor: "orange.500"
  },
  {
    name: "csharp",
    icon: SiCsharp,
    lightColor: "purple.600",
    darkColor: "purple.600"
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
    darkColor: "orange.500"
  },
  {
    name: "nextjs",
    icon: SiNextDotJs,
    lightColor: "gray.700",
    darkColor: "gray.200"
  },
  {
    name: "postgresql",
    icon: SiPostgresql,
    lightColor: "blue.800",
    darkColor: "blue.500",
  },
  {
    name: "firebase",
    icon: SiFirebase,
    lightColor: "orange.400",
    darkColor: "orange.400"
  },
  {
    name: "ubuntu",
    icon: SiUbuntu,
    lightColor: "orange.500",
    darkColor: "orange.500"
  },
  {
    name: "git",
    icon: SiGit,
    lightColor: "orange.700",
    darkColor: "orange.700"
  },
];

const getSkillIcon = (name) => {
  return icons.find((icon) => icon.name === name);
};

export { getSkillIcon };
