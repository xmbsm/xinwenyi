<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import { 
  tangshiPoems, 
  songciPoems, 
  yuanquPoems, 
  shijingPoems, 
  chuciPoems, 
  hanweishiPoems, 
  yuefuPoems, 
  mingqingshiPoems, 
  nanbeichaoPoems, 
  wudaiPoems 
} from '../data/poems.js'

const route = useRoute()
const { frontmatter } = useData()

const allPoems = [
  ...tangshiPoems.map(p => ({ ...p, category: 'tangshi', categoryName: '唐诗' })),
  ...songciPoems.map(p => ({ ...p, category: 'songci', categoryName: '宋词' })),
  ...yuanquPoems.map(p => ({ ...p, category: 'yuanqu', categoryName: '元曲' })),
  ...shijingPoems.map(p => ({ ...p, category: 'shijing', categoryName: '诗经' })),
  ...chuciPoems.map(p => ({ ...p, category: 'chuci', categoryName: '楚辞' })),
  ...hanweishiPoems.map(p => ({ ...p, category: 'hanweishi', categoryName: '汉魏诗' })),
  ...yuefuPoems.map(p => ({ ...p, category: 'yuefu', categoryName: '乐府诗' })),
  ...mingqingshiPoems.map(p => ({ ...p, category: 'mingqingshi', categoryName: '明清诗词' })),
  ...nanbeichaoPoems.map(p => ({ ...p, category: 'nanbeichao', categoryName: '南北朝诗' })),
  ...wudaiPoems.map(p => ({ ...p, category: 'wudai', categoryName: '五代词' }))
]

