module.exports = {
  name:"banlog",
  code:`$customEmoji[ptick] | Ban Log Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı
  $setServerVar[banlog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]banlog #banlog]
  $onlyPerms[admin; $customEmoji[pcross] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
  `
  }