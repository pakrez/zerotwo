module.exports = {
  name:"krol",
  code:`
 $customEmoji[ptick] | Kız Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[krol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]krol @Kızüye]
 `
} 