module.exports = {
  name:"rolal",
  code:`
  $description[$customEmoji[ptick] | <@$mentioned[1]> Adlı Üyeden <@&$mentionedRoles[1]> Adlı Rol Alınmıştır.]
  $takeRoles[$mentioned[1];$mentionedRoles[1]]
  
  $onlyIf[$rolePosition[$mentionedRoles[1]]>$rolePosition[$highestRole[$authorID]];$customEmoji[pcross] | Kendinden Üstte Bir Rolü Alamazsın]
  $onlyIf[$hasPerms[$authorID;manageroles]!=false;$customEmoji[pcross] | Bunun İçin \`Rolleri Yönet\` İznin Olmalıdır!]
  $onlyIf[$message[2]!=;$customEmoji[pcross] | **Kullanım:**  $getServerVar[Prefix]rolal @zerotwo @owner]
  `
}
 