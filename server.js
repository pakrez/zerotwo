var zerotwo = require(`aoi.js`)
var fs = require('fs') 
var bot = new zerotwo.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[Prefix]",
  mobile: false,
  fetchInvites: true
})


bot.onMessage()
bot.onJoined()
bot.onLeave()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
} 
  
bot.variables({
  afk: "hayır",
  afkc: "0",
  afks: "",
  Prefix: "zt?",
  lengel: "kapalı",
  saas: "kapalı",
  otorol: "",
  otorollog: "",
  krol: "",
  erol: "",
  kyetkili: "",
  kayıtsız: "",
  gkanal: "",
  çkanal: "",
  tag: "",
  tagmesaj: "almadı",
  tagrol: "",
  taglog: "",
  şarkı: "",
  caps: "kapalı",
  capsyüzde: "",
  botengel: "kapalı",
  botengellog: "",
  sayaç: "0",
  sayaçlog: "",
  yavaşmod: "0",
  hgbb: "",
  çban: "k",
  banlog: "",
  snipe: "",
  snipeu: "",
  snipec: ""
  
});

//status
bot.status({
  text: "Endişelenme, öleceğimiz güne kadar hep birlikte olacağız",
  type: "WATCHING",
  status: "idle",
  time: 15
});
bot.status({
  text: "$serverCount sunucuda $allMembersCount kullanıcıya hizmet veriyorum",
  type: "WATCHING",
  status: "idle",
  time: 15
});
bot.status({
  text: "Parzi <3",
  type: "WATCHING",
  status: "idle",
  time: 15
});
bot.status({
  text: "İnsta: btw.parzival GÜZEL KIZLAR DM",
  type: "PLAYING",
  status: "idle",
  time: 15
});

//owner özel komutlar

bot.command({
  name: "eval",
  code: `
  $eval[$message]
  $onlyForIDs[751805833125560362;655981789407346718;677468381485596702;786778247551516673;828327187073466368;738477629182705685;771311848993587210;715280165193777292;$customEmoji[pcross] | Bu Komut Geliştiricilerime Özel]
  `
});

//bot join command felan

bot.musicStartCommand({
  channel: "$channelID",
  code: `
   `
});

bot.musicEndCommand({
  channel: "$channelID",
  code: `$customEmoji[ztmuzik] | Şarkı Bitti Ve Ses Kanalından Çıktım
`
});
bot.joinCommand({
  channel: "$getServerVar[otorollog]",
  code: `$giveRoles[$authorID;$getServerVar[otorol]]
       $customEmoji[ptick] | <@$authorID> Otorol Başarıyla Verildi.
        `
});

bot.joinCommand({
  channel: "$getServerVar[gkanal]",
  code: `<@$authorID>,<@&$getServerVar[kyetkili]>
  $title[Yeni Bir Üye Göründü]
  $description[
<a:auuuetkilendim:814297061368922123> **Aramıza Hoşgeldin $username**
  
<a:dans7:811029971127762984> **Hesabının Kurulum Tarihi:** \`$creationDate[$authorID]\`
  
<a:aasabirsizm:814297373710483536> **Kayıt Olmak İçin <#$getServerVar[gkanal]> Kanalına İsim ve Yaşınızı Yazıp <@&$getServerVar[kyetkili]> Ye Etiket Atın**
$image[https://cdn.discordapp.com/attachments/834928263239303189/836315396088660058/tenor_1.gif]]
  $footer[$serverName[$guildID] Sunucusu Zero Two Kayıt Sistemini Kullanıyor!;$serverIcon[$guildID]]
  $giveRole[$authorID;$getServerVar[kayıtsız]
  $changeNickname[$authorID;$getServerVar[tag] Kayıtsız]
  $onlyIf[$getServerVar[kayıtsız]!=;]
  $onlyIf[$getServerVar[gkanal]!=;]
  `
});

bot.joinCommand({
  channel: "$getServerVar[botengellog]",
  code: `
$customEmoji[ztban] | Bir Bot Sunucuya Girdi Ve Botu Banladım \`Botun İsmi: $username\`
$ban[$authorID;Bot Engel Açıkken Bot Girişimi]
$onlybotperms[ban;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Olmalı]
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getservervar[botengellog]!=;]
$onlyIf[$getServerVar[botengel]!=kapalı;]
`
});

bot.joinCommand({
  channel: "$getServerVar[sayaçlog]",
  code: `
 **\`$userTag[$authorID]\` Adlı Kullanıcı Aramıza Katıldı Şuanda \`$membersCount\` Kişiyiz \`$getServerVar[sayaç]\` Kullanıcıya Ulaşmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı**
  `
});

