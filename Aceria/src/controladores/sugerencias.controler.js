'use strict'

const Sugerencia = require('../modelos/sugerencias');

const controller = {
    renderSugerencias: async (req, res) => {
        const sugerencias = await Sugerencia.find().lean();
        res.render('app/sugerencias/all', {sugerencias});
    },

    createSugerencia: (req, res) => {
        const new_Sugerencia = new Sugerencia();

        const { sugerencia } = req.body;

        new_Sugerencia.sugerencia = sugerencia;

        new_Sugerencia.save( (error, sugeren) => {
            if(error) return res.status(500).send({
                CODE: 500,
                STATUS: 'CRASH',
                MESSAGE: 'ERROR AL GUARDAR LA SUGERENCIA',
                ERROR: error
            });

            if(!sugeren) return res.status(404).send({
                CODE: 404,
                STATUS: 'ERROR',
                MESSAGE: 'NO SE HA PODIDO GUARDAR LA SUGERENCIA'
            });

            return res.status(200).send({
                CODE: 200,
                STATUS: 'OK',
                MESSAGE: 'SUGERENCIA ENVIADA EXITOSAMENTE',
                SUGERENCIA: sugeren
            });
        });
    },

    deleteSugerencia: async (req, res) => {
        await Sugerencia.findByIdAndDelete(req.params.id);
        req.flash('success_deleted','Sugerencia eliminada');
        res.redirect('/sugerencias');
    },
};

module.exports = controller;