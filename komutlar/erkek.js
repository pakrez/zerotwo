module.exports = {
  name:"erkek",
  code:`
  $onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[erol]!=; $customEmoji[pcross] | Erkek Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]erol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[çkanal]!=; $customEmoji[pcross] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $useChannel[$getServerVar[çkanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  $title[Kayıt Başarılı]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Hoşgeldin <@$mentioned[1]> Yetkililer Seni Erkek Olarak Kayıt Etti Kuralları Okumayı Unutma]


  $channelSendMessage[$channelID;$customEmoji[ptick] | $username[$mentioned[1]]#$discriminator[$mentioned[1]] Adlı Üyeyi Erkek Olarak Kayıt Edildi]
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage]
  $giveRoles[$mentioned[1];$getServerVar[erol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross] | Bunun İçin <@&$getServerVar[kyetkili]> Rolün Olmalı Veya Kayıt Yetkilisi Ayatlanmamış]
  $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]erkek @ParzivaL Parzi | 16]
  $onlyIf[$hasRoles[$authorID;$getServerVar[erol]]!=false; $customEmoji[pcross] | Bu Üye Zaten Kayıt Olmuş]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Kendini Kayıt Edemezsin ]
  $suppresErrors[$customEmoji[pcross] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Birdaha Deneyin]
`
} 