(function initSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => { if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P'))) { e.preventDefault(); triggerSecurityAlert(); } });
    document.addEventListener('dragstart', e => { if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.tagName === 'IFRAME') e.preventDefault(); });
    document.body.style.userSelect = 'none';
    const detectDevTools = () => { if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) triggerSecurityAlert(); };
    window.addEventListener('resize', detectDevTools);
    function triggerSecurityAlert() { let overlay = document.getElementById('security-overlay'); if (!overlay) { overlay = document.createElement('div'); overlay.id = 'security-overlay'; overlay.innerHTML = `<h1>SECURITY ALERT</h1><p>Developer tools and saving functions are strictly prohibited.</p>`; document.body.appendChild(overlay); } overlay.style.display = 'flex'; setTimeout(() => overlay.style.display = 'none', 3000); }
})();