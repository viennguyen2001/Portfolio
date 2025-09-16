import {
  BsInstagram as InstagramIcon,
  BsFacebook as FacebookIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    href: "mailto:viennguyen04082001@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    // colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Follow on Instagram",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/nguyencongvien.03/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Follow on Facebook",
    description: "Connect for collaboration or explore my professional experience.",
    name: "facebook",
    href: "https://www.facebook.com/ncv1603",
    icon: <FacebookIcon size={iconSize} />,
    backgroundIcon: <FacebookIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Follow on TikTok",
    description: "Follow me on TikTok for entertaining and engaging content.",
    name: "tiktok",
    href: "https://www.tiktok.com/@hth_1603",
    icon: <TiktokIcon size={iconSize} />,
    backgroundIcon: <TiktokIcon size={backgroundIconSize} />,
    textColor: "text-neutral-400",
    backgroundColor: "bg-neutral-400",
    borderColor: "border-neutral-400",
    backgroundGradientColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
    isShow: true,
  },
];
