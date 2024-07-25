import { tipoComprobanteMap } from './constants.js';

export function processQRCode(code, fileName, cantidad, periodo) {
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
            'Fecha': decodedData.fecha,
            'CUIT': decodedData.cuit,
            'Tipo de Comprobante': tipoComprobanteDescripcion,
            'Punto de Venta': decodedData.ptoVta,
            'Número de Comprobante': decodedData.nroCmp,
            'Importe': decodedData.importe,
            'Tipo de Documento del Receptor': decodedData.tipoDocRec,
            'Número de Documento del Receptor': decodedData.nroDocRec,
            'Tipo de Código de Autorización': decodedData.tipoCodAut,
            'Código de Autorización': decodedData.codAut,
            'Cantidad': cantidad,
            'Período': periodo
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
                <td colspan="15">No se encontró el parámetro 'p' en el QR.</td>
            </tr>`,
            data: {
                'Archivo': fileName,
                'Error': 'No se encontró el parámetro \'p\' en el QR.',
                'Cantidad': cantidad,
                'Período': periodo
            }
        };
    }
}