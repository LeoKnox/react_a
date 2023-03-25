let ourKanjis =
    [
        {id:1, q:"one", a:"ichi"},
        {id:2, q:"two", a:"ni"},
        {id:3, q:"three", a:"san"}
    ]

export function showKanji() {
    return(ourKanjis);
}

export function addKanji(newKanji) {
    ourKanjis = [...ourKanjis, newKanji];
}

export function deleteKanji(xid) {
    console.log("delete kanji ");
    let myArray = ourKanjis.filter(function(kanji) {
        return kanji.id !== xid;
    })
    console.log(myArray);
}