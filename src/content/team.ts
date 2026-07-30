import type { TeamMember } from "@/types";

import sohailImg from "../../public/images/team/sohail-farooq.jpg";
import mufeezImg from "../../public/images/team/mufeez-azeez.jpg";
import moizImg from "../../public/images/team/moiz-shahzad.jpg";
import saadImg from "../../public/images/team/saad-arshad.jpg";
import sufiyanImg from "../../public/images/team/m-sufiyan.jpg";

export const team: TeamMember[] = [
  { name: "Sohail Farooq", role: "Chairman", image: sohailImg },
  { name: "Mufeez Azeez", role: "Chief Executive Officer", image: mufeezImg },
  { name: "Moiz Shahzad", role: "Director", image: moizImg },
  { name: "Saad Arshad", role: "Director", image: saadImg },
  { name: "M. Sufiyan", role: "Director", image: sufiyanImg },
];
