from django.contrib import admin

from .models import Proyecto
from .models import Personal_Cliente
from .models import Personal_Consorcio
from .models import Consorcio

admin.site.register(Proyecto)
admin.site.register(Personal_Cliente)
admin.site.register(Personal_Consorcio)
admin.site.register(Consorcio)
