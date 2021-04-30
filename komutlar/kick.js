module.exports = {
  name: "kick",
  code: `
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1]]
  Atılan Kişi = $userTag[$mentioned[1]]
  
  Atılma Sebebi = $replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1]
  
  $onlyPerms[kick;$customEmoji[pcross] | Bunun İçin \`Üyeleri At\` İznin Olmalı!]
  $onlyBotPerms[kick;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri At\` İzni Açık Olmalı]
  $onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kick @zerotwo sevmek]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Kendini Kicklemek İstiyorsan Daha Üst Bir Yetkiliden İste]
  $onlyIf[$mentioned[1]!=; $customEmoji[pcross] | Kimi Kicklemem Gerek?]
$onlyIf[$mentioned[1]!=$ownerID; $customEmoji[pcross] | İstesemde Ownerı Banlayamam]
$suppressErrors[Rolümden/Rolünden Üstte Birini Kickleyemem]
  `
};
