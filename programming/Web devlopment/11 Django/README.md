# Django

The Django framework is a high-level Python web framework that allows developers to build web applications quickly and efficiently. It follows the Model-View-Controller (MVC) architectural pattern, which promotes the separation of concerns and helps maintain a clean and organized codebase.

## Cheat sheet

### Creating a Django project

```bash
mkdir project-folder-name
cd project-folder-name
pipenv install django
django-admin startproject project-name .
python manage.py runserver 8000
```

### Using VSCode's integrated terminal

1. get the path of the virtual environment using the bash commend `pipenv --venv`

2. open VSCode and press `control + shift + p` and look for `Python: select interpreter`, select the path of the virtual environment.

   - if you are going to enter the path manually add `\bin\python` at the end of the path

### Create an app

1. in the terminal type the command `python manage.py startapp app-name`
2. go to the projects package in the `settings.py` file look for `INSTALLED_APPS` list and add the `app-name` at the end.

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "app-name",
]
```

### Views

```python
from django.shortcuts import render
from django.http import HttpResponse


def hello(response): # View
    return HttpResponse("Hello, World!")

```

### Mapping urls to views

1. in your app package create the file `urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [path("hello/", views.hello)]

```

2. go to the project package and make this changes in the `urls.py` file

```python
"""
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("app-name/", include("app-name.urls")),
]
```

### Using templates

1. in the app package create a new folder and name it `templates`
2. inside the templates folder create an html file, for example `hello.html` and put some html code in it

```HTML
{%if name%}
<h1>Hello, {{name}}!</h1>
{%else%}
<h1>Hello, World!</h1>
{%endif%}
```

3. in the `views.py` use the render function to use the template that we created before

```python
from django.shortcuts import render

def hello(request):
    return render(request, "hello.html", {"name": "Chad"})
```
