const Logout=async (req,res)=>{
// res.cookie({"jwt":null})
console.log(req.cookie,req.cookies.jwt)
res.cookie("jwt",null)
res.status(203).json({msg:"User logged out"})
}
export default Logout