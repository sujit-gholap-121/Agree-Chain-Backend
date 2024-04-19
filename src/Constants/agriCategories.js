const agriCategories=[{
    id:"cereals",
    value:"Cereals"
},{
    id:"pulses",
    value:"Pulses"
},{
    id:"oilseeds",
    value:"Oilseeds"
},
{ id:"spices",
value:"Spices"}
,{
    id:"vegetables",
    value:"Vegetables"
},{ id:"cashCrops",
value:"CashCrops"},{
    id:"flowers",
    value:"Flowers"
},{
    id:"Fruits",
    value:"Fruits"
}
].sort((a,b)=>a.id.toLowerCase()<b.id.toLowerCase()?-1:1)


export default agriCategories 