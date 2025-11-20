//Variavel nome do Herói
let nomeDoHeroi = "Raijunior";

//Quantidade de experiência (XP) do herói
let xpDoHeroi = 7002;

//Classificação do nível de Herói por XP

let nivel;

if (xpDoHeroi < 1000) {
    nivel = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivel = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivel = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivel = "Imortal";
//Maior ou igual a 10001
} else { 
    nivel = "Radiante";
}

//Saida mensagem do nome do Herói e qual nível ele está
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);