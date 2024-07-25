export function exportToExcel(tableData) {
    const ws = XLSX.utils.json_to_sheet(tableData, { header: [
        'Archivo', 'Ver', 'Fecha', 'CUIT', 'Punto de Venta', 'Tipo de Comprobante',
        'Número de Comprobante', 'Importe', 'Moneda', 'CTZ', 'Tipo de Documento del Receptor',
        'Número de Documento del Receptor', 'Tipo de Código de Autorización',
        'Código de Autorización', 'Cantidad', 'Periodo'
    ]});
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');
    XLSX.writeFile(wb, 'datos_facturas.xlsx');
}