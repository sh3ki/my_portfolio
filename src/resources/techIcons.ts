import { IconType } from "react-icons";

// Programming Languages
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus,
  SiC,
  SiGo,
  SiRust,
  SiRuby,
  SiPhp,
  SiSwift,
  SiKotlin,
  SiDart,
  SiScala,
  SiGnubash
} from "react-icons/si";

import { LuCloudSun, LuMicrochip} from "react-icons/lu";

import { DiAtom } from "react-icons/di";

import { BiLogoMicrosoftTeams } from "react-icons/bi";

import { TbBrandReactNative, TbBrandCSharp, TbSql, TbBrandGooglePodcasts, TbSquareLetterBFilled, TbSquareRoundedLetterXFilled} from "react-icons/tb";

import { VscAzure, VscVscode } from "react-icons/vsc";

import { 
  FaJava,
  FaAws
} from "react-icons/fa";

// Frontend Development
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiAngular,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiVite
} from "react-icons/si";

// Backend Development
import {
  SiNodedotjs,
  SiDeno,
  SiExpress,
  SiNestjs,
  SiKoa,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiLaravel,
  SiRubyonrails,
  SiDotnet,
  SiGin
} from "react-icons/si";

// Databases
import {
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiOracle,
  SiMongodb,
  SiApachecouchdb,
  SiApachecassandra,
  SiFirebase,
  SiRedis,
  SiCockroachlabs
} from "react-icons/si";

// Cloud Platforms
import {
  SiGooglecloud,
  SiDigitalocean,
  SiHeroku,
  SiHostinger,
  SiVercel,
  SiNetlify,
  SiAlibabacloud,
} from "react-icons/si";

// DevOps & Infrastructure
import {
  SiDocker,
  SiPodman,
  SiKubernetes,
  SiNomad,
  SiCircleci,
  SiGit,
  SiMercurial
} from "react-icons/si";

// Mobile Development
import {
  SiFlutter,
  SiIonic,
  SiNativescript,
  SiAndroidstudio
} from "react-icons/si";

// AI & ML
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiSpacy,
  SiHuggingface,
  SiJupyter,
  SiGooglecolab,
  SiApachespark,
  SiApachehadoop,
  SiOpenai,
} from "react-icons/si";

// IoT & Embedded
import {
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
  SiGooglecloud as SiGoogleiot,
  SiNodered,
  SiPlatformio,
} from "react-icons/si";

// Design & Prototyping
import {
  SiFigma,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva
} from "react-icons/si";

// Collaboration & Project Management
import {
  SiGithub,
  SiGitlab,
  SiAsana,
  SiClickup,
  SiNotion,
  SiBasecamp,
  SiSlack,
  SiDocusaurus,
  SiGitbook
} from "react-icons/si";

// Tools & Utilities
import {
  SiNpm,
  SiYarn,
  SiPnpm,
  SiApachemaven,
  SiGradle,
  SiComposer,
  SiPypi,
  SiIntellijidea,
  SiWebstorm,
  SiPycharm,
  SiEclipseide,
  SiApachenetbeanside,
  SiXcode,
  SiSublimetext,
  SiPostman,
  SiSwagger
} from "react-icons/si";

