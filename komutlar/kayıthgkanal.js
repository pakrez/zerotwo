module.exports = {
  name:"gkanal",
  code:`
 $customEmoji[ptick] | Hoşgeldin Kanalı \`$channelName[$mentionedChannels[1]]\` Olarak Ayarlandı
 $setServerVar[gkanal;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] | Bunu İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=; $customEmoji[pcross] | *Kullanım:** $getServerVar[Prefix]gkanal #kayıt]
 `
}