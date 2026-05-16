import { Router } from "express";

const subscriptionRouter =  Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({
        message: "Get subscriptions"
    });
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({
        message: "Get subscription"
    });
});

subscriptionRouter.post('/', (req, res) => {
    res.send({
        message: "Add subscription"
    });
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send({
        message: "Update subscription"
    });
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({
        message: "Delete subscription"
    });
});

subscriptionRouter.get('/users/:id', (req, res) => {
    res.send({
        message: "Get user's subscriptions"
    });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({
        message: "Cancel subscription"
    });
});

subscriptionRouter.get('/upcoming-subscriptions', (req, res) => {
    res.send({
        message: "Get upcoming subscriptions"
    });
});

export default subscriptionRouter;