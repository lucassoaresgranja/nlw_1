import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lampadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'lampadas.svg' },
        { title: 'Papeis e Papelao', image: 'lampadas.svg' },
        { title: 'Residos ELetronicos', image: 'lampadas.svg' },
        { title: 'Residos Organicos', image: 'lampadas.svg' },
        { title: 'OLeo de Cosinha', image: 'lampadas.svg' },

    ]);
}