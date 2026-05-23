# Dark Drive - Secure Cloud Streaming Platform

A highly professional, futuristic dark-themed cloud streaming and storage SaaS platform prototype.

## The Visual Wrapper Design
Due to Google Drive CORS restrictions, direct video manipulation (custom play buttons/timelines) is blocked. 
This project uses the **Visual Wrapper Strategy**:
- It embeds the Google Drive player via iframe.
- Uses CSS `overflow:hidden` to hide Google's toolbars.
- Allows user clicks to pass through to play/pause natively, while maintaining our premium Fullscreen and Watermark UI.

## Default Accounts
- **Admin:** username: `admin`, password: `admin123`
- **User:** username: `demo`, password: `password123`
