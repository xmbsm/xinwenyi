const fs = require('fs')
const path = require('path')

const libraryVuePath = path.join(__dirname, '..', 'components', 'PoetryLibrary.vue')

const poemContents = {
  yuefu: {
    contents: [
      '孔雀东南飞，五里一徘徊。十三能织素，十四学裁衣。十五弹箜篌，十六诵诗书。十七为君妇，心中常苦悲。',
      '唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。',
      '日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。罗敷喜蚕桑，采桑城南隅。青丝为笼系，桂枝为笼钩。',
      '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？',
      '江南可采莲，莲叶何田田。鱼戏莲叶间。鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。',
      '上邪，我欲与君相知，长命无绝衰。山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。',
      '有所思，乃在大海南。何用问遗君，双珠玳瑁簪。用玉绍缭之。闻君有他心，拉杂摧烧之。',
      '青青河边草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
      '十五从军征，八十始得归。道逢乡里人：家中有阿谁？遥看是君家，松柏冢累累。兔从狗窦入，雉从梁上飞。',
      '战城南，死郭北，野死不葬乌可食。为我谓乌：且为客豪！野死谅不葬，腐肉安能去子逃？',
      '平陵东，松柏桐，不知何人劫义公。劫义公，在高堂下，交钱百万两走马。两走马，亦诚难，顾见追吏心中恻。',
      '东门行，不顾归。来入门，怅欲悲。盎中无斗米储，还视架上无悬衣。拔剑东门去，舍中儿母牵衣啼。',
      '孤儿生，孤子遇生，命独当苦。父母在时，乘坚车，驾驷马。父母已去，兄嫂令我行贾。南到九江，东到齐与鲁。',
      '妇病连年累岁，传呼丈人前一言。当言未及得言，不知泪下一何翩翩。属累君两三孤子，莫我儿饥且寒。',
      '有所思，乃在大海南。何用问遗君，双珠玳瑁簪。用玉绍缭之。闻君有他心，拉杂摧烧之。摧烧之，当风扬其灰。',
      '雉子班，如此！雉子班，至尊共食。雉子，幼孙！之于雉梁。无以吾翁孺，雉子。知得雉子高蜚止，黄鹄蜚。',
      '圣人出，阴阳和。美人出，游九河。美人出，游九河。浴湢沭，风其雨。美人归，遵大路。揽余辔，心内顾。',
      '邪径过空庐，好人常独居。不知何等物，下有一狐狸。狐狸得我便，上我床，寝我床。我欲搤持之，狸又瞋目怒。',
      '巫山高，高以大；淮水深，难以逝。我欲东归，害梁不为？我集无高曳，水何梁汤汤回回。',
      '上陵何美美，下津风以寒。问客从何来，言从水中央。桂树为君船，青丝为君笮，木兰为君棹，黄金错其间。',
      '相逢狭路间，道隘不容车。不知何年少，夹毂问君家。君家诚易知，易知复难忘。黄金为君门，白玉为君堂。',
      '陇西行，十里一走马，五里一扬鞭。都护军书至，匈奴围酒泉。关山正飞雪，烽火断无烟。',
      '步出齐城门，遥望荡阴里。里中有三坟，累累正相似。问是谁家墓，田疆古冶氏。力能排南山，又能绝地纪。',
      '幽兰操，习习谷风，以阴以雨。之子于归，远送于野。何彼苍天，不得其所。逍遥九州，无所定处。',
      '将进酒，乘大白。辨加哉，诗审搏。放故歌，心所作。同阴气，诗吟成。使君起，舞洛津。小复住，为君斯。',
      '君马黄，臣马苍，二马同逐臣马良。易之有騩蔡有赭，美人归以南，驾车驰马，美人伤我心。',
      '芳树日月，君乱如于风。芳树不上，无心温而鹄。三而为行，临兰池，心中怀我怅。心不可匡，目不可顾。',
      '有所思，思昔君。我欲与君相知，长命无绝衰。山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。',
      '薤上露，何易晞。露晞明朝更复落，人死一去何时归。',
      '蒿里谁家地，聚敛魂魄无贤愚。鬼伯一何相催促，人命不得少踟蹰。',
      '鸡鸣高树颠，狗吠深宫中。荡子何所之，天下方太平。刑法非有贷，柔协正乱名。黄金为君门，璧玉为轩堂。',
      '平陵东，松柏桐，不知何人劫义公。劫义公，在高堂下，交钱百万两走马。两走马，亦诚难，顾见追吏心中恻。',
      '陌上桑，日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。罗敷喜蚕桑，采桑城南隅。青丝为笼系，桂枝为笼钩。',
      '长歌行，青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？',
      '君子行，君子防未然，不处嫌疑间。瓜田不纳履，李下不正冠。嫂叔不亲授，长幼不比肩。劳谦得其柄，和光甚独难。',
      '猛虎行，饥不从猛虎食，暮不从野雀栖。野雀安无巢，游子为谁骄？',
      '相逢行，相逢狭路间，道隘不容车。不知何年少，夹毂问君家。君家诚易知，易知复难忘。黄金为君门，白玉为君堂。',
      '长安有狭斜行，长安有狭斜，狭斜不容车。适逢两少年，夹毂问君家。君家新市傍，易知复难忘。大子二千石，中子孝廉郎。',
      '饮马长城窟行，青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
      '青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
      '关雎，关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。',
      '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。',
      '桃之夭夭，灼灼其华。之子于归，宜其室家。桃之夭夭，有蕡其实。之子于归，宜其家室。桃之夭夭，其叶蓁蓁。',
      '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。',
      '采薇采薇，薇亦作止。曰归曰归，岁亦莫止。靡室靡家，猃狁之故。不遑启居，猃狁之故。',
      '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。吹笙鼓簧，承筐是将。人之好我，示我周行。',
      '静女其姝，俟我于城隅。爱而不见，搔首踟蹰。静女其娈，贻我彤管。彤管有炜，说怿女美。',
      '投我以木瓜，报之以琼琚。匪报也，永以为好也。投我以木桃，报之以琼瑶。匪报也，永以为好也。',
      '硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。逝将去女，适彼乐土。乐土乐土，爰得我所。',
      '坎坎伐檀兮，置之河之干兮，河水清且涟猗。不稼不穑，胡取禾三百廛兮？不狩不猎，胡瞻尔庭有县貆兮？'
    ]
  }
}

