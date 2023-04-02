let ourKanjis =
    [
        {id:1, q:"one", a:"ichi"},
        {id:2, q:"two", a:"ni"},
        {id:3, q:"three", a:"san"}
    ]

export function showKanji() {
    return(ourKanjis);
}

export function oneKanji(kId) {
    return ourKanjis[kId-1];
}

export function updateKanji(i, newKanji) {
    ourKanjis[i-1] = newKanji
    console.log(ourKanjis);
}

export function addKanji(newKanji) {
    console.log("addKanji "+ourKanjis[ourKanjis.length-1].id)
    newKanji.id = ("addKanji "+ourKanjis[ourKanjis.length-1].id)
    ourKanjis = [...ourKanjis, newKanji];
}

export function deleteKanji(id) {
    const arr = ourKanjis.filter((item) => item.id !== Number(id));
    ourKanjis = arr;
}