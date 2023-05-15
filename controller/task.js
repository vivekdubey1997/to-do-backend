const Task = require('../models/task')



const getAllTasks=async(req,res)=>{
     try{
          const tasks= await Task.find({})
          res.status(201).json({tasks})
     }
     catch (error){
          res.status.json({message:error})
     }

  
}



const createTask=async(req,res)=>{
     try{
     const task = await Task.create(req.body)
     res.status(201).json(task)
     }
     catch (error){
          res.status(500).json({'messsage':error})
     }
}



const getSingleTask=async(req,res)=>{
     
    try {
     const {id:taskid}=req.params
     const task = await Task.findOne({_id:taskid})
     if(!task){
          return res.status(404).json({message:`no task with id${taskid}`})
     }
     res.status(200).json({task})
     
    } catch (error) {
        res.status(500).json({mes:error})
    }
}


const updateTask=async(req,res)=>{
     try {
         const {id:taskid} = req.params
         const task = await Task.findOneAndUpdate({_id:taskid},req.body,
          {new:true,
          runValidators:true
          }) 
          res.status(200).json({task})

         if(!task){
          res.status(404).json({mess:`no task wit id: ${taskid}`})
         }
     } catch (error) {
          res.status(500).json({message:error})
     }
    
}

const editTask=async(req,res)=>{
     try {
          const {id:taskid} = req.params
          const task = await Task.findOneAndUpdate({_id:taskid},req.body,
           {new:true,
           runValidators:true,
           overwrite:true
           }) 
           res.status(200).json({task})
 
          if(!task){
           res.status(404).json({mess:`no task wit id: ${taskid}`})
          }
      } catch (error) {
           res.status(500).json({message:error})
      }

}



const deleteTask=async(req,res)=>{
     try {
          const {id:taskid}= req.params
          const task = await Task.findOneAndDelete({_id:taskid})
          if(!task){
               return res.status(404).json({message:`no task with id${taskid}`})
          }

         res.status(200).json({task:null,status:"success"}) 
     } catch (error) {
          res.status(500).json({message:error})
          
     }
}





module.exports={getAllTasks,createTask,getSingleTask,updateTask,deleteTask,editTask}