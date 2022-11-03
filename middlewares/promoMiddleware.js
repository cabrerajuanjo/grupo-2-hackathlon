const db = require('../database/models');

const existPromoList = async (req,res,next) => {
    try{
        const promos = await db.Promo.findAll();
        if (promos[0] != null) {
            req.promos = promos;
            next();
        } else res.status(404).json({ msg: 'No existen promociones en la base de datos' });
    }catch(error){
        res.status(500).json({ msg: 'Server error'});
    }
}

const existPromoById = async (req,res,next) => {
    try {
        const promo = await db.Promo.findByPk(Number(req.params.id));
        if (promo) {
            req.promo = promo;
            next();
        } else res.status(404).json({ msg: 'No existe la promocion' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error'});
    }
}

const existPromoEditVerify = async (req,res,next) => {
    try{
        const { id } = req.params;
        const promo = await db.Promo.findByPk(Number(id));
        if (promo){
            req.id = id;
            next();
        }
        else return res.status(404).json({ msg: 'No existe la promocion a editar' });
    }catch(error){
        res.status(500).json({ msg: 'Server error' });
    }
}

const existPromoDeleteVerify = async (req,res,next) => {
    try{
        const id = Number(req.params.id);
        const promo = await db.Promo.findByPk(id);
        if (promo) {
            req.id = id;
            req.promo = promo;
            next();
        } else res.status(404).json({ msg: 'No existe la promoción a eliminar' })
    }catch(error){
        res.status(500).json({ msg: 'Server error middelware' });
    }
}

module.exports = { existPromoList, existPromoById, existPromoEditVerify, existPromoDeleteVerify}