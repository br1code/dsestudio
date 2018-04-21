El objetivo de este proyecto es crear una página web en donde los alumnos (luego profesores) 
puedan entrar y : 

Registrarse y loguearse con un username, password y un nombre completo para que sea facil de reconocer.

En cada perfil puedes agregar información extra de contacto, como numero de telefono, emails(obligatorio?),
etc.

Ver "posts" de otros alumnos, los posts pueden ser solicitudes de ayuda o emisiones de ayuda.

Comentar esos posts con links a otros posts o secciones de la página.

Ver los horarios de la semana.

Ver emails de cada profesor.

Ver información de cada materia, junto con profesor, apuntes(links), horarios, etc.

Ver una sección de notificaciones o avisos importantes, donde se pueden subir avisos de fechas de 
examenes, dias en que la profesora faltará o dias en los que no habrá clases.

El usuario tiene que poder, en algun lugar, subir archivos (por ejemplo comprimidos).

------------------------------------------------------------------------------------------------------
                                            USERS
------------------------------------------------------------------------------------------------------
Un usuario puede registrarse, loguearse y desloguearse.

Un usuario TIENE :

                                            Required
------------------------------------------------------------------------------------------------------
username            -> nombre de cuenta con la que puede loguearse
password            -> contraseña de cuenta con la que puede loguearse (double check)
name                -> nombre completo, es el nombre que el resto de los usuarios verá
email               -> email personal del usuario, para contactarse con él

                                            Not Required
------------------------------------------------------------------------------------------------------
phone               -> telefono de contacto del usuario
photo               -> foto de perfil del usuario, que aparecerá en el perfil y en cada interacción


Un usuario PUEDE :

Sección User -------
* Loguearse         -> ingresar al sistema con su username y password, si es que ya está registrado
* Desloguearse      -> salir del sistema, si es que está logueado
* Registrarse       -> crear un nuevo usuario indicando los campos requeridos


Sección Posts ------
* Ver un Post       -> ingresar a un Post y ver su contenido (body, autor, hora, comentarios)
* Crear un Post     -> crear un Post proporcionando el body que contiene texto, imagenes, links, etc
* Eliminar un Post  -> eliminar un Post, solo si es el autor del mismo.
* Comentar un Post  -> comentar al final de un Post, proporcionando texto y links (no imagenes)

Sección Perfil ----- 
* Ver perfil        -> Visitar el perfil del usuario
* Ver otro perfil   -> Visitar el perfil de otro usuario

Sección Materias ---

Sección Profesores -


------------------------------------------------------------------------------------------------------
                                            POSTS
------------------------------------------------------------------------------------------------------
Un Post contiene texto, imagenes, links y pueden ser videos.Ademas de su autor fecha y comentarios.
Buscar una forma de editor de texto o usar un input que reciba HTML para que además, lo practiquen.

Un Post tiene:

title               -> titulo del post (limitar caracteres)
author              -> usuario que creó el Post
date                -> momento en el que se creó el Post
body                -> cuerpo del Post, contiene imagenes, links, videos
comments            -> lista de comentarios, contiene Comments con autor, fecha y body
category            -> el post es de tema general o de una materia (sirve para luego filtrar)


A un Post se lo puede:

Ver
Crear
Eliminar
Comentar
Editar


------------------------------------------------------------------------------------------------------
                                            COMMENTS
------------------------------------------------------------------------------------------------------
Un Comment contiene texto y links, ademas del autor y fecha y hora de creación. 
Un Comment estará asociado a un Post.

Un Comment se ve en la lista de Comments mientras se visualiza un Post (al final de cada Post)

Un Comment tiene: 

autor               -> creador del comentario
date                -> momento de creación del comentario
body                -> cuerpo del comentario

A un Comment se lo puede:

Crear               -> mientras se visualiza un Post, se puede crear un Comment
Eliminar            -> mientras se visualiza un Post, se puede eliminar un Comment (solo si es el autor del mismo)



------------------------------------------------------------------------------------------------------
                                            CATEGORY(change)
------------------------------------------------------------------------------------------------------
Una Category contiene información de la misma y del teacher correspondiente.

Una category tiene:

name                -> nombre de la category
resources           -> recursos de la category, como links a los pdfs/libros
posts               -> post con la category correspondiente



------------------------------------------------------------------------------------------------------
                                            TEACHER(change)
------------------------------------------------------------------------------------------------------

name                -> nombre del profesor
email               -> email del profesor
category            -> category("materia") que da el profesor