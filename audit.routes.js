/**
 * ============================================================================
 * SISTEMA DE APROBACIÓN DE CRÉDITOS DE CONSUMO MEDIANTE FLUJOS DINÁMICOS (BPM)
 * Archivo: audit.routes.js
 * Descripción: Rutas Express para consulta forense, certificación de integridad
 *              y exportación regulatoria de la bitácora inmutable.
 * ============================================================================
 */

const express = require('express');
const router = express.Router();
const {
  listarBitacora,
  verificarIntegridad,
  exportarAuditoria
} = require('./audit.controller');

/**
 * @route   GET /api/v1/auditoria
 * @desc    Consultar eventos de auditoría con filtros avanzados
 */
router.get('/', listarBitacora);

/**
 * @route   GET /api/v1/auditoria/verificar-integridad
 * @desc    Verificación criptográfica SHA-256 de inmutabilidad (Merkle-Chain)
 */
router.get('/verificar-integridad', verificarIntegridad);

/**
 * @route   GET /api/v1/auditoria/exportar
 * @desc    Exportar bitácora en JSON o CSV con certificado forense
 */
router.get('/exportar', exportarAuditoria);

module.exports = router;

