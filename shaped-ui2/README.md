# Shaped UI - Hacker News Recommendations

A modern React frontend that displays Hacker News recommendations from the Shaped AI recommendation engine.

## Features

- 🎨 **Modern UI Design**: Beautiful gradient backgrounds, card-based layout, and smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🔄 **Real-time Data**: Fetches recommendations from the backend API
- 📊 **Rich Display**: Shows post titles, authors, scores, and links
- 🔍 **Raw Data View**: Collapsible section to view the complete API response
- ⚡ **Loading States**: Smooth loading animations and error handling
- 🎯 **User Experience**: Hover effects, interactive elements, and intuitive navigation

## Project Structure

```
ui/
├── backend/          # Express.js API server
│   ├── server.js     # Main server file
│   └── package.json  # Backend dependencies
└── frontend/         # React frontend application
    ├── src/
    │   ├── App.tsx   # Main React component
    │   ├── App.css   # Component styles
    │   ├── index.js  # React entry point
    │   └── index.css # Global styles
    └── package.json  # Frontend dependencies
```

## Backend API

The backend provides a single endpoint:

- `GET /api/rank` - Returns Hacker News recommendations with metadata

### Response Format:
```json
{
  "ids": ["post123", "post456"],
  "scores": [0.85, 0.72],
  "metadata": [
    {
      "title": "Post Title",
      "by_user": "username",
      "url": "https://example.com"
    }
  ]
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Shaped CLI tool installed and configured

### Installation

1. **Install Backend Dependencies:**
   ```bash
   cd ui/backend
   npm install
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd ui/frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server:**
   ```bash
   cd ui/backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server:**
   ```bash
   cd ui/frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser** and navigate to `http://localhost:3000`

## Configuration

### Backend Configuration

The backend uses a Shaped API key. You can modify the API key in `ui/backend/server.js`:

```javascript
const API_KEY = "your-shaped-api-key-here";
```

### Frontend Configuration

The frontend is configured to proxy requests to the backend on port 5000. This is set in `ui/frontend/package.json`:

```json
{
  "proxy": "http://localhost:5000"
}
```

## Features in Detail

### 1. Modern Card Layout
- Each recommendation is displayed in a beautiful card with hover effects
- Cards show post title, author (with avatar), score, and link
- Responsive grid layout that adapts to screen size

### 2. Loading and Error States
- Animated loading spinner while fetching data
- Clear error messages with retry functionality
- Graceful handling of empty results

### 3. Raw Data View
- Collapsible section to view the complete API response
- Useful for debugging and understanding the data structure
- Formatted JSON display with syntax highlighting

### 4. Interactive Elements
- Refresh button to reload recommendations
- Hover effects on cards and buttons
- Smooth transitions and animations

## Troubleshooting

### Common Issues

1. **Backend Connection Error:**
   - Ensure the backend is running on port 5000
   - Check that the proxy configuration is correct in `package.json`

2. **API Key Issues:**
   - Verify your Shaped API key is valid
   - Ensure the Shaped CLI is properly installed

3. **Port Conflicts:**
   - If port 3000 or 5000 are in use, you can change them:
     - Backend: Modify `PORT` in `server.js`
     - Frontend: Use `PORT=3001 npm start`

### Development Tips

- The frontend automatically reloads when you make changes
- Check the browser console for any JavaScript errors
- Use the browser's network tab to debug API calls

## Technologies Used

- **Frontend:**
  - React 18 with TypeScript
  - CSS3 with modern features (Grid, Flexbox, Animations)
  - Fetch API for HTTP requests

- **Backend:**
  - Express.js
  - CORS for cross-origin requests
  - js-yaml for YAML parsing
  - Child process for CLI integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