bot.leaveCommand({
  channel: "$getServerVar[sayaçlog]",
  code: `
  **\`$userTag[$authorID]\` Adlı Kullanıcı Aramızdan Ayrıldı Şuanda \`$membersCount\` Kişiyiz \`$getServerVar[sayaç]\` Kullanıcıya Ulaşmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı**
  `
});

bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `
  $title[Hoş Geldin]
  $description[\`$username\` Adlı Kullanıcı Sunucuya Girdi
  $image[https://cdn.glitch.com/63dabf5d-48b1-4356-93b2-2190e44318ea%2FIMG-20210429-WA0001.jpg?v=1619649812896]]
  $color[303136]
  `
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: ` 
  $title[Bay Bay]
  $description[\`$username\` Adlı Kullanıcı Sunucudan Çıktı
  $image[ https://cdn.glitch.com/63dabf5d-48b1-4356-93b2-2190e44318ea%2FIMG-20210429-WA0000.jpg?v=1619649459795]]
  $color[303136]
  `
});

bot.botJoinCommand({
  channel: "$systemChannelID",
  code: `$title[Zero Two Sunucuya İniş Yaptı $customEmoji[azerotwo]]
$description[Merhaba, Ben Zero Two Prefixim \`$getServerVar[Prefix]\` Harika Komutlarıma Göz Gezdirmek İçin **$getServerVar[Prefix]yardım** yazabilirsiniz!]
$color[FFCCFF]
$channelSendMessage[834519995488403519;
{author:Biri beni sunucusuna ekledi!}
{thumbnail:$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]}
{description:
  Eklendiğim Sunucu = [$serverName]($getServerInvite)
  Sahibi = [$userTag[$ownerID]](https://discord.com/users/$ownerID)
  
  Toplam Üye = $membersCount}
  {footer: Toplam $serverCount Sunucuya ulaştım}{color:FFCCFF}
]
`
});
bot.onGuildJoin();
bot.botLeaveCommand({
  channel: "834519995488403519",
  code: `
$author[Bir Sunucudan Atıldım.]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  Atıldığım Sunucu = $serverName
  Sahibi = [$username[$ownerID]#$discriminator[$ownerID]](https://discord.com/users/$ownerID)
  
  Toplam Üye = $membersCount]
  $footer[Toplam $serverCount Sunucuya ve $allMembersCount Üyeye Düştüm]
$color[RED]`
});
bot.onGuildLeave();

bot.command({
  name: "çıkış-ban",
  aliases: ["çıkban"],
  code: `$if[$message[1]==aç]
  $setServerVar[çban;a]
  $customEmoji[ptick] | Çıkış Ban Açıldı Sunucudan Çıkan Üyeler Banlanıcak
$onlyIf[$mentionedChannels[1]==;{execute:çıkban}]
  $onlyBotPerms[ban;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İznim Açık Olmalı]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[pcross] | Bu sistemi zaten aktif]
  $elseIf[$message[1]==kapat]
  $setServerVar[banlog;]
  $setServerVar[çban;k]
  $customEmoji[ptick] | Çıkış Ban Kapatıldı
  $onlyIf[$getServerVar[çban]==a;$customEmoji[pcross] | Bu sistemi zaten kapalı]
  $endElseIf
  $endif
  $onlyIf[$checkCondition[$message[1]==aç]$checkCondition[$message[1]==kapat]!=falsefalse;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]çıkış-ban aç/kapat #banlog]
$onlyIf[$message[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]çıkış-ban aç/kapat #banlog]
$onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]çıkış-ban aç/kapat #banlog
  $onlyPerms[admin;$customEmoji[pross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  `
});

bot.awaitedCommand({
  name: "çıkban",
  code: `  $setServerVar[banlog;$mentionedChannels[1]]
$setServerVar[çban;a]
$customEmoji[ptick] | Çıkış Ban Açıldı Sunucudan Çıkan Üyeler Banlanıcak
  $onlyBotPerms[ban;$customEmoji[pcross] |  Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Açık Olmalı]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[pcross] Bu sistemi zaten aktif]`
});

