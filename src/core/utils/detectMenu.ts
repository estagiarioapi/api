const entryPointsMenu = [
  'oi',
  'ola',
  'menu',
  'bom dia',
  'boa tarde',
  'ola, estagiario',
];

export function detectMenu(message: string): boolean {
  const normalizedMessage = message
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return entryPointsMenu.some((e) => {
    const normalizedEntry = e
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const regex = new RegExp(`^${normalizedEntry}$`, 'i');
    return regex.test(normalizedMessage);
  });
}
