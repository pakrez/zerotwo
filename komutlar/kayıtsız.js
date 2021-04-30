module.exports = {
  name:"kayıtsız",
  code:`
 $customEmoji[ptick] | Kayıtsız Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[kayıtsız;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kayıtsız @kayıtsız]
 `
} 