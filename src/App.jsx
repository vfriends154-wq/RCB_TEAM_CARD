import React from 'react'
import Section1 from './section1/section1.jsx'
import Section2 from './section2/section2.jsx'


const App = () => {
  const users = [
    {
  img: 'https://wallpaperaccess.com/full/5553373.jpg',
  intro: 'King Kohli dominates cricket with passion, records, and unmatched consistency',
  tag: 'KOHLI'
},
{
  img: 'https://i.pinimg.com/474x/38/04/33/380433513904e1755cb0132ffa83b8d5.jpg?nii=t',
  intro: 'Faf du Plessis leads bravely, delivering explosive starts and calm leadership.',
  tag: 'FAFDU'
},
{
  img: 'https://media.crictracker.com/media/attachments/1744039645845_Rajat-Patidar.jpeg',
  intro: 'Rajat Patidar shines brightly, crafting elegant innings under pressure situations.',
  tag: 'PATIDAR'
},
{
  img: 'https://files.prokerala.com/news/photos/imgs/1024/rcb-s-batsman-dinesh-karthik-plays-a-shot-during-1580050.jpg',
  intro: 'Dinesh Karthik finishes matches brilliantly with experience, power, and smart shots.',
  tag: 'KARTIK'
},
{
  img: 'https://files.prokerala.com/news/photos/imgs/1024/bengaluru-rcb-s-glenn-maxwell-plays-a-shot-during-1590705.jpg',
  intro: 'Glenn Maxwell attacks bowlers fearlessly, smashing boundaries and changing matches instantly.',
  tag: 'MAXWELL'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/63.png',
  intro: 'Mohammed Siraj bowls fiery spells, troubling batters with pace accuracy.',
  tag: 'SIRAJ'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/170.png',
  intro: 'Cameron Green brings power hitting, pace bowling, and incredible allround balance.',
  tag: 'GREEN'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/534.png',
  intro: 'Anuj Rawat bats confidently, supporting middle order with fearless strokeplay.',
  tag: 'RAWAT'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/184.png',
  intro: 'Mahipal Lomror adds explosive batting depth and aggressive finishing ability.',
  tag: 'LOMROR'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/978.png',
  intro: 'Yash Dayal swings the ball cleverly, delivering crucial breakthroughs.',
  tag: 'DAYAL'
},
{
  img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/98.png',
  intro: 'Karn Sharma spins the ball sharply, creating pressure and key wickets.',
  tag: 'KARN'
}
]
return (
  <div>
    <Section1 users={users} />
  </div>
)
}

export default App