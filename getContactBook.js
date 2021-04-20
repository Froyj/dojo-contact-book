// Write your code here
function getContactBook (people) {
  const formattedPeople = people.map(p => {
    return { fullName: `${p.firstName} ${p.lastName}`, phone: p.info.phone }
  })
  const contactBook = {};
  for(let p of formattedPeople) {
    if(!contactBook.hasOwnProperty(p.fullName[0])) {
      contactBook[p.fullName[0]] = []
    } 
    contactBook[p.fullName[0]].push(p)
  }
  console.log(contactBook)
  return contactBook;
} 


module.exports = getContactBook;
