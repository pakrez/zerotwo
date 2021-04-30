module.exports = {
  name:"sayaç",
  code:`
  $customEmoji[ptick] | Sayaç Kanalı <#$mentionedChannels[1]> Olarak Hedef İse \`$message[2]\` Olarak Ayarlandı
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$isNumber[$message[2]]!=false;$customEmoji[pcross] | Bir Hedef Belirleyin]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross] | Sayaç Olarak Seçiceğiniz Kanalı Ayarlayın]
  $onlyIf[$message[2]!=;$customEmoji[pcross] | Bir Hedef Belirleyin]
  $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]sayaç #sayaç 100]
  $setServerVar[sayaçlog;$mentionedChannels[1]]
  $setServerVar[sayaç;$message[2]]
  `
  }