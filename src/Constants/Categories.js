const Categories=[{
    id:"men",
    value:"Men"
},{
    id:"electronics",
    value:"Electronics"
},{
    id:"women",
    value:"Women"
},
{ id:"kids",
value:"Kids"}
,{
    id:"westernWear",
    value:"Western Wear"
},{ id:"mobile",
value:"Mobile"},{
    id:"laptop",
    value:"Laptop"
},{
    id:"accessories",
    value:"Accessories"
},{
    id:"camera",
    value:"Camera"
},{
    id:"watches",
    value:"Watches"
},{ id:"sports",
value:"Sports"},{
    id:"footwear",
    value:"Footwear"
}
].sort((a,b)=>a.id.toLowerCase()<b.id.toLowerCase()?-1:1)


export default Categories 