/**
 * 更新 PoetryLibrary.vue，添加诗经21-50、楚辞17-50、汉魏诗11-50的诗词元数据
 */
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'components', 'PoetryLibrary.vue')

// 诗经 21-50
const shijingNew = [
  { id: 21, title: '黍离', content: '彼黍离离，彼稷之苗。行迈靡靡，中心摇摇。', tags: ['王风', '亡国'] },
  { id: 22, title: '伯兮', content: '伯兮朅兮，邦之桀兮。伯也执殳，为王前驱。', tags: ['卫风', '思妇'] },
  { id: 23, title: '风雨', content: '风雨凄凄，鸡鸣喈喈。既见君子，云胡不夷。', tags: ['郑风', '爱情'] },
  { id: 24, title: '绸缪', content: '绸缪束薪，三星在天。今夕何夕，见此良人。', tags: ['唐风', '爱情'] },
  { id: 25, title: '东山', content: '我徂东山，慆慆不归。我来自东，零雨其濛。', tags: ['豳风', '征役'] },
  { id: 26, title: '君子于役', content: '君子于役，不知其期。曷至哉？鸡栖于埘。', tags: ['王风', '思妇'] },
  { id: 27, title: '君子阳阳', content: '君子阳阳，左执簧，右招我由房。其乐只且！', tags: ['王风', '乐歌'] },
  { id: 28, title: '扬之水', content: '扬之水，不流束薪。彼其之子，不与我戍申。', tags: ['王风', '征役'] },
  { id: 29, title: '葛藟', content: '绵绵葛藟，在河之浒。终远兄弟，谓他人父。', tags: ['王风', '流离'] },
  { id: 30, title: '溱洧', content: '溱与洧，方涣涣兮。士与女，方秉蕑兮。', tags: ['郑风', '爱情'] },
  { id: 31, title: '女曰鸡鸣', content: '女曰鸡鸣，士曰昧旦。子兴视夜，明星有烂。', tags: ['郑风', '夫妻'] },
  { id: 32, title: '狡童', content: '彼狡童兮，不与我言兮。维子之故，使我不能餐兮。', tags: ['郑风', '爱情'] },
  { id: 33, title: '出其东门', content: '出其东门，有女如云。虽则如云，匪我思存。', tags: ['郑风', '爱情'] },
  { id: 34, title: '野有蔓草', content: '野有蔓草，零露漙兮。有美一人，清扬婉兮。', tags: ['郑风', '爱情'] },
  { id: 35, title: '蒹葭', content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。', tags: ['秦风', '思慕'] },
  { id: 36, title: '黄鸟', content: '交交黄鸟，止于棘。谁从穆公？子车奄息。', tags: ['秦风', '殉葬'] },
  { id: 37, title: '七月', content: '七月流火，九月授衣。一之日觱发，二之日栗烈。', tags: ['豳风', '农事'] },
  { id: 38, title: '鸱鸮', content: '鸱鸮鸱鸮，既取我子，无毁我室！', tags: ['豳风', '寓言'] },
  { id: 39, title: '破斧', content: '既破我斧，又缺我斨。周公东征，四国是皇。', tags: ['豳风', '征役'] },
  { id: 40, title: '伐柯', content: '伐柯如何？匪斧不克。取妻如何？匪媒不得。', tags: ['豳风', '婚姻'] },
  { id: 41, title: '鹤鸣', content: '鹤鸣于九皋，声闻于野。鱼潜在渊，或在于渚。', tags: ['小雅', '哲理'] },
  { id: 42, title: '白驹', content: '皎皎白驹，食我场苗。絷之维之，以永今朝。', tags: ['小雅', '留客'] },
  { id: 43, title: '蓼莪', content: '蓼蓼者莪，匪莪伊蒿。哀哀父母，生我劬劳。', tags: ['小雅', '孝思'] },
  { id: 44, title: '常棣', content: '常棣之华，鄂不韡韡。凡今之人，莫如兄弟。', tags: ['小雅', '兄弟'] },
  { id: 45, title: '文王', content: '文王在上，于昭于天。周虽旧邦，其命维新。', tags: ['大雅', '颂祖'] },
  { id: 46, title: '大明', content: '明明在下，赫赫在上。天难忱斯，不易维王。', tags: ['大雅', '史诗'] },
  { id: 47, title: '绵', content: '绵绵瓜瓞，民之初生，自土沮漆。', tags: ['大雅', '史诗'] },
  { id: 48, title: '生民', content: '厥初生民，时维姜嫄。生民如何？克禋克祀。', tags: ['大雅', '史诗'] },
  { id: 49, title: '清庙', content: '于穆清庙，肃雍显相。济济多士，秉文之德。', tags: ['周颂', '祭祀'] },
  { id: 50, title: '维天之命', content: '维天之命，于穆不已。于乎不显，文王之德之纯。', tags: ['周颂', '祭祀'] }
]

// 楚辞 17-50
const chuciNew = [
  { id: 17, title: '渔父', author: '屈原', content: '屈原既放，游于江潭，行吟泽畔，颜色憔悴。', tags: ['辞赋', '哲理'] },
  { id: 18, title: '招隐士', author: '淮南小山', content: '桂树丛生兮山之幽，偃蹇连蜷兮枝相缭。', tags: ['辞赋', '招隐'] },
  { id: 19, title: '七谏·初放', author: '东方朔', content: '平生于国兮，皇考谥予曰正则。', tags: ['拟骚', '抒怀'] },
  { id: 20, title: '九叹·逢纷', author: '刘向', content: '伊伯庸之末胄兮，谅皇直之屈原。', tags: ['拟骚', '抒怀'] },
  { id: 21, title: '九歌·云中君', author: '屈原', content: '浴兰汤兮沐芳，华采衣兮若英。', tags: ['九歌', '祭神'] },
  { id: 22, title: '九歌·湘君', author: '屈原', content: '君不行兮夷犹，蹇谁留兮中洲？', tags: ['九歌', '爱情'] },
  { id: 23, title: '九歌·礼魂', author: '屈原', content: '成礼兮会鼓，传芭兮代舞，姱女倡兮容与。', tags: ['九歌', '送神'] },
  { id: 24, title: '九章·抽思', author: '屈原', content: '心郁郁之忧思兮，独永叹乎增伤。', tags: ['九章', '放逐'] },
  { id: 25, title: '九章·思美人', author: '屈原', content: '思美人兮，擥涕而竚眙。', tags: ['九章', '思君'] },
  { id: 26, title: '九辩', author: '宋玉', content: '悲哉秋之为气也！萧瑟兮草木摇落而变衰。', tags: ['悲秋', '贫士'] },
  { id: 27, title: '风赋', author: '宋玉', content: '楚襄王游于兰台之宫，宋玉、景差侍。', tags: ['赋', '讽喻'] },
  { id: 28, title: '高唐赋', author: '宋玉', content: '昔者楚襄王与宋玉游于云梦之台，望高唐之观。', tags: ['赋', '神女'] },
  { id: 29, title: '神女赋', author: '宋玉', content: '楚襄王与宋玉游于云梦之浦，使玉赋高唐之事。', tags: ['赋', '神女'] },
  { id: 30, title: '登徒子好色赋', author: '宋玉', content: '大夫登徒子侍于楚王，短宋玉曰："玉为人体貌闲丽。"', tags: ['赋', '论辩'] },
  { id: 31, title: '对楚王问', author: '宋玉', content: '楚襄王问于宋玉曰："先生其有遗行与？"', tags: ['赋', '论辩'] },
  { id: 32, title: '吊屈原赋', author: '贾谊', content: '恭承嘉惠兮，俟罪长沙。侧闻屈原兮，自沉汨罗。', tags: ['赋', '吊古'] },
  { id: 33, title: '鵩鸟赋', author: '贾谊', content: '单阏之岁兮，四月孟夏，庚子日斜兮，鵩集予舍。', tags: ['赋', '哲理'] },
  { id: 34, title: '七谏·沉江', author: '东方朔', content: '惟往古之得失兮，亦览此以制宜。', tags: ['拟骚', '抒怀'] },
  { id: 35, title: '九怀·通路', author: '王褒', content: '天门兮地户，孰由兮贤者？', tags: ['拟骚', '抒怀'] },
  { id: 36, title: '九思·逢尤', author: '王逸', content: '悲兮愁，哀兮忧。天生我兮当闇时。', tags: ['拟骚', '抒怀'] },
  { id: 37, title: '哀时命', author: '庄忌', content: '哀时命之不及古人兮，夫何予生之不遘时！', tags: ['拟骚', '抒怀'] },
  { id: 38, title: '九怀·匡机', author: '王褒', content: '悲哉于嗟兮，心内切离。', tags: ['拟骚', '抒怀'] },
  { id: 39, title: '九叹·远逝', author: '刘向', content: '志隐隐而郁怫兮，愁独哀而冤结。', tags: ['拟骚', '抒怀'] },
  { id: 40, title: '九思·伤时', author: '王逸', content: '惟昊天兮寥廓，余独悲兮蹙蹙。', tags: ['拟骚', '伤时'] },
  { id: 41, title: '九怀·危俊', author: '王褒', content: '陶嘉月兮总驾，搴玉英兮自修。', tags: ['拟骚', '抒怀'] },
  { id: 42, title: '九叹·惜贤', author: '刘向', content: '览屈氏之离骚兮，心哀哀而怫郁。', tags: ['拟骚', '惜贤'] },
  { id: 43, title: '九思·守志', author: '王逸', content: '陟玉峦兮乘云，遂逍遥兮周游。', tags: ['拟骚', '守志'] },
  { id: 44, title: '九怀·昭世', author: '王褒', content: '览往昔兮俊彦，亦诎辱兮系累。', tags: ['拟骚', '抒怀'] },
  { id: 45, title: '九叹·愍命', author: '刘向', content: '昔皇考之嘉志兮，喜登能而显贤。', tags: ['拟骚', '抒怀'] },
  { id: 46, title: '九思·疾世', author: '王逸', content: '周徘徊兮汉渚，求水神兮灵女。', tags: ['拟骚', '疾世'] },
  { id: 47, title: '九怀·桐柏', author: '王褒', content: '天门兮崇高，乘气兮天街。', tags: ['拟骚', '抒怀'] },
  { id: 48, title: '九叹·思古', author: '刘向', content: '悲余心之悁悁兮，哀故都之颓荒。', tags: ['拟骚', '思古'] },
  { id: 49, title: '九思·遭厄', author: '王逸', content: '悼屈子兮遭厄，沉湘水兮不还。', tags: ['拟骚', '悼屈'] },
  { id: 50, title: '九怀·蓄英', author: '王褒', content: '览杳杳兮世惟，余惆怅兮何归！', tags: ['拟骚', '抒怀'] }
]

// 汉魏诗 11-50
const hanweishiNew = [
  { id: 11, title: '长歌行', author: '佚名', dynasty: '汉', content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。', tags: ['乐府', '励志'] },
  { id: 12, title: '迢迢牵牛星', author: '佚名', dynasty: '汉', content: '迢迢牵牛星，皎皎河汉女。纤纤擢素手，札札弄机杼。', tags: ['古诗十九首', '思妇'] },
  { id: 13, title: '明月何皎皎', author: '佚名', dynasty: '汉', content: '明月何皎皎，照我罗床帏。忧愁不能寐，揽衣起徘徊。', tags: ['古诗十九首', '思妇'] },
  { id: 14, title: '西北有高楼', author: '佚名', dynasty: '汉', content: '西北有高楼，上与浮云齐。交疏结绮窗，阿阁三重阶。', tags: ['古诗十九首', '抒怀'] },
  { id: 15, title: '涉江采芙蓉', author: '佚名', dynasty: '汉', content: '涉江采芙蓉，兰泽多芳草。采之欲遗谁？所思在远道。', tags: ['古诗十九首', '思妇'] },
  { id: 16, title: '苦寒行', author: '曹操', dynasty: '汉', content: '北上太行山，艰哉何巍巍！羊肠坂诘屈，车轮为之摧。', tags: ['乐府', '行军'] },
  { id: 17, title: '美女篇', author: '曹植', dynasty: '魏', content: '美女妖且闲，采桑歧路间。柔条纷冉冉，落叶何翩翩。', tags: ['乐府', '比兴'] },
  { id: 18, title: '杂诗·南国有佳人', author: '曹植', dynasty: '魏', content: '南国有佳人，容华若桃李。朝游江北岸，夕宿潇湘沚。', tags: ['五言诗', '抒怀'] },
  { id: 19, title: '送应氏', author: '曹植', dynasty: '魏', content: '步登北邙阪，遥望洛阳山。洛阳何寂寞，宫室尽烧焚。', tags: ['五言诗', '战乱'] },
  { id: 20, title: '赠白马王彪', author: '曹植', dynasty: '魏', content: '谒帝承明庐，逝将归旧疆。清晨发皇邑，日夕过首阳。', tags: ['五言诗', '赠别'] },
  { id: 21, title: '七哀诗', author: '王粲', dynasty: '汉', content: '西京乱无象，豺虎方遘患。复弃中国去，委身适荆蛮。', tags: ['五言诗', '战乱'] },
  { id: 22, title: '登楼赋', author: '王粲', dynasty: '汉', content: '登兹楼以四望兮，聊暇日以销忧。', tags: ['辞赋', '思乡'] },
  { id: 23, title: '咏史', author: '班固', dynasty: '汉', content: '三王德弥薄，惟后用肉刑。太仓令有罪，就递长安城。', tags: ['五言诗', '咏史'] },
  { id: 24, title: '秋胡行', author: '傅玄', dynasty: '西晋', content: '秋胡纳令室，三日宦他乡。皎皎洁妇姿，冷冷守空房。', tags: ['乐府', '闺怨'] },
  { id: 25, title: '古诗十九首·青青河畔草', author: '佚名', dynasty: '汉', content: '青青河畔草，郁郁园中柳。盈盈楼上女，皎皎当窗牖。', tags: ['古诗十九首', '思妇'] },
  { id: 26, title: '古诗十九首·青青陵上柏', author: '佚名', dynasty: '汉', content: '青青陵上柏，磊磊涧中石。人生天地间，忽如远行客。', tags: ['古诗十九首', '人生'] },
  { id: 27, title: '古诗十九首·今日良宴会', author: '佚名', dynasty: '汉', content: '今日良宴会，欢乐难具陈。弹筝奋逸响，新声妙入神。', tags: ['古诗十九首', '人生'] },
  { id: 28, title: '古诗十九首·明月皎夜光', author: '佚名', dynasty: '汉', content: '明月皎夜光，促织鸣东壁。玉衡指孟冬，众星何历历。', tags: ['古诗十九首', '怨友'] },
  { id: 29, title: '古诗十九首·冉冉孤生竹', author: '佚名', dynasty: '汉', content: '冉冉孤生竹，结根泰山阿。与君为新婚，菟丝附女萝。', tags: ['古诗十九首', '思妇'] },
  { id: 30, title: '古诗十九首·庭中有奇树', author: '佚名', dynasty: '汉', content: '庭中有奇树，绿叶发华滋。攀条折其荣，将以遗所思。', tags: ['古诗十九首', '相思'] },
  { id: 31, title: '古诗十九首·回车驾言迈', author: '佚名', dynasty: '汉', content: '回车驾言迈，悠悠涉长道。四顾何茫茫，东风摇百草。', tags: ['古诗十九首', '人生'] },
  { id: 32, title: '古诗十九首·东城高且长', author: '佚名', dynasty: '汉', content: '东城高且长，逶迤自相属。回风动地起，秋草萋已绿。', tags: ['古诗十九首', '抒怀'] },
  { id: 33, title: '古诗十九首·驱车上东门', author: '佚名', dynasty: '汉', content: '驱车上东门，遥望郭北墓。白杨何萧萧，松柏夹广路。', tags: ['古诗十九首', '人生'] },
  { id: 34, title: '古诗十九首·去者日以疏', author: '佚名', dynasty: '汉', content: '去者日以疏，来者日以亲。出郭门直视，但见丘与坟。', tags: ['古诗十九首', '怀乡'] },
  { id: 35, title: '古诗十九首·生年不满百', author: '佚名', dynasty: '汉', content: '生年不满百，常怀千岁忧。昼短苦夜长，何不秉烛游！', tags: ['古诗十九首', '人生'] },
  { id: 36, title: '古诗十九首·凛凛岁云暮', author: '佚名', dynasty: '汉', content: '凛凛岁云暮，蝼蛄夕鸣悲。凉风率已厉，游子寒无衣。', tags: ['古诗十九首', '思妇'] },
  { id: 37, title: '古诗十九首·孟冬寒气至', author: '佚名', dynasty: '汉', content: '孟冬寒气至，北风何惨栗。愁多知夜长，仰观众星列。', tags: ['古诗十九首', '思妇'] },
  { id: 38, title: '古诗十九首·客从远方来', author: '佚名', dynasty: '汉', content: '客从远方来，遗我一端绮。相去万余里，故人心尚尔。', tags: ['古诗十九首', '爱情'] },
  { id: 39, title: '燕歌行·别日何易会日难', author: '曹丕', dynasty: '魏', content: '别日何易会日难，山川悠远路漫漫。', tags: ['七言诗', '思妇'] },
  { id: 40, title: '杂诗·西北有浮云', author: '曹丕', dynasty: '魏', content: '西北有浮云，亭亭如车盖。惜哉时不遇，适与飘风会。', tags: ['五言诗', '游子'] },
  { id: 41, title: '咏怀诗·夜中不能寐', author: '阮籍', dynasty: '魏', content: '夜中不能寐，起坐弹鸣琴。薄帷鉴明月，清风吹我襟。', tags: ['咏怀', '忧思'] },
  { id: 42, title: '咏怀诗·嘉树下成蹊', author: '阮籍', dynasty: '魏', content: '嘉树下成蹊，东园桃与李。秋飞飞未央，胡然乃衰萎。', tags: ['咏怀', '感时'] },
  { id: 43, title: '赠秀才入军', author: '嵇康', dynasty: '魏', content: '良马既闲，丽服有晖。左揽繁弱，右接忘归。', tags: ['四言诗', '赠别'] },
  { id: 44, title: '幽愤诗', author: '嵇康', dynasty: '魏', content: '嗟余薄祜，少遭不造。哀茕靡识，越在襁褓。', tags: ['四言诗', '抒怀'] },
  { id: 45, title: '悼亡诗', author: '潘岳', dynasty: '西晋', content: '荏苒冬春谢，寒暑忽流易。之子归穷泉，重壤永幽隔。', tags: ['悼亡', '悼妻'] },
  { id: 46, title: '咏史·弱冠弄柔翰', author: '左思', dynasty: '西晋', content: '弱冠弄柔翰，卓荦观群书。著论准《过秦》，作赋拟《子虚》。', tags: ['咏史', '抒怀'] },
  { id: 47, title: '咏史·郁郁涧底松', author: '左思', dynasty: '西晋', content: '郁郁涧底松，离离山上苗。以彼径寸茎，荫此百尺条。', tags: ['咏史', '讽喻'] },
  { id: 48, title: '拟行行重行行', author: '陆机', dynasty: '西晋', content: '昭昭清汉晖，粲粲光天步。牵牛西北回，织女东南顾。', tags: ['拟古', '抒怀'] },
  { id: 49, title: '扶风歌', author: '刘琨', dynasty: '西晋', content: '朝发广莫门，莫宿丹水山。左手弯繁弱，右手挥龙渊。', tags: ['五言诗', '抒怀'] },
  { id: 50, title: '游仙诗', author: '郭璞', dynasty: '东晋', content: '京华游侠窟，山林隐遁栖。朱门何足荣，未若托蓬莱。', tags: ['游仙', '隐逸'] }
]

// 楚辞 17-50 的作者和朝代
const chuciAuthorInfo = {
  17: { author: '屈原', dynasty: '战国' },
  18: { author: '淮南小山', dynasty: '西汉' },
  19: { author: '东方朔', dynasty: '西汉' },
  20: { author: '刘向', dynasty: '西汉' },
  21: { author: '屈原', dynasty: '战国' },
  22: { author: '屈原', dynasty: '战国' },
  23: { author: '屈原', dynasty: '战国' },
  24: { author: '屈原', dynasty: '战国' },
  25: { author: '屈原', dynasty: '战国' },
  26: { author: '宋玉', dynasty: '战国' },
  27: { author: '宋玉', dynasty: '战国' },
  28: { author: '宋玉', dynasty: '战国' },
  29: { author: '宋玉', dynasty: '战国' },
  30: { author: '宋玉', dynasty: '战国' },
  31: { author: '宋玉', dynasty: '战国' },
  32: { author: '贾谊', dynasty: '西汉' },
  33: { author: '贾谊', dynasty: '西汉' },
  34: { author: '东方朔', dynasty: '西汉' },
  35: { author: '王褒', dynasty: '西汉' },
  36: { author: '王逸', dynasty: '东汉' },
  37: { author: '庄忌', dynasty: '西汉' },
  38: { author: '王褒', dynasty: '西汉' },
  39: { author: '刘向', dynasty: '西汉' },
  40: { author: '王逸', dynasty: '东汉' },
  41: { author: '王褒', dynasty: '西汉' },
  42: { author: '刘向', dynasty: '西汉' },
  43: { author: '王逸', dynasty: '东汉' },
  44: { author: '王褒', dynasty: '西汉' },
  45: { author: '刘向', dynasty: '西汉' },
  46: { author: '王逸', dynasty: '东汉' },
  47: { author: '王褒', dynasty: '西汉' },
  48: { author: '刘向', dynasty: '西汉' },
  49: { author: '王逸', dynasty: '东汉' },
  50: { author: '王褒', dynasty: '西汉' }
}

function buildShijingEntry(p) {
  return `  {
    id: 'shijing/${p.id}',
    title: '${p.title}',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '${p.content}',
    tags: ${JSON.stringify(p.tags)}
  },`
}

function buildChuciEntry(p) {
  const info = chuciAuthorInfo[p.id]
  return `  {
    id: 'chuci/${p.id}',
    title: '${p.title}',
    author: '${info.author}',
    dynasty: '${info.dynasty}',
    category: 'chuci',
    categoryName: '楚辞',
    content: '${p.content}',
    tags: ${JSON.stringify(p.tags)}
  },`
}

function buildHanweishiEntry(p) {
  return `  {
    id: 'hanweishi/${p.id}',
    title: '${p.title}',
    author: '${p.author}',
    dynasty: '${p.dynasty}',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '${p.content}',
    tags: ${JSON.stringify(p.tags)}
  },`
}

// 读取文件
let content = fs.readFileSync(filePath, 'utf8')

// 1. 在 shijing/20 后面插入 shijing/21-50
const shijingInsert = '\n' + shijingNew.map(buildShijingEntry).join('\n')
const shijingAnchor = `    id: 'shijing/20',`
const shijingRegex = new RegExp(`(\\{\\s*id: 'shijing/20',[\\s\\S]*?tags: \\[[^\\]]*\\]\\s*\\},)`)
content = content.replace(shijingRegex, `$1${shijingInsert}`)

// 2. 在 chuci/16 后面插入 chuci/17-50
const chuciInsert = '\n' + chuciNew.map(buildChuciEntry).join('\n')
const chuciRegex = new RegExp(`(\\{\\s*id: 'chuci/16',[\\s\\S]*?tags: \\[[^\\]]*\\]\\s*\\},)`)
content = content.replace(chuciRegex, `$1${chuciInsert}`)

// 3. 在 hanweishi/10 后面插入 hanweishi/11-50
const hanweishiInsert = '\n' + hanweishiNew.map(buildHanweishiEntry).join('\n')
const hanweishiRegex = new RegExp(`(\\{\\s*id: 'hanweishi/10',[\\s\\S]*?tags: \\[[^\\]]*\\]\\s*\\},)`)
content = content.replace(hanweishiRegex, `$1${hanweishiInsert}`)

fs.writeFileSync(filePath, content, 'utf8')

// 统计
console.log(`[完成] 已更新 PoetryLibrary.vue`)
console.log(`  - 诗经新增 ${shijingNew.length} 条（21-50）`)
console.log(`  - 楚辞新增 ${chuciNew.length} 条（17-50）`)
console.log(`  - 汉魏诗新增 ${hanweishiNew.length} 条（11-50）`)
console.log(`  - 共新增 ${shijingNew.length + chuciNew.length + hanweishiNew.length} 条诗词元数据`)
