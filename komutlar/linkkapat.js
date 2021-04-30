module.exports = ({
    name:"linkengel-kapat",
    code: `
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $setServerVar[lengel;kapalı]
    $onlyIf[$getServerVar[lengel]!=kapalı;$customEmoji[pcross] | Bu Sistem Zaten Kapalı !]
  $customEmoji[ptick] | Link Engel Sistemi Kapatıldı. Açmak İçin \`$getServerVar[Prefix]linkengel-aç\` Yazınız !
    `
    }) 