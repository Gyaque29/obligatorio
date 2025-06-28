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
        console.log('Cargado correctamente');
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
    }catch(e){
        console.log(e);
    }
}

//METODO DELETE PERSONA
export const deletePersona = async (id) =>{
    try {
        const { data } = await supabase.from('integrantes').delete().eq('id',id);
        console.log('Eliminado con exito');
        return data;
    }catch(e){
        console.log(e);
    }
}


//METODO AGREGAR DESTINO
export const insertDestino = async (destino) => {
    const { data } = await supabase.from('destinos').insert(destino);
    return data;
}

