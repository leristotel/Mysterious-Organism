// Returns a random DNA base
const returnRandBase = (banElement) => {
  const dnaBases = ['A', 'T', 'C', 'G'].filter(elem => {
    if(elem!=banElement){
      return elem;
    }
  })
    
  return dnaBases[Math.floor(Math.random() * dnaBases.length)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array, 
    mutate() {
      this.dna=this.dna.map(item => {
        item=returnRandBase(item);
        return item;
      })
    
    },
    compareDNA(pAequorObject){
      let amountOfSimilarElement=0;
      this.dna.forEach((item, i) => {
        if (this.dna[i] === pAequorObject.dna[i])       {amountOfSimilarElement++}
      })
      console.log(`${this.specimenNum} and ${pAequorObject.specimenNum} have ${amountOfSimilarElement/this.dna.length*100} DNA in common`);
      
    }, 
    willLikelySurvive(){
      let amountOfCandG=0;
      let amountOfG=0;
      this.dna.forEach(base => {
        if (base==='C' || base==='G' ){
          amountOfCandG++;
        }
      }) 
      if ( amountOfCandG*100/this.dna.length >= 60 ){
        return true;
      } 
      return false;
      
    }
  }
}

function getSurviveInstances() {
 const surviveInstances=[];
 while(surviveInstances.length < 30 ){
   const testInstance=pAequorFactory(1,  mockUpStrand());
   if(testInstance.willLikelySurvive()){
     surviveInstances.push(testInstance)
   }
 }
 return surviveInstances;
}
