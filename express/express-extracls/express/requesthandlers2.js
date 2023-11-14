import formSchema from "./schema/form.schema.js";

export async function setdata(req,res){
   try {
    let {fname,email,hobbies} =req.body;
    let result = await formSchema.create({
        fname,
        email,
        hobbies:hobbies.forEach(hobbies=>{
            console.log(hobbies);
            
        })
    })
    if(result){
        return res.status(200).send("Details added Successfully");
    }
    
   } catch (error) {
    console.log(error);
    return res.status(500).send("Not added")
   }
}
export async function getdata(req,res){
    try {
       let result=await formSchema.find()
       if(result){
        return res.json(result)
       }
        return res.json({msg:"There is no data to show"})
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
        
    }
}