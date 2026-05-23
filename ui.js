window.App = window.App || {};
App.UI = (function() {
    function renderSidebar(activePage) {
        const sidebar = document.getElementById('sidebar-container');
        if (!sidebar) return;
        const user = App.Auth.getCurrentUser();
        const isAdmin = user && user.role === 'admin';
        sidebar.innerHTML = `
            <div class="brand"><span style="color:var(--text-primary)">DARK</span>DRIVE</div>
            <div class="nav-menu">
                <a href="dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">📂 My Drive</a>
                <a href="shared.html" class="nav-item ${activePage === 'shared' ? 'active' : ''}">🤝 Shared with me</a>
                <a href="profile.html" class="nav-item ${activePage === 'profile' ? 'active' : ''}">👤 Profile</a>
                <a href="settings.html" class="nav-item ${activePage === 'settings' ? 'active' : ''}">⚙️ Settings</a>
                ${isAdmin ? `<a href="admin.html" class="nav-item ${activePage === 'admin' ? 'active' : ''}">🛡️ Admin Panel</a>` : ''}
            </div>
            <div class="storage-widget">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-secondary)"><span>Storage</span><span>45% Used</span></div>
                <div class="storage-bar"><div class="storage-fill"></div></div>
                <div style="font-size:0.8rem; color:var(--text-secondary)">6.7 GB of 15 GB</div>
            </div>
            <button onclick="App.Auth.logout()" class="btn btn-danger" style="margin-top: 20px; width: 100%;">Logout</button>
        `;
    }
    function renderTopbar() {
        const topbar = document.getElementById('topbar-container');
        if (!topbar) return;
        const user = App.Auth.getCurrentUser();
        topbar.innerHTML = `
            <div class="search-container"><span class="search-icon">🔍</span><input type="text" class="search-input" placeholder="Search files, folders..."></div>
            <div class="user-profile" onclick="window.location.href='profile.html'">
                <div style="text-align: right;"><div style="font-weight: 600; font-size: 0.9rem;">${user.username}</div><div style="font-size: 0.8rem; color: var(--neon-blue); text-transform: uppercase;">${user.role}</div></div>
                <div class="avatar">${user.username.charAt(0).toUpperCase()}</div>
            </div>
        `;
    }
    return { renderSidebar, renderTopbar };
})();