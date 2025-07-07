import { createClient } from "@supabase/supabase-js"
import { Costos } from "../screens/Costos";

const supabaseUrl = "https://ozsrlwajhgayduuhxkec.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96c3Jsd2FqaGdheWR1dWh4a2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODUxODYsImV4cCI6MjA2NTI2MTE4Nn0.fXL-Fgg1XB8BpaaXDHy1Qo-owvJygN1KCbu8BNGrfcw";

const supabase = createClient(supabaseUrl, supabaseKey);


//METODO ADD PERSONA
export const addPersona = async (nombre, telefono) => {
    try {
        const { data } = await supabase
            .from('integrantes')
            .insert({ nombre, telefono });
        console.log('PERSONAS -  Aargado correctamente');
        return data;

    } catch (e) {
        console.log(e);
    }
}

//METODO GET PERSONAS
export const getPersonas = async () => {
    try {
        const { data } = await supabase.from('integrantes').select('*');
        console.log('PERSONAS - Consulta GET con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO DELETE PERSONA
export const deletePersona = async (id) => {
    try {
        const { data } = await supabase.from('integrantes').delete().eq('id', id);
        console.log('PERSONAS - Eliminado con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO EDITAR PERSONA
export const editarPersona = async (id, nombre, telefono) => {
    const persona = { nombre, telefono }
    try {
        const { data } = await supabase.from('integrantes').update(persona).eq('id', id);
        console.log('PERSONAS - Editado con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}




//METODO ADD DESTINO
export const addDestino = async (nombre, lat, long) => {
    try {
        const { data } = await supabase
            .from('destinos')
            .insert({ nombre, lat, long });
        console.log('DESTINOS - Agregado correctamente');
        return data;

    } catch (e) {
        console.log(e);
    }
}

//METODO GET DESTINOS
export const getDestinos = async () => {
    try {
        const { data } = await supabase.from('destinos').select('*');
        console.log('DESTINOS - Consulta GET con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO DELETE DESTINO
export const deleteDestino = async (id) => {
    try {
        const { data } = await supabase.from('destinos').delete().eq('id', id);
        console.log('DESTINOS - Eliminado con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO EDITAR DESTINO
export const editDestino = async (id, nombre, lat, long) => {
    const destino = { nombre, lat, long }
    try {
        const { data } = await supabase.from('destinos').update(destino).eq('id', id);
        console.log('DESTINOS - Editado con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO PARA CREAR UN VIAJE
export const addViaje = async (viaje) => {
    try {
        const { data } = await supabase
            .from('viajes')
            .insert(viaje)
            .select()
        console.log('VIAJES - Creado Correctamente')
        return data

    } catch (e) {
        console.log('VIAJES - Error al cargar Viaje', e)
    }
}

//METODO PARA CREAR VIAJEINTEGRANTE
export const addViajeIntegrante = async (id_viaje, id_integrante) => {
    try {
        const viajeintegrante = { id_viaje, id_integrante }

        const { data } = await supabase
            .from('viajeintegrante')
            .insert(viajeintegrante)
        console.log('VIAJES INTEGRANTES - Integrante Creado Correctamente')
        return data
    } catch (e) {
        console.log('VIAJES IUNTEGRANTES - Error al cargar Viaje Integrante', e)
    }
}

//METODO PARA CREAR VIAJEDESTINO
export const addviajeDestino = async (id_viaje, id_destino) => {
    try {
        const viajedestino = { id_viaje, id_destino }

        const { data } = await supabase
            .from('viajedestino')
            .insert(viajedestino)
        console.log('VIAJE DESTINO - Creado Correctamente')
        return data
    } catch (e) {
        console.log('VIAJE DESTINO - Error al cargar Viaje Destino', e)
    }
}

//METODO PARA CREAR COSTO
export const addCosto = async (c, id_viaje) => {
    try {
        const costo = {tipo: c.tipo, monto: c.monto, id_viaje}

        const { data } = await supabase
            .from('costos')
            .insert(costo);
            console.log('COSTO - Creado Correctamente')
        return data;

    } catch (e) {
        console.log(e);
    }
}

//METODO PARA CREAR TODO
export const crearViajeCompleto = async (nombre, fechaInicio, fechaFin, integrantes, destinos, costos) => {

    const viaje = { nombre, f_inicio: fechaInicio, f_fin: fechaFin }

    try {
        const resultado = await addViaje(viaje)
        
        const id_viaje = resultado[0].id

        integrantes.map(i => {
            addViajeIntegrante(id_viaje, i.id)
        })

        destinos.map(d => {
            addviajeDestino(id_viaje, d.id)
        })

        costos.map(c => {
            addCosto(c, id_viaje)
        })
        
        return resultado

    } catch (e) {
        console.log('Error al cargar Viaje', e);
    }
}

//METODO GET PARA OBTENER LOS VIAJES 
export const getViajes = async() => {
     try {
        const { data } = await supabase.from('viajes').select('*');
        console.log('VIAJES - Consulta GET con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}


