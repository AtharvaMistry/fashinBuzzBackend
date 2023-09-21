// Candlelight Dinners

const { five_star } = require('../model/5_star_dinning_model')

const create_five_star_dining = async (req, res) => {
    const {
        Name,
        Email,
        Phone,
        Company_name,
        Message,
        Interest
    } = req.body
    const obj = new five_star({
        Name,
        Email,
        Phone,
        Company_name,
        Message,
        Interest
    })
    
    try {
        const data = await obj.save()
        res.status(201).send({ Message: '5 Star Dinning Created Successfully', data })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}

const viewall = async (req, res) => {
    try {
        let sortDirection = 1; // Default to ascending (low to high)

        if (req.query.sort === 'high-to-low') {
            sortDirection = -1; // Change to descending (high to low)
        }
        const data = await five_star.find().sort({ Price: sortDirection })
        res.status(201).send({ Message: 'Get all Successfully', data })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}

const update_decoration = async (req, res) => {
    const { id } = req.params
    try {
        const existing = await five_star.findById(_id)
        if (!existing) {
            return res.status(404).send({ Message: 'Decoration Not Found' })
        }
        const data = await five_star.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).send({ Message: 'Decoration Updatd Successfully', data })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}

const delete_decoration = async (req, res) => {
    const { id } = req.params
    try {
        const existing = await five_star.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'Decoration Not Found' })
        }
        let data = await five_star.findByIdAndDelete()
        data = {
            Message: 'Ok'
        }
        res.status(201).send({ Message: 'Decoration deleted Successfully' })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}

module.exports = { create_five_star_dining, viewall, update_decoration, delete_decoration }