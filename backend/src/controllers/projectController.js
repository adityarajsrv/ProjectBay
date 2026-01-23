import { PROJECT_ROLES } from "../constants/projectRoles.js";
import Project from "../models/Project.js";

export const createProject = async (req, res, next) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({
                message: "Name and description are required",
            });
        }

        const project = await Project.create({
            name,
            description,
            owner: req.user.id,
            members: [
                {
                    user: req.user.id,
                    role: PROJECT_ROLES.OWNER,
                },
            ],
            status: "ACTIVE",
        })
        res.status(201).json(project);
    } catch (err) {
        next(err);
    }
};

export const getMyProjects = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const projects = await Project.find({
            $or: [
                { owner: userId },
                { "members.user": userId },
            ],
        })
            .select("name description status createdAt members")
            .sort({ createdAt: -1 });

        res.json(projects)
    } catch (err) {
        next(err);
    }
};

export const getProjectById = async (req, res) => {
    const project = req.project;

    res.json({
        id: project._id,
        name: project.name,
        description: project.description,
        status: project.status,
        role: req.projectRole,
        membersCount: project.members.length,
        createdAt: project.createdAt,
    })
}