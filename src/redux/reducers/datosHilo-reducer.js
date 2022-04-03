import { DATOS_HILO , MODIFICAR_HILO } from '../types';

const initialState = {
    publicacion: {},
    publicaciones: []
};

const datosHiloReducer = (state = initialState, action) => {
    switch (action.type) {
        //GUARDO EN EL ESTADO LOS DATOS DE LA PUBLICACION
        case DATOS_HILO:
            return action.payload;

        case MODIFICAR_HILO:
            return { ...state, publicacion: action.payload };

        default:
            return state
    }
}

export default datosHiloReducer;