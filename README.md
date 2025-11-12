# Advanced Portfolio Website

A modern, stunning portfolio website with advanced animations, effects, and features. Built with vanilla JavaScript, CSS3, and HTML5.

## ✨ Features

- 🎨 **Stunning Animations** - Smooth transitions and animations using GSAP and AOS
- 🌙 **Dark/Light Mode** - Toggle between light and dark themes
- 🎯 **Particle Effects** - Interactive particle background using Particles.js
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Glassmorphism Design** - Modern glassmorphism UI elements
- 🔄 **Smooth Scrolling** - Smooth scroll navigation throughout the site
- 📊 **Animated Statistics** - Counter animations for statistics
- 🎨 **Gradient Effects** - Beautiful gradient backgrounds and text effects
- 🚀 **Performance Optimized** - Fast loading and optimized assets
- 📝 **Easy Configuration** - Simple configuration file for all content

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Configuration

All content is managed through the configuration file located at `src/config/portfolio-config.js`. Simply update this file with your information:

### Personal Information
- Name, title, bio
- Contact information
- Social media links
- Profile image path

### Skills
- Add your skills with icons and proficiency levels

### Projects
- Add your projects with:
  - Title and description
  - Project images
  - Tags/categories
  - Demo and GitHub links

### Experience
- Add your work experience and education
- Timeline format with dates and descriptions

### About Section
- Update your bio
- Update statistics (projects, clients, experience)

## 🎨 Customization

### Colors and Themes

Edit the CSS variables in `src/css/main.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Fonts

Change fonts in `index.html` and update CSS variables:

```css
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Playfair Display', serif;
```

### Images

Place your images in the `src/images/` directory:
- `profile.jpg` - Your profile picture
- `about.jpg` - About section image
- `project1.jpg`, `project2.jpg`, etc. - Project images

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
└── src/
    ├── css/
    │   └── main.css
    ├── js/
    │   └── main.js
    ├── config/
    │   └── portfolio-config.js
    ├── images/
    │   ├── profile.jpg
    │   ├── about.jpg
    │   └── project*.jpg
    └── files/
        └── resume.pdf
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **Vite** - Build tool and dev server
- **GSAP** - Advanced animations
- **AOS** - Scroll animations
- **Particles.js** - Particle effects
- **Three.js** - 3D effects (optional)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Features to Add

- [ ] Blog section
- [ ] Testimonials section
- [ ] Contact form backend integration
- [ ] Multi-language support
- [ ] Advanced 3D effects
- [ ] More animation options

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact: your.email@example.com

## 🙏 Acknowledgments

- Particles.js for particle effects
- GSAP for animations
- AOS for scroll animations
- Font Awesome for icons
- Google Fonts for typography

---

Made with ❤️ by Your Name

