# vercel_handler.py
import sys
import os
from pathlib import Path

# Add your project folder to the system path
project_path = Path(__file__).resolve().parent / "vinyasa_project"
sys.path.append(str(project_path))

# Set environment variable for Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "vinyasa_project.settings")

from django.core.wsgi import get_wsgi_application
app = get_wsgi_application()
