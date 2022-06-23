const express = require('express');
const fetch=  require('node-fetch');
const router = express.Router;

router.post('/sendToAll', (req, res) => {
var notifications = {
    'title': 'Title of notifiction',
    'text': 'Subtitle'
}
var fcm_tokens = [];

var notification_body = {

    'notification': notifications,
    'registration_ids': fcm_tokens
}


    fetch('https://fcm.googleapis.com/fcm/send',{
        'method': 'POST',
        'headers': {
            'Authorization' : 'key=' + 'AAAAlaIEwGg:APA91bHr2pFEWyVX1SsOuv7pBO6iYX9PW947mT1hlYisOruUD_EnPPX02E4NWbb_k3hw4XAzU0Xu3sbpuaGCiTLFAD72wZ1Cds-wxSrev9uxyUWPNIrK6G_U9psTVOKCe-0CYp3LDAF_',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(notification_body)
    }).then(()=>{
            res.status(200).send('Notifications send successfully');
    }).catch((err)=>{
        res.status(400).send('Something went wrong');
        console.log("Error", err);
    } )
});

module.exports = router;