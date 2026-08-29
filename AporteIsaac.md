# Aporte Isaac

Para esta fase 1 del proyecto, me encargue de subir el proyecto completo a un repositorio de Github ademas de la organización de la versión principal del proyecto en la rama main.
y Crear las ramas individuales correspondientes a cada integrante del equipo. De esta forma, para las proximas fases del proyecto, agregaria a cada integrante en su rama para que puedan subir al repositorio sus avances y documentarlos.

En cuanto a los pasos que segui para publicar el repositorio fueron los sigientes:

##📁 1. Estructura del proyecto

El proyecto se encontraba almacenado localmente en mi carpeta de Descargas:

Descargas/
└── Interactive-map-UDB_Fase1/
    ├── bosquejos/
    │   ├── imagen1.svg
    │   ├── imagen2.svg
    │   └── imagen3.svg
    │
    ├── paginas web/
    │   ├── index.html
    │   └── css/
    │       └── estilos.css
    │
    └── README.md

El repositorio remoto utilizado fue:

https://github.com/Isaac-Tch/Interactive-map-UDB.git

##🛠️ 2. Verifique que Git estuviera instalado

Primero se abri la terminal integrada de Visual Studio Code y se comprobó la instalación de Git:

git --version

Este comando muestra la versión de Git instalada en el equipo.

##📦 3. Inicie el repositorio local

Se inicializó Git dentro de la carpeta del proyecto:

git init -b main

Este comando convierte la carpeta del proyecto en un repositorio Git local y establece main como la rama principal.

🔍 4. Comprobe el estado del proyecto

utilice:

git status

Este comando permite comprobar qué archivos están siendo detectados por Git y cuáles todavía no han sido preparados para realizar un commit.

##➕ 5. Agregue los archivos al área de preparación

Se agregaron todos los archivos y carpetas del proyecto:

git add .

El punto (.) indica que se deben agregar todos los archivos del directorio actual y sus subdirectorios.

##💾 6. Cree el primer commit

 Cree un registro inicial de los archivos del proyecto:

git commit -m "Primer commit del proyecto"

Un commit representa una versión registrada del proyecto en ese momento.

El mensaje: "Primer commit del proyecto"
sirve para identificar qué cambio se realizó.

##🔗 7. Vincule el repositorio local con GitHub

Se agregó el repositorio de GitHub como repositorio remoto:

git remote add origin https://github.com/Isaac-Tch/Interactive-map-UDB.git

Aquí:

remote indica que se está trabajando con un repositorio remoto.
add agrega una nueva conexión.
origin es el nombre utilizado para identificar el repositorio remoto.
La URL corresponde al repositorio de GitHub.

##🔍 8. Comprobar la conexión con GitHub

Comprobe que el repositorio remoto estuviera correctamente configurado:

git remote -v

Este comando muestra las direcciones utilizadas para obtener y enviar información al repositorio remoto.

El resultado esperado es similar a:

origin  https://github.com/Isaac-Tch/Interactive-map-UDB.git (fetch)
origin  https://github.com/Isaac-Tch/Interactive-map-UDB.git (push)

##☁️ 9. Finalmente subi el proyecto a GitHub

git push -u origin main

Este comando envía los commits de la rama main desde el repositorio local hacia GitHub.

