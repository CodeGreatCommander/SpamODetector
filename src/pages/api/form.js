export default async function spampostman(req,res){
    if(req.method=='POST'){
        const response=JSON.parse(req.body).content
        if(!response){return res.status(400);}
        var y="hi what a great day";
        await fetch('https://api.oopspam.com/v1/spamdetection',{
            method:"POST",
            mode:"cors",
            headers:{
                'X-Api-Key':process.env.API_KEY
            },
            body:JSON.stringify({
                "content": response      
            })
        }).then(x=>x.json()).then(x=>{y=x})
        return res.status(200).json({response:y});
    }
    else return res.status(200).json({response:""});
}
// spampostman({method:"POST"}).then(x=>x.json).then(x=>{console.log(x)})
