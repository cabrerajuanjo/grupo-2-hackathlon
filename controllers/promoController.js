const db = requiere('./database/models')

const listPromo = async (req,res) =>{
    const promos = req.promos
    return res.stauts(200).json({ msg: promos });
}

const listPromoById = async (req,res) =>{
    const promo = req.promo
    return res.stauts(200).json({ msg: promo });
}

const createPromo = async (req,res) =>{
    const body = req.body;
    const newPromo = await db.Promo.create(body);
    return res.send(201).json({ msg: newPromo });
}

const editPromo = async (req,res) =>{
    const id = req.id;
    const body = req.body;
    await db.Promo.update(body, {where: { id: Number(id) } });
    return res.status(200).json({ msg: `Promoción editada correctamente`});
}

const deletePromo = async (req,res) =>{
    const id = req.id;
    const body = req.body;
    await db.Promo.destroy(body, {where: { id: Number(id) }});
    return res.status(200).json({ msg: `Promoci´n eliminada correctamente`});
}