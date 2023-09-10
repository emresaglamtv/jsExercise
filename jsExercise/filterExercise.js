const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];

    const NEW_PERSONS = person.filter(item => item.age > 30)

    console.log(NEW_PERSONS)

    const KNOWNLEDGE_JS = person.filter(item => item.languages.includes("JavaScript"))
    console.log(KNOWNLEDGE_JS)