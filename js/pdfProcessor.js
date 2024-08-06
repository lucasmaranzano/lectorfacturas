import { processQRCode } from './qrProcessor.js';
import { extraerCantidad, extraerPeriodo } from './dataExtractor.js';
import { enhanceImage } from './utils.js';

export function updateProcessButton() {
    const fileInput = document.getElementById('file-input');
    const processBtn = document.getElementById('process-btn');
    const fileCount = fileInput.files.length;
    
    if (fileCount > 0) {
        processBtn.innerHTML = `Procesar ${fileCount} PDF${fileCount !== 1 ? 's' : ''} <i class="material-icons right">send</i>`;
        processBtn.disabled = false;
    } else {
        processBtn.innerHTML = `Procesar PDFs <i class="material-icons right">send</i>`;
        processBtn.disabled = true;
    }
}

export async function processFiles(tableData) {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;
    if (!files.length) {
        document.getElementById('output').textContent = "Por favor, selecciona uno o más archivos PDF.";
        return;
    }

    tableData.length = 0;
    let tableContent = createTableHeader();

    // Mostrar la barra de progreso
    const progressBar = document.querySelector('.progress');
    const progressBarFill = progressBar.querySelector('.determinate');
    progressBar.style.display = 'block';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await processFile(file);
        tableContent += result.row;
        if (result.data) tableData.push(result.data);

        // Actualizar la barra de progreso
        const progress = ((i + 1) / files.length) * 100;
        progressBarFill.style.width = `${progress}%`;
    }

    tableContent += `</table>`;
    document.getElementById('output').innerHTML = tableContent;
    document.getElementById('export-btn').style.display = 'block';

    // Ocultar la barra de progreso cuando se complete
    progressBar.style.display = 'none';

    updateProcessButton();
}

async function processFile(file) {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);

    const scale = 2.5;
    const viewport = page.getViewport({ scale: scale });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };

    await page.render(renderContext).promise;

    const textContent = await page.getTextContent();
    const texto = textContent.items.map(item => item.str).join(' ');

    const cantidad = extraerCantidad(texto);
    const periodo = extraerPeriodo(texto);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const enhancedImageData = enhanceImage(imageData);

    const code = jsQR(enhancedImageData.data, canvas.width, canvas.height);

    if (code) {
        return processQRCode(code, file.name, cantidad, periodo);
    } else {
        return {
            row: `
            <tr>
                <td>${file.name}</td>
                <td colspan="15">No se pudo leer el código QR.</td>
            </tr>`,
            data: {
                'Archivo': file.name,
                'Error': 'No se pudo leer el código QR.',
                'Cantidad': cantidad,
                'Período': periodo
            }
        };
    }
}

function createTableHeader() {
    return `
    <table id="data-table">
        <tr>
            <th>Archivo</th>
            <th>Fecha</th>
            <th>CUIT</th>
            <th>Tipo de Comprobante</th>
            <th>Punto de Venta</th>
            <th>Número de Comprobante</th>
            <th>Importe</th>
            <th>Tipo de Documento del Receptor</th>
            <th>Número de Documento del Receptor</th>
            <th>Tipo de Código de Autorización</th>
            <th>Código de Autorización</th>
            <th>Cantidad</th>
            <th>Periodo</th>
        </tr>`;
}