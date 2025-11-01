import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vinyasa_project.settings')

application = get_wsgi_application()

# ✅ Add this line for Vercel
app = application  # or handler = application (both work)
