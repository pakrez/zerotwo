module.exports = {
       name:"unban",
       code:`
$unban[$message[1]]
$customEmoji[ptick] | \`$username[$message[1]]#$discriminator[$message[1]]\` adlı üyenin banı açılmıştır!
$onlyIf[$hasPerms[$authorID;ban]!=false;$customEmoji[pcross] | Bunun İçin \`Üyeleri Banla\` İznine Olmalı!]
$onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] | Girilen Bir ID Değil !]
$onlyIf[$message!=;$customEmoji[pcross] | Banını Kaldırıcağım Kişinin ID Sini Giriniz]
$onlyBotPerms[ban;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Olmalı]`
}

 