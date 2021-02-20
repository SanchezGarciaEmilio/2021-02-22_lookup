//Calcula el salario de cada empleado en funcion de las horas trabajadas y su departamento.
db.employers.aggregate([
    {$lookup:
        {
        from:"departament",
        localField:"dpt_num",
        foreignField:"id",
        as:"dpto"
        }
    },
    {$project:
        {
        _id:0,
        idEmp:"$idEmploy",
        salary:{ $multiply: [ "$hours", { $arrayElemAt: [ "$dpto", 4 ] } ] }
        }
    }
]).pretty()



//Busca los clientes masculinos cuyo empleado asignado sea del primer departamento.
db.sales.aggregate([
    {$lookup:
        {
        from:"employers",
        localField:"idClient",
        foreignField:"idEmploy",
        as:"employers"
        }
    },
    {$match:{
        "gender": "M",
        "employers.dpt_num":1
        }
    }
]).pretty()
