# DECISIONS.md — Registro de Decisiones Técnicas y de Diseño

1. **Propuesta D (Híbrida):** Aprobada por el usuario combinando Hero + Experiencia (Propuesta A), Alineación Tecnológica + Tarjetas de Proyectos (Propuesta B) y Beyond the Code (Propuesta C).
2. **Logotipo:** Variante 2 (máscara minimalista + `CI.`) implementada en SVG vectorial para nitidez en todos los tamaños y favicon.
3. **Tailwind CSS v4 (`@tailwindcss/vite`):** Elegido para mantener configuración mínima, bundle CSS reducido y soporte nativo de variables y tema claro/oscuro.
4. **CV ATS descargable sin dependencias pesadas:** Se genera mediante una plantilla dedicada `@media print` / documento limpio de una sola columna en texto seleccionable (ES/EN), evitando librerías pesadas de PDF en cliente y garantizando compatibilidad total con sistemas ATS.
5. **Privacidad y veracidad:** Todos los campos no confirmados (experiencia detallada, formación, certificaciones, LinkedIn, correo) viven en `src/data/` marcados como configurables y no muestran datos ficticios.
