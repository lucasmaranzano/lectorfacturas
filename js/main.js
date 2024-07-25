import { processFiles, updateProcessButton } from './pdfProcessor.js';
import { exportToExcel } from './exporter.js';

let tableData = [];

document.getElementById('process-btn').addEventListener('click', () => processFiles(tableData));
document.getElementById('export-btn').addEventListener('click', () => exportToExcel(tableData));
document.getElementById('file-input').addEventListener('change', updateProcessButton);