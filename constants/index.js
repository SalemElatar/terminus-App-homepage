export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export const socials = (iconSize = 35) => [
  {
    name: "twitter",
    icon: <BsTwitter size={iconSize} className="cursor-pointer ms-3" />,
  },
  {
    name: "instagram",
    icon: <BsInstagram size={iconSize} className="cursor-pointer ms-3" />,
  },
  {
    name: "facebook",
    icon: <BsFacebook size={iconSize} className="cursor-pointer ms-3" />,
  },
];
