export function normalizeUrlIos(url: string): string {
  return (url).replace(/(cdvfile|file):\/\//g, '');
}
