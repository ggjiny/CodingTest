function solution(phone_book) {
    phone_book.sort()
    for(let i=0; i<phone_book.length-1;i++){
        for(let j=i+1; j<phone_book.length; j++){
            if(phone_book[i] === phone_book[j].slice(0, phone_book[i].length)){
                return false
            }else{
                break;
            }
        }
    } 
    return true;
}