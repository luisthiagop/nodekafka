import express from 'express';

const routes = express.Router();


routes.post('/certifications', async (re, res) => {
    //chamar micro seviço
    return res.json({ ok: true });
});

export default routes;