# Image Setup Instructions

## Copy Images to Project

Please run this command in PowerShell to copy all images:

```powershell
Copy-Item -Path "c:\Users\neha\OneDrive\Desktop\Vinyasa\assets\images\*" -Destination "c:\Users\neha\OneDrive\Desktop\Vinyasa2\static\images\" -Recurse -Force
```

Or simply run the provided script:

```powershell
powershell -ExecutionPolicy Bypass -File "copy_images.ps1"
```

## Expected Images

The following images should be copied:
- about-hero.jpg
- advanced-pilates.jpg
- aerobic-classes.png
- beginner-yoga.jpg
- classes-hero.jpg
- core-pilates-new.jpg
- deepak-tomar.png
- hero-fallback.jpg
- intermediate-pilates.jpg
- logo.png
- nutrition-consultation.jpg
- nutrition-plan.jpg
- pilates.jpg
- postnatal-recovery.jpg
- prenatal-yoga.jpg
- studio-1.jpg
- studio-2.jpg
- studio-3.jpg
- testimonial-1.jpg
- testimonial-2.jpg
- testimonial-3.jpg
- vinyasa-flow.jpg
- vinyasa-yoga.jpg

## After Copying Images

Restart the Django server:

```powershell
python manage.py runserver
```

Then visit:
- Homepage: http://127.0.0.1:8000/
- About Page: http://127.0.0.1:8000/about/

## Google Forms Integrated

All buttons now link to the correct Google Forms:

1. **Free Registration**: https://forms.gle/T5s37BaaraWXarSr7
   - Used in: Hero button, Practice section, CTA section

2. **Paid Inquiry Form**: https://forms.gle/B57AzXj2BdqLPpWB9
   - Used in: CTA section on homepage

3. **General Inquiry**: https://forms.gle/a87VR1YXmBD96CBK9
   - Used in: About page CTA section
