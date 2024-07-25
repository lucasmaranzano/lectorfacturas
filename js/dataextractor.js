export function extraerCantidad(texto) {
    const regex = /Cantidad\s+U\.\s+Medida.*?(\d+),00/;
    const match = texto.match(regex);
    return match ? parseInt(match[1]) : null;
}

export function extraerPeriodo(texto) {
    const meses = {
        'enero': 'Enero', 'febrero': 'Febrero', 'marzo': 'Marzo', 'abril': 'Abril',
        'mayo': 'Mayo', 'junio': 'Junio', 'julio': 'Julio', 'agosto': 'Agosto',
        'septiembre': 'Septiembre', 'octubre': 'Octubre', 'noviembre': 'Noviembre', 'diciembre': 'Diciembre',
        'ene': 'Enero', 'feb': 'Febrero', 'mar': 'Marzo', 'abr': 'Abril',
        'may': 'Mayo', 'jun': 'Junio', 'jul': 'Julio', 'ago': 'Agosto',
        'sep': 'Septiembre', 'oct': 'Octubre', 'nov': 'Noviembre', 'dic': 'Diciembre',
        '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril',
        '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto',
        '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre'
    };

    const regex = /(?:MES DE |Periodo|Período|Mes)[:;]?\s*((?:\w+\.?\s*(?:de\s*)?\d{4})|(?:\d{2}[-\s]?\d{4})|(?:\w{3,}\.?\s*(?:de\s*)?\d{4}))/i;
    const match = texto.match(regex);

    if (match) {
        let periodoStr = match[1].trim().toLowerCase();
        periodoStr = periodoStr.replace(/\sde\s/g, ' ');
        
        let [mes, anio] = periodoStr.split(/\s+/);
        mes = mes.toLowerCase();

        if (meses[mes]) {
            return `${meses[mes]} ${anio}`;
        } else {
            const mesEncontrado = Object.keys(meses).find(key => mes.includes(key) || key.includes(mes));
            if (mesEncontrado) {
                return `${meses[mesEncontrado]} ${anio}`;
            } else {
                return periodoStr.charAt(0).toUpperCase() + periodoStr.slice(1);
            }
        }
    }
    return null;
}