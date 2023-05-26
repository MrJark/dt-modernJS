# Comandos útiles de Git

    1. git init -> inicializa el repositorio/directorio 
    2. git add . -> prepara todos los archivvos creados de nuevo desde el git init para la "fotografía", el "commit". Sube todos los elementos a un stage
    3. git reset . -> revierte lo que habíaos hecho con el " git add . " 
    4. git commit -m -> sirve para hacer esa "fotografía" y dejarle un mensaje con ella para saber que es ese commit
    5. git checkout --. -> esto recostruye todos archivos que se encontraban en el último commit. Muy útil cuando borras algo sin querer y no tienes la opción de cmd+z hasta incluso si has borrado el archivo
    6. git log -> me da lopción de ver en la terminal todos los commit hechos hasta el momento
    7. git commit --amed -> este comando permite arreglar un commit, permite modificarlo por si has cometido algún error o te ha faltado algo
    8. git checkout -b nombre-de-la-rama-nueva -> son 'malas prácticas' el trabajar en la rama main de un proyecto ya que esa es la rama que va a producción y luego en la que se va a hacer el deploy. Las buenas prácticas y para cualquier trabajo colaborativo este comando te permite hacer una segunda rama, distinta a la main, para poder trabajar y darle el nombre de que quieras
    8. git branch -> permite ver en que rama estás
    9. git checkout master -> permite movernos entre ramas, en este caso, si pones master vas a la principal, a la main
    10. git merge nombre-de-la-rama-que-quieres-fusionar -> permite fusionar la rama que quieras, mientras tengas el nombre, con la rama main
        10.1. esc+:+w+q+! -> esta serie de teclas permite salir del bloqueo de la terminal en muchas ocasiones
    11. git branch -d nombre-de-la-rama-que-quieres-borrar -> esto es para borrar las ramas que ya no te hacen falta
    12. git push -> para subir todos al repositorio todo, también se puede hacer con ' git push origin main '
    13. git pull -> cuando estás colaborando con alguien o con distintos ordenadores, algunos repositorios tendrán elementos que a lo mejor, en tu entorno no tienes, para conseguirlos tienes que ejecutar este comando o también ' git pull origin main '
    14. git commit -am " " -> te permite no hacer el git add . y hacerlo todo en conjunto
