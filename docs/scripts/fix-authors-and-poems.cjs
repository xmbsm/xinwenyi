// fix-authors-and-poems.cjs
// Fixes: 1) ID mismatches, 2) Adds missing authors, 3) Fixes empty/no-link PoemAuthor
const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, '..')

// ========== 1. NEW AUTHOR DATA ==========
// 3 ID fixes + 37 new authors = 40 entries to add/fix
const newAuthors = [
  // --- Tang poets ---
  { id: 'libai', name: '李白', dynasty: '唐代', dynastyId: 'tangdai', avatar: '李',
    desc: '唐代伟大的浪漫主义诗人，字太白，号青莲居士，被后人誉为"诗仙"。其诗风雄奇豪放，想象丰富，意境奇妙，语言流转自然，与杜甫并称"李杜"，对后世诗歌影响深远。',
    works: ['静夜思', '将进酒', '望庐山瀑布', '早发白帝城', '行路难', '月下独酌'] },
  { id: 'wangwei', name: '王维', dynasty: '唐代', dynastyId: 'tangdai', avatar: '王',
    desc: '唐代著名诗人、画家，字摩诘，号摩诘居士。精通诗书画乐，有"诗佛"之称。其山水田园诗与孟浩然并称"王孟"，对后世山水诗影响深远。',
    works: ['相思', '山居秋暝', '使至塞上', '鹿柴', '竹里馆', '送元二使安西'] },
  { id: 'wangzhihuan', name: '王之涣', dynasty: '唐代', dynastyId: 'tangdai', avatar: '王',
    desc: '唐代著名边塞诗人，字季凌。其诗以描写边塞风光著称，气势恢宏，意境开阔。代表作有《登鹳雀楼》《凉州词》等。',
    works: ['登鹳雀楼', '凉州词', '宴词'] },
  { id: 'menghaoran', name: '孟浩然', dynasty: '唐代', dynastyId: 'tangdai', avatar: '孟',
    desc: '唐代著名诗人，以山水田园诗著称，与王维并称"王孟"。其诗风格清淡自然，多写隐居生活和山水景色。',
    works: ['春晓', '过故人庄', '宿建德江', '望洞庭湖赠张丞相'] },
  { id: 'wangchangling', name: '王昌龄', dynasty: '唐代', dynastyId: 'tangdai', avatar: '王',
    desc: '唐代著名边塞诗人，字少伯。其诗以七绝见长，被后人誉为"七绝圣手"。代表作有《出塞》《从军行》等。',
    works: ['出塞', '从军行', '芙蓉楼送辛渐'] },
  { id: 'lishen', name: '李绅', dynasty: '唐代', dynastyId: 'tangdai', avatar: '李',
    desc: '唐代诗人，字公垂。与元稹、白居易交游甚密，是新乐府运动的参与者之一。其《悯农》二首流传甚广。',
    works: ['悯农·其一', '悯农·其二'] },
  { id: 'mengjiao', name: '孟郊', dynasty: '唐代', dynastyId: 'tangdai', avatar: '孟',
    desc: '唐代著名诗人，字东野。其诗风格古朴，多写贫寒生活之情，与贾岛并称"郊寒岛瘦"。代表作有《游子吟》等。',
    works: ['游子吟', '登科后'] },
  { id: 'wangbo', name: '王勃', dynasty: '唐代', dynastyId: 'tangdai', avatar: '王',
    desc: '唐代著名文学家，字子安。"初唐四杰"之一。其诗文词采华丽，气势宏伟。代表作有《送杜少府之任蜀州》《滕王阁序》等。',
    works: ['送杜少府之任蜀州', '滕王阁序'] },
  { id: 'lishangyin', name: '李商隐', dynasty: '唐代', dynastyId: 'tangdai', avatar: '李',
    desc: '唐代著名诗人，字义山，号玉谿生。其诗构思新奇，意境朦胧，尤以无题诗著称。与杜牧合称"小李杜"，对后世诗歌影响深远。',
    works: ['无题', '锦瑟', '夜雨寄北', '嫦娥'] },
  { id: 'liuzongyuan', name: '柳宗元', dynasty: '唐代', dynastyId: 'tangdai', avatar: '柳',
    desc: '唐代著名文学家、哲学家，字子厚，河东人，世称"柳河东"。与韩愈并称"韩柳"，为唐宋八大家之一。其诗文风格清峻，寓言散文成就尤高。',
    works: ['江雪', '永州八记', '捕蛇者说'] },
  { id: 'liuyuxi', name: '刘禹锡', dynasty: '唐代', dynastyId: 'tangdai', avatar: '刘',
    desc: '唐代著名诗人，字梦得，河南洛阳人。其诗风清新自然，善于用典，有"诗豪"之称。与白居易并称"刘白"。',
    works: ['乌衣巷', '竹枝词', '陋室铭', '秋词'] },
  { id: 'zhangji', name: '张继', dynasty: '唐代', dynastyId: 'tangdai', avatar: '张',
    desc: '唐代诗人，字懿孙，襄州人。其诗多写羁旅之情，风格清丽自然，《枫桥夜泊》是其最负盛名的作品。',
    works: ['枫桥夜泊'] },
  { id: 'censhen', name: '岑参', dynasty: '唐代', dynastyId: 'tangdai', avatar: '岑',
    desc: '唐代著名边塞诗人，与高适并称"高岑"。其诗气势磅礴，色彩瑰丽，善写边塞风光和军旅生活。代表作有《白雪歌送武判官归京》《逢入京使》等。',
    works: ['白雪歌送武判官归京', '逢入京使', '走马川行奉送封大夫出师西征'] },
  { id: 'liyi', name: '李益', dynasty: '唐代', dynastyId: 'tangdai', avatar: '李',
    desc: '唐代诗人，字君虞。其诗多写边塞风光和征人思乡之情，音律和谐，语言精炼。代表作有《夜上受降城闻笛》《江南曲》等。',
    works: ['夜上受降城闻笛', '江南曲', '从军北征'] },
  { id: 'weiyingwu', name: '韦应物', dynasty: '唐代', dynastyId: 'tangdai', avatar: '韦',
    desc: '唐代著名诗人，京兆万年人。其诗风格闲淡清雅，多写山水田园和隐逸生活，与王维、孟浩然、柳宗元并称"王孟韦柳"。',
    works: ['滁州西涧', '寄李儋元锡', '淮上喜会梁川故人'] },
  // --- Song poets ---
  { id: 'sushi', name: '苏轼', dynasty: '宋代', dynastyId: 'songdai', avatar: '苏',
    desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。诗、词、文、书、画皆有极高成就。',
    works: ['水调歌头·明月几时有', '念奴娇·赤壁怀古', '定风波·莫听穿林打叶声', '江城子·密州出猎'] },
  { id: 'liqingzhao', name: '李清照', dynasty: '宋代', dynastyId: 'songdai', avatar: '李',
    desc: '宋代著名女词人，号易安居士。其词前期清丽婉转，后期沉郁悲凉，被誉为"千古第一才女"。为婉约派代表词人。',
    works: ['声声慢·寻寻觅觅', '如梦令·昨夜雨疏风骤', '一剪梅·红藕香残玉簟秋', '醉花阴·薄雾浓云愁永昼'] },
  { id: 'xinqiji', name: '辛弃疾', dynasty: '宋代', dynastyId: 'songdai', avatar: '辛',
    desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。多写爱国情怀和壮志难酬的感慨。',
    works: ['破阵子·为陈同甫赋壮词以寄之', '永遇乐·京口北固亭怀古', '水龙吟·登建康赏心亭', '青玉案·元夕'] },
  { id: 'liuyong', name: '柳永', dynasty: '宋代', dynastyId: 'songdai', avatar: '柳',
    desc: '北宋著名词人，原名三变，字耆卿。其词多写都市繁华和男女之情，擅长慢词，语言通俗，流传甚广。代表作有《雨霖铃》《八声甘州》等。',
    works: ['雨霖铃·寒蝉凄切', '八声甘州·对潇潇暮雨洒江天', '蝶恋花·伫倚危楼风细细'] },
  { id: 'yuefei', name: '岳飞', dynasty: '宋代', dynastyId: 'songdai', avatar: '岳',
    desc: '南宋抗金名将、词人，字鹏举。其词仅存三首，但《满江红·写怀》慷慨悲壮，千古传诵，充分表现了精忠报国的情怀。',
    works: ['满江红·写怀', '小重山·昨夜寒蛩不住鸣'] },
  { id: 'qinguan', name: '秦观', dynasty: '宋代', dynastyId: 'songdai', avatar: '秦',
    desc: '北宋著名词人，字少游，号淮海居士。"苏门四学士"之一。其词风格清丽婉约，多写离愁别绪和爱情，为婉约派代表词人。',
    works: ['鹊桥仙·纤云弄巧', '踏莎行·郴州旅舍', '满庭芳·山抹微云'] },
  { id: 'jiangkui', name: '姜夔', dynasty: '宋代', dynastyId: 'songdai', avatar: '姜',
    desc: '南宋著名词人、音乐家，字尧章，号白石道人。其词格律精严，字句精美，多写恋情和咏物。代表作有《扬州慢》《暗香》《疏影》等。',
    works: ['扬州慢·淮左名都', '暗香·旧时月色', '疏影·苔枝缀玉'] },
  { id: 'zhangxiaoxiang', name: '张孝祥', dynasty: '宋代', dynastyId: 'songdai', avatar: '张',
    desc: '南宋著名词人，字安国，号于湖居士。其词风格豪放激昂，上承苏轼，下启辛弃疾，是南宋豪放词派的重要代表。',
    works: ['念奴娇·过洞庭', '六州歌头·长淮望断'] },
  { id: 'zhoubangyan', name: '周邦彦', dynasty: '宋代', dynastyId: 'songdai', avatar: '周',
    desc: '北宋著名词人，字美成，号清真居士。其词格律谨严，语言精丽，为婉约派集大成者，对南宋词影响深远。代表作有《兰陵王·柳》《苏幕遮·燎沉香》等。',
    works: ['兰陵王·柳', '苏幕遮·燎沉香', '六丑·蔷薇谢后作'] },
  { id: 'wanganshi', name: '王安石', dynasty: '宋代', dynastyId: 'songdai', avatar: '王',
    desc: '北宋著名政治家、文学家，字介甫，号半山。唐宋八大家之一。其诗文风格遒劲，多写政治抱负和咏史怀古。代表作有《桂枝香·金陵怀古》《泊船瓜洲》等。',
    works: ['桂枝香·金陵怀古', '泊船瓜洲', '登飞来峰'] },
  { id: 'fanchengda', name: '范成大', dynasty: '宋代', dynastyId: 'songdai', avatar: '范',
    desc: '南宋著名诗人，字致能，号石湖居士。与杨万里、陆游、尤袤合称"中兴四大诗人"。其诗多写田园生活和民生疾苦。代表作有《四时田园杂兴》《鹊桥仙·七夕》等。',
    works: ['四时田园杂兴', '鹊桥仙·七夕', '州桥'] },
  { id: 'luyou', name: '陆游', dynasty: '宋代', dynastyId: 'songdai', avatar: '陆',
    desc: '南宋著名爱国诗人，字务观，号放翁。其诗词多写抗金救国和壮志难酬之情，风格雄浑悲壮。与尤袤、杨万里、范成大合称"中兴四大诗人"。',
    works: ['钗头凤·红酥手', '诉衷情·当年万里觅封侯', '示儿', '游山西村'] },
  { id: 'yanshu', name: '晏殊', dynasty: '宋代', dynastyId: 'songdai', avatar: '晏',
    desc: '北宋著名词人，字同叔。其词风格闲雅婉丽，多写富贵生活和离愁别绪。与欧阳修并称"晏欧"。代表作有《浣溪沙·一曲新词酒一杯》《破阵子·春景》等。',
    works: ['浣溪沙·一曲新词酒一杯', '破阵子·春景', '蝶恋花·槛菊愁烟兰泣露'] },
  { id: 'zhangxian', name: '张先', dynasty: '宋代', dynastyId: 'songdai', avatar: '张',
    desc: '北宋著名词人，字子野。其词多写男女之情和闲适生活，语言清丽。因词中多用"影"字，被称为"张三影"。代表作有《天仙子·水调数声持酒听》等。',
    works: ['天仙子·水调数声持酒听', '青门引·春思', '剪牡丹·舟中闻双琵琶'] },
  // --- Yuan poets ---
  { id: 'mazhiyuan', name: '马致远', dynasty: '元代', dynastyId: 'yuandai', avatar: '马',
    desc: '元代著名戏曲家、散曲家，号东篱，大都（今北京）人。"元曲四大家"之一。其散曲风格豪放洒脱，意境深远，被誉为"曲状元"。代表作有《天净沙·秋思》等。',
    works: ['天净沙·秋思', '拨不断·叹寒儒', '寿阳曲·远浦帆归', '落梅风·人初静'] },
  { id: 'zhangkejiu', name: '张可久', dynasty: '元代', dynastyId: 'yuandai', avatar: '张',
    desc: '元代著名散曲家，字小山，庆元（今浙江宁波）人。其曲多写隐逸生活和山水之趣，风格清丽典雅，是元代散曲大家。代表作有《人月圆·山中书事》《卖花声·怀古》等。',
    works: ['人月圆·山中书事', '卖花声·怀古', '清江引·秋怀', '殿前欢·离思'] },
  { id: 'xuzaisi', name: '徐再思', dynasty: '元代', dynastyId: 'yuandai', avatar: '徐',
    desc: '元代著名散曲家，字德可，号甜斋，嘉兴人。其曲多写闺情和隐逸生活，风格清丽婉约，与贯云石并称"酸甜乐府"。代表作有《折桂令·春情》《水仙子·夜雨》等。',
    works: ['折桂令·春情', '水仙子·夜雨', '普天乐·西山夕照'] },
  { id: 'zhangyanghao', name: '张养浩', dynasty: '元代', dynastyId: 'yuandai', avatar: '张',
    desc: '元代著名散曲家，字希孟，号云庄。其散曲多写隐逸生活，风格清新自然，也有关心民生疾苦之作。代表作有《山坡羊·潼关怀古》《山坡羊·骊山怀古》等。',
    works: ['山坡羊·潼关怀古', '山坡羊·骊山怀古', '山坡羊·未央怀古', '殿前欢·对菊自叹'] },
  { id: 'zhoudqing', name: '周德清', dynasty: '元代', dynastyId: 'yuandai', avatar: '周',
    desc: '元代著名散曲家、音韵学家，字挺斋，高安人。其曲多写山水景物，风格清丽明快。著有《中原音韵》，为北曲音韵的权威著作。代表作有《塞鸿秋·浔阳即景》等。',
    works: ['塞鸿秋·浔阳即景'] },
  { id: 'yaosui', name: '姚燧', dynasty: '元代', dynastyId: 'yuandai', avatar: '姚',
    desc: '元代著名散曲家、文学家，字端甫，号牧庵，洛阳人。其曲多写闺情和隐逸生活，风格清丽婉约。代表作有《凭阑人·寄征衣》等。',
    works: ['凭阑人·寄征衣'] },
  { id: 'luzhi', name: '卢挚', dynasty: '元代', dynastyId: 'yuandai', avatar: '卢',
    desc: '元代著名散曲家、文学家，字处道，号疏斋，涿郡人。其曲多写山水景物，风格清丽典雅。代表作有《沉醉东风·秋景》《殿前欢·吊古》等。',
    works: ['沉醉东风·秋景', '殿前欢·吊古', '沉醉东风·闲居'] },
  { id: 'wuxiyi', name: '吴西逸', dynasty: '元代', dynastyId: 'yuandai', avatar: '吴',
    desc: '元代散曲家，生平不详。其曲多写山水隐逸，风格清丽淡雅。代表作有《清江引·秋居》等。',
    works: ['清江引·秋居'] },
  { id: 'alixiying', name: '阿里西瑛', dynasty: '元代', dynastyId: 'yuandai', avatar: '阿',
    desc: '元代散曲家，回族，居吴城（今江苏苏州）。其曲多写隐逸生活，风格质朴自然。代表作有《殿前欢·懒云窝》等。',
    works: ['殿前欢·懒云窝'] },
  { id: 'qiaoji', name: '乔吉', dynasty: '元代', dynastyId: 'yuandai', avatar: '乔',
    desc: '元代著名散曲家，字梦符，号笙鹤翁，太原人。其曲多写山水和隐逸，风格清丽典雅。与张可久齐名，并称"乔张"。代表作有《水仙子·寻梅》《折桂令·客窗清明》等。',
    works: ['水仙子·寻梅', '折桂令·客窗清明', '水仙子·重观瀑布'] },
  { id: 'huzhiyu', name: '胡祗遹', dynasty: '元代', dynastyId: 'yuandai', avatar: '胡',
    desc: '元代文学家、散曲家，字绍开，号紫山。其曲风格清丽，多写闲适生活。代表作有《一半儿·春醉》等。',
    works: ['一半儿·春醉'] },
  { id: 'dengyubin', name: '邓玉宾', dynasty: '元代', dynastyId: 'yuandai', avatar: '邓',
    desc: '元代散曲家，生平不详。其曲多写道家思想和隐逸生活，风格清雅。代表作有《叨叨令·道情》等。',
    works: ['叨叨令·道情', '寄生草·饮'] },
]