const authors = [
  {
    id: 'baijuyi',
    name: '白居易',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '白',
    desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。与元稹并称"元白"，与刘禹锡并称"刘白"。白居易的诗歌题材广泛，形式多样，语言平易通俗，有"诗魔"和"诗王"之称。',
    works: ['长恨歌', '琵琶行', '赋得古原草送别']
  },
  {
    id: 'baipu',
    name: '白朴',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '白',
    desc: '元代著名戏曲作家，元曲四大家之一。字太素，号兰谷。代表作有《唐明皇秋夜梧桐雨》《裴少俊墙头马上》《董月英花月东墙记》等。',
    works: ['沉醉东风·渔夫', '天净沙·秋', '寄生草·饮']
  },
  {
    id: 'bangu',
    name: '班固',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '班',
    desc: '班固，字孟坚，东汉著名的史学家、文学家。著有《汉书》，是中国第一部纪传体断代史。',
    works: ['汉书']
  },
  {
    id: 'caocao',
    name: '曹操',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '东汉末年杰出的政治家、军事家、文学家，三国中曹魏政权的奠基人。字孟德，小名阿瞒。曹操精兵法，善诗文，其诗气魄雄伟、慷慨悲凉，开创建安文学的新风气。',
    works: ['短歌行', '龟虽寿', '蒿里行']
  },
  {
    id: 'caoxueqin',
    name: '曹雪芹',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '曹',
    desc: '清代小说家，名霑，字梦阮，号雪芹，又号芹溪。出身于一个"百年望族"的大官僚地主家庭，后因家庭的衰败而饱尝了人生的辛酸。在人生的最后阶段，他以坚韧不拔的毅力，历经十年创作了《红楼梦》。',
    works: ['红楼梦']
  },
  {
    id: 'caozhi',
    name: '曹植',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名文学家，曹操之子，建安文学代表人物。字子建，后人因他文学上的造诣而将他与曹操、曹丕合称为"三曹"。',
    works: ['七步诗', '洛神赋', '白马篇']
  },
  {
    id: 'chenyuyi',
    name: '陈与义',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陈',
    desc: '宋代诗人，字去非，号简斋。其诗风清新淡雅，是江西诗派的重要代表人物之一。',
    works: ['临江仙·夜登小阁忆洛中旧游']
  },
  {
    id: 'chenziang',
    name: '陈子昂',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '陈',
    desc: '唐代文学家，字伯玉，初唐诗文革新人物之一。其诗风骨峥嵘，寓意深远，苍劲有力，有《陈伯玉集》传世。',
    works: ['登幽州台歌']
  },
  {
    id: 'churenhuo',
    name: '褚人获',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '褚',
    desc: '清代小说家，字稼轩，号石农。他博学多才，著有《隋唐演义》《坚瓠集》等作品。',
    works: ['隋唐演义']
  },
  {
    id: 'cuihao',
    name: '崔颢',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，汴州人。开元十一年进士，官至司勋员外郎。其《黄鹤楼》诗被李白赞为"眼前有景道不得，崔颢题诗在上头"。',
    works: ['黄鹤楼']
  },
  {
    id: 'cuihu',
    name: '崔护',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，字殷功。其诗风格清新自然，以《题都城南庄》最为著名。',
    works: ['题都城南庄']
  },
  {
    id: 'dufu',
    name: '杜甫',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代伟大的现实主义诗人，字子美，自号少陵野老。杜甫在中国古典诗歌中的影响非常深远，被后人称为"诗圣"，他的诗被称为"诗史"。',
    works: ['兵车行', '春望', '茅屋为秋风所破歌']
  },
  {
    id: 'dumu',
    name: '杜牧',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代诗人，字牧之，号樊川居士。杜牧人称"小杜"，以别于杜甫。与李商隐并称"小李杜"。其诗风格俊爽清丽，独树一帜。',
    works: ['泊秦淮', '赤壁', '江南春']
  },
  {
    id: 'fanzhongyan',
    name: '范仲淹',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '北宋杰出的思想家、政治家、文学家。字希文，谥号"文正"。其"先天下之忧而忧，后天下之乐而乐"思想为千古名句。',
    works: ['岳阳楼记']
  },
  {
    id: 'fengmenglong',
    name: '冯梦龙',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '冯',
    desc: '明代文学家、戏曲家，字犹龙，号墨憨斋主人。他辑有话本集《喻世明言》《警世通言》《醒世恒言》，世称"三言"。',
    works: ['东周列国志']
  },
  {
    id: 'gaoshi',
    name: '高适',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '高',
    desc: '唐代边塞诗人，字达夫，一字仲武。与岑参并称"高岑"，其诗气势雄浑，格调高昂，是盛唐边塞诗派的代表人物。',
    works: ['别董大', '除夜作']
  },
  {
    id: 'gongzizhen',
    name: '龚自珍',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '龚',
    desc: '清代思想家、诗人、文学家。字璱人，号定庵。其诗文主张"更法""改图"，揭露清统治者的腐朽，洋溢着爱国热情。',
    works: ['己亥杂诗']
  },
  {
    id: 'guanhanqing',
    name: '关汉卿',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '关',
    desc: '元代杂剧奠基人，元曲四大家之首。号已斋叟。他一生创作杂剧六十余种，现存十八种，以《窦娥冤》最为著名。',
    works: ['窦娥冤']
  },
  {
    id: 'hanyi',
    name: '韩翃',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代诗人，字君平，大历十才子之一。其诗笔法轻巧，写景别致，以《寒食》诗最为著名。',
    works: ['寒食']
  },
  {
    id: 'hanyu',
    name: '韩愈',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代杰出的文学家、思想家、哲学家。字退之，河南河阳人，世称"韩昌黎"。他是唐代古文运动的倡导者，被后人尊为"唐宋八大家"之首。',
    works: ['马说', '师说', '早春呈水部张十八员外']
  },
  {
    id: 'banjieyu',
    name: '班婕妤',
    dynasty: '汉代',
    dynastyId: 'handai',
    avatar: '班',
    desc: '西汉女文学家，名不详，为汉成帝妃子，封为婕妤。其诗赋多写宫中愁怨，《怨歌行》相传为她所作，是最早的宫怨诗之一。',
    works: ['怨歌行']
  },
  {
    id: 'baozhao',
    name: '鲍照',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '鲍',
    desc: '南朝宋著名文学家，字明远。其诗风格俊逸豪放，擅长乐府诗和七言诗，对唐代诗歌发展有重要影响。与谢灵运、颜延之并称"元嘉三大家"。',
    works: ['拟行路难', '代出自蓟北门行', '梅花落']
  },
  {
    id: 'caoxuequan',
    name: '曹学佺',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '曹',
    desc: '明代文学家、藏书家，字能始，号石仓。著述宏富，其诗风格清新自然，多写山水和闲情逸致。',
    works: ['秋日杂诗']
  },
  {
    id: 'fengyansi',
    name: '冯延巳',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '冯',
    desc: '五代南唐词人，字正中。其词多写闲情逸致和离愁别绪，语言清丽，意境深远，对北宋初期的词人有较大影响。',
    works: ['鹊踏枝·谁道闲情抛掷久', '谒金门·风乍起', '采桑子·群芳过后西湖好']
  },
  {
    id: 'fuxuan',
    name: '傅玄',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '傅',
    desc: '西晋文学家、思想家，字休奕。其诗擅长乐府，多反映社会现实和妇女问题，风格质朴刚健。',
    works: ['短歌行', '豫章行']
  },
  {
    id: 'gaoqi',
    name: '高启',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '高',
    desc: '明初著名诗人，字季迪，号青丘子。"吴中四杰"之首，其诗风格清新俊逸，各体兼工，被誉为明代诗人之冠。',
    works: ['登金陵雨花台望大江', '梅花九首', '寻胡隐君']
  },
  {
    id: 'hexun',
    name: '何逊',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '何',
    desc: '南朝梁诗人，字仲言。其诗风格清新自然，擅长写景和抒情，尤以山水诗和赠别诗著称。与阴铿齐名，并称"阴何"。',
    works: ['临行与故游夜别', '相送', '慈姥矶']
  },
  {
    id: 'huangjingren',
    name: '黄景仁',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '黄',
    desc: '清代诗人，字汉镛，号仲则、鹿菲子。其诗风格清新俊逸，多写身世之感和愁思哀怨，被誉为"清代李白"。',
    works: ['杂感', '绮怀十六首·其十五', '别老母']
  },
  {
    id: 'kongzhigui',
    name: '孔稚珪',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '孔',
    desc: '南朝齐文学家，字德璋。其文辞工丽，尤以《北山移文》最为著名，文章风格诙谐犀利，是南朝骈文的名篇。',
    works: ['北山移文', '游太平山']
  },
  {
    id: 'liuji',
    name: '刘基',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '刘',
    desc: '明代开国元勋，字伯温。元末明初杰出的政治家、军事家、文学家。其诗文雄浑古朴，多反映社会现实和抒发政治抱负。',
    works: ['题太公钓渭图', '北风行', '卖柑者言']
  },
  {
    id: 'liyu',
    name: '李煜',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '李',
    desc: '南唐后主，字重光，号钟隐、莲峰居士。五代时期最杰出的词人，其词前期多写宫廷生活，后期多抒亡国之痛，感情真挚，语言自然，对后世词的发展影响深远。',
    works: ['虞美人·春花秋月何时了', '浪淘沙令·帘外雨潺潺', '相见欢·无言独上西楼']
  },
  {
    id: 'nalanxingde',
    name: '纳兰性德',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '纳',
    desc: '清代著名词人，原名成德，字容若，号楞伽山人。其词风格清新婉丽，多写爱情、相思和悼亡，情感真挚，被誉为"清代第一词人"。',
    works: ['浣溪沙·谁念西风独自凉', '木兰花令·拟古决绝词柬友', '长相思·山一程']
  },
  {
    id: 'qijiguang',
    name: '戚继光',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '戚',
    desc: '明代抗倭名将、军事家，字元敬，号南塘。不仅战功赫赫，亦能诗文，其诗多抒发爱国豪情和军事生涯的感慨，风格慷慨悲壮。',
    works: ['马上作', '韬钤深处']
  },
  {
    id: 'shenyue',
    name: '沈约',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '沈',
    desc: '南朝梁著名文学家、史学家，字休文。"竟陵八友"之一，创"四声八病"之说，对近体诗的形成有重要贡献。其诗风格清丽，注重声律。',
    works: ['别范安成', '伤谢朓', '咏芙蓉']
  },
  {
    id: 'wangcan',
    name: '王粲',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '王',
    desc: '东汉末年文学家，字仲宣。"建安七子"之一，其诗风格慷慨悲凉，多写乱离之苦和思乡之情，《七哀诗》是其代表作。',
    works: ['七哀诗', '登楼赋']
  },
  {
    id: 'wangji',
    name: '王籍',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝梁诗人，字文海。其诗擅长写景，以《入若耶溪》最为著名，其中"蝉噪林逾静，鸟鸣山更幽"两句，被誉为千古名句。',
    works: ['入若耶溪']
  },
  {
    id: 'wangrong',
    name: '王融',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝齐文学家，字元长。"竟陵八友"之一，其诗讲究声律，文辞富丽，对永明体的形成有重要贡献。',
    works: ['临高台', '巫山高', '古意咏史']
  },
  {
    id: 'wangsengru',
    name: '王僧孺',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝梁文学家，字僧孺。其诗风格艳丽，多写闺情和咏物，是梁代宫廷文学的代表作家之一。',
    works: ['冬日晚郡事隙']
  },
  {
    id: 'wangshizhen',
    name: '王士禛',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '王',
    desc: '清代著名诗人，字子真，号阮亭、渔洋山人。"神韵说"的倡导者，其诗风格含蓄蕴藉，意境悠远，为清初诗坛领袖。',
    works: ['秋柳四首·其一', '真州绝句', '题秋江独钓图']
  },
  {
    id: 'weizhuang',
    name: '韦庄',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '韦',
    desc: '晚唐至五代时期著名诗人、词人，字端己。"花间派"代表词人之一，与温庭筠并称"温韦"。其词风格清丽，多写离愁别绪和身世之感。',
    works: ['菩萨蛮·人人尽说江南好', '思帝乡·春日游', '女冠子·四月十七']
  },
  {
    id: 'wendingjun',
    name: '温庭筠',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '温',
    desc: '唐代诗人、词人，字飞卿。"花间派"词派的鼻祖，其词风格秾艳精致，多写闺情。诗与李商隐齐名，并称"温李"。',
    works: ['菩萨蛮·小山重叠金明灭', '更漏子·玉炉香', '梦江南·梳洗罢']
  },
  {
    id: 'wujun',
    name: '吴均',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '吴',
    desc: '南朝梁文学家，字叔庠。其诗风格清新挺拔，擅长山水写景，时称"吴均体"。也擅长骈文，尤以小品书札著称。',
    works: ['咏雪', '赠王桂阳', '与朱元思书']
  },
  {
    id: 'wumaiyuan',
    name: '吴迈远',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '吴',
    desc: '南朝宋诗人，其诗多为乐府诗，风格清丽，多写男女爱情和离愁别绪，是南朝乐府诗的重要作者。',
    works: ['春怨', '长相思']
  },
  {
    id: 'xiawanchun',
    name: '夏完淳',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '夏',
    desc: '南明抗清英雄、诗人，字存古，号小隐。少年英才，投身抗清斗争，兵败被俘，英勇就义，年仅十七岁。其诗慷慨悲壮，充满爱国情怀。',
    works: ['别云间', '即事', '大哀赋']
  },
  {
    id: 'xielingyun',
    name: '谢灵运',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '谢',
    desc: '东晋末年至南朝宋初年的著名诗人，被誉为"山水诗派"的开创者。其诗善于描绘自然景物，语言精雕细琢，对后世山水诗的发展产生了深远影响。',
    works: ['登池上楼', '石壁精舍还湖中作', '七里濑']
  },
  {
    id: 'xietiao',
    name: '谢朓',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '谢',
    desc: '南朝齐著名诗人，字玄晖。与谢灵运同族，人称"小谢"。其诗风格清新秀丽，擅长山水诗，对仗工整，对唐代近体诗的形成有重要影响。',
    works: ['晚登三山还望京邑', '玉阶怨', '游东田']
  },
  {
    id: 'yangshen',
    name: '杨慎',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '杨',
    desc: '明代著名文学家，字用修，号升庵。"明代三才子"之首，博学多才，诗词、文、考据等无不精通。其词风格清丽婉约，《临江仙·滚滚长江东逝水》千古传诵。',
    works: ['临江仙·滚滚长江东逝水', '西江月·道德三皇五帝', '三岔驿']
  },
  {
    id: 'yangshiqi',
    name: '杨士奇',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '杨',
    desc: '明代名臣、文学家，字士奇，号东里。"三杨"之一，其诗风格雍容典雅，多为台阁体，是明初"台阁体"诗文的代表人物之一。',
    works: ['寄答张孟威', '秦淮海祠']
  },
  {
    id: 'yanyanzhi',
    name: '颜延之',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '颜',
    desc: '南朝宋文学家，字延年。与谢灵运齐名，并称"颜谢"，同为"元嘉三大家"之一。其诗好用典故，讲究雕琢，风格凝重华丽。',
    works: ['五君咏·阮步兵', '秋胡行', '望织女']
  },
  {
    id: 'yiming',
    name: '佚名',
    dynasty: '不详',
    dynastyId: 'buxiang',
    avatar: '佚',
    desc: '古代佚名诗人，其作品流传千古，作者姓名已不可考。这些作品多来自民间，反映了当时的社会生活和人民的思想感情。',
    works: ['孔雀东南飞', '木兰辞', '陌上桑']
  },
  {
    id: 'yuanmei',
    name: '袁枚',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '袁',
    desc: '清代著名诗人、文学家，字子才，号简斋、随园老人。"性灵说"的倡导者，其诗风格清新灵巧，多写个人性情和生活情趣。',
    works: ['苔', '马嵬', '寒夜']
  },
  {
    id: 'yujianwu',
    name: '庾肩吾',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '庾',
    desc: '南朝梁文学家，字子慎。庾信之父，"宫体诗"的重要作家之一，其诗风格华丽，多写宫廷生活和景物。',
    works: ['舟中望月']
  },
  {
    id: 'yuxin',
    name: '庾信',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '庾',
    desc: '南北朝时期著名文学家，字子山。早年与徐陵齐名，并称"徐庾"。其诗赋风格华丽，晚年因经历亡国之痛，作品转为沉郁苍凉，对唐代诗歌影响深远。',
    works: ['拟咏怀', '重别周尚书', '寄王琳']
  },
  {
    id: 'zhengxie',
    name: '郑燮',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '郑',
    desc: '清代书画家、文学家，字克柔，号板桥。"扬州八怪"之一，其诗、书、画世称"三绝"。其诗风格清新质朴，多反映民间疾苦和抒写性情。',
    works: ['竹石', '题画竹', '潍县署中画竹呈年伯包大中丞括']
  },
  {
    id: 'zhangpu',
    name: '张溥',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '张',
    desc: '明末文学家，字天如，号西铭。"复社"领袖，其散文风格朴实，内容充实，《五人墓碑记》是其代表作。',
    works: ['五人墓碑记', '五人墓']
  },
  {
    id: 'zhaoyi',
    name: '赵翼',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '赵',
    desc: '清代史学家、诗人，字云崧，号瓯北。其诗风格开朗畅达，多咏史和论诗之作，与袁枚、蒋士铨并称"乾隆三大家"。',
    works: ['论诗五首·其二']
  },
  {
    id: 'zhuyizun',
    name: '朱彝尊',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '朱',
    desc: '清代著名词人、学者，字锡鬯，号竹垞。"浙西词派"的开创者，与陈维崧并称"朱陈"。其词风格清丽醇雅，多写身世之感和咏物怀古。',
    works: ['桂殿秋·思往事', '解佩令·自题词集', '卖花声·雨花台']
  },
  {
    id: 'songyu',
    name: '宋玉',
    dynasty: '战国',
    dynastyId: 'zhanguo',
    avatar: '宋',
    desc: '战国末期楚国辞赋家，相传为屈原弟子。与屈原并称"屈宋"，其作品铺陈华丽，想象丰富，对汉赋发展产生深远影响。《九辩》《风赋》《神女赋》等相传为其所作。',
    works: ['九辩', '风赋', '高唐赋', '神女赋', '登徒子好色赋']
  },
  {
    id: 'jiayi',
    name: '贾谊',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '贾',
    desc: '西汉杰出的政论家、文学家，世称贾生、贾太傅。年少才高，被汉文帝赏识，因遭权臣排挤贬为长沙王太傅。其政论文气势磅礴，辞赋承袭楚辞传统，对后世影响深远。',
    works: ['吊屈原赋', '鵩鸟赋', '过秦论', '论积贮疏']
  },
  {
    id: 'dongfangshuo',
    name: '东方朔',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '东',
    desc: '西汉文学家、辞赋家，字曼倩。汉武帝时为太中大夫，以诙谐滑稽著称，善辞赋。其作品承袭楚辞风格，代表作有《七谏》等。',
    works: ['七谏', '答客难', '非有先生论']
  },
  {
    id: 'wangbao',
    name: '王褒',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '王',
    desc: '西汉辞赋家，字子渊。汉宣帝时待诏金马门，擢为谏议大夫。其辞赋承袭楚辞传统，文辞华美，代表作有《九怀》《洞箫赋》等。',
    works: ['九怀', '洞箫赋', '甘泉赋']
  },
  {
    id: 'liuxiang',
    name: '刘向',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '刘',
    desc: '西汉经学家、目录学家、文学家，本名更生，字子政。汉皇族宗室，领校群书，编成《别录》，又编《楚辞》集，对保存先秦文献贡献巨大。其辞赋作品有《九叹》等。',
    works: ['九叹', '列女传', '新序', '说苑']
  },
  {
    id: 'wangyi',
    name: '王逸',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '王',
    desc: '东汉文学家，字叔师。顺帝时为校书郎。所作《楚辞章句》是现存最早的《楚辞》注本，对楚辞研究贡献巨大。其辞赋作品有《九思》等。',
    works: ['九思', '楚辞章句']
  },
  {
    id: 'zhuangji',
    name: '庄忌',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '庄',
    desc: '西汉辞赋家，一说名严忌。汉景帝时为梁孝王门客。其辞赋作品承袭楚辞传统，代表作《哀时命》抒发怀才不遇之情，被收入《楚辞》集。',
    works: ['哀时命']
  },
  {
    id: 'huainanxiaoshan',
    name: '淮南小山',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '淮',
    desc: '西汉淮南王刘安门下文客的合称，为淮南王刘安所招致养士的一部分。其作品承袭楚辞传统，代表作《招隐士》被收入《楚辞》集，写山林险恶，劝隐士出山。',
    works: ['招隐士']
  },
  {
    id: 'caopi',
    name: '曹丕',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名政治家、文学家，字子桓，曹操次子，三国魏开国皇帝，史称魏文帝。其诗清丽婉约，善写男女情思；其《典论·论文》是中国文学批评史上的重要著作。与曹操、曹植合称"三曹"。',
    works: ['燕歌行', '杂诗', '典论·论文']
  },
  {
    id: 'ruanji',
    name: '阮籍',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '阮',
    desc: '三国魏著名诗人、思想家，字嗣宗，"竹林七贤"之一。阮瑀之子，曾任步兵校尉，世称阮步兵。其诗以《咏怀诗》八十二首为代表，旨意隐晦，忧愤深广，对五言抒情诗发展影响深远。',
    works: ['咏怀诗·夜中不能寐', '咏怀诗·嘉树下成蹊', '大人先生传']
  },
  {
    id: 'jikang',
    name: '嵇康',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '嵇',
    desc: '三国魏著名思想家、文学家、音乐家，字叔夜，"竹林七贤"之一。与魏宗室联姻，官至中散大夫，世称嵇中散。因得罪司马氏被杀。其诗以四言见长，散文笔力犀利，风格清峻。',
    works: ['赠秀才入军', '幽愤诗', '与山巨源绝交书', '声无哀乐论']
  },
  {
    id: 'zhanghua',
    name: '张华',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '张',
    desc: '西晋文学家、政治家，字茂先，范阳方城（今河北固安）人。博学多才，著有《博物志》。晋武帝时力主伐吴，功成封广武县侯。惠帝时官至司空，后为赵王司马伦所害。其诗辞藻华丽，以《情诗》五首较有名。',
    works: ['情诗', '博物志']
  },
  {
    id: 'panyue',
    name: '潘岳',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '潘',
    desc: '西晋著名文学家，字安仁，世称潘安。美姿仪，与陆机齐名，并称"潘陆"。其诗辞藻华艳，善写哀伤之情，《悼亡诗》三首为悼念亡妻之作，遂使"悼亡"成为专指悼念亡妻的诗题。',
    works: ['悼亡诗', '秋兴赋', '闲居赋']
  },
  {
    id: 'zuosi',
    name: '左思',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '左',
    desc: '西晋著名文学家，字太冲。其《咏史》诗八首借咏史以咏怀，开创咏史诗新风气，对后世咏史诗影响深远。曾构思十年写成《三都赋》，豪贵竞相抄写，洛阳为之纸贵。',
    works: ['咏史·弱冠弄柔翰', '咏史·郁郁涧底松', '三都赋', '娇女诗']
  },
  {
    id: 'luji',
    name: '陆机',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '陆',
    desc: '西晋著名文学家、文学理论家，字士衡。与弟陆云合称"二陆"。其《文赋》是中国文学理论史上的重要著作，首次系统论述文学创作过程。诗重藻绘排偶，开六朝绮靡之风。',
    works: ['拟行行重行行', '文赋', '赴洛道中作']
  },
  {
    id: 'liukun',
    name: '刘琨',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '刘',
    desc: '西晋将领、诗人，字越石。少时与祖逖闻鸡起舞，有志恢复中原。永嘉之乱后，长期在北方坚持抗击石勒，后为段匹磾所害。其诗慷慨悲壮，抒发爱国情怀，代表作有《扶风歌》等。',
    works: ['扶风歌', '重赠卢谌', '答卢谌诗']
  },
  {
    id: 'guopu',
    name: '郭璞',
    dynasty: '东晋',
    dynastyId: 'jindai',
    avatar: '郭',
    desc: '东晋著名文学家、训诂学家、术数家，字景纯。博学多才，好古文奇字，又精阴阳历算。其《游仙诗》十四首借游仙以咏怀，辞采华丽，寄托深远。又注《尔雅》《方言》《山海经》等。',
    works: ['游仙诗', '江赋', '尔雅注']
  },
  {
    id: 'quyuan',
    name: '屈原',
    dynasty: '战国',
    dynastyId: 'zhanguo',
    avatar: '屈',
    desc: '战国末期楚国诗人、政治家，名平，字原。中国浪漫主义文学的奠基人，"楚辞"的创立者和代表作家。屈原是中国文学史上第一位伟大的爱国诗人，其作品想象奇特，辞采绚烂，气象恢宏，对后世诗歌文学产生深远影响。代表作有《离骚》《九歌》《天问》《九章》等。',
    works: ['离骚', '九歌', '天问', '九章', '远游', '卜居', '渔父']
  },
  {
    id: 'chenlin',
    name: '陈琳',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '陈',
    desc: '东汉末年著名文学家，字孔璋，广陵射阳（今江苏宝应）人。"建安七子"之一。初为大将军何进主簿，后归袁绍，绍败归曹操。擅长章表书记，诗风质朴刚健。代表作有《饮马长城窟行》《为袁绍檄豫州文》等。',
    works: ['饮马长城窟行', '为袁绍檄豫州文', '游览诗']
  },
  {
    id: 'libai',
    name: '李白',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '李',
    desc: '唐代伟大的浪漫主义诗人，字太白，号青莲居士，被后人誉为"诗仙"。其诗风雄奇豪放，想象丰富，意境奇妙，语言流转自然，与杜甫并称"李杜"，对后世诗歌影响深远。',
    works: ['静夜思', '将进酒', '望庐山瀑布', '早发白帝城', '行路难', '月下独酌']
  },
  {
    id: 'wangwei',
    name: '王维',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '王',
    desc: '唐代著名诗人、画家，字摩诘，号摩诘居士。精通诗书画乐，有"诗佛"之称。其山水田园诗与孟浩然并称"王孟"，对后世山水诗影响深远。',
    works: ['相思', '山居秋暝', '使至塞上', '鹿柴', '竹里馆', '送元二使安西']
  },
  {
    id: 'wangzhihuan',
    name: '王之涣',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '王',
    desc: '唐代著名边塞诗人，字季凌。其诗以描写边塞风光著称，气势恢宏，意境开阔。代表作有《登鹳雀楼》《凉州词》等。',
    works: ['登鹳雀楼', '凉州词', '宴词']
  },
  {
    id: 'menghaoran',
    name: '孟浩然',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '孟',
    desc: '唐代著名诗人，以山水田园诗著称，与王维并称"王孟"。其诗风格清淡自然，多写隐居生活和山水景色。',
    works: ['春晓', '过故人庄', '宿建德江', '望洞庭湖赠张丞相']
  },
  {
    id: 'wangchangling',
    name: '王昌龄',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '王',
    desc: '唐代著名边塞诗人，字少伯。其诗以七绝见长，被后人誉为"七绝圣手"。代表作有《出塞》《从军行》等。',
    works: ['出塞', '从军行', '芙蓉楼送辛渐']
  },
  {
    id: 'lishen',
    name: '李绅',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '李',
    desc: '唐代诗人，字公垂。与元稹、白居易交游甚密，是新乐府运动的参与者之一。其《悯农》二首流传甚广。',
    works: ['悯农·其一', '悯农·其二']
  },
  {
    id: 'mengjiao',
    name: '孟郊',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '孟',
    desc: '唐代著名诗人，字东野。其诗风格古朴，多写贫寒生活之情，与贾岛并称"郊寒岛瘦"。代表作有《游子吟》等。',
    works: ['游子吟', '登科后']
  },
  {
    id: 'wangbo',
    name: '王勃',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '王',
    desc: '唐代著名文学家，字子安。"初唐四杰"之一。其诗文词采华丽，气势宏伟。代表作有《送杜少府之任蜀州》《滕王阁序》等。',
    works: ['送杜少府之任蜀州', '滕王阁序']
  },
  {
    id: 'lishangyin',
    name: '李商隐',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '李',
    desc: '唐代著名诗人，字义山，号玉谿生。其诗构思新奇，意境朦胧，尤以无题诗著称。与杜牧合称"小李杜"，对后世诗歌影响深远。',
    works: ['无题', '锦瑟', '夜雨寄北', '嫦娥']
  },
  {
    id: 'liuzongyuan',
    name: '柳宗元',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '柳',
    desc: '唐代著名文学家、哲学家，字子厚，河东人，世称"柳河东"。与韩愈并称"韩柳"，为唐宋八大家之一。其诗文风格清峻，寓言散文成就尤高。',
    works: ['江雪', '永州八记', '捕蛇者说']
  },
  {
    id: 'liuyuxi',
    name: '刘禹锡',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '刘',
    desc: '唐代著名诗人，字梦得，河南洛阳人。其诗风清新自然，善于用典，有"诗豪"之称。与白居易并称"刘白"。',
    works: ['乌衣巷', '竹枝词', '陋室铭', '秋词']
  },
  {
    id: 'zhangji',
    name: '张继',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '张',
    desc: '唐代诗人，字懿孙，襄州人。其诗多写羁旅之情，风格清丽自然，《枫桥夜泊》是其最负盛名的作品。',
    works: ['枫桥夜泊']
  },
  {
    id: 'censhen',
    name: '岑参',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '岑',
    desc: '唐代著名边塞诗人，与高适并称"高岑"。其诗气势磅礴，色彩瑰丽，善写边塞风光和军旅生活。代表作有《白雪歌送武判官归京》《逢入京使》等。',
    works: ['白雪歌送武判官归京', '逢入京使', '走马川行奉送封大夫出师西征']
  },
  {
    id: 'liyi',
    name: '李益',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '李',
    desc: '唐代诗人，字君虞。其诗多写边塞风光和征人思乡之情，音律和谐，语言精炼。代表作有《夜上受降城闻笛》《江南曲》等。',
    works: ['夜上受降城闻笛', '江南曲', '从军北征']
  },
  {
    id: 'weiyingwu',
    name: '韦应物',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韦',
    desc: '唐代著名诗人，京兆万年人。其诗风格闲淡清雅，多写山水田园和隐逸生活，与王维、孟浩然、柳宗元并称"王孟韦柳"。',
    works: ['滁州西涧', '寄李儋元锡', '淮上喜会梁川故人']
  },
  {
    id: 'sushi',
    name: '苏轼',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '苏',
    desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。诗、词、文、书、画皆有极高成就。',
    works: ['水调歌头·明月几时有', '念奴娇·赤壁怀古', '定风波·莫听穿林打叶声', '江城子·密州出猎']
  },
  {
    id: 'liqingzhao',
    name: '李清照',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '李',
    desc: '宋代著名女词人，号易安居士。其词前期清丽婉转，后期沉郁悲凉，被誉为"千古第一才女"。为婉约派代表词人。',
    works: ['声声慢·寻寻觅觅', '如梦令·昨夜雨疏风骤', '一剪梅·红藕香残玉簟秋', '醉花阴·薄雾浓云愁永昼']
  },
  {
    id: 'xinqiji',
    name: '辛弃疾',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '辛',
    desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。多写爱国情怀和壮志难酬的感慨。',
    works: ['破阵子·为陈同甫赋壮词以寄之', '永遇乐·京口北固亭怀古', '水龙吟·登建康赏心亭', '青玉案·元夕']
  },
  {
    id: 'liuyong',
    name: '柳永',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '柳',
    desc: '北宋著名词人，原名三变，字耆卿。其词多写都市繁华和男女之情，擅长慢词，语言通俗，流传甚广。代表作有《雨霖铃》《八声甘州》等。',
    works: ['雨霖铃·寒蝉凄切', '八声甘州·对潇潇暮雨洒江天', '蝶恋花·伫倚危楼风细细']
  },
  {
    id: 'yuefei',
    name: '岳飞',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '岳',
    desc: '南宋抗金名将、词人，字鹏举。其词仅存三首，但《满江红·写怀》慷慨悲壮，千古传诵，充分表现了精忠报国的情怀。',
    works: ['满江红·写怀', '小重山·昨夜寒蛩不住鸣']
  },
  {
    id: 'qinguan',
    name: '秦观',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '秦',
    desc: '北宋著名词人，字少游，号淮海居士。"苏门四学士"之一。其词风格清丽婉约，多写离愁别绪和爱情，为婉约派代表词人。',
    works: ['鹊桥仙·纤云弄巧', '踏莎行·郴州旅舍', '满庭芳·山抹微云']
  },
  {
    id: 'jiangkui',
    name: '姜夔',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '姜',
    desc: '南宋著名词人、音乐家，字尧章，号白石道人。其词格律精严，字句精美，多写恋情和咏物。代表作有《扬州慢》《暗香》《疏影》等。',
    works: ['扬州慢·淮左名都', '暗香·旧时月色', '疏影·苔枝缀玉']
  },
  {
    id: 'zhangxiaoxiang',
    name: '张孝祥',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '张',
    desc: '南宋著名词人，字安国，号于湖居士。其词风格豪放激昂，上承苏轼，下启辛弃疾，是南宋豪放词派的重要代表。',
    works: ['念奴娇·过洞庭', '六州歌头·长淮望断']
  },
  {
    id: 'zhoubangyan',
    name: '周邦彦',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '周',
    desc: '北宋著名词人，字美成，号清真居士。其词格律谨严，语言精丽，为婉约派集大成者，对南宋词影响深远。代表作有《兰陵王·柳》《苏幕遮·燎沉香》等。',
    works: ['兰陵王·柳', '苏幕遮·燎沉香', '六丑·蔷薇谢后作']
  },
  {
    id: 'wanganshi',
    name: '王安石',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '王',
    desc: '北宋著名政治家、文学家，字介甫，号半山。唐宋八大家之一。其诗文风格遒劲，多写政治抱负和咏史怀古。代表作有《桂枝香·金陵怀古》《泊船瓜洲》等。',
    works: ['桂枝香·金陵怀古', '泊船瓜洲', '登飞来峰']
  },
  {
    id: 'fanchengda',
    name: '范成大',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '南宋著名诗人，字致能，号石湖居士。与杨万里、陆游、尤袤合称"中兴四大诗人"。其诗多写田园生活和民生疾苦。代表作有《四时田园杂兴》《鹊桥仙·七夕》等。',
    works: ['四时田园杂兴', '鹊桥仙·七夕', '州桥']
  },
  {
    id: 'luyou',
    name: '陆游',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陆',
    desc: '南宋著名爱国诗人，字务观，号放翁。其诗词多写抗金救国和壮志难酬之情，风格雄浑悲壮。与尤袤、杨万里、范成大合称"中兴四大诗人"。',
    works: ['钗头凤·红酥手', '诉衷情·当年万里觅封侯', '示儿', '游山西村']
  },
  {
    id: 'yanshu',
    name: '晏殊',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '晏',
    desc: '北宋著名词人，字同叔。其词风格闲雅婉丽，多写富贵生活和离愁别绪。与欧阳修并称"晏欧"。代表作有《浣溪沙·一曲新词酒一杯》《破阵子·春景》等。',
    works: ['浣溪沙·一曲新词酒一杯', '破阵子·春景', '蝶恋花·槛菊愁烟兰泣露']
  },
  {
    id: 'zhangxian',
    name: '张先',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '张',
    desc: '北宋著名词人，字子野。其词多写男女之情和闲适生活，语言清丽。因词中多用"影"字，被称为"张三影"。代表作有《天仙子·水调数声持酒听》等。',
    works: ['天仙子·水调数声持酒听', '青门引·春思', '剪牡丹·舟中闻双琵琶']
  },
  {
    id: 'mazhiyuan',
    name: '马致远',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '马',
    desc: '元代著名戏曲家、散曲家，号东篱，大都（今北京）人。"元曲四大家"之一。其散曲风格豪放洒脱，意境深远，被誉为"曲状元"。代表作有《天净沙·秋思》等。',
    works: ['天净沙·秋思', '拨不断·叹寒儒', '寿阳曲·远浦帆归', '落梅风·人初静']
  },
  {
    id: 'zhangkejiu',
    name: '张可久',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '张',
    desc: '元代著名散曲家，字小山，庆元（今浙江宁波）人。其曲多写隐逸生活和山水之趣，风格清丽典雅，是元代散曲大家。代表作有《人月圆·山中书事》《卖花声·怀古》等。',
    works: ['人月圆·山中书事', '卖花声·怀古', '清江引·秋怀', '殿前欢·离思']
  },
  {
    id: 'xuzaisi',
    name: '徐再思',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '徐',
    desc: '元代著名散曲家，字德可，号甜斋，嘉兴人。其曲多写闺情和隐逸生活，风格清丽婉约，与贯云石并称"酸甜乐府"。代表作有《折桂令·春情》《水仙子·夜雨》等。',
    works: ['折桂令·春情', '水仙子·夜雨', '普天乐·西山夕照']
  },
  {
    id: 'zhangyanghao',
    name: '张养浩',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '张',
    desc: '元代著名散曲家，字希孟，号云庄。其散曲多写隐逸生活，风格清新自然，也有关心民生疾苦之作。代表作有《山坡羊·潼关怀古》《山坡羊·骊山怀古》等。',
    works: ['山坡羊·潼关怀古', '山坡羊·骊山怀古', '山坡羊·未央怀古', '殿前欢·对菊自叹']
  },
  {
    id: 'zhoudqing',
    name: '周德清',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '周',
    desc: '元代著名散曲家、音韵学家，字挺斋，高安人。其曲多写山水景物，风格清丽明快。著有《中原音韵》，为北曲音韵的权威著作。代表作有《塞鸿秋·浔阳即景》等。',
    works: ['塞鸿秋·浔阳即景']
  },
  {
    id: 'yaosui',
    name: '姚燧',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '姚',
    desc: '元代著名散曲家、文学家，字端甫，号牧庵，洛阳人。其曲多写闺情和隐逸生活，风格清丽婉约。代表作有《凭阑人·寄征衣》等。',
    works: ['凭阑人·寄征衣']
  },
  {
    id: 'luzhi',
    name: '卢挚',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '卢',
    desc: '元代著名散曲家、文学家，字处道，号疏斋，涿郡人。其曲多写山水景物，风格清丽典雅。代表作有《沉醉东风·秋景》《殿前欢·吊古》等。',
    works: ['沉醉东风·秋景', '殿前欢·吊古', '沉醉东风·闲居']
  },
  {
    id: 'wuxiyi',
    name: '吴西逸',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '吴',
    desc: '元代散曲家，生平不详。其曲多写山水隐逸，风格清丽淡雅。代表作有《清江引·秋居》等。',
    works: ['清江引·秋居']
  },
  {
    id: 'alixiying',
    name: '阿里西瑛',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '阿',
    desc: '元代散曲家，回族，居吴城（今江苏苏州）。其曲多写隐逸生活，风格质朴自然。代表作有《殿前欢·懒云窝》等。',
    works: ['殿前欢·懒云窝']
  },
  {
    id: 'qiaoji',
    name: '乔吉',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '乔',
    desc: '元代著名散曲家，字梦符，号笙鹤翁，太原人。其曲多写山水和隐逸，风格清丽典雅。与张可久齐名，并称"乔张"。代表作有《水仙子·寻梅》《折桂令·客窗清明》等。',
    works: ['水仙子·寻梅', '折桂令·客窗清明', '水仙子·重观瀑布']
  },
  {
    id: 'huzhiyu',
    name: '胡祗遹',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '胡',
    desc: '元代文学家、散曲家，字绍开，号紫山。其曲风格清丽，多写闲适生活。代表作有《一半儿·春醉》等。',
    works: ['一半儿·春醉']
  },
  {
    id: 'dengyubin',
    name: '邓玉宾',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '邓',
    desc: '元代散曲家，生平不详。其曲多写道家思想和隐逸生活，风格清雅。代表作有《叨叨令·道情》等。',
    works: ['叨叨令·道情', '寄生草·饮']
  },
  {
    id: 'jiangjie',
    name: '蒋捷',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '蒋',
    desc: '南宋末年词人，字胜欲，号竹山。宋亡后隐居不仕，其词多写故国之思和身世之感，风格悲凉清俊。代表作有《虞美人·听雨》《一剪梅·舟过吴江》等。',
    works: ['虞美人·听雨', '一剪梅·舟过吴江', '贺新郎·兵后寓吴']
  },
  {
    id: 'lizhiyi',
    name: '李之仪',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '李',
    desc: '北宋词人，字端叔，号姑溪居士。生于庆历八年（1048年），卒于政和七年（1117年）。其为苏轼门人，与苏轼、黄庭坚、秦观等人交游唱和。其词风格清丽婉约，多写离情别绪，语言质朴自然，情真意切。代表作《卜算子·我住长江头》以长江为线索写相思之情，被誉为"借水言情"的典范之作。',
    works: ['卜算子·我住长江头', '谢池春·残寒销尽', '临江仙·登凌歊台']
  },
  {
    id: 'shidazu',
    name: '史达祖',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '史',
    desc: '字邦卿，号梅溪，南宋词人。其词工于咏物，描摹物态精巧玲珑，语言清丽，为南宋格律词派代表之一。代表作《双双燕·咏燕》以拟人手法咏燕，被誉为咏物词的杰作。',
    works: ['双双燕·咏燕', '绮罗香·咏春雨', '夜合花']
  },
  {
    id: 'wuwenying',
    name: '吴文英',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '吴',
    desc: '字君特，号梦窗，晚号觉翁，南宋词人。其词意象绵密，辞藻华丽，时空交错，被誉为"词中李商隐"，为南宋格律词派代表人物。代表作有《八声甘州·灵岩陪庾幕诸公游》《风入松·听风听雨过清明》等。',
    works: ['风入松·听风听雨过清明', '八声甘州·灵岩陪庾幕诸公游', '莺啼序·残寒正欺病酒']
  },
  {
    id: 'liuchenweng',
    name: '刘辰翁',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '刘',
    desc: '字会孟，号须溪，南宋遗民词人、文学批评家。宋亡后隐居不仕，其词风格沉郁悲凉，多写亡国之痛和故国之思，为宋末遗民词代表人物。代表作《兰陵王·丙子送春》以送春喻送宋，沉痛感人。',
    works: ['兰陵王·丙子送春', '柳梢青·春感', '永遇乐·璧月初晴']
  },
  {
    id: 'baolinghui',
    name: '鲍令晖',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '鲍',
    desc: '南朝宋女诗人，东海人，鲍照之妹。才情出众，擅长抒情诗，鲍照曾以之自比。其诗语言清丽，情感真挚细腻，善于抒写闺怨离愁。代表作有《题书后寄行人》《拟青青河畔草》等。',
    works: ['题书后寄行人', '拟青青河畔草']
  },
  {
    id: 'jiangyan',
    name: '江淹',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '江',
    desc: '南朝宋齐梁文学家，字文通。历仕宋、齐、梁三朝。早年以文章著名，晚年才思减退，世称"江郎才尽"。其诗长于拟古，抒情赋成就较高。代表作有《别赋》《恨赋》《望荆山》等。',
    works: ['别赋', '恨赋', '望荆山', '效阮公诗']
  },
  {
    id: 'shenjiong',
    name: '沈炯',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '沈',
    desc: '南朝梁陈间文学家，字礼明。少有才名，善属文。梁时为尚书左丞，陈时官至御史中丞。其诗风格清丽，长于咏物抒情。代表作有《咏老马》《长安少年行》等。',
    works: ['咏老马', '长安少年行']
  },
  {
    id: 'lusidao',
    name: '卢思道',
    dynasty: '北朝',
    dynastyId: 'beichao',
    avatar: '卢',
    desc: '北朝隋间诗人，字子行。北齐时为给事黄门侍郎，北周时授仪同三司，隋初官至散骑侍郎。其诗以边塞题材见长，风格雄健，对唐代边塞诗有重要影响。代表作有《从军行》《听鸣蝉篇》等。',
    works: ['从军行', '听鸣蝉篇']
  },
  {
    id: 'xuedaoheng',
    name: '薛道衡',
    dynasty: '隋代',
    dynastyId: 'suidai',
    avatar: '薛',
    desc: '隋代著名诗人，字玄卿。历仕北齐、北周、隋三朝，官至司隶大夫。其诗词采华艳，情致深婉，与卢思道齐名，并称"薛卢"。代表作有《昔昔盐》《人日思归》等。',
    works: ['昔昔盐', '人日思归']
  },
  {
    id: 'yangsu',
    name: '杨素',
    dynasty: '隋代',
    dynastyId: 'suidai',
    avatar: '杨',
    desc: '隋朝名臣、诗人，字处道。协助杨坚建立隋朝，封越国公。其诗风格清峻高远，长于山水抒情，对隋唐诗歌的过渡有重要影响。代表作有《山斋独坐赠薛内史》《赠薛播州》等。',
    works: ['山斋独坐赠薛内史', '赠薛播州']
  },
  {
    id: 'yinkeng',
    name: '阴铿',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '阴',
    desc: '南朝陈诗人，字子坚。其诗长于写景，工于炼字，风格清丽流婉，与何逊并称"阴何"。对唐代近体诗的发展有重要影响，李白曾以之自比。代表作有《晚出新亭》《五洲夜发》《江津送刘光禄不及》等。',
    works: ['晚出新亭', '五洲夜发', '江津送刘光禄不及']
  },
  {
    id: 'xuling',
    name: '徐陵',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '徐',
    desc: '南朝梁陈文学家，字孝穆。早年与庾信齐名，并称"徐庾"。编有《玉台新咏》，其诗辞藻华丽，为宫体诗代表作家。代表作有《关山月》《出自蓟北门行》《鸳鸯赋》等。',
    works: ['关山月', '出自蓟北门行', '玉台新咏']
  },
  {
    id: 'taohongjing',
    name: '陶弘景',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '陶',
    desc: '南朝齐梁时道教思想家、医药学家、文学家，字通明，号华阳隐居。隐居茅山，梁武帝屡加礼聘不出，国有大事常就咨询，时称"山中宰相"。其诗清淡自然，代表作有《诏问山中何所有赋诗以答》。',
    works: ['诏问山中何所有赋诗以答', '答诏问']
  },
  {
    id: 'zhangrong',
    name: '张融',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '张',
    desc: '南朝宋齐文学家，字思光。其人才气纵横，文风奇诡，自成一格。齐高帝萧道成称其文章"不可无一，不可有二"。代表作有《别诗》《海赋》等。',
    works: ['别诗', '海赋']
  },
  {
    id: 'xiezhuang',
    name: '谢庄',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '谢',
    desc: '南朝宋文学家，字希逸。谢灵运之侄，文章之美，与颜延之、鲍照并称。其辞赋典丽，诗歌清雅。代表作有《怀园引》《月赋》等。',
    works: ['怀园引', '月赋']
  }
]

