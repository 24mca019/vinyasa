# Vinyasa Yoga & Pilates Website

A modern, responsive Django website for Vinyasa Yoga and Pilates studio in Ahmedabad. Features beautiful animations, gradient designs, and a professional layout.

## Features

✨ **Modern Design**
- Beautiful gradient color scheme
- Smooth animations and transitions
- Responsive cards and layouts
- Professional typography with Google Fonts
- Real images from professional photoshoot

🎨 **Pages**
- **Homepage** - Hero, How It Works, Sanctuary, Practice, Testimonials, Stats, CTA
- **About Us** - Founder bio, Team showcase, Philosophy, Studio space, Commitments

📱 **Responsive Design**
- Hero section with animated backgrounds
- Step-by-step "How It Works" cards
- Feature showcases with icons
- Client testimonials
- Statistics counter with animations
- Call-to-action sections

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Hamburger menu for mobile
- Flexible grid layouts

⚡ **Performance**
- Optimized CSS and JavaScript
- Smooth scrolling
- Lazy loading ready
- Intersection Observer for animations

## Technology Stack

- **Backend**: Django 4.2+
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Poppins & Cormorant Garamond)
- **Icons**: Custom SVG icons

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions

1. **Copy Images First**
   ```powershell
   Copy-Item -Path "c:\Users\neha\OneDrive\Desktop\Vinyasa\assets\images\*" -Destination "c:\Users\neha\OneDrive\Desktop\Vinyasa2\static\images\" -Recurse -Force
   ```
   
   Or run: `powershell -ExecutionPolicy Bypass -File "copy_images.ps1"`

2. **Install Dependencies**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Run Migrations**
   ```powershell
   python manage.py migrate
   ```

4. **Create Superuser (Optional)**
   ```powershell
   python manage.py createsuperuser
   ```

5. **Run Development Server**
   ```powershell
   python manage.py runserver
   ```

6. **Access the Website**
   - Homepage: `http://127.0.0.1:8000/`
   - About Page: `http://127.0.0.1:8000/about/`

## Google Forms Integration

All action buttons are connected to Google Forms:

- **Free Registration**: https://forms.gle/T5s37BaaraWXarSr7
- **Paid Inquiry**: https://forms.gle/B57AzXj2BdqLPpWB9
- **General Inquiry**: https://forms.gle/a87VR1YXmBD96CBK9

## Project Structure

```
Vinyasa/
├── vinyasa_project/          # Django project settings
│   ├── __init__.py
│   ├── settings.py           # Project configuration
│   ├── urls.py               # Main URL routing
│   ├── wsgi.py
│   └── asgi.py
├── website/                  # Main app
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py              # View functions
│   ├── urls.py               # App URL routing
│   └── tests.py
├── templates/                # HTML templates
│   └── home.html             # Homepage template
├── static/                   # Static files
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       └── main.js           # JavaScript functionality
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
└── README.md                 # This file
```

## Features Breakdown

### Navigation
- Fixed navbar with smooth scrolling
- Active section highlighting
- Responsive mobile menu
- Logo with brand identity

### Hero Section
- Eye-catching headline
- Animated background patterns
- Call-to-action buttons
- Scroll indicator

### How It Works
- Three-step process cards
- Numbered steps with icons
- Hover animations
- Clear descriptions

### Sanctuary Section
- Image placeholder with gradients
- Content-rich description
- Professional presentation

### Practice Features
- 8 feature cards
- Icon-based design
- Hover effects
- Grid layout

### Testimonials
- Client success stories
- Star ratings
- Professional avatars
- Card-based design

### Statistics
- Animated counters
- Key metrics display
- Visual impact
- Gradient styling

### Footer
- Multi-column layout
- Contact information
- Social media links
- Quick navigation

## Customization

### Colors
Edit the CSS variables in `static/css/style.css`:
```css
:root {
    --primary: #6B4E71;
    --secondary: #B4A7D6;
    --accent: #D4AF37;
    /* ... more colors */
}
```

### Content
Edit the content in `templates/home.html` to match your needs.

### Adding Pages
1. Create new view in `website/views.py`
2. Add URL pattern in `website/urls.py`
3. Create template in `templates/`

## Deployment

For production deployment:

1. Set `DEBUG = False` in `settings.py`
2. Update `ALLOWED_HOSTS` with your domain
3. Configure static files with `collectstatic`:
   ```powershell
   python manage.py collectstatic
   ```
4. Use a production server (Gunicorn, uWSGI)
5. Set up a web server (Nginx, Apache)

## Contact Information

- **Email**: vinyasayogaandpilates@gmail.com
- **Phone**: +91 6353 223 557
- **Location**: Ahmedabad, Gujarat

## License

© 2025 Vinyasa Yoga and Pilates. All rights reserved.

## Support

For issues or questions, please contact the development team or create an issue in the repository.
