module.exports = {
  name:"çkanal",
  code:`
 $customEmoji[ptick] | Chat Kanalı \`$channelName[$mentionedChannels[1]]\`Olarak Ayarlandı
 $setServerVar[çkanal;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]çkanal #chat ]
 `
} 