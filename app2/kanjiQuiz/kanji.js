let ourKanjis =
    [
        {id:1, q:"one", a:"ichi"},
        {id:2, q:"two", a:"ni"},
        {id:3, q:"three", a:"san"}
    ]
const test = "tested";

export function displayKanji() {
    console.log("display Kanji" + test);
}

export function showKanji() {
    //console.log("show kanji"+ourKanjis[0].a);
    return(ourKanjis);
}

export function addKanji() {
    console.log("adding kanji");
}