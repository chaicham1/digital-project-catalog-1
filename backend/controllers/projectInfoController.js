
const projectsDetailsMongoDB = require('../../mySql/usersDB');

module.exports = {

    getProjectInfo : async(req,res,next) => {
        try{
            var users = await projectsDetailsMongoDB.getProjects();
            return res.status(200).json({
                message: "Successfully worked",
                projects: projects
            });
        }catch(err){
            return res.status(500).json({
                message: "Failed"
            });
        }
    }
}