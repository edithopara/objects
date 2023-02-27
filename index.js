//Using a constructor method create an instagramPost with the following properties

function instagramPost(author, content, imageLink, views, likes) {
    this.author = author;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}
const post = new instagramPost('Onyifruities', 'parfait', 'www.img.src', 38, 101)
console.log(post)


//Second Question

const post1 = new instagramPost('jab', 'Morning glory', 'http:img', 100, 456)
console.log(post1)

const post2 = new instagramPost('Queendy', 'Hairbands', 'img.co', 778, 890)
console.log(post2)

// Third Question

function createPerson(name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    }
}
const Musa = createPerson('Musa', 19, 'lagos')
console.log(Musa)

function jambScore(Eng, Govt, Lit, Crk) {
    return{
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk,
    }
}
 Musa.jambScore = jambScore(70, 85, 82, 94)

 console.log(Musa)


// fourth question
//ways to clone an object are; object.assign 
const firstBook = {
    author: 'jab justice',
    title: 'little flock',
    yearPublished: 2023,
}

const secondBook = Object.assign({}, firstBook)
console.log(firstBook);
console.log(secondBook);

//Spread Syntax
const thirdBook = {... firstBook};
thirdBook.title = 'All in christ';
console.log({thirdBook});
 
// JSON (javaScript Object Notation)
const fourthBook = JSON.parse(JSON.stringify(firstBook));
fourthBook.title = 'God with us';
console.log({fourthBook});


// fifth question
const presidentialCandidates = {
    AAC: 'omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const key in presidentialCandidates) {
    console.log(key)



const AAC = 'omoyele Sowore';
console.log(AAC + ' is the presidential candidate of AAC ')

const ACCORD = 'Christopher Imole';
console.log(ACCORD + ' is the presidential candidate of ACCORD ')

const APC = 'Bola Ahmed Tinubu';
console.log(APC + ' is the presidential candidate of APC ')

const LP = 'Peter Obi';
console.log(LP + ' is the presidential candidate of LP ')

const NNPP = 'Rabiu Kwankwasor';
console.log(NNPP + ' is the presidential candidate of NNPP ')

const PDP = 'Atiku Abubakar';
console.log(PDP + ' is the presidential candidate of PDP ')


}const APC = 'Bola Ahmed Tinubu';
console.log(APC + ' is the presidential candidate of APC ')



































