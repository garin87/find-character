const text = document.getElementById('iputText').Value;
const bthView = document.getElementById('viewResult');

const reg = /日|月|木|山|川|田|人|口|車|門|火|水|金|土|子|女|学|生|先|私|一|二|三|四|五|六|七|八|九|十|百|千|万|円|年|上|下|中|大|小|本|半|分|力|何|明|休|体|好|男|林|森|間|畑|岩|目|耳|手|足|雨|竹|米|貝|石|糸|花|茶|肉|文|字|物|牛|馬|鳥|魚|新|古|長|短|高|安|低|暗|多|少|行|来|帰|食|飲|見|聞|読|書|話|買|教|朝|昼|夜|晩|夕|方|午|前|後|毎|週|曜|作|泳|油|海|酒|待|校|時|言|計|語|飯|宅|客|室|家|英|薬|会|今|雪|雲|電|売|広|店|度|病|疲|痛|屋|国|回|困|開|閉|近|遠|速|遅|道|青|晴|静|寺|持|荷|歌|友|父|母|兄|姉|弟|妹|夫|妻|彼|主|奥|元|気|有|名|親|切|便|利|不|若|早|忙|出|入|乗|降|着|渡|通|走|歩|止|動|働|右|左|東|西|北|南|外|内|部|駅|社|院|地|鉄|工|場|図|館|公|園|住|所|番|号|市|町|村|区|都|府|県|島|京|様|練|習|勉|強|研|究|留|質|問|題|答|宿|政|治|経|済|歴|史|育|化|理|科|数|医|映|画|写|真|音|楽|料|組|思|色|白|黒|赤/g;
function test(){

    let text = document.getElementById('iputText').value;
    function change(match) {
        return '!!!' + match + '!!!';
    }
    
    let newstr = text.replace(reg, change);
    document.getElementById("newText").textContent = newstr;
}

document.getElementById('viewResult').addEventListener('click', test);

