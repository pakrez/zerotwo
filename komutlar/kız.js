module.exports = {
  name:"kız",
  code:`
  $onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[krol]!=; $customEmoji[pcross] | Kız Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]krol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[çkanal]!=; $customEmoji[pcross] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $useChannel[$getServerVar[çkanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  $title[Kayıt Başarılı ]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Hoşgeldin <@$mentioned[1]> Yetkililer Seni Kız Olarak Kayıt Etti Kuralları Okumayı Unutma]

$channelSendMessage[$channelID;$customEmoji[ptick] | $username[$mentioned[1]]#$discriminator[$mentioned[1]] Adlı Üyeyi Kız Kayıt Ettim ]
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $giveRoles[$mentioned[1];$getServerVar[krol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross] | Üzgünüm Bunun İçin <@&$getServerVar[kyetkili]> Yetkin Olmalı Veya Kayıt Yetkilisi Ayarlanmamış]
  $changeNickname[$mentioned[1]; $getServerVar[tag] $noMentionMessage]
  $onlyIf[$message!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kız @zerotwo Zerotwo | 16]
  $onlyIf[$hasRoles[$authorID;$getServerVar[krol]]!=false;$customEmoji[pcross] | Bu Üye Zaten Kayıt Olmuş]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Kendini Kayıt Edemezsin]
  $suppressErrors[$customEmoji[pcross] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Bir Daha Deneyin]
`
}