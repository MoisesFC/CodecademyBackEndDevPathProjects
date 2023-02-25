// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//creates new species of pAequor
const pAequorFactory = (speciesNumn, dna) => {
  return {
    speciesNum: speciesNumn,
    dna: dna,
    //This will select a random base number and remove those instances from the current dna array and return the new array.
    mutate: function () {
      let allBases = ["A", "T", "C", "G"];
      let base = returnRandBase();
      allBases.splice(allBases.indexOf(base), 1);
      let newBase = allBases[Math.floor(Math.random() * 3)];
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === base) {
          dna[i] = newBase;
        }
      }
      return dna;
    },
    //Compares the dna with another speciment of pAquor, it will return the percentage of equality.
    compareDNA: function(pAequor) {
      let identical = 0;
      for(let i = 0; i < dna.length; i++) {
        if(dna[i] == pAequor.dna[i]){
          identical++;
        }
      }
      let percent = ((identical / 15) * 100).toFixed(2);
      return `Specimen #${speciesNumn} and specimen #${pAequor.speciesNum} have ${percent}% in commom.`
    },
    //if the speciment's dna has over 60% of G or C instances, it will return false.
    willLikelySurvive: function() {
      let amount = 0;
      let percent = 0;
      for(let i = 0; i< dna.length; i++){
        if(dna[i] == "C" || dna[i] == "G") {
          amount ++;
        }
      }
      percent = ((amount / 15) * 100).toFixed(2);
      if(percent > 60){
        return false;
      } else{
        return true;
      }
    }
  }
};


let sample1 = pAequorFactory(1, mockUpStrand());
let sample2 = pAequorFactory(2, mockUpStrand());

let survivorpAequor = [];

while(survivorpAequor.length < 30) {
  let i = pAequorFactory(survivorpAequor.length, mockUpStrand())
  if(i.willLikelySurvive){
    survivorpAequor.push(i)
  }
  
}

console.log(survivorpAequor);