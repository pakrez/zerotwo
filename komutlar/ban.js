module.exports = ({
name: "ban", 
code: `$ban[$mentioned[1];$noMentionMessage]
$color[GREEN]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]ban @zerotwo sevmek]
$description[
$customEmoji[ztban] **Banlanan Üye:** <@$mentioned[1]>

$customEmoji[ztban] **Banlayan Yetkili:** <@$authorID>

$customEmoji[ztban] **Sebep:** \`$noMentionMessage\`
$image[https://cdn.discordapp.com/attachments/821109719955013663/824690430334599168/New_Project_24_37F84D2.gif]]
$onlyPerms[ban;$customEmoji[pcross] | Bunun İçin \`Üyeleri Yasakla\` İznin Olmalı]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Eğer Kendini Banlatmak İstiyosan Daha Üst Bir Yetkiliye Yaptır]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | Kimi Banlamalıyım Bunu Tüm Gün Düşünücem]
$onlyIf[$mentioned[1]!=$ownerID; $customEmoji[pcross] | İstesemde Ownerı Banlayamam] 
$suppressErrors[$customEmoji[pcross] | Rolümden/Rolünden Üstte Veya Eşit Birini Banlayamam]


`
})