export const techIconLibrary: Record<string, IconType> = {
  // Programming Languages
  "javascript": SiJavascript,
  "typescript": SiTypescript,
  "python": SiPython,
  "java": FaJava,
  "csharp": TbBrandCSharp,
  "cplusplus": SiCplusplus,
  "c": SiC,
  "go": SiGo,
  "rust": SiRust,
  "ruby": SiRuby,
  "php": SiPhp,
  "swift": SiSwift,
  "kotlin": SiKotlin,
  "dart": SiDart,
  "scala": SiScala,
  "bash": SiGnubash,

  // Frontend Development
  "html5": SiHtml5,
  "css3": SiCss3,
  "sass": SiSass,
  "react": SiReact,
  "nextjs": SiNextdotjs,
  "vuejs": SiVuedotjs,
  "nuxtjs": SiNuxtdotjs,
  "angular": SiAngular,
  "jquery": SiJquery,
  "bootstrap": SiBootstrap,
  "tailwindcss": SiTailwindcss,
  "vite": SiVite,

  // Backend Development
  "nodejs": SiNodedotjs,
  "deno": SiDeno,
  "expressjs": SiExpress,
  "nestjs": SiNestjs,
  "koa": SiKoa,
  "django": SiDjango,
  "flask": SiFlask,
  "springboot": SiSpringboot,
  "laravel": SiLaravel,
  "rubyonrails": SiRubyonrails,
  "aspnetcore": SiDotnet,
  "gin": SiGin,

  // Databases
  "mysql": SiMysql,
  "postgresql": SiPostgresql,
  "sqlite": SiSqlite,
  "sqlserver": TbSql,
  "oracle": SiOracle,
  "mongodb": SiMongodb,
  "couchdb": SiApachecouchdb,
  "cassandra": SiApachecassandra,
  "firestore": SiFirebase,
  "redis": SiRedis,
  "cockroachdb": SiCockroachlabs,

  // Cloud Platforms
  "aws": FaAws,
  "gcp": SiGooglecloud,
  "azure": VscAzure,
  "digitalocean": SiDigitalocean,
  "heroku": SiHeroku,
  "hostinger": SiHostinger,
  "vercel": SiVercel,
  "netlify": SiNetlify,
  "firebase": SiFirebase,
  "alibabacloud": SiAlibabacloud,
  "ibmcloud": LuCloudSun,

  // DevOps & Infrastructure
  "docker": SiDocker,
  "podman": SiPodman,
  "kubernetes": SiKubernetes,
  "nomad": SiNomad,
  "circleci": SiCircleci,
  "azuredevops": VscAzure,
  "git": SiGit,
  "mercurial": SiMercurial,

  // Mobile Development
  "reactnative": TbBrandReactNative,
  "flutter": SiFlutter,
  "ionic": SiIonic,
  "nativescript": SiNativescript,
  "androidstudio": SiAndroidstudio,

  // AI & ML
  "tensorflow": SiTensorflow,
  "pytorch": SiPytorch,
  "opencv": SiOpencv,
  "spacy": SiSpacy,
  "huggingface": SiHuggingface,
  "jupyter": SiJupyter,
  "googlecolab": SiGooglecolab,
  "apachespark": SiApachespark,
  "hadoop": SiApachehadoop,
  "openai": SiOpenai,
  "googleai": TbBrandGooglePodcasts,
  "azurecognitive": VscAzure,

  // IoT & Embedded
  "arduino": SiArduino,
  "esp8266": SiEspressif,
  "esp32": SiEspressif,
  "raspberrypi": SiRaspberrypi,
  "blynk": TbSquareLetterBFilled,
  "thingsboard": LuMicrochip,
  "awsiot": FaAws,
  "googleiot": SiGoogleiot,
  "azureiot": VscAzure,
  "nodered": SiNodered,
  "arduinoide": SiArduino,
  "platformio": SiPlatformio,

  // Design & Prototyping
  "figma": SiFigma,
  "sketch": SiSketch,
  "axure": TbSquareRoundedLetterXFilled,
  "photoshop": SiAdobephotoshop,
  "illustrator": SiAdobeillustrator,
  "canva": SiCanva,

  // Collaboration & Project Management
  "github": SiGithub,
  "gitlab": SiGitlab,
  "asana": SiAsana,
  "clickup": SiClickup,
  "notion": SiNotion,
  "basecamp": SiBasecamp,
  "teams": BiLogoMicrosoftTeams,
  "slack": SiSlack,
  "docusaurus": SiDocusaurus,
  "gitbook": SiGitbook,

  // Tools & Utilities
  "npm": SiNpm,
  "yarn": SiYarn,
  "pnpm": SiPnpm,
  "maven": SiApachemaven,
  "gradle": SiGradle,
  "composer": SiComposer,
  "pip": SiPypi,
  "vscode": VscVscode,
  "intellij": SiIntellijidea,
  "webstorm": SiWebstorm,
  "pycharm": SiPycharm,
  "eclipse": SiEclipseide,
  "netbeans": SiApachenetbeanside,
  "xcode": SiXcode,
  "sublimetext": SiSublimetext,
  "atom": DiAtom,
  "postman": SiPostman,
  "swagger": SiSwagger,
};

export type TechIconName = keyof typeof techIconLibrary;