const authorId = computed(() => {
  const path = route.path
  // 匹配 /authors/caocao.html 或 /authors/caocao
  const match = path.match(/\/authors\/([^/]+?)(?:\.html)?$/)
  return match ? match[1] : ''
})

const author = computed(() => {
  return authors.find(a => a.id === authorId.value)
})

// 设置页面标题
function updateTitle() {
  if (author.value && typeof document !== 'undefined') {
    document.title = `${author.value.name} | 新文艺`
  }
}

watch(author, updateTitle, { immediate: true })
onMounted(updateTitle)

const authorPoems = computed(() => {
  if (!author.value) return []
  return allPoems.filter(poem => poem.author === author.value.name)
})

function goBack() {
  window.history.back()
}

function getWorkLink(title) {
  const poem = allPoems.find(p => p.title === title)
  if (poem) {
    return `/shici/${poem.category}/${poem.id}`
  }
  return '/shici'
}
</script>

<template>
  <div class="author-detail-page">
    <div v-if="author" class="author-detail">
      <div class="author-header">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          返回
        </button>
      </div>

      <div class="author-profile">
        <div class="author-avatar-large">{{ author.avatar }}</div>
        <div class="author-info-main">
          <h1 class="author-name-large">{{ author.name }}</h1>
          <span class="author-dynasty-badge">{{ author.dynasty }}</span>
          <p class="author-desc-full">{{ author.desc }}</p>
        </div>
      </div>

      <div class="author-sections">
        <div class="section">
          <h2 class="section-title">
            <span class="section-icon">📚</span>
            代表作品
          </h2>
          <div class="works-list">
            <a
              v-for="work in author.works"
              :key="work"
              :href="getWorkLink(work)"
              class="work-tag-large"
            >{{ work }}</a>
          </div>
        </div>

        <div class="section" v-if="authorPoems.length > 0">
          <h2 class="section-title">
            <span class="section-icon">📖</span>
            本站收录
          </h2>
          <div class="books-grid">
            <a
              v-for="poem in authorPoems"
              :key="`${poem.category}-${poem.id}`"
              :href="`/shici/${poem.category}/${poem.id}`"
              class="book-card"
            >
              <div class="book-category">{{ poem.categoryName }}</div>
              <h3 class="book-title">{{ poem.title }}</h3>
              <p class="book-desc">{{ poem.quote }}</p>
            </a>
          </div>
        </div>

        <div class="section empty-section" v-else>
          <h2 class="section-title">
            <span class="section-icon">📖</span>
            本站收录
          </h2>
          <p class="empty-text">暂无收录该作者的作品，敬请期待。</p>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <div class="not-found-icon">🔍</div>
      <h2>未找到该作者</h2>
      <p>抱歉，您查找的作者不存在。</p>
      <a href="/authors" class="back-link">返回作者列表</a>
    </div>
  </div>
