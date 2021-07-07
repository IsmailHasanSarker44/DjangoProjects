from django.shortcuts import render, HttpResponseRedirect
from App_Login.forms import CreateNewUser
from django.contrib.auth import authenticate,login,logout
from django.urls import reverse, reverse_lazy
from App_Login.models import UserProfile
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
# Create your views here.


def signUp(request):
    form = CreateNewUser()
    registered = False

    if request.method =="POST":
        form = CreateNewUser(data = request.POST)
        if form.is_valid():
            user = form.save()
            registered = True
            user_profile = UserProfile(user = user)
            return HttpResponseRedirect(reverse('App_Login:login'))
            
    return render(request,'App_Login/sign_up.html',context={'title':'Sign Up . Instagram','form':form})


def login_page(request):
    form = AuthenticationForm()
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request,user)
                pass


    return render(request,'App_Login/login.html',context={'title':'Login','form':form})

@login_required
def edit_profile(request):
    return render(request,'App_Login/profile.html',context={})