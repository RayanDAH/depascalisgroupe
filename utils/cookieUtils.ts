// Utility functions for cookie management
export const cookieUtils = {
  // Get a cookie value by name
  getCookie: (name: string): string | null => {
    if (typeof document === 'undefined') return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  },

  // Set a cookie with expiration
  setCookie: (name: string, value: string, days: number = 365) => {
    if (typeof document === 'undefined') return;

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  },

  // Delete a cookie
  deleteCookie: (name: string) => {
    if (typeof document === 'undefined') return;

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  },

  // Check if user has consented to cookies
  hasConsented: (): boolean => {
    return cookieUtils.getCookie('cookie_consent') === 'accepted';
  },

  // Check if user has declined cookies
  hasDeclined: (): boolean => {
    return cookieUtils.getCookie('cookie_consent') === 'declined';
  },
};

// Hook for React components to use cookie consent
export const useCookieConsent = () => {
  const hasConsented = cookieUtils.hasConsented();
  const hasDeclined = cookieUtils.hasDeclined();
  const needsConsent = !hasConsented && !hasDeclined;

  return {
    hasConsented,
    hasDeclined,
    needsConsent,
    acceptCookies: () => cookieUtils.setCookie('cookie_consent', 'accepted'),
    declineCookies: () => cookieUtils.setCookie('cookie_consent', 'declined'),
    resetConsent: () => cookieUtils.deleteCookie('cookie_consent'),
  };
};
