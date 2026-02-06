export default defineNuxtConfig({
  extends: ['docus'],
  app: {
    baseURL: '/agent-harness-comparison/',
  },
  site: {
    name: 'Agent Harness Comparison',
  },
  robots: {
    robotsTxt: false,
  },
  llms: {
    domain: 'https://paramaggarwal.com',
  },
  compatibilityDate: '2025-07-18',
})
