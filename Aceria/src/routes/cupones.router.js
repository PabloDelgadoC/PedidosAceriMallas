const {Router} = require('express');
const router = Router();


const cupones=require('../modelos/cupones');

//renderizar las pantallas
router.get('/consultarCupon/:id', async(req,res)=>{
    let id=req.params.id;
    console.log('id: ',id)

    let data1=await cupones.find({ "codigo": { $eq: id } })
    console.log(data1)
    if(data1.length==0){
        return res.send({'resp': 'invalido'})
    }else{
        if(data1[0].canjeado==true){
            return res.send({'resp': 'canjeado'})
        }else{

            //obteniendo el id
            let idDocumento=data1[0]._id;
            let cupon=new cupones();
            cupon.codigo=data1[0].codigo;
            cupon.canjeado=true;
            cupon.porcentaje=data1[0].porcentaje


            console.log(idDocumento)
            let data2=await cupones.updateOne({codigo: id},{
                $set: { "canjeado": true}
            });
            console.log(data2)
            return res.send({'resp': data1[0].porcentaje})
        }
    }
});

router.get('/api/cupones', async (req, res) => {
    const cupons = await cupones.find().lean();
    return res.status(200).send({
        STATUS: 'OK',
        MESSAGE: 'Show cupons',
        CUPONS: cupons
    });
});

module.exports = router;