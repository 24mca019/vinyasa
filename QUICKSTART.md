# Quick Start Guide - Vinyasa Yoga & Pilates Website

## 🚀 Getting Started in 3 Steps

### Step 1: Install Django
```powershell
python -m pip install Django
```

### Step 2: Run Database Migrations
```powershell
python manage.py migrate
```

### Step 3: Start the Server
```powershell
python manage.py runserver
```

### Step 4: Open Your Browser
Navigate to: **http://127.0.0.1:8000/**

---

## 📋 Available Commands

### Development Server
```powershell
python manage.py runserver
```
Access at: http://127.0.0.1:8000/

### Create Admin User
```powershell
python manage.py createsuperuser
```
Access admin at: http://127.0.0.1:8000/admin/

### Collect Static Files (for production)
```powershell
python manage.py collectstatic
```

### Create New App
```powershell
python manage.py startapp app_name
```

---

## 🎨 Features Overview

### ✅ Implemented Features
- ✨ Modern gradient design with purple/gold color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🎯 Intersection Observer for scroll animations
- 📊 Animated statistics counters
- 💬 Client testimonials section
- 🎯 Call-to-action sections
- 🔝 Scroll-to-top button
- 🧭 Fixed navigation with active section highlighting
- 📱 Mobile hamburger menu

### 🎨 Design Elements
- Custom SVG icons
- Gradient backgrounds
- Card-based layouts
- Hover effects
- Smooth scrolling
- Pattern overlays
- Professional typography (Poppins + Cormorant Garamond)

---

## 📁 Project Structure

```
Vinyasa2/
├── manage.py                    # Django CLI
├── requirements.txt             # Python packages
├── README.md                    # Full documentation
├── QUICKSTART.md               # This file
│
├── vinyasa_project/            # Project settings
│   ├── settings.py             # Configuration
│   ├── urls.py                 # Main routing
│   └── wsgi.py                 # WSGI config
│
├── website/                    # Main app
│   ├── views.py                # Page views
│   ├── urls.py                 # App routing
│   └── models.py               # Database models
│
├── templates/                  # HTML files
│   └── home.html               # Homepage
│
└── static/                     # Static assets
    ├── css/
    │   └── style.css           # Main styles
    └── js/
        └── main.js             # Interactivity
```

---

## 🎯 Key Sections on Homepage

1. **Hero Section** - Eye-catching intro with CTA buttons
2. **How It Works** - 3-step process cards
3. **Sanctuary** - About the studio
4. **Practice** - 8 feature cards showcasing offerings
5. **Testimonials** - Client success stories
6. **Statistics** - Animated counters
7. **CTA Section** - Book intro class
8. **Footer** - Contact info & links

---

## 🔧 Customization Tips

### Change Colors
Edit `static/css/style.css` variables:
```css
:root {
    --primary: #6B4E71;      /* Purple */
    --secondary: #B4A7D6;    /* Light Purple */
    --accent: #D4AF37;       /* Gold */
}
```

### Update Content
Edit `templates/home.html` - all text is in HTML

### Add New Pages
1. Create view in `website/views.py`
2. Add URL in `website/urls.py`
3. Create template in `templates/`

---

## 🌐 Deployment Checklist

### Before Going Live:

1. **Security Settings**
   ```python
   # In settings.py
   DEBUG = False
   ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
   SECRET_KEY = 'generate-new-secret-key'
   ```

2. **Static Files**
   ```powershell
   python manage.py collectstatic
   ```

3. **Database**
   - Use PostgreSQL/MySQL for production
   - Update DATABASES in settings.py

4. **Web Server**
   - Use Gunicorn + Nginx (recommended)
   - Or deploy to PythonAnywhere, Heroku, Railway, etc.

---

## 📞 Contact & Support

**Studio Contact:**
- Email: vinyasayogaandpilates@gmail.com
- Phone: +91 6353 223 557
- Location: Ahmedabad, Gujarat

**For Technical Issues:**
- Check Django documentation: https://docs.djangoproject.com/
- Review error logs in terminal
- Ensure all files are in correct directories

---

## 🎓 Learning Resources

- Django Docs: https://docs.djangoproject.com/
- CSS Gradients: https://cssgradient.io/
- Google Fonts: https://fonts.google.com/
- MDN Web Docs: https://developer.mozilla.org/

---

## ✨ Tips for Success

1. **Test on Multiple Devices** - Use browser DevTools responsive mode
2. **Optimize Images** - When adding real images, compress them
3. **Use Real Content** - Replace placeholder text with actual studio info
4. **Add Analytics** - Google Analytics for visitor insights
5. **SEO Optimization** - Add meta tags, alt text for images

---

## 🚨 Troubleshooting

### Server Won't Start
```powershell
# Check if port 8000 is already in use
python manage.py runserver 8080
```

### Static Files Not Loading
```powershell
# Verify STATIC_URL in settings.py
# Check files are in static/ directory
# Try hard refresh: Ctrl + Shift + R
```

### Template Not Found
```powershell
# Verify templates/ folder exists in project root
# Check TEMPLATES setting in settings.py
```

---

**Enjoy your new website! 🧘‍♀️✨**
