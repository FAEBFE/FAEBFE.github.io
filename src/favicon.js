// src/favicon.js
if (!document.querySelector('link[rel="icon"]')) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = '/src/favicon.svg';
  link.type = 'image/svg+xml';
  document.head.appendChild(link);

}
