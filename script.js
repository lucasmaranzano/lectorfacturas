const tipoComprobanteMap = {
    '1': 'FACTURAS A',
    '2': 'NOTAS DE DEBITO A',
    '3': 'NOTAS DE CREDITO A',
    '4': 'RECIBOS A',
    '5': 'NOTAS DE VENTA AL CONTADO A',
    '6': 'FACTURAS B',
    '7': 'NOTAS DE DEBITO B',
    '8': 'NOTAS DE CREDITO B',
    '9': 'RECIBOS B',
    '10': 'NOTAS DE VENTA AL CONTADO B',
    '11': 'FACTURAS C',
    '12': 'NOTAS DE DEBITO C',
    '13': 'NOTAS DE CREDITO C',
    '15': 'RECIBOS C',
    '16': 'NOTAS DE VENTA AL CONTADO C',
    '17': 'LIQUIDACION DE SERVICIOS PUBLICOS CLASE A',
    '18': 'LIQUIDACION DE SERVICIOS PUBLICOS CLASE B',
    '19': 'FACTURAS DE EXPORTACION',
    '20': 'NOTAS DE DEBITO POR OPERACIONES CON EL EXTERIOR',
    '21': 'NOTAS DE CREDITO POR OPERACIONES CON EL EXTERIOR',
    '22': 'FACTURAS - PERMISO EXPORTACION SIMPLIFICADO - DTO. 855/97',
    '23': 'COMPROBANTES "A" DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    '24': 'COMPROBANTES "A" DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    '25': 'COMPROBANTES "B" DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    '26': 'COMPROBANTES "B" DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    '27': 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    '28': 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    '29': 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    '30': 'COMPROBANTES DE COMPRA DE BIENES USADOS',
    '31': 'MANDATO - CONSIGNACION',
    '32': 'COMPROBANTES PARA RECICLAR MATERIALES',
    '33': 'LIQUIDACION PRIMARIA DE GRANOS',
    '34': 'COMPROBANTES A DEL APARTADO A  INCISO F)  R.G. N°  1415',
    '35': 'COMPROBANTES B DEL ANEXO I, APARTADO A, INC. F), R.G. N° 1415',
    '36': 'COMPROBANTES C DEL Anexo I, Apartado A, INC.F), R.G. N° 1415',
    '37': 'NOTAS DE DEBITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415',
    '38': 'NOTAS DE CREDITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415',
    '39': 'OTROS COMPROBANTES A QUE CUMPLEN CON LA R G  1415',
    '40': 'OTROS COMPROBANTES B QUE CUMPLAN CON LA R.G. N° 1415',
    '41': 'OTROS COMPROBANTES C QUE CUMPLAN CON LA R.G. N° 1415',
    '43': 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    '44': 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    '45': 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    '46': 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    '47': 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    '48': 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    '49': 'COMPROBANTES DE COMPRA DE BIENES NO REGISTRABLES A CONSUMIDORES FINALES',
    '50': 'RECIBO FACTURA A  REGIMEN DE FACTURA DE CREDITO',
    '51': 'FACTURAS M',
    '52': 'NOTAS DE DEBITO M',
    '53': 'NOTAS DE CREDITO M',
    '54': 'RECIBOS M',
    '55': 'NOTAS DE VENTA AL CONTADO M',
    '56': 'COMPROBANTES M DEL ANEXO I  APARTADO A  INC F) R.G. N° 1415',
    '57': 'OTROS COMPROBANTES M QUE CUMPLAN CON LA R.G. N° 1415',
    '58': 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO M',
    '59': 'LIQUIDACIONES M',
    '60': 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO A',
    '61': 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO B',
    '63': 'LIQUIDACIONES A',
    '64': 'LIQUIDACIONES B',
    '66': 'DESPACHO DE IMPORTACION',
    '68': 'LIQUIDACION C',
    '70': 'RECIBOS FACTURA DE CREDITO',
    '80': 'INFORME DIARIO DE CIERRE (ZETA) - CONTROLADORES FISCALES',
    '81': 'TIQUE FACTURA A',
    '82': 'TIQUE FACTURA B',
    '83': 'TIQUE',
    '88': 'REMITO ELECTRONICO',
    '89': 'RESUMEN DE DATOS',
    '90': 'OTROS COMPROBANTES - DOCUMENTOS EXCEPTUADOS - NOTAS DE CREDITO',
    '91': 'REMITOS R',
    '99': 'OTROS COMPROBANTES QUE NO CUMPLEN O ESTÁN EXCEPTUADOS DE LA R.G. 1415 Y SUS MODIF',
    '110': 'TIQUE NOTA DE CREDITO',
    '111': 'TIQUE FACTURA C',
    '112': 'TIQUE NOTA DE CREDITO A',
    '113': 'TIQUE NOTA DE CREDITO B',
    '114': 'TIQUE NOTA DE CREDITO C',
    '115': 'TIQUE NOTA DE DEBITO A',
    '116': 'TIQUE NOTA DE DEBITO B',
    '117': 'TIQUE NOTA DE DEBITO C',
    '118': 'TIQUE FACTURA M',
    '119': 'TIQUE NOTA DE CREDITO M',
    '120': 'TIQUE NOTA DE DEBITO M',
    '210': 'FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) A',
    '220': 'NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) A',
    '230': 'NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) A',
    '260': 'FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) B',
    '270': 'NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) B',
    '280': 'NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) B',
    '211': 'FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) C',
    '212': 'NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) C',
    '213': 'NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) C',
    '331': 'LIQUIDACION SECUNDARIA DE GRANOS',
    '332': 'CERTIFICACION ELECTRONICA (GRANOS)',
    '995': 'REMITO ELECTRÓNICO CÁRNICO'
};

