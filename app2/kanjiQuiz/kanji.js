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
    console.log(typeof id);
    let xid = 1;
    console.log(typeof xid);
    const arr = ourKanjis.filter((item) => item.id != id+1);
    console.log(arr);
}