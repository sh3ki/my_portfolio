import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineBolt,
} from "react-icons/hi2";

import { RiPhoneFill } from "react-icons/ri";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiPaintBrushDuotone,
  PiDatabaseDuotone,
  PiCloudDuotone,
  PiToolboxDuotone,
  PiCpuDuotone
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaFacebook, FaPhone, FaMedal, FaCubes, FaToolbox } from "react-icons/fa6";
import { FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiMysql, SiPostgresql, SiMongodb, SiSqlite } from "react-icons/si";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RiBug2Line } from "react-icons/ri";
import { VscBeaker } from "react-icons/vsc";
import { MdOutlineSchool  } from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  book: PiBookBookmarkDuotone,
  service: PiToolboxDuotone,
  cpu: PiCpuDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  technologies: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  phone: RiPhoneFill,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  layoutGridAdd: TbLayoutGridAdd,
  bug: RiBug2Line,
  beaker: VscBeaker,
  school: MdOutlineSchool ,
  // Custom additions for missing icons
  chain: HiOutlineLink,
  brush: PiPaintBrushDuotone,
  storage: PiDatabaseDuotone,
  cloud: PiCloudDuotone,
  web: HiOutlineGlobeAlt, // <-- Use the more globe-like icon for "web"
  mobile: HiOutlineDevicePhoneMobile, // <-- Mobile development icon
  speed: HiOutlineBolt, // <-- Performance/speed icon
  // --- Technology Icons ---
  react: FaReact,
  nextjs: SiNextdotjs,
  html5: FaHtml5,
  css3: FaCss3Alt,
  django: SiDjango,
  laravel: FaLaravel,
  nodejs: FaNodeJs,
  python: FaPython,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  // --- Stat Card Icons ---
  experience: FaMedal,
  projects: FaCubes,
  tools: FaToolbox,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;