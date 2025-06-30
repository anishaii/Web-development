const Users = require("../model/userSchema");

const getAllEmployee = async (req, res) => {
    console.log("Get Alls");

    try {
        const users = await Users.findAll();

       
        return res.status(200).send({
            data: users,
            message: users.length === 0
                ? "No users found"
                : "Successfully fetched data"
        });
        
    } catch (error) {
        console.error("Error while fetching:", error);
        return res.status(500).json({ message: "Error while fetching data" });
    }
};

const saveAllEmployee = async (req , res) => {
    console.log(req.body);
    const{name, username }= req.body;

    try{
        const user = await Users.findOne({ where: {username}});
        if(user == null){
            await Users.create(req.body);
            return res.status(201).json({message: "Users Added Successfully"});
        }
        return res.status(500).json({ message: "user is already present"});
    }catch(error){
        console.log(error);
    }
};

module.exports = { getAllEmployee,saveAllEmployee };
