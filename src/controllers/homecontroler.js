exports.home=(req,res)=>{
    res.render('index');
}

exports.homepost=(req,res)=>{
    res.send(`${req.body.qualquercoisa}`);

}