from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views import generic

from .models import Proyecto, Personal_Cliente
from .models import Consorcio, Personal_Consorcio

class IndexView(generic.ListView):
    template_name  = 'posts/index.html'
    context_object_name = 'projects'
    def get_queryset(self):
        """Retorna todos los proyectos registrados hasta ahora"""
        return Proyecto.objects.all()