// ========== 2. ID FIXES ==========
// baixingjian → baijuyi, chenzian → chenziang, guanhanging → guanhanqing
const idFixes = [
  { old: 'baixingjian', new: 'baijuyi' },
  { old: 'chenzian', new: 'chenziang' },
  { old: 'guanhanging', new: 'guanhanqing' },
]

// ========== 3. POEMAUTHOR FIXES ==========
// Files with empty <PoemAuthor /> or PoemAuthor without link
// Format: { file: 'category/id', name, years, desc, authorId }
const poemAuthorFixes = {
  // tangshi 31-40: PoemAuthor without link
  'tangshi/31': { name: '李商隐', years: '约813年—约858年', desc: '唐代著名诗人，字义山，号玉谿生。其诗构思新奇，意境朦胧，尤以无题诗著称。', authorId: 'lishangyin' },
  'tangshi/32': { name: '李商隐', years: '约813年—约858年', desc: '唐代著名诗人，字义山，号玉谿生。其诗构思新奇，意境朦胧，尤以无题诗著称。', authorId: 'lishangyin' },
  'tangshi/33': { name: '王之涣', years: '688年—742年', desc: '唐代著名边塞诗人，字季凌。其诗以描写边塞风光著称，气势恢宏，意境开阔。', authorId: 'wangzhihuan' },
  'tangshi/34': { name: '王维', years: '701年—761年', desc: '唐代著名诗人、画家，字摩诘，号摩诘居士。精通诗书画乐，有"诗佛"之称，以山水田园诗著称。', authorId: 'wangwei' },
  'tangshi/35': { name: '柳宗元', years: '773年—819年', desc: '唐代著名文学家、哲学家，字子厚，河东人，世称"柳河东"。与韩愈并称"韩柳"，为唐宋八大家之一。', authorId: 'liuzongyuan' },
  'tangshi/36': { name: '刘禹锡', years: '772年—842年', desc: '唐代著名诗人，字梦得，河南洛阳人。其诗风清新自然，善于用典，有"诗豪"之称。', authorId: 'liuyuxi' },
  'tangshi/37': { name: '刘禹锡', years: '772年—842年', desc: '唐代著名诗人，字梦得，河南洛阳人。其诗风清新自然，善于用典，有"诗豪"之称。', authorId: 'liuyuxi' },
  'tangshi/38': { name: '张继', years: '约715年—约779年', desc: '唐代诗人，字懿孙，襄州人。其诗多写羁旅之情，风格清丽自然，《枫桥夜泊》是其最负盛名的作品。', authorId: 'zhangji' },
  'tangshi/39': { name: '李白', years: '701年—762年', desc: '唐代伟大的浪漫主义诗人，字太白，号青莲居士，被后人誉为"诗仙"。其诗风雄奇豪放，想象丰富。', authorId: 'libai' },
  'tangshi/40': { name: '李白', years: '701年—762年', desc: '唐代伟大的浪漫主义诗人，字太白，号青莲居士，被后人誉为"诗仙"。其诗风雄奇豪放，想象丰富。', authorId: 'libai' },
  // tangshi 41-50: empty PoemAuthor
  'tangshi/41': { name: '岑参', years: '约715年—770年', desc: '唐代著名边塞诗人，与高适并称"高岑"。其诗气势磅礴，色彩瑰丽，善写边塞风光和军旅生活。', authorId: 'censhen' },
  'tangshi/42': { name: '李益', years: '748年—约829年', desc: '唐代诗人，字君虞。其诗多写边塞风光和征人思乡之情，音律和谐，语言精炼。', authorId: 'liyi' },
  'tangshi/43': { name: '韩翃', years: '约719年—约788年', desc: '唐代诗人，字君平，"大历十才子"之一。其诗多写送别酬赠之作，《寒食》一诗流传甚广。', authorId: 'hanyi' },
  'tangshi/44': { name: '韦应物', years: '737年—约792年', desc: '唐代著名诗人，京兆万年人。其诗风格闲淡清雅，多写山水田园和隐逸生活，与王维、孟浩然、柳宗元并称"王孟韦柳"。', authorId: 'weiyingwu' },
  'tangshi/45': { name: '白居易', years: '772年—846年', desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。与元稹并称"元白"，与刘禹锡并称"刘白"。其诗语言平易通俗，有"诗魔"和"诗王"之称。', authorId: 'baijuyi' },
  'tangshi/46': { name: '白居易', years: '772年—846年', desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。与元稹并称"元白"，与刘禹锡并称"刘白"。其诗语言平易通俗，有"诗魔"和"诗王"之称。', authorId: 'baijuyi' },
  'tangshi/47': { name: '白居易', years: '772年—846年', desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。其诗语言平易通俗，有"诗魔"和"诗王"之称。', authorId: 'baijuyi' },
  'tangshi/48': { name: '白居易', years: '772年—846年', desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。其诗语言平易通俗，有"诗魔"和"诗王"之称。', authorId: 'baijuyi' },
  'tangshi/49': { name: '杜牧', years: '803年—约852年', desc: '唐代著名诗人，字牧之。其诗英发俊爽，多写咏史怀古和抒情写景，与李商隐并称"小李杜"。', authorId: 'dumu' },
  'tangshi/50': { name: '杜牧', years: '803年—约852年', desc: '唐代著名诗人，字牧之。其诗英发俊爽，多写咏史怀古和抒情写景，与李商隐并称"小李杜"。', authorId: 'dumu' },
  // songci 27-36: PoemAuthor without link
  'songci/27': { name: '苏轼', years: '1037年—1101年', desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。', authorId: 'sushi' },
  'songci/28': { name: '苏轼', years: '1037年—1101年', desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。', authorId: 'sushi' },
  'songci/29': { name: '李清照', years: '1084年—约1155年', desc: '宋代著名女词人，号易安居士。其词前期清丽婉转，后期沉郁悲凉，被誉为"千古第一才女"。', authorId: 'liqingzhao' },
  'songci/30': { name: '蒋捷', years: '约1245年—约1305年', desc: '南宋末年词人，字胜欲，号竹山。宋亡后隐居不仕，其词多写故国之思和身世之感，风格悲凉清俊。', authorId: 'jiangjie' },
  'songci/31': { name: '蒋捷', years: '约1245年—约1305年', desc: '南宋末年词人，字胜欲，号竹山。宋亡后隐居不仕，其词多写故国之思和身世之感，风格悲凉清俊。', authorId: 'jiangjie' },
  'songci/32': { name: '辛弃疾', years: '1140年—1207年', desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。', authorId: 'xinqiji' },
  'songci/33': { name: '辛弃疾', years: '1140年—1207年', desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。', authorId: 'xinqiji' },
  'songci/34': { name: '李清照', years: '1084年—约1155年', desc: '宋代著名女词人，号易安居士。其词前期清丽婉转，后期沉郁悲凉，被誉为"千古第一才女"。', authorId: 'liqingzhao' },
  'songci/35': { name: '辛弃疾', years: '1140年—1207年', desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。', authorId: 'xinqiji' },
  'songci/36': { name: '张孝祥', years: '1132年—1170年', desc: '南宋著名词人，字安国，号于湖居士。其词风格豪放激昂，上承苏轼，下启辛弃疾，是南宋豪放词派的重要代表。', authorId: 'zhangxiaoxiang' },
  // songci 37-46: empty PoemAuthor
  'songci/37': { name: '柳永', years: '约984年—约1053年', desc: '北宋著名词人，原名三变，字耆卿。其词多写都市繁华和男女之情，擅长慢词，语言通俗，流传甚广。', authorId: 'liuyong' },
  'songci/38': { name: '王安石', years: '1021年—1086年', desc: '北宋著名政治家、文学家，字介甫，号半山。唐宋八大家之一。其诗文风格遒劲，多写政治抱负和咏史怀古。', authorId: 'wanganshi' },
  'songci/39': { name: '苏轼', years: '1037年—1101年', desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。', authorId: 'sushi' },
  'songci/40': { name: '苏轼', years: '1037年—1101年', desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。', authorId: 'sushi' },
  'songci/41': { name: '苏轼', years: '1037年—1101年', desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。', authorId: 'sushi' },
  'songci/42': { name: '范成大', years: '1126年—1193年', desc: '南宋著名诗人，字致能，号石湖居士。与杨万里、陆游、尤袤合称"中兴四大诗人"。其诗多写田园生活和民生疾苦。', authorId: 'fanchengda' },
  'songci/43': { name: '陆游', years: '1125年—1210年', desc: '南宋著名爱国诗人，字务观，号放翁。其诗词多写抗金救国和壮志难酬之情，风格雄浑悲壮。', authorId: 'luyou' },
  'songci/44': { name: '陆游', years: '1125年—1210年', desc: '南宋著名爱国诗人，字务观，号放翁。其诗词多写抗金救国和壮志难酬之情，风格雄浑悲壮。', authorId: 'luyou' },
  'songci/45': { name: '晏殊', years: '991年—1055年', desc: '北宋著名词人，字同叔。其词风格闲雅婉丽，多写富贵生活和离愁别绪。与欧阳修并称"晏欧"。', authorId: 'yanshu' },
  'songci/46': { name: '张先', years: '990年—1078年', desc: '北宋著名词人，字子野。其词多写男女之情和闲适生活，语言清丽。因词中多用"影"字，被称为"张三影"。', authorId: 'zhangxian' },
  // yuanqu 33-40: empty PoemAuthor
  'yuanqu/33': { name: '张养浩', years: '1270年—1329年', desc: '元代著名散曲家，字希孟，号云庄。其散曲多写隐逸生活，风格清新自然，也有关心民生疾苦之作。', authorId: 'zhangyanghao' },
  'yuanqu/34': { name: '乔吉', years: '约1280年—1345年', desc: '元代著名散曲家，字梦符，号笙鹤翁，太原人。其曲多写山水和隐逸，风格清丽典雅。与张可久齐名，并称"乔张"。', authorId: 'qiaoji' },
  'yuanqu/35': { name: '乔吉', years: '约1280年—1345年', desc: '元代著名散曲家，字梦符，号笙鹤翁，太原人。其曲多写山水和隐逸，风格清丽典雅。', authorId: 'qiaoji' },
  'yuanqu/36': { name: '卢挚', years: '约1242年—1314年', desc: '元代著名散曲家、文学家，字处道，号疏斋，涿郡人。其曲多写山水景物，风格清丽典雅。', authorId: 'luzhi' },
  'yuanqu/37': { name: '胡祗遹', years: '1227年—约1295年', desc: '元代文学家、散曲家，字绍开，号紫山。其曲风格清丽，多写闲适生活。', authorId: 'huzhiyu' },
  'yuanqu/38': { name: '邓玉宾', years: '生平不详', desc: '元代散曲家。其曲多写道家思想和隐逸生活，风格清雅。', authorId: 'dengyubin' },
  'yuanqu/39': { name: '白朴', years: '1226年—约1306年', desc: '元代著名戏曲家、散曲家，字太素，号兰谷。"元曲四大家"之一，代表作有《墙头马上》《梧桐雨》等。', authorId: 'baipu' },
  'yuanqu/40': { name: '卢挚', years: '约1242年—1314年', desc: '元代著名散曲家、文学家，字处道，号疏斋，涿郡人。其曲多写山水景物，风格清丽典雅。', authorId: 'luzhi' },
}

// ========== FUNCTIONS ==========

function fixIdInFile(filePath, oldId, newId) {
  if (!fs.existsSync(filePath)) return false
  let content = fs.readFileSync(filePath, 'utf8')
  const newContent = content.split(oldId).join(newId)
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8')
    console.log(`  Fixed ID in ${path.basename(filePath)}: ${oldId} -> ${newId}`)
    return true
  }
  return false
}

function buildAuthorBlock(author, isShort = false) {
  const esc = (s) => String(s).replace(/"/g, '&quot;')
  if (isShort) {
    return `  {
    id: '${author.id}',
    name: '${author.name}',
    dynasty: '${author.dynasty}',
    dynastyId: '${author.dynastyId}',
    avatar: '${author.avatar}',
    desc: '${author.desc}',
    works: [${author.works.map(w => `'${w}'`).join(', ')}]
  }`
  }
  return `  {
    id: '${author.id}',
    name: '${author.name}',
    dynasty: '${author.dynasty}',
    dynastyId: '${author.dynastyId}',
    avatar: '${author.avatar}',
    desc: '${author.desc}',
    works: [${author.works.map(w => `'${w}'`).join(', ')}]
  }`
}

function addAuthorsToAuthorDetail() {
  const filePath = path.join(docsDir, 'components', 'AuthorDetail.vue')
  let content = fs.readFileSync(filePath, 'utf8')

  // Fix IDs first
  for (const fix of idFixes) {
    content = content.split(fix.old).join(fix.new)
  }

  // Find the last `}` before `]` that closes the authors array
  // Insert new authors before the closing `]`
  const insertBlock = newAuthors.map(a => buildAuthorBlock(a)).join(',\n') + '\n'

  // Find pattern: `  }\n]` at the end of the authors array
  // Replace with `  },\n${insertBlock}]`
  const regex = /(\n  )\}(\s*\n\]\s*\n)/
  if (regex.test(content)) {
    content = content.replace(regex, `$1},\n${insertBlock}$2`)
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`Added ${newAuthors.length} authors to AuthorDetail.vue`)
  } else {
    console.error('ERROR: Could not find insertion point in AuthorDetail.vue')
  }
}

function addAuthorsToAuthorsVue() {
  const filePath = path.join(docsDir, 'components', 'Authors.vue')
  let content = fs.readFileSync(filePath, 'utf8')

  // Fix IDs first
  for (const fix of idFixes) {
    content = content.split(fix.old).join(fix.new)
  }

  // Build short author blocks (shorter desc)
  const shortAuthors = newAuthors.map(a => ({
    ...a,
    desc: a.desc.length > 60 ? a.desc.substring(0, 58) + '。' : a.desc
  }))

  const insertBlock = shortAuthors.map(a => `  {
    id: '${a.id}',
    name: '${a.name}',
    dynasty: '${a.dynasty}',
    dynastyId: '${a.dynastyId}',
    avatar: '${a.avatar}',
    desc: '${a.desc}',
    works: [${a.works.map(w => `'${w}'`).join(', ')}]
  }`).join(',\n') + '\n'

  const regex = /(\n  )\}(\s*\n\]\s*\nconst activeDynasty)/
  if (regex.test(content)) {
    content = content.replace(regex, `$1},\n${insertBlock}$2`)
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`Added ${newAuthors.length} authors to Authors.vue`)
  } else {
    console.error('ERROR: Could not find insertion point in Authors.vue')
  }
}

function addRoutesToPathsJs() {
  const filePath = path.join(docsDir, 'authors', '[id].paths.js')
  let content = fs.readFileSync(filePath, 'utf8')

  // Fix IDs first
  for (const fix of idFixes) {
    content = content.split(fix.old).join(fix.new)
  }

  // Add new routes before closing `]`
  const newRoutes = newAuthors.map(a => `    { params: { id: '${a.id}' } }`).join(',\n')

  const regex = /(\s*)\]\s*\n\}/
  if (regex.test(content)) {
    content = content.replace(regex, `$1,\n${newRoutes}\n  ]\n}`)
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`Added ${newAuthors.length} routes to [id].paths.js`)
  } else {
    console.error('ERROR: Could not find insertion point in [id].paths.js')
  }
}

function fixPoemAuthorTags() {
  const esc = (s) => String(s).replace(/"/g, '&quot;')
  let fixedCount = 0

  for (const [fileKey, data] of Object.entries(poemAuthorFixes)) {
    const filePath = path.join(docsDir, 'shici', fileKey + '.md')
    if (!fs.existsSync(filePath)) {
      console.error(`  File not found: ${fileKey}.md`)
      continue
    }

    let content = fs.readFileSync(filePath, 'utf8')
    const link = `/authors/${data.authorId}`
    const newTag = `<PoemAuthor name="${data.name}" years="${esc(data.years)}" desc="${esc(data.desc)}" link="${link}" />`

    // Fix empty <PoemAuthor />
    if (content.includes('<PoemAuthor />')) {
      content = content.replace('<PoemAuthor />', newTag)
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`  Fixed empty PoemAuthor: ${fileKey}.md`)
      fixedCount++
    }
    // Fix PoemAuthor without link: <PoemAuthor name="..." years="..." desc="..." />
    else {
      const regex = /<PoemAuthor\s+name="[^"]*"\s+years="[^"]*"\s+desc="[^"]*"\s*\/>/
      if (regex.test(content)) {
        content = content.replace(regex, newTag)
        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`  Added link to PoemAuthor: ${fileKey}.md`)
        fixedCount++
      }
    }
  }
  console.log(`Fixed ${fixedCount} PoemAuthor tags`)
}

// ========== MAIN ==========
console.log('=== 1. Fixing IDs and adding authors ===')
addAuthorsToAuthorDetail()
addAuthorsToAuthorsVue()
addRoutesToPathsJs()

console.log('\n=== 2. Fixing PoemAuthor tags ===')
fixPoemAuthorTags()

console.log('\n=== Done! ===')