const categories = {
  yuefu: {
    name: '乐府诗',
    poems: [
      { title: '孔雀东南飞', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '木兰诗', author: '佚名', dynasty: '南北朝', tags: ['乐府', '叙事'] },
      { title: '陌上桑', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '长歌行', author: '佚名', dynasty: '汉', tags: ['乐府', '励志'] },
      { title: '江南', author: '佚名', dynasty: '汉', tags: ['乐府', '写景'] },
      { title: '上邪', author: '佚名', dynasty: '汉', tags: ['乐府', '爱情'] },
      { title: '有所思', author: '佚名', dynasty: '汉', tags: ['乐府', '爱情'] },
      { title: '饮马长城窟行', author: '佚名', dynasty: '汉', tags: ['乐府', '思妇'] },
      { title: '十五从军征', author: '佚名', dynasty: '汉', tags: ['乐府', '战争'] },
      { title: '战城南', author: '佚名', dynasty: '汉', tags: ['乐府', '战争'] },
      { title: '平陵东', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '东门行', author: '佚名', dynasty: '汉', tags: ['乐府', '社会'] },
      { title: '孤儿行', author: '佚名', dynasty: '汉', tags: ['乐府', '社会'] },
      { title: '病妇行', author: '佚名', dynasty: '汉', tags: ['乐府', '社会'] },
      { title: '白头吟', author: '佚名', dynasty: '汉', tags: ['乐府', '爱情'] },
      { title: '雉子班', author: '佚名', dynasty: '汉', tags: ['乐府', '寓言'] },
      { title: '圣人出', author: '佚名', dynasty: '汉', tags: ['乐府', '祭祀'] },
      { title: '邪径过空庐', author: '佚名', dynasty: '汉', tags: ['乐府', '寓言'] },
      { title: '巫山高', author: '佚名', dynasty: '汉', tags: ['乐府', '怀乡'] },
      { title: '上陵', author: '佚名', dynasty: '汉', tags: ['乐府', '游仙'] },
      { title: '相逢行', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '陇西行', author: '佚名', dynasty: '汉', tags: ['乐府', '边塞'] },
      { title: '梁甫吟', author: '佚名', dynasty: '汉', tags: ['乐府', '咏史'] },
      { title: '幽兰操', author: '韩愈', dynasty: '唐', tags: ['乐府', '咏物'] },
      { title: '将进酒', author: '李白', dynasty: '唐', tags: ['乐府', '饮酒'] },
      { title: '君马黄', author: '李白', dynasty: '唐', tags: ['乐府', '抒情'] },
      { title: '芳树', author: '佚名', dynasty: '汉', tags: ['乐府', '写景'] },
      { title: '鼓吹曲', author: '佚名', dynasty: '汉', tags: ['乐府', '音乐'] },
      { title: '薤露', author: '佚名', dynasty: '汉', tags: ['乐府', '挽歌'] },
      { title: '蒿里', author: '佚名', dynasty: '汉', tags: ['乐府', '挽歌'] },
      { title: '鸡鸣', author: '佚名', dynasty: '汉', tags: ['乐府', '社会'] },
      { title: '平陵曲', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '陌上歌', author: '佚名', dynasty: '汉', tags: ['乐府', '爱情'] },
      { title: '长歌续短歌', author: '佚名', dynasty: '汉', tags: ['乐府', '励志'] },
      { title: '君子行', author: '佚名', dynasty: '汉', tags: ['乐府', '哲理'] },
      { title: '猛虎行', author: '李白', dynasty: '唐', tags: ['乐府', '言志'] },
      { title: '相逢狭路间', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '长安有狭斜行', author: '佚名', dynasty: '汉', tags: ['乐府', '叙事'] },
      { title: '饮马行', author: '佚名', dynasty: '汉', tags: ['乐府', '边塞'] },
      { title: '青青河畔草', author: '佚名', dynasty: '汉', tags: ['乐府', '思妇'] },
      { title: '关雎', author: '佚名', dynasty: '先秦', tags: ['乐府', '爱情'] },
      { title: '蒹葭', author: '佚名', dynasty: '先秦', tags: ['乐府', '思慕'] },
      { title: '桃夭', author: '佚名', dynasty: '先秦', tags: ['乐府', '婚嫁'] },
      { title: '氓', author: '佚名', dynasty: '先秦', tags: ['乐府', '弃妇'] },
      { title: '采薇', author: '佚名', dynasty: '先秦', tags: ['乐府', '征戍'] },
      { title: '鹿鸣', author: '佚名', dynasty: '先秦', tags: ['乐府', '宴饮'] },
      { title: '静女', author: '佚名', dynasty: '先秦', tags: ['乐府', '爱情'] },
      { title: '木瓜', author: '佚名', dynasty: '先秦', tags: ['乐府', '友谊'] },
      { title: '硕鼠', author: '佚名', dynasty: '先秦', tags: ['乐府', '讽刺'] },
      { title: '伐檀', author: '佚名', dynasty: '先秦', tags: ['乐府', '劳动'] }
    ]
  },
  nanbeichao: {
    name: '南北朝诗',
    poems: [
      { title: '登池上楼', author: '谢灵运', dynasty: '南朝', tags: ['山水', '抒情'] },
      { title: '山居赋', author: '谢灵运', dynasty: '南朝', tags: ['山水', '赋'] },
      { title: '石壁精舍还湖中作', author: '谢灵运', dynasty: '南朝', tags: ['山水', '写景'] },
      { title: '夜宿桐柏山', author: '谢灵运', dynasty: '南朝', tags: ['山水', '行旅'] },
      { title: '入彭蠡湖口', author: '谢灵运', dynasty: '南朝', tags: ['山水', '写景'] },
      { title: '过始宁墅', author: '谢灵运', dynasty: '南朝', tags: ['山水', '田园'] },
      { title: '从斤竹涧越岭溪行', author: '谢灵运', dynasty: '南朝', tags: ['山水', '纪行'] },
      { title: '晚出西射堂', author: '谢灵运', dynasty: '南朝', tags: ['山水', '咏怀'] },
      { title: '登江中孤屿', author: '谢灵运', dynasty: '南朝', tags: ['山水', '写景'] },
      { title: '初去郡', author: '谢灵运', dynasty: '南朝', tags: ['山水', '隐逸'] },
      { title: '拟行路难·其一', author: '鲍照', dynasty: '南朝', tags: ['乐府', '咏怀'] },
      { title: '拟行路难·其六', author: '鲍照', dynasty: '南朝', tags: ['乐府', '咏怀'] },
      { title: '梅花落', author: '鲍照', dynasty: '南朝', tags: ['咏物', '抒情'] },
      { title: '代出自蓟北门行', author: '鲍照', dynasty: '南朝', tags: ['边塞', '乐府'] },
      { title: '赠故人', author: '鲍照', dynasty: '南朝', tags: ['赠别', '友谊'] },
      { title: '咏史', author: '鲍照', dynasty: '南朝', tags: ['咏史', '怀古'] },
      { title: '芜城赋', author: '鲍照', dynasty: '南朝', tags: ['赋', '怀古'] },
      { title: '登黄鹤矶', author: '鲍照', dynasty: '南朝', tags: ['登临', '写景'] },
      { title: '日落望江赠荀丞', author: '鲍照', dynasty: '南朝', tags: ['赠别', '思乡'] },
      { title: '玩月城西门廨中', author: '鲍照', dynasty: '南朝', tags: ['咏月', '抒情'] },
      { title: '归园田居·其一', author: '陶渊明', dynasty: '东晋', tags: ['田园', '隐逸'] },
      { title: '归园田居·其三', author: '陶渊明', dynasty: '东晋', tags: ['田园', '劳动'] },
      { title: '饮酒·其五', author: '陶渊明', dynasty: '东晋', tags: ['田园', '饮酒'] },
      { title: '桃花源记', author: '陶渊明', dynasty: '东晋', tags: ['散文', '理想'] },
      { title: '五柳先生传', author: '陶渊明', dynasty: '东晋', tags: ['散文', '自传'] },
      { title: '归去来兮辞', author: '陶渊明', dynasty: '东晋', tags: ['辞赋', '隐逸'] },
      { title: '咏荆轲', author: '陶渊明', dynasty: '东晋', tags: ['咏史', '豪放'] },
      { title: '读山海经·其一', author: '陶渊明', dynasty: '东晋', tags: ['读书', '抒怀'] },
      { title: '杂诗·其一', author: '陶渊明', dynasty: '东晋', tags: ['咏怀', '人生'] },
      { title: '移居·其一', author: '陶渊明', dynasty: '东晋', tags: ['田园', '友谊'] },
      { title: '木兰诗', author: '佚名', dynasty: '北朝', tags: ['乐府', '叙事'] },
      { title: '敕勒歌', author: '佚名', dynasty: '北朝', tags: ['民歌', '写景'] },
      { title: '陇头歌辞', author: '佚名', dynasty: '北朝', tags: ['民歌', '羁旅'] },
      { title: '折杨柳歌辞', author: '佚名', dynasty: '北朝', tags: ['民歌', '爱情'] },
      { title: '琅琊王歌辞', author: '佚名', dynasty: '北朝', tags: ['民歌', '豪侠'] },
      { title: '地驱歌乐辞', author: '佚名', dynasty: '北朝', tags: ['民歌', '生活'] },
      { title: '雀劳利歌辞', author: '佚名', dynasty: '北朝', tags: ['民歌', '讽刺'] },
      { title: '慕容家自鲁企由谷歌', author: '佚名', dynasty: '北朝', tags: ['民歌', '爱情'] },
      { title: '捉搦歌', author: '佚名', dynasty: '北朝', tags: ['民歌', '婚姻'] },
      { title: '河中之水歌', author: '佚名', dynasty: '北朝', tags: ['民歌', '叙事'] },
      { title: '春别诗四首·其一', author: '萧子显', dynasty: '南朝', tags: ['离别', '爱情'] },
      { title: '玉树后庭花', author: '陈叔宝', dynasty: '南朝', tags: ['宫体', '咏物'] },
      { title: '乌栖曲', author: '萧纲', dynasty: '南朝', tags: ['宫体', '爱情'] },
      { title: '咏内人昼眠', author: '萧纲', dynasty: '南朝', tags: ['宫体', '咏人'] },
      { title: '春江花月夜', author: '陈叔宝', dynasty: '南朝', tags: ['宫体', '写景'] },
      { title: '三妇艳词', author: '萧统', dynasty: '南朝', tags: ['乐府', '生活'] },
      { title: '采莲曲', author: '萧纲', dynasty: '南朝', tags: ['乐府', '写景'] },
      { title: '棹歌行', author: '萧纲', dynasty: '南朝', tags: ['乐府', '行旅'] },
      { title: '大堤曲', author: '萧纲', dynasty: '南朝', tags: ['乐府', '爱情'] },
      { title: '浴女诗', author: '萧纲', dynasty: '南朝', tags: ['宫体', '咏人'] }
    ]
  },
  wudai: {
    name: '五代词',
    poems: [
      { title: '虞美人·春花秋月何时了', author: '李煜', dynasty: '五代', tags: ['婉约', '亡国'] },
      { title: '浪淘沙·帘外雨潺潺', author: '李煜', dynasty: '五代', tags: ['婉约', '亡国'] },
      { title: '相见欢·无言独上西楼', author: '李煜', dynasty: '五代', tags: ['婉约', '离愁'] },
      { title: '相见欢·林花谢了春红', author: '李煜', dynasty: '五代', tags: ['婉约', '惜春'] },
      { title: '乌夜啼·昨夜风兼雨', author: '李煜', dynasty: '五代', tags: ['婉约', '秋夜'] },
      { title: '子夜歌·人生愁恨何能免', author: '李煜', dynasty: '五代', tags: ['婉约', '愁思'] },
      { title: '望江南·多少恨', author: '李煜', dynasty: '五代', tags: ['婉约', '忆旧'] },
      { title: '望江南·多少泪', author: '李煜', dynasty: '五代', tags: ['婉约', '悲伤'] },
      { title: '清平乐·别来春半', author: '李煜', dynasty: '五代', tags: ['婉约', '思念'] },
      { title: '采桑子·亭前春逐红英尽', author: '李煜', dynasty: '五代', tags: ['婉约', '春愁'] },
      { title: '菩萨蛮·花明月暗笼轻雾', author: '李煜', dynasty: '五代', tags: ['婉约', '爱情'] },
      { title: '菩萨蛮·蓬莱院闭天台女', author: '李煜', dynasty: '五代', tags: ['婉约', '爱情'] },
      { title: '菩萨蛮·铜簧韵脆锵寒竹', author: '李煜', dynasty: '五代', tags: ['婉约', '音乐'] },
      { title: '阮郎归·呈郑王十二弟', author: '李煜', dynasty: '五代', tags: ['婉约', '赠别'] },
      { title: '捣练子令·深院静', author: '李煜', dynasty: '五代', tags: ['婉约', '秋夜'] },
      { title: '捣练子令·云鬓乱', author: '李煜', dynasty: '五代', tags: ['婉约', '春情'] },
      { title: '浣溪沙·红日已高三丈透', author: '李煜', dynasty: '五代', tags: ['婉约', '宫廷'] },
      { title: '玉楼春·晚妆初了明肌雪', author: '李煜', dynasty: '五代', tags: ['婉约', '宫廷'] },
      { title: '一斛珠·晓妆初过', author: '李煜', dynasty: '五代', tags: ['婉约', '美人'] },
      { title: '临江仙·樱桃落尽春归去', author: '李煜', dynasty: '五代', tags: ['婉约', '伤春'] },
      { title: '鹊踏枝·谁道闲情抛掷久', author: '冯延巳', dynasty: '五代', tags: ['婉约', '闲情'] },
      { title: '鹊踏枝·几日行云何处去', author: '冯延巳', dynasty: '五代', tags: ['婉约', '思念'] },
      { title: '鹊踏枝·庭院深深深几许', author: '冯延巳', dynasty: '五代', tags: ['婉约', '闺怨'] },
      { title: '采桑子·花前失却游春侣', author: '冯延巳', dynasty: '五代', tags: ['婉约', '孤独'] },
      { title: '采桑子·笙歌放散人归去', author: '冯延巳', dynasty: '五代', tags: ['婉约', '寂寞'] },
      { title: '谒金门·风乍起', author: '冯延巳', dynasty: '五代', tags: ['婉约', '闺怨'] },
      { title: '谒金门·杨柳陌', author: '冯延巳', dynasty: '五代', tags: ['婉约', '春景'] },
      { title: '清平乐·雨晴烟晚', author: '冯延巳', dynasty: '五代', tags: ['婉约', '春愁'] },
      { title: '清平乐·西园春早', author: '冯延巳', dynasty: '五代', tags: ['婉约', '春景'] },
      { title: '醉桃源·南园春半踏青时', author: '冯延巳', dynasty: '五代', tags: ['婉约', '春游'] },
      { title: '浣溪沙·五两竿头风欲平', author: '和凝', dynasty: '五代', tags: ['婉约', '行旅'] },
      { title: '江城子·竹里风生月上门', author: '和凝', dynasty: '五代', tags: ['婉约', '爱情'] },
      { title: '临江仙·海棠香老春江晚', author: '和凝', dynasty: '五代', tags: ['婉约', '春愁'] },
      { title: '菩萨蛮·越梅半拆轻寒里', author: '和凝', dynasty: '五代', tags: ['婉约', '咏梅'] },
      { title: '菩萨蛮·含峰帽底纤腰袅', author: '和凝', dynasty: '五代', tags: ['婉约', '美人'] },
      { title: '渔歌子·西塞山前白鹭飞', author: '张志和', dynasty: '唐', tags: ['婉约', '隐逸'] },
      { title: '渔歌子·钓台渔父褐为裘', author: '张志和', dynasty: '唐', tags: ['婉约', '隐逸'] },
      { title: '渔歌子·霅溪湾里钓鱼翁', author: '张志和', dynasty: '唐', tags: ['婉约', '隐逸'] },
      { title: '潇湘神·斑竹枝', author: '刘禹锡', dynasty: '唐', tags: ['婉约', '怀古'] },
      { title: '潇湘神·湘水流', author: '刘禹锡', dynasty: '唐', tags: ['婉约', '怀古'] },
      { title: '梦江南·兰烬落', author: '皇甫松', dynasty: '唐', tags: ['婉约', '思乡'] },
      { title: '梦江南·楼上寝', author: '皇甫松', dynasty: '唐', tags: ['婉约', '忆旧'] },
      { title: '采莲子·菡萏香连十顷陂', author: '皇甫松', dynasty: '唐', tags: ['婉约', '采莲'] },
      { title: '采莲子·船动湖光滟滟秋', author: '皇甫松', dynasty: '唐', tags: ['婉约', '采莲'] },
      { title: '忆江南·江南好', author: '白居易', dynasty: '唐', tags: ['婉约', '忆旧'] },
      { title: '忆江南·江南忆', author: '白居易', dynasty: '唐', tags: ['婉约', '忆旧'] },
      { title: '长相思·汴水流', author: '白居易', dynasty: '唐', tags: ['婉约', '相思'] },
      { title: '长相思·深画眉', author: '白居易', dynasty: '唐', tags: ['婉约', '相思'] },
      { title: '更漏子·玉炉香', author: '温庭筠', dynasty: '唐', tags: ['婉约', '闺怨'] },
      { title: '更漏子·金雀钗', author: '温庭筠', dynasty: '唐', tags: ['婉约', '闺怨'] }
    ]
  },
  mingqingshi: {
    name: '明清诗词',
    poems: [
      { title: '石灰吟', author: '于谦', dynasty: '明', tags: ['咏物', '言志'] },
      { title: '咏煤炭', author: '于谦', dynasty: '明', tags: ['咏物', '言志'] },
      { title: '过零丁洋', author: '文天祥', dynasty: '宋', tags: ['爱国', '叙事'] },
      { title: '正气歌', author: '文天祥', dynasty: '宋', tags: ['爱国', '咏怀'] },
      { title: '金陵驿', author: '文天祥', dynasty: '宋', tags: ['爱国', '怀古'] },
      { title: '满江红·怒发冲冠', author: '岳飞', dynasty: '宋', tags: ['豪放', '爱国'] },
      { title: '满江红·登黄鹤楼有感', author: '岳飞', dynasty: '宋', tags: ['豪放', '怀古'] },
      { title: '小重山·昨夜寒蛩不住鸣', author: '岳飞', dynasty: '宋', tags: ['婉约', '报国'] },
      { title: '游山西村', author: '陆游', dynasty: '宋', tags: ['田园', '纪游'] },
      { title: '书愤', author: '陆游', dynasty: '宋', tags: ['爱国', '咏怀'] },
      { title: '示儿', author: '陆游', dynasty: '宋', tags: ['爱国', '绝笔'] },
      { title: '秋夜将晓出篱门迎凉有感', author: '陆游', dynasty: '宋', tags: ['爱国', '忧民'] },
      { title: '十一月四日风雨大作', author: '陆游', dynasty: '宋', tags: ['爱国', '抒怀'] },
      { title: '金错刀行', author: '陆游', dynasty: '宋', tags: ['爱国', '言志'] },
      { title: '关山月', author: '陆游', dynasty: '宋', tags: ['爱国', '边塞'] },
      { title: '卜算子·咏梅', author: '陆游', dynasty: '宋', tags: ['婉约', '咏物'] },
      { title: '钗头凤·红酥手', author: '陆游', dynasty: '宋', tags: ['婉约', '爱情'] },
      { title: '青玉案·元夕', author: '辛弃疾', dynasty: '宋', tags: ['豪放', '元宵'] },
      { title: '破阵子·为陈同甫赋壮词以寄之', author: '辛弃疾', dynasty: '宋', tags: ['豪放', '军旅'] },
      { title: '永遇乐·京口北固亭怀古', author: '辛弃疾', dynasty: '宋', tags: ['豪放', '怀古'] },
      { title: '桃花庵歌', author: '唐寅', dynasty: '明', tags: ['隐逸', '饮酒'] },
      { title: '把酒对月歌', author: '唐寅', dynasty: '明', tags: ['咏月', '抒怀'] },
      { title: '言志', author: '唐寅', dynasty: '明', tags: ['言志', '隐逸'] },
      { title: '画鸡', author: '唐寅', dynasty: '明', tags: ['咏物', '题画'] },
      { title: '咏鸡诗', author: '唐寅', dynasty: '明', tags: ['咏物', '题画'] },
      { title: '落花诗', author: '唐寅', dynasty: '明', tags: ['咏物', '伤春'] },
      { title: '题画竹', author: '郑板桥', dynasty: '清', tags: ['咏物', '题画'] },
      { title: '竹石', author: '郑板桥', dynasty: '清', tags: ['咏物', '言志'] },
      { title: '潍县署中画竹呈年伯包大中丞括', author: '郑板桥', dynasty: '清', tags: ['题画', '忧民'] },
      { title: '予告归里画竹别潍县绅士民', author: '郑板桥', dynasty: '清', tags: ['题画', '告别'] },
      { title: '沁园春·雪', author: '毛泽东', dynasty: '近代', tags: ['豪放', '咏雪'] },
      { title: '沁园春·长沙', author: '毛泽东', dynasty: '近代', tags: ['豪放', '抒怀'] },
      { title: '七律·长征', author: '毛泽东', dynasty: '近代', tags: ['七言', '长征'] },
      { title: '七律·人民解放军占领南京', author: '毛泽东', dynasty: '近代', tags: ['七言', '革命'] },
      { title: '水调歌头·游泳', author: '毛泽东', dynasty: '近代', tags: ['豪放', '游泳'] },
      { title: '蝶恋花·答李淑一', author: '毛泽东', dynasty: '近代', tags: ['婉约', '悼亡'] },
      { title: '卜算子·咏梅', author: '毛泽东', dynasty: '近代', tags: ['咏物', '言志'] },
      { title: '菩萨蛮·黄鹤楼', author: '毛泽东', dynasty: '近代', tags: ['豪放', '怀古'] },
      { title: '清平乐·六盘山', author: '毛泽东', dynasty: '近代', tags: ['豪放', '长征'] },
      { title: '忆秦娥·娄山关', author: '毛泽东', dynasty: '近代', tags: ['豪放', '战争'] },
      { title: '己亥杂诗·浩荡离愁白日斜', author: '龚自珍', dynasty: '清', tags: ['七言', '抒怀'] },
      { title: '己亥杂诗·九州生气恃风雷', author: '龚自珍', dynasty: '清', tags: ['七言', '社会'] },
      { title: '己亥杂诗·只筹一缆十夫多', author: '龚自珍', dynasty: '清', tags: ['七言', '社会'] },
      { title: '咏史', author: '龚自珍', dynasty: '清', tags: ['咏史', '讽喻'] },
      { title: '夜坐', author: '龚自珍', dynasty: '清', tags: ['咏怀', '感时'] },
      { title: '西郊落花歌', author: '龚自珍', dynasty: '清', tags: ['咏物', '伤春'] },
      { title: '秋心三首·其一', author: '龚自珍', dynasty: '清', tags: ['咏怀', '悲秋'] },
      { title: '赋得秋河', author: '龚自珍', dynasty: '清', tags: ['咏物', '抒情'] },
      { title: '投宋于庭', author: '龚自珍', dynasty: '清', tags: ['赠友', '抒怀'] },
      { title: '自春徂秋偶有所触', author: '龚自珍', dynasty: '清', tags: ['咏怀', '感时'] }
    ]
  }
}

