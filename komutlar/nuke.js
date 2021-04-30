module.exports = {
 name: "nuke",
 code: `
 $djsEval[
 
 const lol = d.message.channel.position
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(lol)
 c.send(d.message.author.tag + ' Kanal Başarıyla Nukelandı Tüm Mesajları Ve Herşeyi Ham Yaptım')

 })
]
$onlyPerms[managechannels;<a:pcross:835696878426783754> | Bunun İçin \`Kanalları Yöbet\` İznin Olmalı!]
$onlyBotPerms[managechannels;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Kanalları Yönet"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823200629899788308/unknown.png}]
 `
}
