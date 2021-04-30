module.exports = {
  name: "otorol",
  code: `
$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
 $customEmoji[ptick] | Otorol Kanalı \`$channelName[$mentionedChannels[1]]\` Olarak Otorol Rolü İse \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır Kapatmak Için \`$getServerVar[Prefix]otorolkapat\` Yazın
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$message[2]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]otorol @rol #log]
   `
}