/* Ici ma fonction fais une simple boucle for, celle ci contient quatre conditions au total*/
function FizzBuzz () {
    for (var i = 0; i <= 100; i++){
        /*Si la 1ere condition trouve un entier de 5 et de 7 entre 0 et 100 alors il affiche "FizzBuzz"*/
        if ((i % 5) == 0 && (i % 7) == 0) {
            console.log(i + " FizzBuzz");
        }
        /*Si la 2ième condition trouve un entier de 5 , alors elle affiche "Buzz"*/
        else if ((i % 5) == 0) {
            console.log(i + " Buzz");
        }
        /*Si la 3ième condition trouve un entier de 7 , alors elle affiche "Fizz"*/
        else if((i % 7) == 0) {
            console.log(i + " Fizz");
        }
        /*Sinon si il n'y a pas d'entier ni de 5 , ni de 7 , elle affiche simplement le chiffre sans aucun méssage et continue de compté jusqu'a 100*/
        else {
            console.log(i);
        }
    }
};
FizzBuzz();