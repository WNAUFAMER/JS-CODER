//Cree un algoritmo que haga le pide al usuario sus datos ,le asigna categoria segun su edad y valor de cuota social 

const cuotaM = parseInt(1000); 
const cuotaJ = parseInt(1300);   
const cuotaA = parseInt(1700);     ;

for (let i= 0; i<5; i++) {
    let nombre = prompt("Ingrese nombre");
    let apellido = prompt("Ingrese apellido");
    let edadIngresada = parseInt(prompt("ingrese edad"));
    let completo = `${nombre} ${apellido}`;

    if (edadIngresada<=12 && edadIngresada>0)
        alert(`Estimado/a ${completo} usted tiene ${edadIngresada} años recibe la caterigoria MENOR y el valor de la cuota es ${cuotaM} pesos argentinos`);

    else if (edadIngresada>13 && edadIngresada<18) {
        alert(`Estimado/a ${completo} usted tiene ${edadIngresada} años recibe la caterigoria JUVENIL y el valor de la cuota es ${cuotaJ} pesos argentinos`);

    } else {
        alert(`Estimado/a ${completo} usted tiene ${edadIngresada} años recibe la caterigoria ADULTO y el valor de la cuota es ${cuotaA} pesos argentinos`);
    }
};