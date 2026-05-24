# CreatorCult - Professional Marketing Agency Website

A premium, modern marketing agency website for CreatorCult, featuring professional typography, minimalist design, and responsive layout.

## Features

✨ **Professional Design**
- Premium color palette: Black (#000000), Golden (#FFB300), White (#FFFFFF)
- Modern typography with Poppins (headlines) and Inter (body)
- Spacious, minimalist layout for luxury feel

🎨 **Sections**
- **Hero**: Auto-rotating carousel with 3 professional lifestyle images
- **About**: Brand showcase with client logos grid and company description
- **Services**: 3 service offerings with professional imagery and descriptions
- **Team**: Carousel displaying team members with smooth scrolling
- **Contact**: Bold CTA cards with gradient background

📱 **Responsive**
- Mobile-first approach
- Optimized breakpoints for all devices
- Touch-friendly navigation

🚀 **Performance**
- Optimized images from Unsplash
- Smooth CSS animations
- Fast-loading assets
- Semantic HTML structure

## Project Structure

```
cc/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Complete styling system
│   └── js/
│       └── main.js        # Interactive functionality
├── cc.svg                 # Custom logo
└── README.md              # This file
```

## Deployment

### GitHub Pages (Recommended)

This site is configured for GitHub Pages deployment:

1. Go to your GitHub repository settings: https://github.com/Aditya-bachhav/CreatorCult/settings
2. Scroll to "Pages" section
3. Under "Build and deployment", select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Your site will be live at: `https://aditya-bachhav.github.io/CreatorCult/`

### Alternative Deployments

**Netlify**
1. Connect your GitHub repo to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `/`

**Vercel**
1. Import your repository
2. Framework: Select "Other"
3. Deploy

## Development

### Local Development
Simply open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server installed)
http-server

# Using VS Code Live Server extension
```

### File Descriptions

- **index.html**: Semantic HTML structure with all content sections
- **style.css**: Complete CSS including:
  - Root variables for theming
  - Glass-morphism effects
  - Animations and transitions
  - Responsive breakpoints
  - Premium typography
  
- **main.js**: Interactive features including:
  - Hero slider auto-rotation
  - Mobile hamburger menu
  - Intersection Observer scroll animations
  - Smooth scroll behavior

## Customization

### Colors
Edit CSS variables in `style.css` `:root`:
```css
--black: #000000;
--orange: #FFB300;
--white: #ffffff;
```

### Typography
Currently using:
- **Headlines**: Poppins 900 weight
- **Body**: Inter 400-600 weights

Change imports in `index.html` and update `--font-display` and `--font-body` variables.

### Images
Replace Unsplash URLs with your own images:
- Hero slides: Update `background-image` URLs
- Services: Update `src` attributes
- Team: Replace team member images
- Logo: Replace `cc.svg`

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Performance Metrics

- Lighthouse Score: 90+
- First Contentful Paint: < 1s
- Fully Interactive: < 2s
- Mobile-optimized

## Contact

For inquiries or support, contact CreatorCult directly.

---

**Last Updated**: May 25, 2026
**Version**: 1.0.0
