export interface Consulta {
    id?: number;
    concluido: number|Boolean,
    pago: number|Boolean,
    relato: string,
    resposta?: string,
    taxa: string|number,
    animal_id?: string|null
}
