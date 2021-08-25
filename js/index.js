/*Creating random no. 1 */
var randomNumber1= Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);
/*Creating random no. 2 */
var randomNumber2= Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
 document.querySelector("h2").textContent = "Player 1 Wins!";

} else if (randomNumber2 > randomNumber1) {
 document.querySelector("h2").textContent = "Player 2 Wins!";

} else {
document.querySelector("h2").textContent = "Draw!";
}
