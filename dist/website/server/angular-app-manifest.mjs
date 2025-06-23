
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5257, hash: '1dfa47860c78c47de3a584280a7928acd460f35ef1cde36316ed57d95efb2992', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: '197c27d054ce805d5cc8e9c8ab2ea2d8394d5dc8e35b58d333477213bc361ef0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22326, hash: 'd0bd79e717067d8e916b3c5366e28a376136b6e8c1d6699c46a94bfc3b9e1a32', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28222, hash: 'f4868de0cbe8a993451d5017668f6763f5f824af3e8eae080d7ce1e3325b6242', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22332, hash: '09fc9b716d66310badec9d867388756d6695c111258abd7554706629a3f85625', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 22341, hash: 'ab0b292161e03381a5c6abd77f85d7f9b7fd7bf323bbe7ccbd53264271c318d9', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-BWKOBTIM.css': {size: 260424, hash: 's2ZjyzfDC9U', text: () => import('./assets-chunks/styles-BWKOBTIM_css.mjs').then(m => m.default)}
  },
};