bot.leaveCommand({
  channel: "$randomChannelID",
  code: `$channelSendMessage[$getServerVar[banlog];{description:$customEmoji[ztban] | $username[$authorID] - <@$authorID> İsimli Kişi Sunucudan Çıkış Yaptığı İçin Banlandı}{image:https://cdn.glitch.com/63dabf5d-48b1-4356-93b2-2190e44318ea%2FNew_Project_24_37F84D2.gif?v=1619650375878}{footer:Bu Sistem Kremlin Development Tan Alınmıştır Kendilerine Çok Çok Teşekkürler}{color:303136}]
    $onlyIf[$getServerVar[banlog]!=;]
    $ban[$authorid;Zero Two Çıkış Ban Sistemi]
    $onlyBotPerms[ban;]
    $onlyIf[$getServerVar[çban]==a;]`
});

//bot bilgi komutları

bot.command({
  name: "destek",
  code: `
  https://discord.gg/tqWe3TGUNd
  `
});

bot.command({
  name: "davet",
  code: `
  $title[Ohayoo]
  $description[[Selam Sanırım Davet Linkimi Aradın Beni Davet Etmek Tıkla]($getBotInvite)]
  $image[$randomText[https://cdn.discordapp.com/attachments/821109719955013663/824685641136209950/tenor_1.gif;https://cdn.discordapp.com/attachments/787368088000921610/825412404602863626/tenor_11.gif;https://cdn.discordapp.com/attachments/787368088000921610/825412985061113866/tenor_10.gif;https://cdn.discordapp.com/attachments/787368088000921610/825414198246637608/tenor_12.gif;https://cdn.discordapp.com/attachments/766946905505660928/826011973702385684/tenor_13.gif]]
  $footer[Developer: ParzivaL Senpai;$serverIcon[$guildID]]
  $color[FFCCFF]
  `
});

bot.command({
  name: "istatistik",
  aliases: ["i", "istatiks", "istatistikler", "istatistk"],
  code: `
  $author[İstatistiklerime Hoşgeldin;$authorAvatar]
  $description[$thumbnail[$userAvatar[813872156349956177]]
  
 ・ **Sahibim:** \`$username[677468381485596702]#$discriminator[677468381485596702]\` **・** <@677468381485596702>
  
・ **Oluşturulma Tarihim:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[813872156349956177;time];and;Ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1] Önce\`
  
 ・ **Pingim:**  \`$pingms\`
  
 ・ **Toplam Açılma Sürem:** \` $replaceText[$replaceText[$replaceText[$uptime;s;Saniye;-1];h; Saat;-1];m; Dakika;-1]\`
  
 ・ **Komut Sayım:** \`$commandsCount\`

 ・ **Toplam Kullanıcım:** \`$allMembersCount\`

・ **Toplam Sunucu:** \`$serverCount\`

・ **Toplam Yazı Kanalı Sayım:** \`$allChannelsCount[text]\`

 ・ **Toplam Ses Kanalı Sayım:** \`$allChannelsCount[voice]\`

・ **Toplam Kategori Sayım:** \`$allChannelsCount[category]\`

・ **Toplam CPU kullanımı:** \`%$cpu\`

 ・ **Toplam RAM kullanımı:** \`$ramMB\`

・ **Kütüphanem:** \`DBD.JS v$packageVersion\`
  
・ **Linklerim:** 
**・** [Davet Linkim!\\](
https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8) 
**・** [Destek Sunucum!\\](https://discord.gg/tqWe3TGUNd)
**・** [Web Sitem!\\](https://zerotwodiscordbots.tr.gg/)
  
$color[FFCCFF]
$footer[$username, Kullandı...;$authorAvatar]
$addTimestamp
  `
});
//diğer komutlarkomutlar

bot.deletedCommand({
  channel: "$channelID",
  code: `
$setServerVar[snipec;$channelUsed]
$setServerVar[snipe;$message]
$setServerVar[snipeu;$authorID]`
});

bot.command({
  name: "snipe",
  code: `$color[303136]
$description[**———————————————————
Kullanıcı ┇**[$username[$getServerVar[snipeu]#$discriminator[$getServerVar[snipeu]]]](https://$getServerVar[snipeu])
**Mesaj ┇**$getServerVar[snipe]
**Kanal ┇**<#$getServerVar[snipec]>
**———————————————————**]
$footer[Kullanıcı┇$username[$authorID]#$discriminator[$authorID];$authorAvatar]
$onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] | Bunun İçin\`Yönetici\` İznin Olmalı]`
});
bot.awaitedCommand({
  name: "rolver",
  code: `$giveRole[$authorID;$mentionedRoles[1]]`
});

bot.awaitedCommand({
  name: "rolal",
  code: `$takeRole[$authorID;$mentionedRoles[1]]`
});

