<script setup>
import { ref, computed } from 'vue'

const dynasties = [
  { id: 'all', name: '全部' },
  { id: 'xihan', name: '西汉' },
  { id: 'handai', name: '汉代' },
  { id: 'weidai', name: '魏代' },
  { id: 'sanguo', name: '三国' },
  { id: 'donghan', name: '东汉' },
  { id: 'xijin', name: '西晋' },
  { id: 'jindai', name: '晋代' },
  { id: 'nanbeichao', name: '南北朝' },
  { id: 'nanchao', name: '南朝' },
  { id: 'wudai', name: '五代' },
  { id: 'yuandai', name: '元代' },
  { id: 'yuanmomingchu', name: '元末明初' },
  { id: 'beisong', name: '北宋' },
  { id: 'beiwei', name: '北魏' },
  { id: 'nansong', name: '南宋' },
  { id: 'tangdai', name: '唐代' },
  { id: 'songdai', name: '宋代' },
  { id: 'zhanguo', name: '战国' },
  { id: 'mingdai', name: '明代' },
  { id: 'chunqiu', name: '春秋' },
  { id: 'qingdai', name: '清代' },
  { id: 'buxiang', name: '不详' }
]

const sortModes = [
  { id: 'name', name: '按姓名' },
  { id: 'alpha', name: '按字母' }
]

