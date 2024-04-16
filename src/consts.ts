export const TODO_FILTERS = { //esta es la contante a nivel de variable de JS no puedes reacsignar esa variable 
    ALL: 'all',
    COMPLETED: 'completed',
    ACTIVE: 'active'
}as const // esta es la constante a nivel de TS de que no es modificable ninguno de los elementos que contiene

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }

}as const