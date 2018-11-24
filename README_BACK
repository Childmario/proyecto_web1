

***Explicación del backend***

Por el hecho que yo utilice el framework MEAN STACK, en este proyecto utilizo li siguiente:

1. Mongodb.
2. Express.
3. Agular.
5. Node js.


¿cómo funciona?

Angular: en Angular poseo 4 componentes:
	1. lista-comentarios: Esto es el modelo de cada comentario individualmente y están ligadas las acciones de editar y borrar.
	3. test-component: Este componente, recive del user el input del comentario agregado y lo guarda utilizando mis servicios.
	4. user: Es el componente que me sirve para visualizar y capturar la información del cliente al momento de crear un nuevo comentario.
	5. app: Es el componte padre de todos, aquí se visualizan los comentario y el apartado de creación de comentarios.

También tengo un MODELO que me sirve para lo siguiente:
	1. Modelo: Me sirve para definir la estructura de mis comentarios, el modelo posee:
		1.1 _id: Id de mongo.
		1.2 nombre.
		1.3 correo.
		1.4 mensaje.
		1.5 movil.
		1.6 nacion.

Mis servicios son los siguiente:
	1.getTask(): Me ayuda a obtener las comentarios que hay en mongo, mediante la api.
	2.addTask(newTask): Me ayuda guardar mis comentarios en mongo, mediante la api.
	3.removeTask(id): Me ayuda a eliminar algún comentario de mongo, mediante la api, enviando el ID.
	4.updateTask(task): Me ayuda a actualizar algún comentario mediante la api, mando todo el comentario para buscar el id y actualizar todo el comentario.



BACKEND: Para el backend, configure mi api(tasks.js) de la siguiente manera:

	1. Cree una instancia de mongo y de redis, para poder manejar esto.
	2. Poseo mis acciones de get, post, put, delete.
	3. Para la base, utilice mongodb, no mongoose.
	4. El único lugar donde tengo utilizando a redis es en la acción get, con un tiempo de expiración de 10 segundos.
	   lo que quiere decir que 10 segundos se guarda en cache y luego se borra.

Para mi archivo de configuración (index.js) Es donde le establezco que escuche el puerto 3000 y de que ruta puede ir a traer mi archivo estático
de frontend productivo.


***INCONVENIENTES***
ACTUALIZACION DE DATOS: Antes de utilizar mongo, no había ningun problema. Pero al utilizar mongo, me costó mucho dar el porque no me actualizaba la data
						yo mandaba el id y el cuerpo del comentario, pero no hacía nada. Estuve investigando e investigando hasta que realicé lo siguiente
						y funcionó:
*****************************************************************************************************************************************************
//actualizar
router.put('/tasks/:id',(req, res, next)=>{
    console.log("api update");
    const task = req.body;
    console.log("api update");
    console.log(task);
    const updateTask = {};

        updateTask.nombre = task.nombre;


        updateTask.correo = task.correo;


        updateTask.mensaje = task.mensaje;
  

        updateTask.movil = task.movil;
 

        updateTask.nacion = task.nacion;
    
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},
        
        {
            $set: {nombre: req.body.nombre, correo: req.body.correo, mensaje: req.body.mensaje, movil: req.body.movil, nacion: req.body.nacion}

        },
        (err, task) =>{
            if (err) {
                console.log("falla");
                return next(err);
                
            }
            else{
                res.json(task);
                console.log("funciona");
            }            
        }
        );			
        
****************************************************************************************************************************************************** 
Me había faltado la parte de $set:

CONEXIÓN DE DOCKER: Una vez terminé con el crud de mongo. Pasé a realizar el docker de mi mean stack app. Al momento de hacer al docker, uno
					de los inconvenientes que me topé fue que redis me daba error, pero lo arreglé direccionando al contenedor de redis.
					Pero tuve otro inconveniente que NO PUDE SOLUCIONAR. Al momento de levantar mis contenedores con éxito y aparentemente 
					todo corriendo. No podía acceder a mis contenedores, tomé en cuenta los mapeos de puertos e incluso las redes del contenedor.
					Probé bajando el firewall, el anitivirus y nada. Probe en otra PC que tengo y nada. Probé realizar un hello-world y dockerizarlo
					y me daba el mismo inconveniente, probe realizar el dockerfile de otra manera y no funcionaba.    			
					Cabe resaltar que probé realizar la dockerización de mi mean stack app de manera que tenía todo en el backend e incluso probé
					separarlo para que solo me pudiera conectar al forntend, pero como menciono, los docker no me daban problema en si, más bien
					la conexión de los mismos. Tenían una ip asignada, pero ni con esto les llegaba.

Cloud computing: Como docker me dio inconveniente, no hice la parte de cloud computing.					
