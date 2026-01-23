import Project from "../models/Project.js";

export const requireProjectRole = (allowedRoles = []) => {
    return async (req, res, next) => {
        try{
            const {projectId} = req.params;
            const userId = req.user.id;

            const project = await Project.findById(projectId);
            if(!project){
                return res.status(404).json({ message: "Project not found" });
            }

            const member = project.members.find(
                (m) => m.user.toString() === userId
            );

            if(!member){
                return res.status(403).json({ message: "Access denied" });
            }

            if(allowedRoles.length && !allowedRoles.includes(member.role)){
                return res.status(403).json({ message: "Insufficient permissions" });
            }

            req.project = project;
            req.projectRole = member.role;

            next();
        }catch(err){
            next(err);
        }
    };
};