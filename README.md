# Installation

* Clone the repo
* Run `npm install`
* Write your code
* Run the test with `npm test` 

## EN version 
You have at your disposal a json file that gathers information about a set of people,
the goal of this dojo is to write a getContactBook function that allows to generate a contact book sorted by alphabetical order and summarizing the information in a simpler format

## FR version 
Vous avez a disposition un fichier json qui regroupe des informations a propos d'un ensemble de personne,
le but de ce dojo est d'ecrire une fonction getContactBook qui permet de générer un carnet de contacts rangé par ordre alphabetique et synthetisant les informations dans un format plus simple

#### Dataset :
```
[
  {
    firstName: 'Mary',
    lastName: 'Martinez',
    info: {
      phone: '(259)-458-6652',
    },
  },
  {
    firstName: 'Tristan',
    lastName: 'Adams',
    info: {
      phone: '(287)-238-6394',
    },
  },
  {
    firstName: 'Alfredo',
    lastName: 'Altmann',
    info: {
      phone: '(287)-238-6394',
    },
  },
  {
    firstName: 'Begoña',
    lastName: 'Santero',
    info: {
      phone: '(177)-338-3054',
    },
  },
];
```
#### Expected results
```
{
  A: [
    {
      fullName: 'Adam Beck',
      phone: '(287)-238-6394',
    },
    {
      fullName: 'Alfredo Altmann',
      phone: '(347)-275-9383',
    },
  ],
  B: [
    {
      fullName: 'Begoña Santero',
      phone: '(177)-338-3054',
    },
  ],
  M: [
    {
      fullName: 'Mary Martinez',
      phone: '(259)-458-6652',
    },
  ],
};
```