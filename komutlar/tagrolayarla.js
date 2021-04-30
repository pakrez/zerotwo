module.exports = ({
    name:"tagrol",
    code:`$customEmoji[ptick] | Tag Alındığında Verilicek Rol Başarıyla \`$roleName[$mentionedRoles[1]]\`
$setServerVar[tagrol;$mentionedRoles[1]]
$argsCheck[>1;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]tagrol @family]
$onlyIf[$getServerVar[tag]!=;$customEmoji[pcross] | İlk Önce Tag Ayarlamalısınız Tag Ayarlamak İçin \`$getServerVar[Prefix]tayarla\` Yazın]
$onlyIf[$mentionedRoles[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]tagrol @family]
$onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyBotPerms[manageroles;Bunun İçin Rolümün \`Rolleri Yönet\` İzni Açık Olmalı]`
})
