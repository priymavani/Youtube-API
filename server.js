const express = require('express');

const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const yt = {
videodetail: [
    {id:1,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
    {id:2,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",description:'Infinix Note 12 : AMOLED Helio G88 soC!',channel:'ATC Andriod TOTO Company ',viwes:'4.2M views• 2daysago'},
    {id:3,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",description:'My first UX Design case study - This got me my first job.',channel:'Saptarshi Prakash',viwes:'4.8K views • 1 years ago'},
    {id:4,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",chicon:"",description:'My Mix',channel:'Lopamudra Mitra, Anupam Roy, and more',viwes:''},
    {id:5,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",description:'UX Desigl - What is it? (From AJ & Srnart)',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
    {id:6,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",chicon:"",description:'Mix - Mombati I Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',channel:'Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more ',viwes:''},
    {id:7,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",description:'| 48 VISA-FREE',channel:'Nadir On The Go ',viwes:' 1.7M Views.•.s • 1 years ago'},
    {id:8,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",description:'14 Advanced Tips to Design FASTER in Figma',channel:'Mizko ',viwes:'53K Views• 1 years ago'},
    {id:9,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'}
    ,{id:10,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
    {id:11,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
    {id:12,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
],

 keyword : [
    {id:1 , value:'Cook Studio'},
    {id:2 , value:'UX'},
    {id:3 , value:'Case Study'},
    {id:4 , value:'Music'},
    {id:5 , value:'Bangla Lofi'},
    {id:6 , value:'Tour'},
    {id:7 , value:'Saintmartin'},
    {id:8 , value:'Tech'},
    {id:9 , value:'i phone 13'},
    {id:10 , value:'User Interface Design'},
    {id:11 , value:'computer'}


]

}

app.get("/yt",(req,res) => {
    res.json(yt);
})

app.get("/yt/videodetail",(req,res) => {
    res.json(yt.videodetail);
})

app.get("/yt/keyword",(req,res) => {
    res.json(yt.keyword);
})

const PORT = 3000
app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
})