bot.command({
  name: "prefix",
  code: `
$setServerVar[Prefix;$message[1]]
<a:ptick:835696827629830194> | Prefix Başarıyla Ayarlandı. Yeni Prefix \`$message[1]\`
$onlyPerms[admin;<a:pcross:835696878426783754> | Bunun İçin \`Yönetici\` İznin Olmalı]
$suppressErrors[Bir hata Oluştu]
$argsCheck[<1;Bir prefix söyleyin]
$onlyIf[$message[1]!=;<a:pcross:835696878426783754> | Bir prefix söyleyin]
$changeNickname[813872156349956177;[$message[1]] Zero Two]`
});

bot.command({
  name: "avatar",
  code: `
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  `
});

bot.command({
  name: "tayarla",
  code: `
   $setServerVar[tag;$message[1]]
   $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
   $onlyIf[$message!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]tayarla ♡]
$customEmoji[ptick] |  Tagınız \`$message[1]\` Olarak Ayarlandı
  `
});

bot.command({
  name: "tag",
  code: `
   $getServerVar[tag]
   $onlyIf[$getServerVar[tag]!=; $customEmoji[pcross] | Tag Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]tayarla\` Yazın]
  `
});
bot.command({
  name: "ksıfırla",
  code: ` $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
  $resetServerVar[kayıtsız]
  $resetServerVar[krol]
  $resetServerVar[erol]
  $resetServerVar[kyetkili]
  $resetServerVar[gkanal]
  $resetServerVar[çkanal]
  $resetServerVar[tag]
  $resetServerVar[tagmesaj]
  $resetServerVar[tagrol]
  $customEmoji[ptick] | Kayıt Sistemi Sıfırlandı 
  
  `
});

bot.command({
  name: "logo",
  code: `
   $title[İşte Logonuz]
   $description[$image[$serverIcon[$guildID;2048;yes]]]
   $footer[İsteyen: $username; $authorAvatar]
  `
});

bot.command({
  name: "fakemesaj",
  code: `
  $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$message]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
  $cooldown[1m;$customEmoji[pcross] | Bunu 1 Dakikada Bir Kullanabilirsin]
  $onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;$customEmoji[pcross] | Üzgünüm Sen İstedin Diye Reklam Yapıcak Değilim]
  `
});

bot.command({
  name: "stonks",
  code: `$color[C100FF]
$deletecommand
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]stonks @zerotwo]`
});
bot.command({
  name: "not-stonks",
  code: `$color[#C100FF]
$deletecommand
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=1024&notstonks=true]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]not-stonks @zerotwo]`
});
bot.command({
  name: "aşkölç",
  aliases: ["aşkölçer", "love", "lovecheck", "aşk-ölç"],
  code: `$title[Aşk Ölçülüyor...]
$description[$image[https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]<@$authorID> İle <@$mentioned[1]> Arasındaki Aşk Yüzdesi %$random[0;100]]
$color[FFCCFF]
$onlyIf[$mentioned[1]!=$authorid;$customEmoji[ztyak] | Agab ]
$onlyIf[$isBot[$mentioned[1]]!=true; $customEmoji[ztyak] | Botu Sevicek Kadar Yalnızmısın Be Kral]
$onlyIf[$authorID!=$botOwnerID;Parzim Sadece Bana Aittir! Endişelenme, Öleceğimiz Güne Kadar Hep Birlikte Olacağız...]
$onlyIf[$mentioned[1]!=$clientID; $customEmoji[pcross] | Üzgünüm Ama Ben Parzivalime Aşığım Ona İhanet Edemem...]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]aşkölç @parzi]
`
});

//müzik komutları

bot.command({
  name: "p",
  aliases: ["play", "çal"],
  code: `$author[Şarkı oynatılmaya başlandı;$authorAvatar]
$description[$customEmoji[ara]**Aranan Şarkı: \`$message\`**
$customEmoji[ztmuzik2] **Şuan Çalınan Şarkı **: $replaceText[$get[şarkı];$songInfo[title];-1] \`$songInfo[title]\`
$customEmoji[zttakla] **Şarkı Açıklaması **: \`$songInfo[description]\`
$customEmoji[ztsure2] **Şarkı uzunluğu **: \`$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]\`
$customEmoji[ztyukleniyor2] **Şarkı Linki **: [Tıkla]($songInfo[url])
$customEmoji[ztcrown_white] **Kanal**: [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[zthawlipika] **Şarkıyı Arayan Kişi**: \`$userTag[$authorID]\`]
$thumbnail[$songInfo[thumbnail]]
$footer[Aradığınız Şarkı Sıraya Eklendi Sıraya Bakmak İçin $getServerVar[Prefix]queue Yazın]
$color[303136]
$setServerVar[şarkı;$authorID]
$let[$playSong[$message;...;yes;yes;$customEmoji[pcross] | \`$message\` adında bir müzik bulamadım.]]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$argsCheck[>1;$customEmoji[pcross] | Lütfen bir şarkı adı gir]`
});
bot.command({
  name: "sıralama",
  aliases: ["queue"],
  code: `$description[
 Şuanda Çalan: [$songInfo[title]]($songInfo[url])
 Şarkıyı Açan: <@$songInfo[userID]>
 --------------------------------------
 **Sıralama:**
 $queue[1;15;{number} - {title}]]
 $color[303136]
 $onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
 $onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
 $onlyIf[$queue[1;10;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
 $suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]`
});

