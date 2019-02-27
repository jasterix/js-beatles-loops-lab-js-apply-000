// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 
function theBeatlesPlay(musicians, instruments) {
  beatlesLoop = []
  for (let i=0; i< musicians.length; i++) {
    beatlesLoop.push('${musicians[i]} plays ${instruments[i]}')
    }
}


function johnLennonFacts() {
  johnLennonFacts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ]
}