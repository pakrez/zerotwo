module.exports = {
  name:"rolver",
  code:`
  $description[$customEmoji[ptick] | <@$mentioned[1]> Adlı Üyeye <@&$mentionedRoles[1]> Adlı Rol Verilmiştir.]
  $giveRoles[$mentioned[1];$mentionedRoles[1]]
  
  $onlyIf[$rolePosition[$mentionedRoles[1]]>$rolePosition[$highestRole[$authorID]];$customEmoji[pcross] | Kendinden Üstte Bir Rolü Veremezsin]
  $onlyIf[$hasPerms[$authorID;manageroles]!=false;$customEmoji[pcross] | Bunun İçin Rolleri Yönet Yetkin Olmalıdır !]
  $onlyIf[$message[2]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]rolver @zerotwo @owner ]
  `
}