</template>

<style scoped>
.author-detail-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 0;
}

.author-header {
  margin-bottom: 32px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.back-btn:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.author-profile {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 48px;
  padding: 32px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.author-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--vp-c-brand-3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 600;
  flex-shrink: 0;
}

.dark .author-avatar-large {
  color: #1a1a1a;
}

.author-info-main {
  flex: 1;
}

.author-name-large {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.author-dynasty-badge {
  display: inline-block;
  padding: 4px 16px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.author-desc-full {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0;
}

.author-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section {
  padding: 28px 32px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.section-icon {
  font-size: 20px;
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.work-tag-large {
  padding: 8px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.work-tag-large:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.book-card {
  padding: 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.book-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-2px);
}

.dark .book-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.book-category {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
  font-weight: 500;
}

.book-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.book-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.book-tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--vp-c-divider);
}

.empty-section {
  text-align: center;
}

.empty-text {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0;
}

.not-found {
  text-align: center;
  padding: 80px 24px;
}

.not-found-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.not-found h2 {
  font-size: 24px;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.not-found p {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0 0 24px 0;
}

.back-link {
  display: inline-block;
  padding: 10px 24px;
  background: var(--vp-c-brand-3);
  color: #fff !important;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  transition: background 0.2s ease;
}

.back-link:hover {
  background: var(--vp-c-brand-2);
}

@media (max-width: 960px) {
  .author-detail-page {
    padding: 24px 16px;
  }
}

@media (max-width: 640px) {
  .author-detail-page {
    padding: 16px 12px;
  }

  .author-profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .author-name-large {
    font-size: 24px;
  }

  .books-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 20px;
  }
}
</style>
