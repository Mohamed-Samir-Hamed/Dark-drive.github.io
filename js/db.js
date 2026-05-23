window.App = window.App || {};
App.DB = (function() {
    const DB_KEY = 'DarkDrive_Data';
    const defaultData = {
        users: [ { id: 'admin_1', username: 'admin', password: '@Admin123', role: 'admin', createdAt: Date.now() }, { id: 'user_1', username: 'demo', password: 'password123', role: 'user', createdAt: Date.now() } ],
        folders: [ { id: 'f_1', name: 'Cinematics', ownerId: 'admin_1', parentId: 'root' }, { id: 'f_2', name: 'Tutorials', ownerId: 'admin_1', parentId: 'root' } ],
        videos: [ ], shares: [ ]
    };
    function init() { if (!localStorage.getItem(DB_KEY)) localStorage.setItem(DB_KEY, JSON.stringify(defaultData)); }
    function read() { return JSON.parse(localStorage.getItem(DB_KEY)); }
    function write(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }
    init();
    return { getData: read, saveData: write };
})();
