module.exports = {
  name:"kanal",
  code:`
  $customEmoji[ptick] | <#$channelID> Adlı Kanal $replaceText[$replaceText[$message;kilit;Başarıyla Kilitlenmiştir;-1];aç;Kilidi Açılmıştır;-1]
     
  $modifyChannelPerms[$channelID;$replaceText[$replaceText[$message;kilit;-;-1];aç;+;-1]sendmessages;$roleID[@everyone]]
  $onlyIf[$hasPerms[$authorID;managechannels]!=false;$customEmoji[pcross] | Bunun İçin \`Kanalları Yönet\` İznin Olmalı!]
  $onlyIf[$checkContains[$message[1];kilit;aç]!=false;$customEmoji[pcross] | **Kullanım:** $getServerVar[prefix]kanal kilit/aç]
  $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kanal kilit/aç]
  `
}