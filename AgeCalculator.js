function ageCalculator(date) {
    let age ;
    let birthdate = new Date(date);
    let currentDate = new Date();
    age = currentDate.getFullYear() - birthdate.getFullYear();
    let montheDifference = currentDate.getMonth() - birthdate.getMonth();
    if(montheDifference < 0|| montheDifference === 0 
        && currentDate.getDate() < birthdate.getDate() )
        { age--; }

    return age;
}
let birthdate = '2002-05-21';
console.log(ageCalculator(birthdate));