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

export function deleteKanji(id) {
    let xid = 1;
    const arr = ourKanjis.filter((item) => item.id !== xid);
    console.log(arr);
}