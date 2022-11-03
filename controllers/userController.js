const db = require("../database/models");
const generateJWT = require("../helpers/generateJWT");

const userController = {
	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await db.User.findOne({
				/* attributes: {
					exclude: ['password']
				}, */
				where: {
					email,
					password
				}
			}
			);
			console.log(email, password);
            if(user){
                const token = await generateJWT(user.dataValues);
                return res.status(200).json({
                    success: true,
                    message: "Usuario autorizado",
                    user: {
                        id: user.id,
                        email: user.email,
                    },
                    token,
                });
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Usuario no encontrado",
                });
            }
		} catch (error) {
			//console.log(error);
			return res.status(500).json({
				msg: "error",
				error,
			});
		}
	},
	compras: async (req, res) => {
		try {
			//logica cupones 
			
			
		} catch (error) {
			//console.log(error);
			return res.status(500).json({
				msg: "error",
				error,
			});
		}
	}

}

module.exports = userController