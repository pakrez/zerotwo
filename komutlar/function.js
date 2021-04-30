module.exports = ({
    name: "function",
    code: ` $title[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]] $description[ **Kullanım:** $jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]

**Açıklama:** $jsonRequest[https://dbdjs.leref.ga/functions/$message;description]]

$color[WHİTE]
$onlyif[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;Hata, komut bulunamadı!]
$footer[Kullanım ve açıklama gibi bazı satırlar boş olabilir.]
$addtimestamp`
})


