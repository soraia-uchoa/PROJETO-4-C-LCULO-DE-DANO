var name1 = prompt("Digite o nome do personagem 1 (atacante): ");
const power1 = parseInt(prompt("Digite o poder de ataque do personagem 1 : "));
var name2 = prompt("Digite o nome do personagem 2 (defensor): ");
var life2 = parseInt(prompt("Digite os pontos de vida do personagem 2: "));
const def = parseInt(prompt("Digite o poder de defesa do personagem 2: "));
var shield = prompt("O personagem 2 possui um escudo? (S/N): ")

let damage;
if (power1 > def) {
    if (shield === "N") {
        damage = power1 - def;
    } else {
        damage = (power1 - def) / 2;
    }
} else {
    damage = 0;
}

let currentLife = life2 - damage;

let message;
if (damage > 0) {
    if (shield === "N") {
        message = `${name1} atacou. ${name2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${currentLife}.`;
    } else {
        message = `${name1} atacou. ${name2} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${currentLife}.`;
    }
} else {
    message = `${name1} atacou, mas não afetou ${name2}. Nenhum dano causado!`;
}

alert(message);
