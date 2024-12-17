
import Product from "../models/product.js";
import { isAdmin } from "./userController.js";


export function createProduct(req,res){
    if (!isAdmin(req)){
        res.json({
            message:"Please login as administrator to add products"
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

    ).catch((error)=>{
        res.json({
            message:error
        })
    }
)

}



export async function getPoducts(req,res){
    try{
        const productList=await Product.find()
        res.json({
            list:productList
        })
    }
    catch(e){
        res.json({
            message:e
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

    
export function deleteProduct(req,res){
    Product.deleteOne({name:req.body.name}).then(()=>{
        res.json({
            message:"Student deleted successfully"
        })
    }
)
}