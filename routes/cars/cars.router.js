const { Router } = require('express');
const { validationMiddleware, carsMiddleware } = require('../../middlewares');
const { carsController } = require('../../controllers');

const carsRouter = Router();

carsRouter.get('/', carsController.getCars);
carsRouter.get('/:carId', validationMiddleware.checkCarIdValid, carsController.getCarById);
carsRouter.get('/', carsController.getCars);

carsRouter.post('/', carsMiddleware.checkCarExist, validationMiddleware.checkCarValid, carsController.createCar);

carsRouter.delete('/:carId', carsMiddleware.checkCarExist, validationMiddleware.checkCarIdValid, carsController.deleteCar);

module.exports = carsRouter;
