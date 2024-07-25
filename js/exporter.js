export function exportToExcel(tableData) {
    const ws = XLSX.utils.json_to_sheet(tableData, { header: [
        'Archivo', 'Fecha', 'CUIT', 'Tipo de Comprobante', 'Punto de Venta','Número de Comprobante', 'Importe', 'Tipo de Documento del Receptor',
        'Número de Documento del Receptor', 'Tipo de Código de Autorización',
        'Código de Autorización', 'Cantidad', 'Periodo'
    ]});
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');
    XLSX.writeFile(wb, 'datos_facturas.xlsx');
}