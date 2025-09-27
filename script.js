 const cards = [
      { id: 1, title: "Movie", desc: "Yeh pehla card hai. Simple description yahan.", img: "pic.png", tag: "New" },

      { id: 2, title: "Movie", desc: "Doosra card — kuch aur text yahan likha hai.", img: "img.png", tag: "Popular" },

      { id: 3, title: "Moie", desc: "Teesra card with short description.", img: "down.png", tag: "Hot" },

      { id: 4, title: "Movie", desc: "Chautha card — sample content for demo.", img:'pic.png'},

      { id: 5, title: "Movie", desc: "Paanchwa card — last one in the demo array.", img: "down.png", tag: "Featured" }
    ];


     const container = document.querySelector(".main_part");

    // Loop se cards banake container me daal do
    cards.forEach(card => {
      container.innerHTML += `
        <div class="card">
          <img src="${card.img}" alt="${card.title}">
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      `;
    });
    const Card1=[{
        id:1, title:'Enjoy on your TV', desc:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
    },
    {
        id:2, title:'Download your shows to watch offline', desc:'Save your favorites easily and always have something to watch.'
    },
    {        id:3, title:'Watch everywhere', desc:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
    },
    {        id:4, title:'Create profiles for kids', desc:'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
    }
]
const cont=document.querySelector('.footer_part')

Card1.forEach(card2=>{
    cont.innerHTML+=`
    <div class="card1">
    <h1>${card2.title}</h1>
    <p>${card2.desc}</p>
</div>
`
})
const card3=[{
  id:1, title:'What is the Netflix'
},
{
  id:2, title:'How much does Netflix cost?'
},
{
  id:3, title:'Where can I watch?'
},
{  id:4, title:'How do I cancel?'
},
{  id:5, title:'What can I watch on Netflix?'
}]
const cont2=document.querySelector('.footer_part3')
card3.forEach(card4=>{
  cont2.innerHTML+=`
  <div class="card3">
  <h1>${card4.title}</h1>
  <h2>+</h2>

  </div>

  `
})
let over=document.querySelector(".card3")
over.addEventListener('click',(e)=>{
  over.style.backgroundColor="red";

})
over.addEventListener("mouseout", () => {
      child.style.display = "none";
    });

let ca= document.querySelector(".footer_part3")
ca.addEventListener('click',(e)=>{
  let newDiv = document.createElement("div");
newDiv.innerText = "Hello, I am a new div!";
newDiv.className = "my-div";
ca.appendChild(newDiv);
console.log("hello");
  


})