const authors = [
  {
    id: 'baijuyi',
    name: '白居易',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '白',
    desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。',
    works: ['长恨歌', '长恨歌', '赋得古原草送别']
  },
  {
    id: 'baipu',
    name: '白朴',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '白',
    desc: '元代著名戏曲作家，元曲四大家之一。',
    works: ['沉醉东风·渔夫', '天净沙·秋', '天净沙·秋']
  },
  {
    id: 'bangu',
    name: '班固',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '班',
    desc: '班固，字孟坚，东汉著名的史学家、文学家。',
    works: ['汉书']
  },
  {
    id: 'caocao',
    name: '曹操',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '东汉末年杰出的政治家、军事家、文学家。',
    works: ['短歌行', '龟虽寿', '蒿里行']
  },
  {
    id: 'caoxueqin',
    name: '曹雪芹',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '曹',
    desc: '清代小说家，名霑，字梦阮，号雪芹，又号芹溪。',
    works: ['红楼梦']
  },
  {
    id: 'caozhi',
    name: '曹植',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名文学家，曹操之子，建安文学代表人物。',
    works: ['七步诗']
  },
  {
    id: 'chenyuyi',
    name: '陈与义',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陈',
    desc: '宋代诗人，字去非，号简斋。',
    works: ['临江仙·夜登小阁忆洛中旧游']
  },
  {
    id: 'chenziang',
    name: '陈子昂',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '陈',
    desc: '唐代文学家，字伯玉，初唐诗文革新人物之一。',
    works: ['登幽州台歌']
  },
  {
    id: 'churenhuo',
    name: '褚人获',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '褚',
    desc: '清代小说家，字稼轩，号石农。他博学多才，著...',
    works: ['隋唐演义']
  },
  {
    id: 'cuihao',
    name: '崔颢',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，汴州人。',
    works: ['黄鹤楼']
  },
  {
    id: 'cuihu',
    name: '崔护',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，字殷功。',
    works: ['题都城南庄']
  },
  {
    id: 'dufu',
    name: '杜甫',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代伟大的现实主义诗人，字子美，自号少陵野老。',
    works: ['兵车行', '春望', '春望']
  },
  {
    id: 'dumu',
    name: '杜牧',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代诗人，字牧之，号樊川居士。',
    works: ['泊秦淮', '赤壁', '江南春']
  },
  {
    id: 'fanzhongyan',
    name: '范仲淹',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '北宋杰出的思想家、政治家、文学家。',
    works: ['岳阳楼记']
  },
  {
    id: 'fengmenglong',
    name: '冯梦龙',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '冯',
    desc: '明代文学家、戏曲家，字犹龙，号墨憨斋主人。',
    works: ['东周列国志']
  },
  {
    id: 'gaoshi',
    name: '高适',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '高',
    desc: '唐代边塞诗人，字达夫，一字仲武。',
    works: ['别董大', '除夜作']
  },
  {
    id: 'gongzizhen',
    name: '龚自珍',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '龚',
    desc: '清代思想家、诗人、文学家。',
    works: ['己亥杂诗']
  },
  {
    id: 'guanhanqing',
    name: '关汉卿',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '关',
    desc: '元代杂剧奠基人，元曲四大家之首。',
    works: ['窦娥冤']
  },
  {
    id: 'hanyi',
    name: '韩翃',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代诗人，字君平，大历十才子之一。',
    works: ['寒食']
  },
  {
    id: 'hanyu',
    name: '韩愈',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代杰出的文学家、思想家、哲学家。',
    works: ['马说', '马说', '师说']
  },
  {
    id: 'banjieyu',
    name: '班婕妤',
    dynasty: '汉代',
    dynastyId: 'handai',
    avatar: '班',
    desc: '西汉女文学家，汉成帝妃子，封为婕妤。',
    works: ['怨歌行']
  },
  {
    id: 'baozhao',
    name: '鲍照',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '鲍',
    desc: '南朝宋著名文学家，字明远，与谢灵运、颜延之并称"元嘉三大家"。',
    works: ['拟行路难', '代出自蓟北门行', '梅花落']
  },
  {
    id: 'caoxuequan',
    name: '曹学佺',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '曹',
    desc: '明代文学家、藏书家，字能始，号石仓。',
    works: ['秋日杂诗']
  },
  {
    id: 'fengyansi',
    name: '冯延巳',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '冯',
    desc: '五代南唐词人，字正中，其词语言清丽，意境深远。',
    works: ['鹊踏枝·谁道闲情抛掷久', '谒金门·风乍起', '采桑子·群芳过后西湖好']
  },
  {
    id: 'fuxuan',
    name: '傅玄',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '傅',
    desc: '西晋文学家、思想家，字休奕，擅长乐府诗。',
    works: ['短歌行', '豫章行']
  },
  {
    id: 'gaoqi',
    name: '高启',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '高',
    desc: '明初著名诗人，字季迪，号青丘子，"吴中四杰"之首。',
    works: ['登金陵雨花台望大江', '梅花九首', '寻胡隐君']
  },
  {
    id: 'hexun',
    name: '何逊',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '何',
    desc: '南朝梁诗人，字仲言，与阴铿齐名，并称"阴何"。',
    works: ['临行与故游夜别', '相送', '慈姥矶']
  },
  {
    id: 'huangjingren',
    name: '黄景仁',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '黄',
    desc: '清代诗人，字汉镛，号仲则，被誉为"清代李白"。',
    works: ['杂感', '绮怀十六首·其十五', '别老母']
  },
  {
    id: 'kongzhigui',
    name: '孔稚珪',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '孔',
    desc: '南朝齐文学家，字德璋，以《北山移文》最为著名。',
    works: ['北山移文', '游太平山']
  },
  {
    id: 'liuji',
    name: '刘基',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '刘',
    desc: '明代开国元勋，字伯温，元末明初杰出的政治家、文学家。',
    works: ['题太公钓渭图', '北风行', '卖柑者言']
  },
  {
    id: 'liyu',
    name: '李煜',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '李',
    desc: '南唐后主，字重光，五代时期最杰出的词人。',
    works: ['虞美人·春花秋月何时了', '浪淘沙令·帘外雨潺潺', '相见欢·无言独上西楼']
  },
  {
    id: 'nalanxingde',
    name: '纳兰性德',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '纳',
    desc: '清代著名词人，字容若，号楞伽山人，被誉为"清代第一词人"。',
    works: ['浣溪沙·谁念西风独自凉', '木兰花令·拟古决绝词柬友', '长相思·山一程']
  },
  {
    id: 'qijiguang',
    name: '戚继光',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '戚',
    desc: '明代抗倭名将、军事家，字元敬，号南塘。',
    works: ['马上作', '韬钤深处']
  },
  {
    id: 'shenyue',
    name: '沈约',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '沈',
    desc: '南朝梁著名文学家、史学家，字休文，创"四声八病"之说。',
    works: ['别范安成', '伤谢朓', '咏芙蓉']
  },
  {
    id: 'wangcan',
    name: '王粲',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '王',
    desc: '东汉末年文学家，字仲宣，"建安七子"之一。',
    works: ['七哀诗', '登楼赋']
  },
  {
    id: 'wangji',
    name: '王籍',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝梁诗人，字文海，以《入若耶溪》最为著名。',
    works: ['入若耶溪']
  },
  {
    id: 'wangrong',
    name: '王融',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝齐文学家，字元长，"竟陵八友"之一。',
    works: ['临高台', '巫山高', '古意咏史']
  },
  {
    id: 'wangsengru',
    name: '王僧孺',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '王',
    desc: '南朝梁文学家，其诗风格艳丽，多写闺情和咏物。',
    works: ['冬日晚郡事隙']
  },
  {
    id: 'wangshizhen',
    name: '王士禛',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '王',
    desc: '清代著名诗人，号渔洋山人，"神韵说"的倡导者。',
    works: ['秋柳四首·其一', '真州绝句', '题秋江独钓图']
  },
  {
    id: 'weizhuang',
    name: '韦庄',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '韦',
    desc: '晚唐至五代时期著名诗人、词人，"花间派"代表词人之一。',
    works: ['菩萨蛮·人人尽说江南好', '思帝乡·春日游', '女冠子·四月十七']
  },
  {
    id: 'wendingjun',
    name: '温庭筠',
    dynasty: '五代',
    dynastyId: 'wudai',
    avatar: '温',
    desc: '唐代诗人、词人，字飞卿，"花间派"词派的鼻祖。',
    works: ['菩萨蛮·小山重叠金明灭', '更漏子·玉炉香', '梦江南·梳洗罢']
  },
  {
    id: 'wujun',
    name: '吴均',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '吴',
    desc: '南朝梁文学家，字叔庠，其诗风格清新挺拔，时称"吴均体"。',
    works: ['咏雪', '赠王桂阳', '与朱元思书']
  },
  {
    id: 'wumaiyuan',
    name: '吴迈远',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '吴',
    desc: '南朝宋诗人，其诗多为乐府诗，是南朝乐府诗的重要作者。',
    works: ['春怨', '长相思']
  },
  {
    id: 'xiawanchun',
    name: '夏完淳',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '夏',
    desc: '南明抗清英雄、诗人，字存古，少年英才，英勇就义时年仅十七岁。',
    works: ['别云间', '即事', '大哀赋']
  },
  {
    id: 'xielingyun',
    name: '谢灵运',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '谢',
    desc: '东晋末年至南朝宋初年的著名诗人，被誉为"山水诗派"的开创者。',
    works: ['登池上楼', '石壁精舍还湖中作', '七里濑']
  },
  {
    id: 'xietiao',
    name: '谢朓',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '谢',
    desc: '南朝齐著名诗人，字玄晖，人称"小谢"。',
    works: ['晚登三山还望京邑', '玉阶怨', '游东田']
  },
  {
    id: 'yangshen',
    name: '杨慎',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '杨',
    desc: '明代著名文学家，字用修，号升庵，"明代三才子"之首。',
    works: ['临江仙·滚滚长江东逝水', '西江月·道德三皇五帝', '三岔驿']
  },
  {
    id: 'yangshiqi',
    name: '杨士奇',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '杨',
    desc: '明代名臣、文学家，"三杨"之一，明初"台阁体"诗文代表人物。',
    works: ['寄答张孟威', '秦淮海祠']
  },
  {
    id: 'yanyanzhi',
    name: '颜延之',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '颜',
    desc: '南朝宋文学家，字延年，与谢灵运齐名，并称"颜谢"。',
    works: ['五君咏·阮步兵', '秋胡行', '望织女']
  },
  {
    id: 'yiming',
    name: '佚名',
    dynasty: '不详',
    dynastyId: 'buxiang',
    avatar: '佚',
    desc: '古代佚名诗人，其作品多来自民间，反映了当时的社会生活。',
    works: ['孔雀东南飞', '木兰辞', '陌上桑']
  },
  {
    id: 'yuanmei',
    name: '袁枚',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '袁',
    desc: '清代著名诗人、文学家，号随园老人，"性灵说"的倡导者。',
    works: ['苔', '马嵬', '寒夜']
  },
  {
    id: 'yujianwu',
    name: '庾肩吾',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '庾',
    desc: '南朝梁文学家，字子慎，"宫体诗"的重要作家之一。',
    works: ['舟中望月']
  },
  {
    id: 'yuxin',
    name: '庾信',
    dynasty: '南朝',
    dynastyId: 'nanchao',
    avatar: '庾',
    desc: '南北朝时期著名文学家，字子山，与徐陵齐名，并称"徐庾"。',
    works: ['拟咏怀', '重别周尚书', '寄王琳']
  },
  {
    id: 'zhengxie',
    name: '郑燮',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '郑',
    desc: '清代书画家、文学家，号板桥，"扬州八怪"之一。',
    works: ['竹石', '题画竹', '潍县署中画竹呈年伯包大中丞括']
  },
  {
    id: 'zhangpu',
    name: '张溥',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '张',
    desc: '明末文学家，字天如，号西铭，"复社"领袖。',
    works: ['五人墓碑记', '五人墓']
  },
  {
    id: 'zhaoyi',
    name: '赵翼',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '赵',
    desc: '清代史学家、诗人，字云崧，号瓯北，与袁枚并称"乾隆三大家"。',
    works: ['论诗五首·其二']
  },
  {
    id: 'zhuyizun',
    name: '朱彝尊',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '朱',
    desc: '清代著名词人、学者，号竹垞，"浙西词派"的开创者。',
    works: ['桂殿秋·思往事', '解佩令·自题词集', '卖花声·雨花台']
  },
  {
    id: 'songyu',
    name: '宋玉',
    dynasty: '战国',
    dynastyId: 'zhanguo',
    avatar: '宋',
    desc: '战国末期楚国辞赋家，相传为屈原弟子。与屈原并称"屈宋"，其作品铺陈华丽，想象丰富，对汉赋发展产生深远影响。',
    works: ['九辩', '风赋', '高唐赋', '神女赋', '登徒子好色赋']
  },
  {
    id: 'jiayi',
    name: '贾谊',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '贾',
    desc: '西汉杰出的政论家、文学家，世称贾生、贾太傅。年少才高，被汉文帝赏识，因遭权臣排挤贬为长沙王太傅。',
    works: ['吊屈原赋', '鵩鸟赋', '过秦论', '论积贮疏']
  },
  {
    id: 'dongfangshuo',
    name: '东方朔',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '东',
    desc: '西汉文学家、辞赋家，字曼倩。汉武帝时为太中大夫，以诙谐滑稽著称，善辞赋。',
    works: ['七谏', '答客难', '非有先生论']
  },
  {
    id: 'wangbao',
    name: '王褒',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '王',
    desc: '西汉辞赋家，字子渊。汉宣帝时待诏金马门，擢为谏议大夫。其辞赋承袭楚辞传统，文辞华美。',
    works: ['九怀', '洞箫赋', '甘泉赋']
  },
  {
    id: 'liuxiang',
    name: '刘向',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '刘',
    desc: '西汉经学家、目录学家、文学家，字子政。领校群书，编成《别录》，又编《楚辞》集，对保存先秦文献贡献巨大。',
    works: ['九叹', '列女传', '新序', '说苑']
  },
  {
    id: 'wangyi',
    name: '王逸',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '王',
    desc: '东汉文学家，字叔师。所作《楚辞章句》是现存最早的《楚辞》注本，对楚辞研究贡献巨大。',
    works: ['九思', '楚辞章句']
  },
  {
    id: 'zhuangji',
    name: '庄忌',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '庄',
    desc: '西汉辞赋家，一说名严忌。汉景帝时为梁孝王门客。代表作《哀时命》抒发怀才不遇之情。',
    works: ['哀时命']
  },
  {
    id: 'huainanxiaoshan',
    name: '淮南小山',
    dynasty: '西汉',
    dynastyId: 'xihan',
    avatar: '淮',
    desc: '西汉淮南王刘安门下文客的合称。其作品承袭楚辞传统，代表作《招隐士》被收入《楚辞》集。',
    works: ['招隐士']
  },
  {
    id: 'caopi',
    name: '曹丕',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名政治家、文学家，字子桓，曹操次子，三国魏开国皇帝，史称魏文帝。与曹操、曹植合称"三曹"。',
    works: ['燕歌行', '杂诗', '典论·论文']
  },
  {
    id: 'ruanji',
    name: '阮籍',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '阮',
    desc: '三国魏著名诗人、思想家，字嗣宗，"竹林七贤"之一。其《咏怀诗》八十二首对五言抒情诗发展影响深远。',
    works: ['咏怀诗·夜中不能寐', '咏怀诗·嘉树下成蹊', '大人先生传']
  },
  {
    id: 'jikang',
    name: '嵇康',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '嵇',
    desc: '三国魏著名思想家、文学家、音乐家，字叔夜，"竹林七贤"之一。其诗以四言见长，散文笔力犀利，风格清峻。',
    works: ['赠秀才入军', '幽愤诗', '与山巨源绝交书', '声无哀乐论']
  },
  {
    id: 'panyue',
    name: '潘岳',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '潘',
    desc: '西晋著名文学家，字安仁，世称潘安。与陆机齐名，并称"潘陆"。《悼亡诗》三首使"悼亡"成为专指悼念亡妻的诗题。',
    works: ['悼亡诗', '秋兴赋', '闲居赋']
  },
  {
    id: 'zuosi',
    name: '左思',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '左',
    desc: '西晋著名文学家，字太冲。其《咏史》诗八首开创咏史诗新风气。曾构思十年写成《三都赋》，洛阳为之纸贵。',
    works: ['咏史·弱冠弄柔翰', '咏史·郁郁涧底松', '三都赋', '娇女诗']
  },
  {
    id: 'luji',
    name: '陆机',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '陆',
    desc: '西晋著名文学家、文学理论家，字士衡。其《文赋》是中国文学理论史上的重要著作，首次系统论述文学创作过程。',
    works: ['拟行行重行行', '文赋', '赴洛道中作']
  },
  {
    id: 'liukun',
    name: '刘琨',
    dynasty: '西晋',
    dynastyId: 'xijin',
    avatar: '刘',
    desc: '西晋将领、诗人，字越石。少时与祖逖闻鸡起舞。永嘉之乱后长期在北方坚持抗击石勒。其诗慷慨悲壮，抒发爱国情怀。',
    works: ['扶风歌', '重赠卢谌', '答卢谌诗']
  },
  {
    id: 'guopu',
    name: '郭璞',
    dynasty: '东晋',
    dynastyId: 'jindai',
    avatar: '郭',
    desc: '东晋著名文学家、训诂学家，字景纯。其《游仙诗》十四首借游仙以咏怀，辞采华丽，寄托深远。',
    works: ['游仙诗', '江赋', '尔雅注']
  },
  {
    id: 'quyuan',
    name: '屈原',
    dynasty: '战国',
    dynastyId: 'zhanguo',
    avatar: '屈',
    desc: '战国末期楚国诗人、政治家，名平，字原。中国浪漫主义文学的奠基人，"楚辞"的创立者和代表作家。中国文学史上第一位伟大的爱国诗人。',
    works: ['离骚', '九歌', '天问', '九章', '远游', '卜居', '渔父']
  },
  {
    id: 'chenlin',
    name: '陈琳',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '陈',
    desc: '东汉末年著名文学家，字孔璋，"建安七子"之一。擅长章表书记，诗风质朴刚健。',
    works: ['饮马长城窟行', '为袁绍檄豫州文', '游览诗']
  },
  {
    id: 'libai',
    name: '李白',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '李',
    desc: '唐代伟大的浪漫主义诗人，字太白，号青莲居士，被后人誉为"诗仙"。其诗风雄奇豪放，想象丰富，意境奇妙，语言流转自然，与。',
    works: ['静夜思', '将进酒', '望庐山瀑布', '早发白帝城', '行路难', '月下独酌']
  },
  {
    id: 'wangwei',
    name: '王维',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '王',
    desc: '唐代著名诗人、画家，字摩诘，号摩诘居士。精通诗书画乐，有"诗佛"之称。其山水田园诗与孟浩然并称"王孟"，对后世山水诗。',
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
    desc: '唐代著名文学家、哲学家，字子厚，河东人，世称"柳河东"。与韩愈并称"韩柳"，为唐宋八大家之一。其诗文风格清峻，寓言散。',
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
    desc: '唐代著名边塞诗人，与高适并称"高岑"。其诗气势磅礴，色彩瑰丽，善写边塞风光和军旅生活。代表作有《白雪歌送武判官归京》。',
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
    desc: '北宋著名文学家，字子瞻，号东坡居士。其词开创豪放一派，与辛弃疾并称"苏辛"，为唐宋八大家之一。诗、词、文、书、画皆有。',
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
    desc: '南宋著名词人，字幼安，号稼轩。其词风格豪放，气势磅礴，与苏轼并称"苏辛"，是豪放派代表词人。多写爱国情怀和壮志难酬的。',
    works: ['破阵子·为陈同甫赋壮词以寄之', '永遇乐·京口北固亭怀古', '水龙吟·登建康赏心亭', '青玉案·元夕']
  },
  {
    id: 'liuyong',
    name: '柳永',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '柳',
    desc: '北宋著名词人，原名三变，字耆卿。其词多写都市繁华和男女之情，擅长慢词，语言通俗，流传甚广。代表作有《雨霖铃》《八声甘。',
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
    desc: '北宋著名词人，字美成，号清真居士。其词格律谨严，语言精丽，为婉约派集大成者，对南宋词影响深远。代表作有《兰陵王·柳》。',
    works: ['兰陵王·柳', '苏幕遮·燎沉香', '六丑·蔷薇谢后作']
  },
  {
    id: 'wanganshi',
    name: '王安石',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '王',
    desc: '北宋著名政治家、文学家，字介甫，号半山。唐宋八大家之一。其诗文风格遒劲，多写政治抱负和咏史怀古。代表作有《桂枝香·金。',
    works: ['桂枝香·金陵怀古', '泊船瓜洲', '登飞来峰']
  },
  {
    id: 'fanchengda',
    name: '范成大',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '南宋著名诗人，字致能，号石湖居士。与杨万里、陆游、尤袤合称"中兴四大诗人"。其诗多写田园生活和民生疾苦。代表作有《四。',
    works: ['四时田园杂兴', '鹊桥仙·七夕', '州桥']
  },
  {
    id: 'luyou',
    name: '陆游',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陆',
    desc: '南宋著名爱国诗人，字务观，号放翁。其诗词多写抗金救国和壮志难酬之情，风格雄浑悲壮。与尤袤、杨万里、范成大合称"中兴四。',
    works: ['钗头凤·红酥手', '诉衷情·当年万里觅封侯', '示儿', '游山西村']
  },
  {
    id: 'yanshu',
    name: '晏殊',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '晏',
    desc: '北宋著名词人，字同叔。其词风格闲雅婉丽，多写富贵生活和离愁别绪。与欧阳修并称"晏欧"。代表作有《浣溪沙·一曲新词酒一。',
    works: ['浣溪沙·一曲新词酒一杯', '破阵子·春景', '蝶恋花·槛菊愁烟兰泣露']
  },
  {
    id: 'zhangxian',
    name: '张先',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '张',
    desc: '北宋著名词人，字子野。其词多写男女之情和闲适生活，语言清丽。因词中多用"影"字，被称为"张三影"。代表作有《天仙子·。',
    works: ['天仙子·水调数声持酒听', '青门引·春思', '剪牡丹·舟中闻双琵琶']
  },
  {
    id: 'mazhiyuan',
    name: '马致远',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '马',
    desc: '元代著名戏曲家、散曲家，号东篱，大都（今北京）人。"元曲四大家"之一。其散曲风格豪放洒脱，意境深远，被誉为"曲状元"。',
    works: ['天净沙·秋思', '拨不断·叹寒儒', '寿阳曲·远浦帆归', '落梅风·人初静']
  },
  {
    id: 'zhangkejiu',
    name: '张可久',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '张',
    desc: '元代著名散曲家，字小山，庆元（今浙江宁波）人。其曲多写隐逸生活和山水之趣，风格清丽典雅，是元代散曲大家。代表作有《人。',
    works: ['人月圆·山中书事', '卖花声·怀古', '清江引·秋怀', '殿前欢·离思']
  },
  {
    id: 'xuzaisi',
    name: '徐再思',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '徐',
    desc: '元代著名散曲家，字德可，号甜斋，嘉兴人。其曲多写闺情和隐逸生活，风格清丽婉约，与贯云石并称"酸甜乐府"。代表作有《折。',
    works: ['折桂令·春情', '水仙子·夜雨', '普天乐·西山夕照']
  },
  {
    id: 'zhangyanghao',
    name: '张养浩',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '张',
    desc: '元代著名散曲家，字希孟，号云庄。其散曲多写隐逸生活，风格清新自然，也有关心民生疾苦之作。代表作有《山坡羊·潼关怀古》。',
    works: ['山坡羊·潼关怀古', '山坡羊·骊山怀古', '山坡羊·未央怀古', '殿前欢·对菊自叹']
  },
  {
    id: 'zhoudqing',
    name: '周德清',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '周',
    desc: '元代著名散曲家、音韵学家，字挺斋，高安人。其曲多写山水景物，风格清丽明快。著有《中原音韵》，为北曲音韵的权威著作。代。',
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
    desc: '元代著名散曲家、文学家，字处道，号疏斋，涿郡人。其曲多写山水景物，风格清丽典雅。代表作有《沉醉东风·秋景》《殿前欢·。',
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
    desc: '元代著名散曲家，字梦符，号笙鹤翁，太原人。其曲多写山水和隐逸，风格清丽典雅。与张可久齐名，并称"乔张"。代表作有《水。',
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
    desc: '南宋末年词人，字胜欲，号竹山。宋亡后隐居不仕，其词多写故国之思和身世之感，风格悲凉清俊。',
    works: ['虞美人·听雨', '一剪梅·舟过吴江', '贺新郎·兵后寓吴']
  },
  {
    id: 'lizhiyi',
    name: '李之仪',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '李',
    desc: '北宋词人，字端叔，号姑溪居士。其词风格清丽婉约，多写离情别绪，语言质朴自然。',
    works: ['卜算子·我住长江头', '谢池春·残寒销尽', '临江仙·登凌歊台']
  }
]

