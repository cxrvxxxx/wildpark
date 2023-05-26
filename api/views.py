from django.http import HttpResponse

def logo(request):
    image_path = './static/images/logo.png'
    with open(image_path, 'rb') as f:
        return HttpResponse(f.read(), content_type='image/png')
