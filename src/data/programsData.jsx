import { Dumbbell, Flame, HeartPulse, Footprints } from "lucide-react";

export const programsData = [
  {
    id: 1,
    image: <Dumbbell size={26} strokeWidth={2} />,
    heading: "Strength Training",
    details:
      "This program aims to enhance strength using diverse exercises targeting various muscle groups. Through a structured regimen emphasizing resistance training and functional movements, participants improve muscular strength, endurance, and overall physical performance for daily and athletic activities.",
  },
  {
    id: 2,
    image: <Footprints size={26} strokeWidth={2} />,
    heading: "Cardio Training",
    details:
      "This program involves a series of sequential exercises designed to be completed within a timeframe of 20 to 30 minutes. Carefully selected to optimize efficiency and effectiveness, these exercises target various muscle groups and promote cardiovascular health.",
  },
  {
    id: 3,
    image: <Flame size={26} strokeWidth={2} />,
    heading: "Fat Burning",
    details:
      "This program is ideal for individuals who are looking to effectively reduce body fat and achieve weight loss goals. It is tailored to address the specific needs of those seeking to shed excess weight through a combination of targeted exercises, nutrition guidance, and lifestyle modifications.",
  },
  {
    id: 4,
    image: <HeartPulse size={26} strokeWidth={2} />,
    heading: "Health Fitness",
    details:
      "This program is designed for individuals who prioritize fitness for overall health rather than focusing solely on bodybuilding. It includes a variety of exercises aimed at improving cardiovascular health, flexibility, and muscular endurance, without the emphasis on extreme muscle mass.",
  },
];
