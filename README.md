# LUSCOFUSCO-GALLERY

## Software que se necesita instalar
Es necesario tener Python, Node.js y MySQL instalado. 

## Dependencias que hay que instalar
`pip install -r requirements.txt`
`npm install`

## Cómo arrancar la parte servidora
Para la parte Flask:
1. Nos situamos en el directorio
2. ``pyhton -m venv flask``
3. Activamos el entorno:
   1. En Windows: ``flask\Scrips\activate.bat``
   2. En Linux/Mac: ``source flask/bin/activate.bat``
4. Instalamos las dependencias
5. ``set FLASK_APP=app.py``
6. ``set FLASK_DEBUG=1``
7. `flask run`

Para la parte node:
1. Nos situamos en el directorio
2. Instalamos las dependencias
3. `node server.js`

## Cómo acceder a la parte cliente
http://127.0.0.1:3000/

La parte de la ggalería también está disponible en https://luscofusco-gallery-afru.onrender.com/