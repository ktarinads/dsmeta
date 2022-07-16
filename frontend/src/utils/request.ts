//script do typescript mesmo
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
//essa linha exporta uma variavel constante, de base url. 
// o import.meta.env. é uma variável de ambiente, que carrega a informação de 
// E o ?? é um operador que significa que o valor do lado direito tem um valor padrão da variável, porém ela vai pegar 
// o valor que está à esquerda. se não tiver variavel de ambiente com esse nome, por padrão, utilize o localhost:8080
// esse macete é pra fazer o frontend pegar o valor local caso nao tenha instalado o front num lugar q ainda n tenha env variables
 