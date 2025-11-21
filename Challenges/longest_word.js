/*  
    Hello Javascript
    
    The following code sample will should return the longest word in the sentence. 

 */

const findLongestWord = (str) => {

    if(str.trim().length === 0){
        return false
    }
    
    words = str.split(" ");
    words.sort((a, b) => (a.length - b.length));
    // words =words.slice().sort((a, b) => (a.length - b.length))

    // words = words.sort(); // Will sort Capital case Ascending and then small case ascending
    console.log('Words >>> ', words)
    console.log(`Longest Wors is >>> `, words.pop());


}

const findTheSpecifiedWord = (str) => {
    let sampWord = str.toString().substring('')
    console.log(`SampWorld >>> `,sampWord)
}
findTheSpecifiedWord('Pradeep')

findLongestWord('Hello Pradeep Kumar Penugonda and he is saying Hi')