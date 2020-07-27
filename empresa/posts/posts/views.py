from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views import generic

from .models import Proyecto, Personal_Cliente
from .models import Consorcio, Personal_Consorcio

from django.contrib.auth.models import User



def register_consortium(request):
    if request.method == 'POST':
        if request.POST.get('guardar', '') == 'guardar':

            profile = Personal_Consorcio()
            profile.codigo = request.POST['codigo']
            profile.dni = request.POST['dni']
            profile.nombre = request.POST['nombre']
            profile.apellido = request.POST['apellido']
            profile.cargo = request.POST['cargo']
            profile.email = request.POST['email']
            profile.fecha_nacimiento = request.POST['fecha_nacimiento']
            profile.fecha_inicio = request.POST['fecha_inicio']
            profile.fecha_fin = request.POST['fecha_fin']
            profile.jefe = request.POST.get('jefe', '') == 'on'
            profile.vigente = request.POST.get('vigente', '') == 'on'
            profile.telefono = request.POST['telefono'] 
            profile.costo = request.POST['costo']
            proyecto = Proyecto.objects.get(pk=request.POST['consorcio_id'])
            profile.consorcio_id = proyecto.consorcio

            profile.save()
            return render(request, 'posts/detail.html')

        elif request.POST.get('eliminar', '')=='eliminar':

            Personal_Consorcio.objects.filter(codigo=request.POST['codigo']).delete()
            return render(request, 'posts/detail.html')
        
        elif request.POST.get('actualizar', '') =='actualizar':

            profile = Personal_Consorcio.objects.get(codigo=request.POST['codigo'])

            profile.codigo = request.POST['codigo']
            profile.dni = request.POST['dni']
            profile.nombre = request.POST['nombre']
            profile.apellido = request.POST['apellido']
            profile.cargo = request.POST['cargo']
            profile.email = request.POST['email']
            profile.fecha_nacimiento = request.POST['fecha_nacimiento']
            profile.fecha_inicio = request.POST['fecha_inicio']
            profile.fecha_fin = request.POST['fecha_fin']
            profile.jefe = request.POST.get('jefe', '') == 'on'
            profile.vigente = request.POST.get('vigente', '') == 'on'
            profile.telefono = request.POST['telefono'] 
            profile.costo = request.POST['costo']
            proyecto = Proyecto.objects.get(pk=request.POST['consorcio_id'])
            profile.consorcio_id = proyecto.consorcio


            profile.save()
            return render(request, 'posts/detail.html')

    return render(request, 'posts/register.html')

def register_client(request):
    if request.method == 'POST':
        if request.POST.get('guardar', '') == 'guardar':

            profile = Personal_Cliente()
            profile.codigo = request.POST['codigo']
            profile.dni = request.POST['dni']
            profile.nombre = request.POST['nombre']
            profile.apellido = request.POST['apellido']
            profile.cargo = request.POST['cargo']
            profile.email = request.POST['email']
            profile.fecha_nacimiento = request.POST['fecha_nacimiento']
            profile.fecha_inicio = request.POST['fecha_inicio']
            profile.fecha_fin = request.POST['fecha_fin']
            profile.vigente = request.POST.get('vigente', '') == 'on'
            profile.telefono = request.POST['telefono'] 
            profile.comentario = request.POST['comentario']
            proyectoo = Proyecto.objects.get(pk=request.POST['proyecto_id'])
            profile.proyecto_id = proyectoo

            profile.save()
            return render(request, 'posts/detail.html')

        elif request.POST.get('eliminar', '') =='eliminar':

            Personal_Cliente.objects.filter(codigo=request.POST['codigo']).delete()
            return render(request, 'posts/detail.html')

        elif request.POST.get('actualizar', '') =='actualizar':

            profile = Personal_Cliente.objects.get(codigo=request.POST['codigo'])

            profile.codigo = request.POST['codigo']
            profile.dni = request.POST['dni']
            profile.nombre = request.POST['nombre']
            profile.apellido = request.POST['apellido']
            profile.cargo = request.POST['cargo']
            profile.email = request.POST['email']
            profile.fecha_nacimiento = request.POST['fecha_nacimiento']
            profile.fecha_inicio = request.POST['fecha_inicio']
            profile.fecha_fin = request.POST['fecha_fin']
            profile.vigente = request.POST.get('vigente', '') == 'on'
            profile.telefono = request.POST['telefono'] 
            profile.comentario = request.POST['comentario']
            proyectoo = Proyecto.objects.get(pk=request.POST['proyecto_id'])
            profile.proyecto_id = proyectoo


            profile.save()
            return render(request, 'posts/detail.html')


    return render(request, 'posts/register_client.html')



class IndexView(generic.ListView):
    template_name  = 'posts/index.html'
    context_object_name = 'projects'
    def get_queryset(self):
        """Retorna todos los proyectos registrados hasta ahora"""
        return Proyecto.objects.all()

class DetailView(generic.DetailView):
    model = Proyecto
    template_name = 'posts/detail.html'