bot.command({
  name: "durdur",
  aliases: ["stop", "pause"],
  code: `
$addCmdReactions[⏸]
$pauseSong
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmojş[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

bot.command({
  name: "devam",
  aliases: ["resume"],
  code: `
$addCmdReactions[▶]
$resumeSong
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

bot.command({
  name: "tekrarla",
  aliases: ["loop"],
  code: `
$addCmdReactions[🔁]
$let[tekrarla;$loopQueue]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

bot.command({
  name: "geç",
  aliases: ["skip"],
  code: `
$addCmdReactions[⏯]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

bot.command({
  name: "çık",
  aliases: ["leave"],
  code: `
$addCmdReactions[⏹]
$leaveVC
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Ses kanalından çıkamadım]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

bot.command({
  name: "ses",
  aliases: ["sound"],
  code: `
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross] | Şarkı çalmazken kullanamazsın]
$onlyIf[$message<=200;$customEmoji[pcross] | Maximum 200 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]ses 100]
$argsCheck[1;$customEmoji[pcross] | Bir ses seviyesi gir]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]`
});

//alwaysExecute komutları için

bot.command({
  name: "$alwaysExecute",
  code: `
    $deletecommand
    $description[<a:pcross:835696878426783754> | Link engel sistemi açık link atamazsın! <@$authorID>]
    $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg/;discord.gift/;www.;dcs.gg/;http://]==true;]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[lengel]!=kapalı;]
    $blackListIDs[677468381485596702;655981789407346718;]
    $deleteIn[5s]
    
    `,
  nonPrefixed: true
});

bot.command({
  name: "$alwaysExecute",
  code: ` 
  $deletecommand
 $customEmoji[pcross] | <@$authorID> Büyük Harfle Yazmayı Bırakmassan Mesajını Silmeye Devam Edicem
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=$getServerVar[capsyüzde]]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$getServerVar[caps]!=kapalı;]
  $onlyIf[$message[1]!=Sa;]
  $suppressErrors

  `,
  nonPrefixed: true
});

bot.command({
  name: "sa",
  code: `
  Aleyküm Selam <@$authorID> Hoşgeldin 
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIf[$message==;]
  `,
  nonPrefixed: true
});
bot.command({
  name: "selam",
  code: `
  Selam <@$authorID> Naber? 
  $onlyIf[$getServerVar[saas]!=kapalı;]
  $onlyIf[$message==;]
  `,
  nonPrefixed: true
});

bot.command({
  name: "saas-aç",
  code: `
  $customEmoji[ptick]Sa as sistemi açıldı kapatmak için \`$getServerVar[Prefix]saas-kapat\` Yazın
  $setServerVar[saas;açık]
  $onlyPerms[admin;<a:pcross:835696878426783754> | Bunun İçin \`Yönetici \` Yetkin Olmalı]
  $onlyIf[$getServerVar[saas]!=açık;<a:pcross:835696878426783754> | Bu Özellik Zaten Açık]
  
  `
});

bot.command({
  name: "saas-kapat",
  code: `
 $customEmoji[ptick]Sa as sistemi kapatıldı geri açmak için \`$getServerVar[Prefix]saas-aç\` Yaz
  $setServerVar[saas;kapalı]
  $onlyPerms[admin;<a:pcross:835696878426783754> | Bunun İçin \`Yönetici\` Yetkin Olmalı]
  $onlyIf[$getServerVar[saas]!=kapalı;<a:pcross:835696878426783754> | Bu Özellik Zaten Kapalı]
  
  `
});

//yardım menüleri

