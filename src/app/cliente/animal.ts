import { Consulta } from "./consulta";
import { Vacina } from "./vacina";

export interface Animal {
    id?: number,
    nome: string,
    tipo: string,
    raca: string,
    consultas?: Consulta[],
    vacinas?: Vacina[]
}
