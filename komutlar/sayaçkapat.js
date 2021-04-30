module.exports = {
  name:"sayaç-kapat",
  code:`
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $resetServerVar[sayaç]
  $resetServerVar[sayaçlog]
  $onlyIf[$getServerVar[sayaçlog]!=;$customEmoji[pcross] | Bu Zaten Kapalı]
  $customEmoji[ptick] | Sayaç Kapatıldı Tekrardan Açmak İçin \`$getServerVar[Prefix]sayaç\` Yazın
  `
  }