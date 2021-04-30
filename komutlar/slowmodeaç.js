module.exports = {
  name:"slowmode",
  code:`
  $customEmoji[ptick] | <#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı
  $slowmode[$channelID;$message[1]s]
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] | Bir Saniye Yazın]
  $onlyIf[$message[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]slowmode 5,3,0,...]
  $onlyPerms[managechannels;$customEmoji[pcross] | Bunun İçin \`Kanalları Yönet\` İznin Olmalı]
  $onlyBotPerms[managechannels;$customEmoji[pcross] | Bunun İçin Rolümün \`Kanalları Yönet\` İzni Açık Olmalı]
  `
  }