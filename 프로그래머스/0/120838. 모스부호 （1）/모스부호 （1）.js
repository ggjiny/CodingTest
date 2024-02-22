function solution(letter) {
    let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    return letter.split(" ").map(morse=>"abcdefghijklmnopqrstuvwxyz"[morseArr.indexOf(morse)]).join("")
}