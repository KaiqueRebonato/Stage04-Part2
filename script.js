const students = [
  {
   name: "Caio",
   noteOne: 5,
   noteTwo: 4,
  },
  {
   name: "Montes",
   noteOne: 8,
   noteTwo: 5,
  },
  {
   name: "Kaique",
   noteOne: 9,
   noteTwo: 9,
  },
  {
   name: "Eduardo",
   noteOne: 9,
   noteTwo: 8,
  },
 ]
 
 
 function finalnote(noteOne, noteTwo) {
   return ((noteOne + noteTwo) / 2).toFixed(2)
 }
 
 function printNoteAndCheckPass(student) {
   const avarege =  finalnote(student.noteOne, student.noteTwo)
   
   
   if (avarege >= 7) {
     alert(`A média do aluno ${student.name} é de: ${avarege} 
     Parabéns ${student.name} Você foi aprovado(a) no concurso`)
   } else {
     alert(`A média do aluno ${student.name} é de: ${avarege} 
     Não foi dessa vez, ${student.name}! Tente novamente.`)
   }
 }
 
 for(let student of students){
   printNoteAndCheckPass(student)
 }