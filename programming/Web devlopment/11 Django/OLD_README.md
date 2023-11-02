# Django

The Django framework is a high-level Python web framework that allows developers to build web applications quickly and efficiently. It follows the Model-View-Controller (MVC) architectural pattern, which promotes the separation of concerns and helps maintain a clean and organized codebase.

- [Django](#django)
  - [Cheat Sheet](#cheat-sheet)
    - [1| creating a django project](#1-creating-a-django-project)
    - [2| creating an app](#2-creating-an-app)
    - [3| views and urls](#3-views-and-urls)
      - [passing parameters from urls to views](#passing-parameters-from-urls-to-views)
    - [4| models and data bases](#4-models-and-data-bases)
      - [manipulating data base using the terminal](#manipulating-data-base-using-the-terminal)
    - [5| admin dashboard](#5-admin-dashboard)
    - [6| templates](#6-templates)
    - [7| forms](#7-forms)
      - [POST and GET](#post-and-get)
      - [dynamic forms](#dynamic-forms)

## Cheat Sheet

### 1| creating a django project

```bash
mkdir root-folder-name
cd root-folder-name
pipenv install django
pipenv shell
pipenv --venv
```

- `ctrl + shift + p`
- Python: select interpreter

```bash
django-admin startprojrct project-name .
python manage.py runserver
```

### 2| creating an app

```bash
python manage.py startapp app-name
```

- go to `settings.py` and add `app-name` to the `INSTALLED_APPS` list

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "app-name.apps.App-nameConfig",
]
```

```bash
python manage.py migrate
```

### 3| views and urls

- create a view in the app views.py
  ![app views.py](<images/app views.py.png>)
- create create a `urls.py` file in the app folder and modify it in this way:
  ![app urls.py](<images/app urls.py.png>)
- modify the project's `urls.py` file in this way
  ![project urls.py](<images/project urls.py.png>)

#### passing parameters from urls to views

```python
# this is the app urls.py file

from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:randomString>", views.number, name="randomString"),
]
```

```python
# this is the app views.py file

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(response):
    return HttpResponse("<h1>Hello!</h1>")


def number(response, randomString):
    return HttpResponse("<h1>%s</h1>" % randomString)
```

### 4| models and data bases

![app models.py](<images/app models.py.png>)

```bash
python manage.py makemigrations app-name
python manage.py migrate
```

#### manipulating data base using the terminal

```bash
python manage.py shell
```

```python
from app-name.models import 1st-model-name, 2nd-model-name,.....

var = model-name(args)
var.save()

model-name.objects.all()
model-name.objects.get(id = 1)
model-name.objects.get(parameter-name = val)

model-name.objects.get(id = 1).delete()

# parent-child relationship

var.child-model-name-in-lowercase_set.create(args)

var.child-model-name-in-lowercase_set.all()
var.child-model-name-in-lowercase_set.get(id = 1)
var.child-model-name-in-lowercase_set.get(parameter-name = val)
```

### 5| admin dashboard

```bash
# Sign up
python manage.py createsuperuser
```

- to add the models to the admin dashboard you should modify the `admin.py` file in the app folder this way

```python
from django.contrib import admin
from .models import model-name

# Register your models here.
admin.site.register(model-name)
```

### 6| templates

- in the app folder create a folder with the name templates.
- in the templates folder create another folder with the same name of the app
- in `templates/app-name/` create the file `Base.html` this file is going to contain the code that you have to rewrite multiple times
  ![base.html template](<images/base.html template.png>)
- to use the base file you have to create another html file
- in the top of the html file add the line

```python
{% extends "app-name/base.html" %}
```

![home.html template](<images/home.html template.png>)

- to render the templates you have to the `views.py` file and create a view that returns `render(response, "app-name/template-name.html", {})`

![views.py rendering template](<images/views.py rendering template.png>)

- passing a value from the view to the template

```HTML
<!-- template.html -->
<h1>{{var}}</h1>
```

```python
# views.py
def index(response):
    return render(response, "app-name/template-name.html", {"var": random-value})
```

- using blocks for a dynamic base template

```HTML
<!-- base-template.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>random website</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="block-name" name="block-name">
      {% block block-name %} {% endblock block-name %}
    </div>
    <script src="" async defer></script>
  </body>
</html>
```

```HTML
<!-- template.html -->
{% extends "app-name/base-template.html" %}

{% block block-name %}
  <h1>{{random-variable}}</h1>
{% endblock block-name %}
```

- conditions in templates

```HTML
{% if  %}
  {% elif  %}
  {% else %}
{% endif %}
```

- for loop in templates

```HTML
{% for item in iterable %}
{% endfor %}
```

### 7| forms

- in the template file create a from and instead of creating the fields manually use the variable

```HTML
<form method="POST"  action=""> <!-- action="where you want to go after submission" -->
  {% csrf_token %}
  {{form.as_p}}
  <button type="submit" name="save"> Create </button>
</form>
```

- in the app folder create the file `forms.py`

```python
from django import forms


class CreateForm(forms.Form):
    textField = forms.CharField(label="Label", max_length=256)
    checkBox = forms.BooleanField(required=False)
```

- in `views.py`create a view to handle the form

```python
from .forms import CreateForm

def create(response):
    if response.method == "POST":
        form = CreateForm(response.POST)
        if form.is_valid():
            textField = form.cleaned_data["textField"]
            var = module-name(textField=textField)
            var.save()
    else:
        form = CreateForm()

    return render(response, "app-name/template-name.html", {"form": form})
```

#### POST and GET

in a nutshell the POST method is used when you need to encrypt the data that you are working with, and GET method is can do everything that the POST method can do but without encryption

#### dynamic forms

- in templates wright this code

```HTML
<input type="text" name="textfield-name">
```

- to work with this in the views use this code

```python
response.POST.get("textfield-name") # {"textfield-name": the value of the textfield}
```

- the same thing with buttons but now you need to use the value attribute if you need

```HTML
<button type="submit" name="button-name", value="value">Create new item<button>
```

```python
response.POST.get("button-name") # {"button-name": the value of the button}
```