bot.command({
  name: "yardım",
  code: `
  $title[Ohayoo $customEmoji[ztpikachu]]
  $description[**Hey Selam Ben Zero Two Sunucunuz İçin Ayarlanan Prefixim **: \`$getServerVar[Prefix]\` 
  
<a:azerotwo:827614812250046565>**\`$getServerVar[Prefix]genel\`** __Bu sayede genel komutlarımı görebilirsiniz__

$customEmoji[ztayar]**\`$getServerVar[Prefix]ayarlamalı\`** __Bu sayede ayarlanabilir komutlarımı görebilirsiniz__

$customEmoji[ztban]**\`$getServerVar[Prefix]moderasyon\`** __Bu sayede mooderasyon komutlarımı görebilirsiniz__

$customEmoji[ztdans7]**\`$getServerVar[Prefix]kayıt-sistemi\`** __Bu Sayede Kayıt Komutlarımı Görebilirsin__

$customEmoji[ztmuzik]**\`$getServerVar[Prefix]müzik\`** __Bu Sayede Müzik Komutlarımı Görebilirsin__

$customEmoji[zttakla]**\`$getServerVar[Prefix]eğlence\`** __Bu Sayede Eğlence Komutlarımı Görebilirsiniz__
$image[https://cdn.discordapp.com/attachments/835508105106292766/836160852309966849/07657bd477058b6a8285ed9a5b73ddc8.gif]
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)
]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$serverIcon[$guildID]]
$color[WHITE]
  `
});

