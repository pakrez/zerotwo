module.exports = {
  name:"sil",
  code:`
  $customEmoji[ptick]\`$message\` Kadar Mesaj Franxx Lara Yem Oldu
  $deletecommand
  $deleteIn[4s]
  $clear[$message[1]]
  $suppressErrors[Hata !]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;$customEmoji[pcross] | Bunun İçin \`Mesajları Yönet\` İznin Olmalı]
  $onlyIf[$message!=;Mesaj Miktarı Girermisin !]
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] | Mesajları Ham Yapmam Şey Yani Silmem İçin Bir Rakam Girmelisin ]
  `
} 