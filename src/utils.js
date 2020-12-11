const SPECS = {
  'Protection Warrior': 'Tank',
  'Protection Paladin': 'Tank',
  'Holy Paladin': 'Healer',
  'Discipline Priest': 'Healer',
  'Holy Priest': 'Healer',
  'Blood Death Knight': 'Tank',
  'Restoration Shaman': 'Healer',
  'Brewmaster Monk': 'Tank',
  'Mistweaver Monk': 'Healer',
  'Guardian Druid': 'Tank',
  'Restoration Druid': 'Healer',
  'Vengeance Demon Hunter': 'Tank',
};

export const getPlayerIcon = (player) => {
  if (!player.spec) {
    return 'wowico';
  }

  const role = SPECS[player.spec] || 'default';
  const mapping = {
    Tank: 'tankico',
    Healer: 'healerico',
    default: 'dpsico',
  };

  return mapping[role] || mapping.default;
};