const activeDynasty = ref('all')
const activeSort = ref('name')
const currentPage = ref(1)
const pageSize = 16

const filteredAuthors = computed(() => {
  let result = [...authors]
  
  if (activeDynasty.value !== 'all') {
    result = result.filter(a => a.dynastyId === activeDynasty.value)
  }
  
  if (activeSort.value === 'alpha') {
    result.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
  }
  
  return result
})

const totalPages = computed(() => Math.ceil(filteredAuthors.value.length / pageSize))

const paginatedAuthors = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredAuthors.value.slice(start, start + pageSize)
})

function goPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function filterDynasty(id) {
  activeDynasty.value = id
  currentPage.value = 1
}
</script>

<template>
  <div class="authors-page">
    <div class="authors-header">
      <h1 class="page-title">作者</h1>
      <p class="page-subtitle">领略古典文学大家的创作风采</p>
    </div>
    
    <div class="filter-bar">
      <div class="filter-row">
        <span class="filter-label">朝代筛选：</span>
        <div class="filter-options">
          <button
            v-for="d in dynasties"
            :key="d.id"
            class="filter-btn"
            :class="{ active: activeDynasty === d.id }"
            @click="filterDynasty(d.id)"
          >
            {{ d.name }}
          </button>
        </div>
      </div>
      <div class="filter-row">
        <span class="filter-label">排序：</span>
        <div class="filter-options">
          <button
            v-for="s in sortModes"
            :key="s.id"
            class="filter-btn"
            :class="{ active: activeSort === s.id }"
            @click="activeSort = s.id"
          >
            {{ s.name }}
          </button>
        </div>
      </div>
    </div>
    
    <div class="authors-grid">
      <a
        v-for="author in paginatedAuthors"
        :key="author.id"
        :href="`/authors/${author.id}`"
        class="author-card"
      >
        <div class="author-avatar">{{ author.avatar }}</div>
        <div class="author-info">
          <h3 class="author-name">{{ author.name }}</h3>
          <span class="author-dynasty">{{ author.dynasty }}</span>
          <p class="author-desc">{{ author.desc }}</p>
          <div class="author-works">
            <span v-for="work in author.works" :key="work" class="work-tag">{{ work }}</span>
          </div>
        </div>
      </a>
    </div>
    
    <div class="pagination" v-if="totalPages > 1">
      <button class="page-btn" :disabled="currentPage === 1" @click="goPage(currentPage - 1)">上一页</button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button class="page-btn" :disabled="currentPage === totalPages" @click="goPage(currentPage + 1)">下一页</button>
    </div>
  </div>
