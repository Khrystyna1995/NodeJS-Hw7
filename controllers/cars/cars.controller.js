const {
    OK, CREATED, DELETED
} = require('../../configs/error-codes');
const { carsService } = require('../../services');

module.exports = {
    getCars: async (req, res, next) => {
        try {
            const cars = await carsService.getCars();

            res.status(OK).json(cars);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        try {
            const car = await carsService.createCar({ ...req.body });

            res.status(CREATED.code).json(car);
        } catch (e) {
            next(e);
        }
    },

    getCarById: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carsService.getCarById(carId);

            res.status(OK);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carsService.deleteCar(carId);

            res.status(DELETED);
        } catch (e) {
            next(e);
        }
    }
};
