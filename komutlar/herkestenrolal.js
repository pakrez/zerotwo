module.exports = {
    name:"herkesten-rol-al",
    code:`
    $forEachMember[rolal]
  $customEmoji[pcross] | Herkesten Alınan Rol: <@&$mentionedRoles[1]> **⚠️\`Uyarı: Sunucudaki Kişi Sayısına Göre Herkese Rol Alma Süresi Uzayabilir\`**
  
  $onlyIf[$mentionedRoles[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]herkesten-rol-al @üye]
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $onlyBotPerms[admin;$customEmoji[pcross] | Bunun İçin Rolümün \`Yönetici\` İzni Açık Olmalı]
    $onlyIf[$rolePosition[$highestServerRole]==$rolePosition[$highestRole[$clientID]];$customEmoji[pcross] | Rolümü En Üsde Alıp Tekrar Deneyin]
    `
}