let tableData = [];

document.getElementById('process-btn').addEventListener('click', processFiles);
document.getElementById('export-btn').addEventListener('click', exportToExcel);
document.getElementById('file-input').addEventListener('change', updateProcessButton);

function updateProcessButton() {
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

async function processFiles() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;
    if (!files.length) {
        document.getElementById('output').textContent = "Por favor, selecciona uno o más archivos PDF.";
        return;
    }

    tableData = [];
    let tableContent = createTableHeader();

    for (const file of files) {
        const result = await processFile(file);
        tableContent += result.row;
        if (result.data) tableData.push(result.data);
    }

    tableContent += `</table>`;
    document.getElementById('output').innerHTML = tableContent;
    document.getElementById('export-btn').style.display = 'block';

    updateProcessButton();
}

function createTableHeader() {
    return `
    <table id="data-table">
        <tr>
            <th>Archivo</th>
            <th>Ver</th>
            <th>Fecha</th>
            <th>CUIT</th>
            <th>Punto de Venta</th>
            <th>Tipo de Comprobante</th>
            <th>Número de Comprobante</th>
            <th>Importe</th>
            <th>Moneda</th>
            <th>CTZ</th>
            <th>Tipo de Documento del Receptor</th>
            <th>Número de Documento del Receptor</th>
            <th>Tipo de Código de Autorización</th>
            <th>Código de Autorización</th>
        </tr>`;
}

async function processFile(file) {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer, password: '', cMapUrl: 'cmaps/', cMapPacked: true }).promise;
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

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const enhancedImageData = enhanceImage(imageData);

    const code = jsQR(enhancedImageData.data, canvas.width, canvas.height);

    if (code) {
        return processQRCode(code, file.name);
    } else {
        return {
            row: `
            <tr>
                <td>${file.name}</td>
                <td colspan="13">No se pudo leer el código QR.</td>
            </tr>`,
            data: {
                'Archivo': file.name,
                'Error': 'No se pudo leer el código QR.'
            }
        };
    }
}

function processQRCode(code, fileName) {
    const urlParams = new URLSearchParams(new URL(code.data).search);
    const base64String = urlParams.get('p');
    if (base64String) {
        const decodedString = atob(base64String);
        const decodedData = JSON.parse(decodedString);

        const tipoComprobanteDescripcion = tipoComprobanteMap[decodedData.tipoCmp] || decodedData.tipoCmp;

        if (decodedData.nroDocRec === 30589130487) {
            decodedData.nroDocRec = "30589130487 - OSEN";
        }

        const rowData = {
            'Archivo': fileName,
            'Ver': decodedData.ver,
            'Fecha': decodedData.fecha,
            'CUIT': decodedData.cuit,
            'Punto de Venta': decodedData.ptoVta,
            'Tipo de Comprobante': tipoComprobanteDescripcion,
            'Número de Comprobante': decodedData.nroCmp,
            'Importe': decodedData.importe,
            'Moneda': decodedData.moneda,
            'CTZ': decodedData.ctz,
            'Tipo de Documento del Receptor': decodedData.tipoDocRec,
            'Número de Documento del Receptor': decodedData.nroDocRec,
            'Tipo de Código de Autorización': decodedData.tipoCodAut,
            'Código de Autorización': decodedData.codAut
        };

        return {
            row: `
            <tr>
                ${Object.values(rowData).map(value => `<td>${value}</td>`).join('')}
            </tr>`,
            data: rowData
        };
    } else {
        return {
            row: `
            <tr>
                <td>${fileName}</td>
                <td colspan="13">No se encontró el parámetro 'p' en el QR.</td>
            </tr>`,
            data: {
                'Archivo': fileName,
                'Error': 'No se encontró el parámetro \'p\' en el QR.'
            }
        };
    }
}

function enhanceImage(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        const contrast = (brightness - 128) * 2 + 128;
        data[i] = data[i + 1] = data[i + 2] = contrast > 255 ? 255 : contrast < 0 ? 0 : contrast;
    }
    return imageData;
}

function exportToExcel() {
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos de Facturas");
    XLSX.writeFile(wb, "datos_facturas.xlsx");
}

// Asegúrate de que el botón esté deshabilitado inicialmente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('process-btn').disabled = true;
});