let animeles_aerios = ["Agila", "Paloma", "Loro", "Colibri"];
let animeles_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animeles_acuticos = ["Pez", "Trucha", "Salmon", "Delfin"];


cliclo_aerios:
for(let aerios of animeles_aerios){
    cliclo_terrestres:
    for(let terrestres of animeles_terrestres){
            cliclo_acuaticos:
            for(let acuticos of animeles_acuticos){
                console.count();
                // break cliclo_acuaticos;
                console.log(`Animales Acuticos: ${acuticos}`);
            }
        break cliclo_terrestres;
        console.log(`Animales Terrestres: ${terrestres}`);
    }
    break cliclo_aerios;
    console.log(`Animales Aerios: ${aerios}`);
}