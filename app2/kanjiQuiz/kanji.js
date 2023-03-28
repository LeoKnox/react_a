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
    return ourKanjis[kId];
}

export function updateKanji(i, newKanji) {
    ourKanjis[i] = newKanji
}

export function addKanji(newKanji) {
    ourKanjis = [...ourKanjis, newKanji];
}

export function deleteKanji(id) {
    const arr = ourKanjis.filter((item) => item.id !== Number(id));
    ourKanjis = arr;
}