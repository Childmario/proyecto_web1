const router = require('express').Router();
const mongojs = require('mongojs')
const db = mongojs('mean-db', ['tasks']);
//var redis = require('redis');
 
//var cliente = redis.createClient(6379, '127.0.0.1');
//var cliente = redis.createClient(6379, 'redis');

router.get('/tasks', (req, res, next) => {
db.tasks.find((err, tasks) => {
    if (err) {
        return next(err);
    }
    else{
        res.json(tasks);
    }
        });
});

//busqueda por id
router.get('/tasks/:id', (req, res, next) => {

    cliente.get(req.params.id, (err, task) => {
        if (err) {return next(err);}
        if (task) {
            res.json(JSON.parse(task));
        } else {
            db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
                if (err) {
                    return next(err);
                }
                else{
                    res.json(task);
                    cliente.setex(req.params.id,10, JSON.stringify(task), (err)=>{
                        if (err) {
                            return next(err);
                        }
                    });
                }
                    });
        }
    })



    });


    //Guardar comentario
router.post('/tasks', (req, res, next) => {
    console.log("body here");
    console.log(req.body);
    console.log("body here");
    const task = req.body;
    console.log(task);
    if (!task.nombre) {
        res.status(400).json({
            error: 'Ha enviado datos erroneos'
        });
    }
    else{
        db.tasks.save(task, (err, task) => {

            if (err) {
                return next(err);
            }
            else{
                res.json(task);
            }                     

        });
    }

});

router.delete('/tasks/:id', (req, res, next) => {
    console.log("api delete");
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {

        if (err) {
            return next(err);
        }
        else{
            res.json(result);
        }          

    });

});

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


    

});

module.exports = router;

