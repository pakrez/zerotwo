module.exports = {
    name:"herkese-rol-ver",
    code:`
    $forEachMember[rolver]
    $customEmoji[ptick] **| Herkese Verilen Rol**: <@&$mentionedRoles[1]> **⚠️\`Uyarı: Sunucudaki Kişi Sayısına Göre Herkese Rol Verme Süresi Uzayabilir\`**
    
    $onlyIf[$mentionedRoles[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]herkese-rol-ver @üye]
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
    $onlyBotPerms[admin;$customEmoji[pcross] | Bunun İçin Rolümün \`Yönetici\` İzni Açık Olmalı]
    $onlyIf[$rolePosition[$highestServerRole]==$rolePosition[$highestRole[$clientID]];$customEmoji[pcross] | Rolümü En Üste Alıp Tekrar Deneyin]
    `
}
