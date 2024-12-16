
import Product from "../models/product.js";

export async function getPoducts(req,res){
    try{
        const productList=await Product.find()
        res.json({
            list:productList
        })
    }
    catch(e){
        res.json({
            message:'Error'
        })
    }
    }


export function getProductByName(req,res){
     const name=req.params.name;
     Product.find({name:name}).then(
        (productList)=>{
            if (productList.length==0){
                res.json({
                    message:"Product not found"
                })
            }else{
                res.json({
                    list:productList
                }).catch (()=>{
                    res.json({
                        message:"error"
                    })
            })
        }
})
    }

    


export function createProduct(req,res){

    
    if (req.user==null){
        res.json({
            message:"You are not logged in"
        })
        return
    }

    if (req.user.type != "admin"){
        res.json({
            message:"You are not an admin"
        })
        return
    }
    const product = new Product(req.body)
    product.save().then(()=>{
        console.log("Product created")
        res.json({
            message:"Product created"
        })
    }

    ).catch(()=>{
        res.json({
            message:"Product not craeted"
        })
    }
)



        
    }



export function deleteProduct(req,res){
    Product.deleteOne({name:req.body.name}).then(()=>{
        res.json({
            message:"Student deleted successfully"
        })
    }
)
}