module.exports = {
  name: "otorolkapat",
  code: `
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $resetServerVar[otorol]
  $resetServerVar[otorollog]
 $customEmoji[ptick] | Otorol Resetlenmiştir Tekrar Ayarlamak İçin \`$getServerVar[Prefix]otorol\` Yazın
   `
}