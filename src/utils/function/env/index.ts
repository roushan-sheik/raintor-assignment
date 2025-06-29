export function isServer() {
  return typeof window === 'undefined' && typeof global !== 'undefined';
}

export function isClient() {
  return typeof window !== 'undefined';
}

/**
 * Check if the current environment is development or staging
 * @returns {boolean} True if environment is development or staging
 */
export function isDevOrStaging() {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
    return false;
  }

  if (process.env.NEXT_ENV) {
    return ['DEV', 'STAGING'].includes(process.env.NEXT_ENV);
  }

  return process.env.NODE_ENV === 'development';
}
