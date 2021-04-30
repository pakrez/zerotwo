module.exports = {
  name:"forceban",
  code:`
  $suppressErrors[$customEmoji[pcross] | Böyle Bir IDli Kullanıcı Bulamadım Tekrar Kontrol Edermisin !?]
  $ban[$message[1]]
 $customEmoji[ztban] \`$username[$message[1]]#$discriminator[$message[1]]\` Kişisi Sunucudan Force-Ban İle Yasaklanmıştır 
  $onlyIf[$isNumber[$message[1]]!=false;Girdiğin Bir ID Değil !]
  $onlyIf[$message!=;Bir ID Girmelisiniz !]
  $onlyPerms[ban;$customEmoji[pcross] | Bunun İçin \`Üyeleri Yasakla\` İzin Olmalı!]
  $onlyBotPerms[ban;$customEmoji[pcross] Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Açık Olmalı]
  `
} 