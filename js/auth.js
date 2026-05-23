window.App = window.App || {};
App.Auth = (function() {
    const SESSION_KEY = 'DarkDrive_Session';
    function login(username, password) { const db = App.DB.getData(); const user = db.users.find(u => u.username === username && u.password === password); if (user) { sessionStorage.setItem(SESSION_KEY, JSON.stringify(user)); return true; } return false; }
    function register(username, password) { const db = App.DB.getData(); if (db.users.find(u => u.username === username)) return false; db.users.push({ id: 'u_' + Date.now(), username, password, role: 'user', createdAt: Date.now() }); App.DB.saveData(db); return true; }
    function logout() { sessionStorage.removeItem(SESSION_KEY); window.location.href = 'login.html'; }
    function getCurrentUser() { const session = sessionStorage.getItem(SESSION_KEY); return session ? JSON.parse(session) : null; }
    function requireAuth() { const user = getCurrentUser(); if (!user) window.location.href = 'login.html'; return user; }
    function requireAdmin() { const user = requireAuth(); if (user.role !== 'admin') window.location.href = 'dashboard.html'; return user; }
    return { login, register, logout, getCurrentUser, requireAuth, requireAdmin };
})();
