export const BLOG_QUERY_KEYS = {
  default: () => ['blogs'] as const,
  list: (params?: string) => [...BLOG_QUERY_KEYS.default(), 'list', params] as const,
};