module.exports = ({
    name: "linkengel-aç",
    code: `
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $setServerVar[lengel;]
    $onlyIf[$getServerVar[lengel]!=açık;$customEmoji[pcross] | Bu Sistem Zaten Açık !]
  $customEmoji[ptick] | Link Engel Sistemi Başarıyla Açıldı Kapatmak İçin \`$getServerVar[Prefix]linkengel-kapat\` Yaz
    `
    }) 