</template>

<style scoped>
.authors-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
}

.authors-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.page-subtitle {
  font-size: 15px;
  color: var(--vp-c-text-3);
  margin: 0;
}

.filter-bar {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 32px;
}

.filter-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.filter-row:last-child {
  margin-bottom: 0;
}

.filter-label {
  font-size: 13px;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  padding-top: 6px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  padding: 5px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.filter-btn.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.authors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.author-card {
  display: flex;
  gap: 14px;
  padding: 20px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.author-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .author-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--vp-c-brand-3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 0;
}

.dark .author-avatar {
  color: #1a1a1a;
}

.author-info {
  flex: 1;
  min-width: 0;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
}

.author-dynasty {
  font-size: 12px;
  color: var(--vp-c-text-3);
  display: block;
  margin-bottom: 8px;
}

.author-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.author-works {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.work-tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--vp-c-divider);
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px 0;
}

.page-btn {
  padding: 8px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: var(--vp-c-text-3);
}

@media (max-width: 960px) {
  .authors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .authors-page {
    padding: 24px 16px;
  }
}

@media (max-width: 640px) {
  .authors-page {
    padding: 16px 12px;
  }

  .authors-grid {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    padding: 16px;
  }

  .filter-row {
    flex-direction: column;
    gap: 8px;
  }

  .filter-label {
    padding-top: 0;
  }
}
</style>
