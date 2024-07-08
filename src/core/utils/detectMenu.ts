const entryPointsMenu = [
  'oi',
  'ola',
  'menu',
  'bom dia',
  'boa tarde',
  'ola, estagiario',
];

export function detectMenu(message: string): boolean {
  return entryPointsMenu.some((e) =>
    message
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .includes(e),
  );
}
