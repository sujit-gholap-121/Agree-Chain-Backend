const Categories=[{
    id:"Men",
    value:"Men"
},{
    id:"Electronics",
    value:"Electronics"
},{
    id:"Women",
    value:"Women"
},
{ id:"Kids",
value:"Kids"}
,{
    id:"WesternWear",
    value:"WEstern Wear"
},{ id:"Mobile",
value:"Mobile"},{
    id:"Laptop",
    value:"Laptop"
},{
    id:"Accessories",
    value:"Accessories"
},{
    id:"Camera",
    value:"Camera"
},{
    id:"Watches",
    value:"Watches"
},{ id:"Sports",
value:"Sports"},{
    id:"Footwear",
    value:"Footwear"
}
].sort((a,b)=>a.id.toLowerCase()<b.id.toLowerCase()?-1:1)


export default Categories 