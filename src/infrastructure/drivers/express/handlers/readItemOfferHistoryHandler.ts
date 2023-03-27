import {RequestHandler} from "express";
import {adaptors} from "@infrastructure/adaptors";
import {readItemOfferHistory} from "@application/usecases/readItemOfferHistory";

const dependencies = {
    offerRepository: adaptors.offerRepository
}
export const readItemOfferHistoryHandler: RequestHandler = (req, res, next) => {
    const itemId = req.params.itemId;
    console.log(itemId);
    readItemOfferHistory(dependencies, { itemId })
        .then(offers => res.status(200).send({ offers }))
        .catch(next);
}