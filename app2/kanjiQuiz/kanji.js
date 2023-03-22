let ourKanjis =
    [
        {id:1, q:"one", a:"ichi"}
    ]
const test = "tested";

export function displayKanji() {
    console.log("display Kanji" + test);
}

export function showKanji() {
    console.log("show kanji"+ourKanjis[0].a);
}