module.exports = {
  name:"hgbb",
  code:`
 $customEmoji[ptick] |  Hoşgeldin Bay Bay Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
  $setServerVar[hgbb;$mentionedChannels[1]]
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]hgbb #hgbb]
`}
  
 