const categoryOrder = ['yuefu', 'nanbeichao', 'wudai', 'mingqingshi']

function getPoemContent(categoryId, index) {
  if (categoryId === 'yuefu' && poemContents.yuefu.contents[index]) {
    return poemContents.yuefu.contents[index]
  }
  const cat = categories[categoryId]
  const poem = cat.poems[index]
  return `${poem.title}\n\n这是${poem.dynasty}代诗人${poem.author}的代表作品。\n诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。`
}

function generatePoemData(categoryId, poem, index) {
  const content = getPoemContent(categoryId, index)
  const contentText = content.replace(/\n/g, '').substring(0, 60)
  const categoryName = categories[categoryId].name
  return `  {
    id: '${categoryId}/${index + 1}',
    title: '${poem.title}',
    author: '${poem.author}',
    dynasty: '${poem.dynasty}',
    category: '${categoryId}',
    categoryName: '${categoryName}',
    content: '${contentText}',
    tags: ${JSON.stringify(poem.tags)}
  }`
}

let vueContent = fs.readFileSync(libraryVuePath, 'utf8')

const newPoemsData = []
for (const catId of categoryOrder) {
  const cat = categories[catId]
  for (let i = 0; i < cat.poems.length; i++) {
    newPoemsData.push(generatePoemData(catId, cat.poems[i], i))
  }
}

const insertMarker = `    tags: ['五言诗', '离别']
  }
]`
const replacement = `    tags: ['五言诗', '离别']
  },
${newPoemsData.join(',\n')}
]`

if (vueContent.indexOf(insertMarker) !== -1) {
  vueContent = vueContent.replace(insertMarker, replacement)
  fs.writeFileSync(libraryVuePath, vueContent, 'utf8')
  console.log(`✅ 成功添加 ${newPoemsData.length} 首诗词到 poems 数组`)
} else {
  console.log('❌ 未找到插入标记，尝试其他方式...')
  const lastBracket = vueContent.lastIndexOf(']')
  if (lastBracket !== -1) {
    vueContent = vueContent.substring(0, lastBracket) + ',\n' + newPoemsData.join(',\n') + '\n]' + vueContent.substring(lastBracket + 1)
    fs.writeFileSync(libraryVuePath, vueContent, 'utf8')
    console.log(`✅ 成功在末尾添加 ${newPoemsData.length} 首诗词`)
  }
}
