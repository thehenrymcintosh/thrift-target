import express, {ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import {NotFound} from "@domain/errors/notFound";
import {readItemOfferHistoryHandler} from "@infrastructure/drivers/express/handlers/readItemOfferHistoryHandler";

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
const errorHandler: ErrorRequestHandler =(err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err.message);
    if (err instanceof NotFound) {
        res.status(404).send({ message: err.message });
    } else {
        console.error(err.stack);
        res.status(500).send();
    }
};

export const buildServer = () => {
    const app = express();
    app.use(express.json());

    app.get('/items/:itemId/offers', readItemOfferHistoryHandler);

    app.use(errorHandler);

    return app;
}