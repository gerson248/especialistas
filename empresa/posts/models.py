from django.db import models

class Persona(models.Model):
    codigo = models.CharField('Código',unique=True, max_length=8,default="")
    dni = models.CharField('DNI',unique=True, max_length=8)
    nombre = models.CharField('Nombre',max_length=100)
    apellido = models.CharField('Apellido',max_length=100)
    cargo = models.CharField('Cargo',max_length=100)
    email = models.EmailField('Email')
    fecha_nacimiento = models.DateField('Fecha de Nacimiento')
    fecha_inicio = models.DateField('Fecha de Inicio')
    fecha_fin = models.DateField('Fecha de Fin',null=True)
    vigente = models.BooleanField('Vigente')
    telefono = models.CharField('Número de celular', max_length=30)
    class Meta:
        abstract = True
    def __str__(self):
        return self.nombre + " " + self.apellido


class Proyecto(models.Model):
    cod_proyecto = models.CharField('Código de Proyecto',max_length=20,unique=True)
    cod_snip = models.CharField('Código Snip',max_length=20,default="",unique=True)
    denominacion = models.TextField('Denominación')
    denominacion_corta = models.TextField('Denominación Corta')
    nivel = models.CharField('Nivel',max_length=30)
    funcion = models.CharField('Funcion',max_length=30)
    fase = models.CharField('Fase',max_length=50)
    estado = models.CharField('Estado',max_length=100)
    taxonomia = models.CharField('Taxonomía',max_length=100)
    situacion = models.CharField('Situación',max_length=100)
    fecha_estado = models.DateField('Fecha de Estado')
    fecha_registro = models.DateField('Fecha de Registro')
    activo = models.BooleanField('Activo')
    def __str__(self):
        return self.denominacion_corta

class Personal_Cliente(Persona):
    comentario = models.TextField('Comentario')
    proyecto_id = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    def __str__(self):
        return super(Personal_Cliente, self).__str__()

class Consorcio(models.Model):
    nombre = models.CharField('Nombre del Consorcio',max_length=100)
    proyecto_id = models.OneToOneField(Proyecto, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre

class Personal_Consorcio(Persona):
    jefe = models.BooleanField('Jefe')
    costo = models.FloatField('Costo',default=0)
    consorcio_id = models.ForeignKey(Consorcio, on_delete=models.CASCADE)
    def __str__(self):
        return super(Personal_Consorcio, self).__str__()
