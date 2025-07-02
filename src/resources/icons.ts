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
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiPaintBrushDuotone,
  PiDatabaseDuotone,
  PiCloudDuotone,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiMysql, SiPostgresql, SiMongodb, SiSqlite } from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: HiOutlineGlobeAsiaAustralia, // (unchanged)
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  phone: FaPhone, // Changed from FaPhoneAlt to FaPhone for consistent sizing
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  // Custom additions for missing icons
  chain: HiOutlineLink,
  brush: PiPaintBrushDuotone,
  storage: PiDatabaseDuotone,
  cloud: PiCloudDuotone,
  web: HiOutlineGlobeAlt, // <-- Use the more globe-like icon for "web"
  mobile: HiOutlineDevicePhoneMobile, // <-- Mobile development icon
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
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;