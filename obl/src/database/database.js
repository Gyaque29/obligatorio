import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ozsrlwajhgayduuhxkec.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96c3Jsd2FqaGdheWR1dWh4a2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODUxODYsImV4cCI6MjA2NTI2MTE4Nn0.fXL-Fgg1XB8BpaaXDHy1Qo-owvJygN1KCbu8BNGrfcw";

const supabase = createClient(supabaseUrl, supabaseKey);

//METODO ADD PERSONA
export const addPersona = async (nombre, telefono) => {
    try {
        const { data } = await supabase
            .from('integrantes')
            .insert({ nombre, telefono });
        console.log('Persona cargado correctamente');
        return data;

    } catch (e) {
        console.log(e);
    }
}

//METODO GET PERSONAS
export const getPersonas = async () => {
    try {
        const { data } = await supabase.from('integrantes').select('*');
        console.log('Consulta con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO DELETE PERSONA
export const deletePersona = async (id) => {
    try {
        const { data } = await supabase.from('integrantes').delete().eq('id', id);
        console.log('Persona eliminado con exito');
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
        console.log('Persona editado con exito');
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
        console.log('Destino cargado correctamente');
        return data;

    } catch (e) {
        console.log(e);
    }
}

//METODO GET DESTINOS
export const getDestinos = async () => {
    try {
        const { data } = await supabase.from('destinos').select('*');
        console.log('Consulta con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

//METODO DELETE DESTINO
export const deleteDestino = async (id) => {
    try {
        const { data } = await supabase.from('destinos').delete().eq('id', id);
        console.log('Destino eliminado con exito');
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
        console.log('Destino editado con exito');
        return data;
    } catch (e) {
        console.log(e);
    }
}

