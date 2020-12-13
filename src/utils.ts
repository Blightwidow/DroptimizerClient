import { Player } from "./utils/types";

const SPECS: { [spec: string]: string } = {
  "Protection Warrior": "Tank",
  "Protection Paladin": "Tank",
  "Holy Paladin": "Healer",
  "Discipline Priest": "Healer",
  "Holy Priest": "Healer",
  "Blood Death Knight": "Tank",
  "Restoration Shaman": "Healer",
  "Brewmaster Monk": "Tank",
  "Mistweaver Monk": "Healer",
  "Guardian Druid": "Tank",
  "Restoration Druid": "Healer",
  "Vengeance Demon Hunter": "Tank",
};

export const getPlayerIcon = (player: Player) => {
  if (!player.spec) {
    return "wowico";
  }

  const role = SPECS[player.spec] || "default";

  switch (role) {
    case "Tank":
      return "tankico";
    case "Healer":
      return "healerico";
    default:
      return "dpsico";
  }
};
