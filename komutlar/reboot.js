module.exports = {
name: "reboot", 
aliases:['restart','yeniden-başlat','r'],
code: `
$reboot[server.js]
$wait[1s]
$channelSendMessage[$channelID;{title:Yeniden Başlatma İşlemi}{description:$username[$clientID] Yeniden başlatılıyor. Yeniden başlatılmadan önceki uptime : $replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1]} {color:FFCCFF}]
$onlyForIDs[$botOwnerID;$customEmoji[pcross] | Bu komutu sadece **$userTag[$botOwnerID]** kullanabilir]
`
}
