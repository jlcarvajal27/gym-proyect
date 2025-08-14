import { BicepsFlexed, Crown, HeartPulse } from "lucide-react";

export const plansData = [
  {
    id: 1,
    icon: <HeartPulse />,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultation to coaches",
      "Access to The Community",
    ],
  },
  {
    id: 2,
    icon: <Crown />,
    name: "PREMIUM PLAN",
    price: "45",
    features: [
      "8 hour of excercises",
      "Free consultation of Coaches",
      "Access to minibar",
    ],
  },
  {
    id: 3,
    icon: <BicepsFlexed />,
    name: "PRO PLAN",
    price: "30",
    features: [
      "5 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
