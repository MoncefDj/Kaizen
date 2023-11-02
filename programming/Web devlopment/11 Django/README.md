# Django

The Django framework is a high-level Python web framework that allows developers to build web applications quickly and efficiently. It follows the Model-View-Controller (MVC) architectural pattern, which promotes the separation of concerns and helps maintain a clean and organized codebase.

## Table of contents

- [Django](#django)
  - [Table of contents](#table-of-contents)
  - [Django Cheat Sheet](#django-cheat-sheet)
    - [1. Creating a Django Project](#1-creating-a-django-project)
    - [2. Creating an App](#2-creating-an-app)
    - [3. Views and URLs](#3-views-and-urls)
    - [4. Models and Databases](#4-models-and-databases)
    - [5. Admin Dashboard](#5-admin-dashboard)
    - [6. Templates](#6-templates)
    - [7. Forms](#7-forms)

## Django Cheat Sheet

### 1. Creating a Django Project

Create a new Django project by following these steps:

```bash
mkdir project-name
cd project-name
python -m venv env
source env/bin/activate
pip install django
```

Initialize the project:

```bash
django-admin startproject project_name .
python manage.py runserver
```

### 2. Creating an App

Create a new Django app within your project:

```bash
python manage.py startapp app-name
```

Add the app to the `INSTALLED_APPS` list in the project's `settings.py` file:

```python
INSTALLED_APPS = [
    ...
    'app-name',
    ...
]
```

Migrate the database:

```bash
python manage.py migrate
```

### 3. Views and URLs

Define views in the `views.py` file within your app. For example:

```python
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello!")

def number(request, randomString):
    return HttpResponse(randomString)
```

Map URLs to views by creating a `urls.py` file within your app and modifying it as follows:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:randomString>', views.number, name='randomString'),
]
```

Include the app's URLs in the project's `urls.py` file:

```python
from django.urls import include

urlpatterns = [
    ...
    path('app/', include('app-name.urls')),
    ...
]
```

### 4. Models and Databases

Define models in the `models.py` file within your app. For example:

```python
from django.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=50)
    field2 = models.IntegerField()

    def __str__(self):
        return self.field1
```

Create database tables by running the following commands:

```bash
python manage.py makemigrations
python manage.py migrate
```

To manipulate the database using the terminal, use the Django shell:

```bash
python manage.py shell
```

### 5. Admin Dashboard

Create a superuser account to access the admin dashboard:

```bash
python manage.py createsuperuser
```

To add models to the admin dashboard, modify the `admin.py` file within your app:

```python
from django.contrib import admin
from .models import MyModel

admin.site.register(MyModel)
```

### 6. Templates

Create a `templates` directory within your app and add HTML templates.

Use template inheritance by creating a `base.html` template that contains common code. For example:

```html
<!-- base.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    {% block content %} {% endblock %}
  </body>
</html>
```

Extend the base template in other templates:

```html
<!-- template.html -->
{% extends 'app-name/base.html' %} {% block content %}
<h1>Hello!</h1>
{% endblock %}
```

Render templates in views:

```python
from django.shortcuts import render

def my_view(request):
    return render(request, 'app-name/template.html', context)
```

### 7. Forms

Create forms by defining a class in the `forms.py` file within your app. For example:

```python
from django import forms

class MyForm(forms.Form):
    field1 = forms.CharField(max_length=50)
    field2 = forms.IntegerField()
```

Render forms in templates:

```html
<form method="POST" action="">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">Submit</button>
</form>
```

Handle form submissions in views:

```python
def form_view(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            # Process form data
    else:
        form = MyForm()
    return render(request, 'app-name/template.html', {'form': form})
```
