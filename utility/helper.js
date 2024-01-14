const returnResult =async (res,message = "success",result=[]) =>{
      res.status(200).json({
        "status":true,
        "message":message,
        "result":result,
      })
};

module.exports = {returnResult};