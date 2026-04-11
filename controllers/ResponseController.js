const getResponse = async(req, res) => {
    try {
        const response = {
            data: "data success",
        };
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    getResponse
};