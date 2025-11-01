import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vinyasa_project.settings')

application = get_wsgi_application()

# ✅ Required for Vercel (must be one of these)
app = application  # Vercel looks for this
handler = application  # (backup, just in case)
