/**
 * ============================================================================
 * SISTEMA DE APROBACIÓN DE CRÉDITOS DE CONSUMO MEDIANTE FLUJOS DINÁMICOS (BPM)
 * Archivo: credit.routes.js
 * Descripción: Definición y exposición de rutas Express para el módulo de créditos.
 * ============================================================================
 */

const express = require('express');
const router = express.Router();
const {
  crearSolicitud,
  listarSolicitudes,
  obtenerSolicitudPorId,
  transicionarSolicitud
} = require('./credit.controller');
const { creditCreationLimiter } = require('./security.middleware');

/**
 * @route   POST /api/v1/creditos
 * @desc    Crear nueva solicitud de crédito y ejecutar motor de reglas BPM
 * @access  Público / Protegido por Rate Limiter estricto (10 req / 15 min / IP)
 */
router.post('/', creditCreationLimiter, crearSolicitud);

/**
 * @route   GET /api/v1/creditos
 * @desc    Listar todas las instancias de crédito con soporte de filtros
 */
router.get('/', listarSolicitudes);

/**
 * @route   GET /api/v1/creditos/:id
 * @desc    Obtener detalle de la solicitud, tareas paralelas y bitácora de auditoría
 */
router.get('/:id', obtenerSolicitudPorId);

/**
 * @route   PATCH /api/v1/creditos/:id/transicionar
 * @desc    Transición de estado manual validada por la máquina de estados BPM
 */
router.patch('/:id/transicionar', transicionarSolicitud);

module.exports = router;

