module.exports = {
    name: "caps-engel",
    code: `
    $if[$message[1]==aç] 
    $setServerVar[caps;açık]
    $setServerVar[capsyüzde;$message[2]]
    $customEmoji[ptick] | Artık Mesajların Harf Sayısının \`%$message[2]\`'Den Fazlası Büyük Harf İse Mesaj Silinicek
    $onlyIf[$getServerVar[caps]!=açık;$customEmoji[pcross] | Bu Sistem Zaten Açık] 
    $onlyIf[$message[2]<=100;$customEmoji[pcross] | Ayarlanan Yüzde 100'ün Üstünde Olamaz]
    $onlyIf[$isNumber[$message[2]]!=false;$customEmoji[pcross] | Bir Sayı Girmelisin]
    $onlyIf[$message[2]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]caps-engel aç 50]  

    $elseIf[$message[1]==kapat]
    $setServerVar[caps;kapalı]
    $setServerVar[capsyüzde;]
    $customEmoji[ptick] | Artık Büyük Harfle Yazan Kullanıcılar Uyarılmayacak
    $onlyIf[$message[1]!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]caps-engel kapat]  
    $onlyIf[$getServerVar[caps]!=kapalı;$customEmoji[pcross] | Bu Sistem Kapalı Zaten]
    $endelseIf
    $else
    $customEmoji[pcross] | Lütfen Geçerli Bir Eylem Yazın \`$getServerVar[Prefix]caps-engel\` **\`aç\`** | \`$getServerVar[Prefix]caps-engel\` **\`kapat\`**
    $endif
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
    `
}
