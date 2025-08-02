const isLibrarian = async (req, res, next) => {
    if(req.user.role !== "librarian"){
        return res.status(403).json({message: "Access denied"})
    }
    next();
};

module.exports = isLibrarian;