bot.command({
  name: "genel",
  code: `
  $title[Ohayoo $customEmoji[ztpikachu]]
  $description[**Genel Komutlarıma Hoşgeldin** $customEmoji[azerotwo]
**\`$getServerVar[Prefix]avatar\`** __Üyelerin avatarlarını almanızı sağlar__
**\`$getServerVar[Prefix]logo\`** __Sunucunun logosunu almanızı sağlar__
**\`$getServerVar[Prefix]owner\`** __Sunucu sahibini atar__
**\`$getServerVar[Prefix]sunucu-bilgi\`** __Sunucu Bilgilerini Atar__
**\`$getServerVar[Prefix]afk\`** __Afk olmanızı sağlar__
**\`$getServerVar[Prefix]i\`** __İstatisklerimi gösterir__
**\`$getServerVar[Prefix]davet\`** __Davet linkimi almanızı sağlar__
**\`$getServerVar[Prefix]destek\`** __Destek sunucumun davet linkini verir__
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]


  `
});
bot.command({
  name: "ayarlamalı",
  code: `
  $title[Ohayoo $customEmoji[ztpikachu]]
  $description[**Ayarlanabilir Komutlarıma Hoşgeldin** $customEmoji[ztayar]
  
**\`$getServerVar[Prefix]saas-aç\`** __Bu Sayede Sa As Sistemini Açabilirsiniz__
**\`$getServerVar[Prefix]saas-kapat\`** __Bu Sayede Sa As Sistemini Kapatabilirsiniz__
**\`$getServerVar[Prefix]linkengel-aç\`** __Bu Sayede Link Engeli Açabilirsiniz__
**\`$getServerVar[Prefix]linkengel-kapat\`** __Bu Sayede Link Engeli Kapatabilirsiniz__
**\`$getServerVar[Prefix]otorol\`** __Otorol Ayarlarmanıza Yarar__
**\`$getServerVar[Prefix]otorolkapat\`** __Otorol Sıfırlamanıza Yarar__
**\`$getServerVar[Prefix]caps-engel\`** __Bu Sayede Büyük Harf Engel Sistemini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]bot-engel-aç\`** __Bu Sayede Sunucuya Bot Eklendiğinde Banlanmasını Sağlayabilirsiniz__
**\`$getServerVar[Prefix]bot-engel-kapat\`** __Bu Sayede Bot Engeli Kapatabilirsiniz__
**\`$getServerVar[Prefix]sayaç\`** __Bu Sayede Sayaç Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]sayaç-kapat\`** __Bu Sayefe Sayacı Kapatabilirsiniz__
**\`$getServerVar[Prefix]hgbb\`** __Bu Sayede HgBb Sistemini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]hgbb-kapat\`** __Bu Sayede HgBb Sistemini Kapatabilirsiniz__
**\`$getServerVar[Prefix]çıkış-ban\`** __Bu Sayede Sunucudan Çıkan Üyeleri Banlayabilirsiniz__
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
  name: "moderasyon",
  code: `
   $title[Ohayoo $customEmoji[ztpikachu]]
   $description[**Moderasyon Komutlarıma Hoşgeldin** $customEmoji[ztban]
  
**\`$getServerVar[Prefix]ban\`** __Bu sayede üyeleri banlayabilirsin__
**\`$getServerVar[Prefix]forceban\`** __Bu Sayede Sunucuda Olmayan Üyeleride Banlayabilirsin__
**\`$getServerVar[Prefix]unban\`** __Bu Sayede Kullanıcıların Banını Kaldırabilirsin__
**\`$getServerVar[Prefix]banlog\`** __Bu Sayede Ban Log Ayarlarsınız Üyeler Banlandığında Mesaj Atar__
**\`$getServerVar[Prefix]kick\`** __Bu Sayede Kullanıcıları Sunucudan Atabilirsiniz__
**\`$getServerVar[Prefix]nuke\`** __Bu Sayede Kanalları Silip Aynı Ayarlarla Yeniden Yaratabilirsiniz__
**\`$getServerVar[Prefix]kanal\`** __Bu Sayede Kanalı Kilitleyebilir Ve Açabilirsiniz__
**\`$getServerVar[Prefix]rolver\`** __Bu Sayede Etiketli Kullanıcıya Etiketli Rolü Verebilirsiniz__
**\`$getServerVar[Prefix]rolal\`** __Bu Sayede Etiketli Kullanıcıdan Etiketli Rolü Alabilirsiniz__
**\`$getServerVar[Prefix]herkese-rol-ver\`** __Bu Sayede Herkese Rol Verebilirsiniz__
**\`$getServerVar[Prefix]herkesten-rol-al\`** __Bu Sayede Herkesten Rol Alabilirsiniz__
**\`$getServerVar[Prefix]sil\`** __Bu Sayede Sohbetten Mesaj Silebilirsiniz__
**\`$getServerVar[Prefix]slowmode\`** __Bu Sayede Kanalın Yavaş Modunu Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]prefix\`** __Bu Sayede Sunucunuza Özel Prefix Yapabilirsiniz__
$customEmoji[azerotwo][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek sunucuma gelmek için $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
  name: "kayıt-sistemi",
  code: `
    $title[Ohayoo $customEmoji[ztpikachu]]
    $description[**Kayıt Sistemime Hoşgeldin** $customEmoji[ztdans7]
    
**\`$getServerVar[Prefix]kayıtsız\`** __Bu Sayede Kayıtsız Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]krol\`** __Bu Sayede Kız Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]erol\`** __Bu Sayede Erkek Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]kyetkili\`** __Bu Sayede Kayıt Yetkilisini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]gkanal\`** __Bu Sayede Kayıt Kanalını Seçersiniz Üyeler Katıldığında O Kanala Mesaj Gönderilir__
**\`$getServerVar[Prefix]çkanal\`** __Bu Sayede Çıkış Kanalı Ayarlarsınız Chat Olarak Ayarlanması Önerilir__
**\`$getServerVar[Prefix]tayarla\`** __Bu Sayede Tag Ayarlarsınız__
**\`$getServerVar[Prefix]tag\`** __Bu Sayede Ayarlı Tagı Alabilirsiniz__
**\`$getServerVar[Prefix]tagrol\`** __Bu Sayede Tagınızı Alan Üyelere Otomatik Rol Verilir__
**\`$getServerVar[Prefix]erkek\`** __Bu Sayede Erkek Üyeleri Kayıt Edebilirsiniz__
**\`$getServerVar[Prefix]kız\`** __Bu Sayede Kız Üyeleri Kayıt Edebilirsiniz__
**\`$getServerVar[Prefix]ksıfırla\`** __Bu Sayede Tüm Kayıt Sistemini Sıfırlarsınız__
$customEmoji[azerotwo][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8)]
$footer[Destek Sunucucuma Gelmek İçin  $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
   `
});

bot.command({
  name: "panel",
  code: `$reactionCollector[$splitText[1];$getservervar[şarkı];1h;🔇,🔈,🔉,🔊,▶️,⏸,⏯,🔁,⏹;kıs,ses1,ses2,ses3,devam,durdur,geç,tekrarla,çık;yes]
$textSplit[$sendMessage[{title:$username[$clientID] Müzik Paneli}{description:Aşağıdaki emojilere tıklayarak bu işlevleri kullanabilirsiniz.:

🔇 - **Sesi %0 yapar**
🔈 - **Sesi %50 yapar**
🔉 - **Sesi %100 yapar**
🔊 - **Sesi %200 yapar**
▶️ - **Şarkıya Devam eder**
⏸ - **Şarkıyı Durdurur**
⏯️ - **Şarkıyı geçer**
🔁 - **Şarkıyı tekrarlar**
⏹ - **Kanaldan Çıkar**

__**Şarkı Bilgisi**__
$customEmoji[ztmuzik2]**Şuanda Çalan** : [$songInfo[title]]($songInfo[url])
$customEmoji[ztsure]**Kalan Süre** : $replaceText[$songInfo[duration_left];Seconds;Saniye;-1]
$customEmoji[ztsure2]**Toplam Süre** : $replaceText[$songInfo[duration];Seconds;Saniye;-1]
$customEmoji[zttakla]**Şarkı Açıklaması** : $songInfo[description]
$customEmoji[ztyukleniyor2]**Şarkı Linki** : [Tıkla]($songInfo[url])
$customEmoji[ztcrown_white]**Şarkı Sahibi** : [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[zthawlipika]**Şarkıyı Açan** : <@$songInfo[userID]>
}{color:303136}{thumbnail:$songInfo[thumbnail]}{footer:Paneli sadece son şarkıyı başlatan kullanabilir. Şuanda paneli sadece $userTag[$getservervar[şarkı]] kullanabilir.:$userAvatar[$getservervar[şarkı]]};yes]; ]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken paneli kullanamazsın Şarkı Açmak İçin \`$getServerVar[Prefix]play\` Yazın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen paneli kullanamazsın]`
});

bot.awaitedCommand({
  name: "kıs",
  code: `$volume[1]
 :musical_note: Ses %0 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
  name: "ses1",
  code: `$volume[50]
 :musical_note: Ses %50 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
  name: "ses2",
  code: `$volume[100]
 :musical_note: Ses %100 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
  name: "ses3",
  code: `$volume[200]
 :musical_note: Ses %200 olarak ayarlandı
 $suppressErrors[Müzik Çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
  name: "devam",
  code: `$resumeSong
 :musical_note: Şarkı devam ettiriliyor
 $suppressErrors[Müzik çalmazken devam ettireceğim bir şarkı yok]`
});

bot.awaitedCommand({
  name: "durdur",
  code: `$pauseSong
 :musical_note: Şarkı durduruldu
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
});

bot.awaitedCommand({
  name: "geç",
  code: `$let[geç;$skipSong]
 :musical_note: Şarkı geçildi
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
});

bot.awaitedCommand({
  name: "tekrarla",
  code: `$let[loop;$loopQueue]
 :musical_note: Şarkı tekrarlanıyor
 $suppressErrors[Tekrarlanacak bir şarkı bulamadım]`
});

bot.awaitedCommand({
  name: "çık",
  code: `$leaveVC
$channelSendMessage[$channelID;:musical_note: Ses kanalından çıktım]
$suppressErrors[Ses kanalından çıkamadım]`
});

bot.command({
  name: "müzik",
  code: `
  $title[Ohayoo $customEmoji[ztpikachu]]
  $description[**Müzik Komutlarıma Hoşgeldin** $customEmoji[ztmuzik]
**\`$getServerVar[Prefix]play\`** __Bu Sayede Şarku Açabirsiniz__
**\`$getServerVar[Prefix]skip\`** __Bu Sayede Şarkıyı Geçebilirsiniz__
**\`$getServerVar[Prefix]stop\`** __Bu Sayede Şarkıyı Durdurabilirsiniz__
**\`$getServerVar[Prefix]resume\`** __Bu Sayede Şarkıyı Devam Ettirebilirsiniz__
**\`$getServerVar[Prefix]loop\`** __Bu Sayede Şarkıyı Tekrarlayabilirsiz__
**\`$getServerVar[Prefix]queue\`** __Bu Sayede Şarkı Sırasını Görebilirsiniz__
**\`$getServerVar[Prefix]ses\`** __Bu Sayede Şarkının Sesini Arttıralirsiz__
**\`$getServerVar[Prefix]panel\`** __Bu Sayede Müzik Panelini Açarsınız__
$customEmoji[azerotwo][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
  name: "eğlence",
  code: `
   $title[Ohayoo $customEmoji[ztpikachu]]
   $description[**Eğlence Komutlarıma Hoşgeldin** $customEmoji[zttakla]
   
**\`$getServerVar[Prefix]stonks\`** __Bu Sayede Stonks Apisini Kullanabilirsiniz__
**\`$getServerVar[Prefix]not-stonks\`** __Bu Sayede Not Stonks Apisini Kullanabilirsiniz__
**\`$getServerVar[Prefix]aşkölç\`** __Bu Sayede Etiketli Kişiyle Aşkınızı Ölçersiniz__
$customEmoji[azerotwo][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)]
$footer[Destek Sunucuma Gelmek İçin  $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
})