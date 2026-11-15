const candidate = (import.meta.env.VITE_APP_LOGIN_URL ?? '').trim();
function loginUrl(value: string): string | null {
  if (!value) return null;
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null; } catch { return null; }
}
export const config = { loginUrl: loginUrl(candidate), forzaLogo: '/assets/forza-tech.png' };
