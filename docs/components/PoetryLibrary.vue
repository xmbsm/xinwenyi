<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', name: '全部' },
  { id: 'tangshi', name: '唐诗' },
  { id: 'songci', name: '宋词' },
  { id: 'yuanqu', name: '元曲' },
  { id: 'shijing', name: '诗经' },
  { id: 'chuci', name: '楚辞' },
  { id: 'hanweishi', name: '汉魏诗' },
  { id: 'yuefu', name: '乐府诗' },
  { id: 'nanbeichao', name: '南北朝诗' },
  { id: 'wudai', name: '五代词' },
  { id: 'mingqingshi', name: '明清诗词' }
]

const poems = [
  {
    id: 'tangshi/1',
    title: '静夜思',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    tags: ['五言绝句', '思乡']
  },
  {
    id: 'tangshi/2',
    title: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    tags: ['五言绝句', '春景']
  },
  {
    id: 'tangshi/3',
    title: '登鹳雀楼',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
    tags: ['五言绝句', '励志']
  },
  {
    id: 'tangshi/4',
    title: '相思',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    tags: ['五言绝句', '爱情']
  },
  {
    id: 'tangshi/5',
    title: '江雪',
    author: '柳宗元',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
    tags: ['五言绝句', '冬景']
  },
  {
    id: 'tangshi/6',
    title: '春望',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。',
    tags: ['五言律诗', '爱国']
  },
  {
    id: 'tangshi/7',
    title: '望庐山瀑布',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
    tags: ['七言绝句', '山水']
  },
  {
    id: 'tangshi/8',
    title: '早发白帝城',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    tags: ['七言绝句', '行旅']
  },
  {
    id: 'tangshi/9',
    title: '枫桥夜泊',
    author: '张继',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    tags: ['七言绝句', '羁旅']
  },
  {
    id: 'tangshi/10',
    title: '出塞',
    author: '王昌龄',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/11',
    title: '凉州词',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/12',
    title: '送元二使安西',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'tangshi/13',
    title: '登幽州台歌',
    author: '陈子昂',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。',
    tags: ['五言古诗', '怀古']
  },
  {
    id: 'tangshi/14',
    title: '悯农',
    author: '李绅',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。',
    tags: ['五言绝句', '悯农']
  },
  {
    id: 'tangshi/15',
    title: '游子吟',
    author: '孟郊',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。',
    tags: ['五言古诗', '母爱']
  },
  {
    id: 'tangshi/16',
    title: '过故人庄',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。',
    tags: ['五言律诗', '田园']
  },
  {
    id: 'tangshi/17',
    title: '山居秋暝',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。',
    tags: ['五言律诗', '山水']
  },
  {
    id: 'tangshi/18',
    title: '使至塞上',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。',
    tags: ['五言律诗', '边塞']
  },
  {
    id: 'tangshi/19',
    title: '送杜少府之任蜀州',
    author: '王勃',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。',
    tags: ['五言律诗', '送别']
  },
  {
    id: 'tangshi/20',
    title: '黄鹤楼',
    author: '崔颢',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。晴川历历汉阳树，芳草萋萋鹦鹉洲。日暮乡关何处是？烟波江上使人愁。',
    tags: ['七言律诗', '怀古']
  },
  {
    id: 'tangshi/21',
    title: '别董大',
    author: '高适',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'tangshi/22',
    title: '绝句',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。',
    tags: ['七言绝句', '春景']
  },
  {
    id: 'tangshi/23',
    title: '望岳',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'tangshi/24',
    title: '登高',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。',
    tags: ['七言律诗', '秋景']
  },
  {
    id: 'tangshi/25',
    title: '琵琶行',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。',
    tags: ['七言古诗', '叙事']
  },
  {
    id: 'tangshi/26',
    title: '长恨歌',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识。',
    tags: ['七言古诗', '叙事']
  },
  {
    id: 'tangshi/27',
    title: '将进酒',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。',
    tags: ['乐府', '饮酒']
  },
  {
    id: 'tangshi/28',
    title: '行路难',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'tangshi/29',
    title: '月下独酌',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '花间一壶酒，独酌无相亲。举杯邀明月，对影成三人。',
    tags: ['五言古诗', '饮酒']
  },
  {
    id: 'tangshi/30',
    title: '夜雨寄北',
    author: '李商隐',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。',
    tags: ['七言绝句', '思念']
  },
  {
    id: 'tangshi/31',
    title: '无题',
    author: '李商隐',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。',
    tags: ['七言律诗', '爱情']
  },
  {
    id: 'tangshi/32',
    title: '锦瑟',
    author: '李商隐',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。',
    tags: ['七言律诗', '感怀']
  },
  {
    id: 'tangshi/33',
    title: '登鹳雀楼',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
    tags: ['五言绝句', '励志']
  },
  {
    id: 'tangshi/34',
    title: '相思',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    tags: ['五言绝句', '相思']
  },
  {
    id: 'tangshi/35',
    title: '江雪',
    author: '柳宗元',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
    tags: ['五言绝句', '冬景']
  },
  {
    id: 'tangshi/36',
    title: '乌衣巷',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。',
    tags: ['七言绝句', '怀古']
  },
  {
    id: 'tangshi/37',
    title: '竹枝词',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '杨柳青青江水平，闻郎江上踏歌声。东边日出西边雨，道是无晴却有晴。',
    tags: ['七言绝句', '民歌']
  },
  {
    id: 'tangshi/38',
    title: '枫桥夜泊',
    author: '张继',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    tags: ['七言绝句', '羁旅']
  },
  {
    id: 'tangshi/39',
    title: '早发白帝城',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    tags: ['七言绝句', '行旅']
  },
  {
    id: 'tangshi/40',
    title: '望庐山瀑布',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
    tags: ['七言绝句', '山水']
  },
  {
    id: 'tangshi/41',
    title: '逢入京使',
    author: '岑参',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '故园东望路漫漫，双袖龙钟泪不干。马上相逢无纸笔，凭君传语报平安。',
    tags: ['七言绝句', '思乡']
  },
  {
    id: 'tangshi/42',
    title: '夜上受降城闻笛',
    author: '李益',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '回乐烽前沙似雪，受降城外月如霜。不知何处吹芦管，一夜征人尽望乡。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/43',
    title: '寒食',
    author: '韩翃',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '春城无处不飞花，寒食东风御柳斜。日暮汉宫传蜡烛，轻烟散入五侯家。',
    tags: ['七言绝句', '节令']
  },
  {
    id: 'tangshi/44',
    title: '滁州西涧',
    author: '韦应物',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。',
    tags: ['七言绝句', '山水']
  },
  {
    id: 'tangshi/45',
    title: '赋得古原草送别',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。',
    tags: ['五言律诗', '咏物']
  },
  {
    id: 'tangshi/46',
    title: '池上',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。',
    tags: ['五言绝句', '童趣']
  },
  {
    id: 'tangshi/47',
    title: '忆江南',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？',
    tags: ['词', '江南']
  },
  {
    id: 'tangshi/48',
    title: '钱塘湖春行',
    author: '白居易',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '孤山寺北贾亭西，水面初平云脚低。几处早莺争暖树，谁家新燕啄春泥。',
    tags: ['七言律诗', '春景']
  },
  {
    id: 'tangshi/49',
    title: '山行',
    author: '杜牧',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。',
    tags: ['七言绝句', '秋景']
  },
  {
    id: 'tangshi/50',
    title: '清明',
    author: '杜牧',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。',
    tags: ['七言绝句', '清明']
  },
  {
    id: 'tangshi/51',
    title: '登鹳雀楼',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
    tags: ['五言绝句', '写景']
  },
  {
    id: 'tangshi/52',
    title: '凉州词',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/53',
    title: '出塞',
    author: '王昌龄',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/54',
    title: '芙蓉楼送辛渐',
    author: '王昌龄',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'tangshi/55',
    title: '鹿柴',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '空山不见人，但闻人语响。返景入深林，复照青苔上。',
    tags: ['五言绝句', '山水']
  },
  {
    id: 'tangshi/56',
    title: '竹里馆',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。',
    tags: ['五言绝句', '隐逸']
  },
  {
    id: 'tangshi/57',
    title: '送元二使安西',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'tangshi/58',
    title: '九月九日忆山东兄弟',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
    tags: ['七言绝句', '思乡']
  },
  {
    id: 'tangshi/59',
    title: '相思',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    tags: ['五言绝句', '相思']
  },
  {
    id: 'tangshi/60',
    title: '杂诗',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？',
    tags: ['五言绝句', '思乡']
  },
  {
    id: 'tangshi/61',
    title: '终南山',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '太乙近天都，连山接海隅。白云回望合，青霭入看无。',
    tags: ['五言律诗', '山水']
  },
  {
    id: 'tangshi/62',
    title: '过故人庄',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。',
    tags: ['五言律诗', '田园']
  },
  {
    id: 'tangshi/63',
    title: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    tags: ['五言绝句', '春景']
  },
  {
    id: 'tangshi/64',
    title: '宿建德江',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。',
    tags: ['五言绝句', '羁旅']
  },
  {
    id: 'tangshi/65',
    title: '岁暮归南山',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '北阙休上书，南山归敝庐。不才明主弃，多病故人疏。',
    tags: ['五言律诗', '抒怀']
  },
  {
    id: 'tangshi/66',
    title: '与诸子登岘山',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '人事有代谢，往来成古今。江山留胜迹，我辈复登临。',
    tags: ['五言律诗', '怀古']
  },
  {
    id: 'tangshi/67',
    title: '凉州词',
    author: '王翰',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/68',
    title: '别董大',
    author: '高适',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'tangshi/69',
    title: '塞上听吹笛',
    author: '高适',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '雪净胡天牧马还，月明羌笛戍楼间。借问梅花何处落，风吹一夜满关山。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/70',
    title: '白雪歌送武判官归京',
    author: '岑参',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。',
    tags: ['七言古诗', '送别']
  },
  {
    id: 'tangshi/71',
    title: '走马川行奉送封大夫出师西征',
    author: '岑参',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '君不见走马川行雪海边，平沙莽莽黄入天。轮台九月风夜吼，一川碎石大如斗。',
    tags: ['七言古诗', '边塞']
  },
  {
    id: 'tangshi/72',
    title: '石壕吏',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '暮投石壕村，有吏夜捉人。老翁逾墙走，老妇出门看。',
    tags: ['五言古诗', '叙事']
  },
  {
    id: 'tangshi/73',
    title: '新婚别',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '兔丝附蓬麻，引蔓故不长。嫁女与征夫，不如弃路旁。',
    tags: ['五言古诗', '战争']
  },
  {
    id: 'tangshi/74',
    title: '垂老别',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '四郊未宁静，垂老不得安。子孙阵亡尽，焉用身独完！',
    tags: ['五言古诗', '战争']
  },
  {
    id: 'tangshi/75',
    title: '蜀相',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '丞相祠堂何处寻？锦官城外柏森森。映阶碧草自春色，隔叶黄鹂空好音。',
    tags: ['七言律诗', '怀古']
  },
  {
    id: 'tangshi/76',
    title: '客至',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '舍南舍北皆春水，但见群鸥日日来。花径不曾缘客扫，蓬门今始为君开。',
    tags: ['七言律诗', '生活']
  },
  {
    id: 'tangshi/77',
    title: '春夜喜雨',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '好雨知时节，当春乃发生。随风潜入夜，润物细无声。',
    tags: ['五言律诗', '写景']
  },
  {
    id: 'tangshi/78',
    title: '登高',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。',
    tags: ['七言律诗', '抒怀']
  },
  {
    id: 'tangshi/79',
    title: '登岳阳楼',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '昔闻洞庭水，今上岳阳楼。吴楚东南坼，乾坤日夜浮。',
    tags: ['五言律诗', '登临']
  },
  {
    id: 'tangshi/80',
    title: '秋兴八首·其一',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '玉露凋伤枫树林，巫山巫峡气萧森。江间波浪兼天涌，塞上风云接地阴。',
    tags: ['七言律诗', '秋景']
  },
  {
    id: 'tangshi/81',
    title: '咏怀古迹·其三',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '群山万壑赴荆棘，生长明妃尚有村。一去紫台连朔漠，独留青冢向黄昏。',
    tags: ['七言律诗', '咏史']
  },
  {
    id: 'tangshi/82',
    title: '阁夜',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '岁暮阴阳催短景，天涯霜雪霁寒宵。五更鼓角声悲壮，三峡星河影动摇。',
    tags: ['七言律诗', '抒怀']
  },
  {
    id: 'tangshi/83',
    title: '江汉',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '江汉思归客，乾坤一腐儒。片云天共远，永夜月同孤。',
    tags: ['五言律诗', '抒怀']
  },
  {
    id: 'tangshi/84',
    title: '旅夜书怀',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '细草微风岸，危樯独夜舟。星垂平野阔，月涌大江流。',
    tags: ['五言律诗', '羁旅']
  },
  {
    id: 'tangshi/85',
    title: '望岳',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。',
    tags: ['五言古诗', '写景']
  },
  {
    id: 'tangshi/86',
    title: '赠花卿',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '锦城丝管日纷纷，半入江风半入云。此曲只应天上有，人间能得几回闻。',
    tags: ['七言绝句', '讽谕']
  },
  {
    id: 'tangshi/87',
    title: '绝句',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。',
    tags: ['七言绝句', '写景']
  },
  {
    id: 'tangshi/88',
    title: '枫桥夜泊',
    author: '张继',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    tags: ['七言绝句', '羁旅']
  },
  {
    id: 'tangshi/89',
    title: '滁州西涧',
    author: '韦应物',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。',
    tags: ['七言绝句', '山水']
  },
  {
    id: 'tangshi/90',
    title: '游子吟',
    author: '孟郊',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。',
    tags: ['五言古诗', '亲情']
  },
  {
    id: 'tangshi/91',
    title: '登科后',
    author: '孟郊',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '昔日龌龊不足夸，今朝放荡思无涯。春风得意马蹄疾，一日看尽长安花。',
    tags: ['七言绝句', '抒怀']
  },
  {
    id: 'tangshi/92',
    title: '题都城南庄',
    author: '崔护',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '去年今日此门中，人面桃花相映红。人面不知何处去，桃花依旧笑春风。',
    tags: ['七言绝句', '爱情']
  },
  {
    id: 'tangshi/93',
    title: '秋思',
    author: '张籍',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '洛阳城里见秋风，欲作家书意万重。复恐匆匆说不尽，行人临发又开封。',
    tags: ['七言绝句', '思乡']
  },
  {
    id: 'tangshi/94',
    title: '十五夜望月',
    author: '王建',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '中庭地白树栖鸦，冷露无声湿桂花。今夜月明人尽望，不知秋思落谁家。',
    tags: ['七言绝句', '中秋']
  },
  {
    id: 'tangshi/95',
    title: '石头城',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '山围故国周遭在，潮打空城寂寞回。淮水东边旧时月，夜深还过女墙来。',
    tags: ['七言绝句', '怀古']
  },
  {
    id: 'tangshi/96',
    title: '乌衣巷',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。',
    tags: ['七言绝句', '怀古']
  },
  {
    id: 'tangshi/97',
    title: '竹枝词',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '杨柳青青江水平，闻郎江上踏歌声。东边日出西边雨，道是无晴却有晴。',
    tags: ['七言绝句', '爱情']
  },
  {
    id: 'tangshi/98',
    title: '秋词',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。',
    tags: ['七言绝句', '秋景']
  },
  {
    id: 'tangshi/99',
    title: '悯农·其一',
    author: '李绅',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。',
    tags: ['五言绝句', '悯农']
  },
  {
    id: 'tangshi/100',
    title: '悯农·其二',
    author: '李绅',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。',
    tags: ['五言绝句', '悯农']
  },
  {
    id: 'songci/1',
    title: '水调歌头·明月几时有',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。',
    tags: ['豪放派', '中秋']
  },
  {
    id: 'songci/2',
    title: '念奴娇·赤壁怀古',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/3',
    title: '声声慢·寻寻觅觅',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/4',
    title: '如梦令·昨夜雨疏风骤',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/5',
    title: '虞美人·春花秋月何时了',
    author: '李煜',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。',
    tags: ['婉约派', '亡国之痛']
  },
  {
    id: 'songci/6',
    title: '雨霖铃·寒蝉凄切',
    author: '柳永',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。',
    tags: ['婉约派', '离别']
  },
  {
    id: 'songci/7',
    title: '青玉案·元夕',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。',
    tags: ['豪放派', '元宵']
  },
  {
    id: 'songci/8',
    title: '一剪梅·红藕香残玉簟秋',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来？',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/9',
    title: '破阵子·为陈同甫赋壮词以寄之',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。',
    tags: ['豪放派', '军旅']
  },
  {
    id: 'songci/10',
    title: '江城子·密州出猎',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。',
    tags: ['豪放派', '出猎']
  },
  {
    id: 'songci/11',
    title: '满江红·写怀',
    author: '岳飞',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。',
    tags: ['豪放派', '爱国']
  },
  {
    id: 'songci/12',
    title: '卜算子·咏梅',
    author: '陆游',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '驿外断桥边，寂寞开无主。已是黄昏独自愁，更着风和雨。',
    tags: ['婉约派', '咏物']
  },
  {
    id: 'songci/13',
    title: '永遇乐·京口北固亭怀古',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/14',
    title: '蝶恋花·伫倚危楼风细细',
    author: '柳永',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '伫倚危楼风细细，望极春愁，黯黯生天际。草色烟光残照里，无言谁会凭阑意。',
    tags: ['婉约派', '春愁']
  },
  {
    id: 'songci/15',
    title: '浣溪沙·一曲新词酒一杯',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？',
    tags: ['婉约派', '惜时']
  },
  {
    id: 'songci/16',
    title: '鹊桥仙·纤云弄巧',
    author: '秦观',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。',
    tags: ['婉约派', '七夕']
  },
  {
    id: 'songci/17',
    title: '苏幕遮·怀旧',
    author: '范仲淹',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '碧云天，黄叶地，秋色连波，波上寒烟翠。山映斜阳天接水，芳草无情，更在斜阳外。',
    tags: ['婉约派', '秋思']
  },
  {
    id: 'songci/18',
    title: '西江月·夜行黄沙道中',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。',
    tags: ['豪放派', '田园']
  },
  {
    id: 'songci/19',
    title: '定风波·莫听穿林打叶声',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',
    tags: ['豪放派', '旷达']
  },
  {
    id: 'songci/20',
    title: '醉花阴·薄雾浓云愁永昼',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '薄雾浓云愁永昼，瑞脑消金兽。佳节又重阳，玉枕纱厨，半夜凉初透。',
    tags: ['婉约派', '重阳']
  },
  {
    id: 'songci/21',
    title: '渔家傲·秋思',
    author: '范仲淹',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '塞下秋来风景异，衡阳雁去无留意。四面边声连角起，千嶂里，长烟落日孤城闭。',
    tags: ['豪放派', '边塞']
  },
  {
    id: 'songci/22',
    title: '扬州慢·淮左名都',
    author: '姜夔',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '淮左名都，竹西佳处，解鞍少驻初程。过春风十里，尽荠麦青青。',
    tags: ['婉约派', '怀古']
  },
  {
    id: 'songci/23',
    title: '念奴娇·过洞庭',
    author: '张孝祥',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '洞庭青草，近中秋，更无一点风色。玉鉴琼田三万顷，着我扁舟一叶。',
    tags: ['豪放派', '中秋']
  },
  {
    id: 'songci/24',
    title: '贺新郎·甚矣吾衰矣',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '甚矣吾衰矣。怅平生、交游零落，只今余几！白发空垂三千丈，一笑人间万事。',
    tags: ['豪放派', '抒怀']
  },
  {
    id: 'songci/25',
    title: '兰陵王·柳',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '柳阴直，烟里丝丝弄碧。隋堤上、曾见几番，拂水飘绵送行色。',
    tags: ['婉约派', '送别']
  },
  {
    id: 'songci/26',
    title: '踏莎行·郴州旅舍',
    author: '秦观',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '雾失楼台，月迷津渡。桃源望断无寻处。可堪孤馆闭春寒，杜鹃声里斜阳暮。',
    tags: ['婉约派', '羁旅']
  },
  {
    id: 'songci/27',
    title: '江城子·乙卯正月二十日夜记梦',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。',
    tags: ['豪放派', '悼亡']
  },
  {
    id: 'songci/28',
    title: '蝶恋花·花褪残红青杏小',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '花褪残红青杏小。燕子飞时，绿水人家绕。枝上柳绵吹又少，天涯何处无芳草。',
    tags: ['婉约派', '伤春']
  },
  {
    id: 'songci/29',
    title: '如梦令·常记溪亭日暮',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。',
    tags: ['婉约派', '游赏']
  },
  {
    id: 'songci/30',
    title: '一剪梅·舟过吴江',
    author: '蒋捷',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '一片春愁待酒浇。江上舟摇，楼上帘招。秋娘渡与泰娘桥，风又飘飘，雨又萧萧。',
    tags: ['婉约派', '春愁']
  },
  {
    id: 'songci/31',
    title: '虞美人·听雨',
    author: '蒋捷',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '少年听雨歌楼上，红烛昏罗帐。壮年听雨客舟中，江阔云低、断雁叫西风。',
    tags: ['婉约派', '听雨']
  },
  {
    id: 'songci/32',
    title: '青玉案·元夕',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。',
    tags: ['豪放派', '元宵']
  },
  {
    id: 'songci/33',
    title: '鹧鸪天·代人赋',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '陌上柔桑破嫩芽，东邻蚕种已生些。平冈细草鸣黄犊，斜日寒林点暮鸦。',
    tags: ['豪放派', '田园']
  },
  {
    id: 'songci/34',
    title: '声声慢·寻寻觅觅',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/35',
    title: '水龙吟·登建康赏心亭',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '楚天千里清秋，水随天去秋无际。遥岑远目，献愁供恨，玉簪螺髻。',
    tags: ['豪放派', '登临']
  },
  {
    id: 'songci/36',
    title: '念奴娇·过洞庭',
    author: '张孝祥',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '洞庭青草，近中秋，更无一点风色。玉鉴琼田三万顷，着我扁舟一叶。',
    tags: ['豪放派', '中秋']
  },
  {
    id: 'songci/37',
    title: '八声甘州·对潇潇暮雨洒江天',
    author: '柳永',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '对潇潇暮雨洒江天，一番洗清秋。渐霜风凄紧，关河冷落，残照当楼。',
    tags: ['婉约派', '羁旅']
  },
  {
    id: 'songci/38',
    title: '桂枝香·金陵怀古',
    author: '王安石',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/39',
    title: '浣溪沙·游蕲水清泉寺',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '山下兰芽短浸溪，松间沙路净无泥，萧萧暮雨子规啼。',
    tags: ['婉约派', '抒怀']
  },
  {
    id: 'songci/40',
    title: '临江仙·夜归临皋',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。',
    tags: ['豪放派', '抒怀']
  },
  {
    id: 'songci/41',
    title: '卜算子·黄州定慧院寓居作',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '缺月挂疏桐，漏断人初静。谁见幽人独往来，缥缈孤鸿影。',
    tags: ['婉约派', '咏物']
  },
  {
    id: 'songci/42',
    title: '鹊桥仙·七夕',
    author: '范成大',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '双星良夜，耕慵织懒，应被群仙相妒。娟娟月姊满眉颦，更无奈、风姨吹雨。',
    tags: ['婉约派', '七夕']
  },
  {
    id: 'songci/43',
    title: '钗头凤·红酥手',
    author: '陆游',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '红酥手，黄縢酒，满城春色宫墙柳。东风恶，欢情薄。一怀愁绪，几年离索。',
    tags: ['婉约派', '爱情']
  },
  {
    id: 'songci/44',
    title: '诉衷情·当年万里觅封侯',
    author: '陆游',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '当年万里觅封侯，匹马戍梁州。关河梦断何处？尘暗旧貂裘。',
    tags: ['豪放派', '壮志']
  },
  {
    id: 'songci/45',
    title: '破阵子·春景',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '燕子来时新社，梨花落后清明。池上碧苔三四点，叶底黄鹂一两声，日长飞絮轻。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/46',
    title: '天仙子·水调数声持酒听',
    author: '张先',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '水调数声持酒听，午醉醒来愁未醒。送春春去几时回？临晚镜，伤流景。',
    tags: ['婉约派', '伤春']
  },
  {
    id: 'songci/47',
    title: '水龙吟·次韵章质夫杨花词',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '似花还似非花，也无人惜从教坠。抛家傍路，思量却是，无情有思。',
    tags: ['婉约派', '咏物']
  },
  {
    id: 'songci/48',
    title: '青玉案·元夕',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。',
    tags: ['婉约派', '元宵']
  },
  {
    id: 'songci/49',
    title: '武陵春·春晚',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/50',
    title: '卜算子·我住长江头',
    author: '李之仪',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '我住长江头，君住长江尾。日日思君不见君，共饮长江水。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/51',
    title: '苏幕遮·怀旧',
    author: '范仲淹',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。',
    tags: ['婉约派', '秋景']
  },
  {
    id: 'songci/52',
    title: '渔家傲·秋思',
    author: '范仲淹',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '塞下秋来风景异，衡阳雁去无留意。四面边声连角起。千嶂里，长烟落日孤城闭。',
    tags: ['豪放派', '边塞']
  },
  {
    id: 'songci/53',
    title: '御街行·秋日怀旧',
    author: '范仲淹',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '纷纷坠叶飘香砌。夜寂静，寒声碎。真珠帘卷玉楼空，天淡银河垂地。',
    tags: ['婉约派', '秋景']
  },
  {
    id: 'songci/54',
    title: '天仙子·水调数声持酒听',
    author: '张先',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '水调数声持酒听，午醉醒来愁未醒。送春春去几时回？临晚镜，伤流景。',
    tags: ['婉约派', '伤春']
  },
  {
    id: 'songci/55',
    title: '青门引·春思',
    author: '张先',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '乍暖还轻冷。风雨晚来方定。庭轩寂寞近清明，残花中酒，又是去年病。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/56',
    title: '浣溪沙·一曲新词酒一杯',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？',
    tags: ['婉约派', '抒怀']
  },
  {
    id: 'songci/57',
    title: '浣溪沙·一向年光有限身',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '一向年光有限身，等闲离别易销魂。酒筵歌席莫辞频。',
    tags: ['婉约派', '抒怀']
  },
  {
    id: 'songci/58',
    title: '蝶恋花·槛菊愁烟兰泣露',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '槛菊愁烟兰泣露，罗幕轻寒，燕子双飞去。明月不谙离恨苦，斜光到晓穿朱户。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/59',
    title: '破阵子·春景',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '燕子来时新社，梨花落后清明。池上碧苔三四点，叶底黄鹂一两声，日长飞絮轻。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/60',
    title: '踏莎行·祖席离歌',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '祖席离歌，长亭别宴。香尘已隔犹回面。候馆梅残，溪桥柳细。',
    tags: ['婉约派', '送别']
  },
  {
    id: 'songci/61',
    title: '玉楼春·春恨',
    author: '晏殊',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '绿杨芳草长亭路，年少抛人容易去。楼头残梦五更钟，花底离愁三月雨。',
    tags: ['婉约派', '离愁']
  },
  {
    id: 'songci/62',
    title: '采桑子·群芳过后西湖好',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '群芳过后西湖好，狼籍残红，飞絮濛濛，垂柳阑干尽日风。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/63',
    title: '踏莎行·候馆梅残',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '候馆梅残，溪桥柳细，草薰风暖摇征辔。离愁渐远渐无穷，迢迢不断如春水。',
    tags: ['婉约派', '离愁']
  },
  {
    id: 'songci/64',
    title: '生查子·元夕',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '去年元夜时，花市灯如昼。月上柳梢头，人约黄昏后。',
    tags: ['婉约派', '爱情']
  },
  {
    id: 'songci/65',
    title: '玉楼春·尊前拟把归期说',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '尊前拟把归期说，欲语春容先惨咽。人生自是有情痴，此恨不关风与月。',
    tags: ['婉约派', '离愁']
  },
  {
    id: 'songci/66',
    title: '浪淘沙令·帘外雨潺潺',
    author: '李煜',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'songci/67',
    title: '相见欢·林花谢了春红',
    author: '李煜',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '林花谢了春红，太匆匆。无奈朝来寒雨晚来风。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'songci/68',
    title: '清平乐·别来春半',
    author: '李煜',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/69',
    title: '蝶恋花·庭院深深深几许',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '庭院深深深几许，杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。',
    tags: ['婉约派', '闺怨']
  },
  {
    id: 'songci/70',
    title: '临江仙·柳外轻雷池上雨',
    author: '欧阳修',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '柳外轻雷池上雨，雨声滴碎荷声。小楼西角断虹明。阑干倚处，待得月华生。',
    tags: ['婉约派', '写景']
  },
  {
    id: 'songci/71',
    title: '桂枝香·金陵怀古',
    author: '王安石',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/72',
    title: '千秋岁引·秋景',
    author: '王安石',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '别馆寒砧，孤城画角，一派秋声入寥廓。东归燕从海上去，南来雁向沙头落。',
    tags: ['豪放派', '秋景']
  },
  {
    id: 'songci/73',
    title: '鹧鸪天·彩袖殷勤捧玉钟',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '彩袖殷勤捧玉钟，当年拚却醉颜红。舞低杨柳楼心月，歌尽桃花扇底风。',
    tags: ['婉约派', '怀旧']
  },
  {
    id: 'songci/74',
    title: '临江仙·梦后楼台高锁',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。',
    tags: ['婉约派', '怀旧']
  },
  {
    id: 'songci/75',
    title: '蝶恋花·醉别西楼醒不记',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '醉别西楼醒不记，春梦秋云，聚散真容易。斜月半窗还少睡，画屏闲展吴山翠。',
    tags: ['婉约派', '离愁']
  },
  {
    id: 'songci/76',
    title: '鹧鸪天·醉拍春衫惜旧香',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '醉拍春衫惜旧香。天将离恨恼疏狂。年年陌上生秋草，日日楼中到夕阳。',
    tags: ['婉约派', '离愁']
  },
  {
    id: 'songci/77',
    title: '清平乐·留人不住',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '留人不住，醉解兰舟去。一棹碧涛春水路，过尽晓莺啼处。',
    tags: ['婉约派', '送别']
  },
  {
    id: 'songci/78',
    title: '木兰花·秋千院落重帘暮',
    author: '晏几道',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '秋千院落重帘暮，彩笔闲来题绣户。墙头丹杏雨余花，门外绿杨风后絮。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/79',
    title: '虞美人·有美堂赠述古',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '湖山信是东南美，一望弥千里。使君能得几回来？便使尊前醉倒、且徘徊。',
    tags: ['豪放派', '赠友']
  },
  {
    id: 'songci/80',
    title: '南乡子·送述古',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '回首乱山横，不见居人只见城。谁似临平山上塔，亭亭，迎客西来送客行。',
    tags: ['豪放派', '送别']
  },
  {
    id: 'songci/81',
    title: '蝶恋花·记得画屏初会遇',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '记得画屏初会遇。好梦惊回，望断高唐路。燕子双飞来又去。纱窗几度春光暮。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/82',
    title: '少年游·润州作',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '去年相送，馀杭门外，飞雪似杨花。今年春尽，杨花似雪，犹不见还家。',
    tags: ['婉约派', '思乡']
  },
  {
    id: 'songci/83',
    title: '定风波·莫听穿林打叶声',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',
    tags: ['豪放派', '抒怀']
  },
  {
    id: 'songci/84',
    title: '江城子·密州出猎',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。',
    tags: ['豪放派', '壮志']
  },
  {
    id: 'songci/85',
    title: '江城子·乙卯正月二十日夜记梦',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。',
    tags: ['婉约派', '悼亡']
  },
  {
    id: 'songci/86',
    title: '卜算子·我住长江头',
    author: '李之仪',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '我住长江头，君住长江尾。日日思君不见君，共饮长江水。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/87',
    title: '瑞龙吟·大石春景',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '章台路，还见褪粉梅梢，试花桃树。愔愔坊陌人家，定巢燕子，归来旧处。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/88',
    title: '满庭芳·夏日溧水无想山作',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '风老莺雏，雨肥梅子，午阴嘉树清圆。地卑山近，衣润费炉烟。',
    tags: ['婉约派', '夏景']
  },
  {
    id: 'songci/89',
    title: '苏幕遮·燎沉香',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。叶上初阳干宿雨，水面清圆，一一风荷举。',
    tags: ['婉约派', '夏景']
  },
  {
    id: 'songci/90',
    title: '六丑·落花',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '正单衣试酒，恨客里、光阴虚掷。愿春暂留，春归如过翼，一去无迹。',
    tags: ['婉约派', '咏物']
  },
  {
    id: 'songci/91',
    title: '兰陵王·柳',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '柳阴直，烟里丝丝弄碧。隋堤上、曾见几番，拂水飘绵送行色。',
    tags: ['婉约派', '咏柳']
  },
  {
    id: 'songci/92',
    title: '西河·金陵怀古',
    author: '周邦彦',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '佳丽地，南朝盛事谁记？山围故国绕清江，髻鬟对起。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/93',
    title: '如梦令·常记溪亭日暮',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。',
    tags: ['婉约派', '游记']
  },
  {
    id: 'songci/94',
    title: '如梦令·昨夜雨疏风骤',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/95',
    title: '一剪梅·红藕香残玉簟秋',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来，雁字回时，月满西楼。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/96',
    title: '醉花阴·薄雾浓云愁永昼',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '薄雾浓云愁永昼，瑞脑销金兽。佳节又重阳，玉枕纱厨，半夜凉初透。',
    tags: ['婉约派', '重阳']
  },
  {
    id: 'songci/97',
    title: '声声慢·寻寻觅觅',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/98',
    title: '永遇乐·落日熔金',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '落日熔金，暮云合璧，人在何处。染柳烟浓，吹梅笛怨，春意知几许。',
    tags: ['婉约派', '元宵']
  },
  {
    id: 'songci/99',
    title: '武陵春·春晚',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/100',
    title: '渔家傲·天接云涛连晓雾',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所，闻天语，殷勤问我归何处。',
    tags: ['豪放派', '抒怀']
  },
  {
    id: 'yuanqu/1',
    title: '天净沙·秋思',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。',
    tags: ['小令', '秋思']
  },
  {
    id: 'yuanqu/2',
    title: '山坡羊·潼关怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '峰峦如聚，波涛如怒，山河表里潼关路。望西都，意踌躇。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/3',
    title: '天净沙·秋',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。',
    tags: ['小令', '秋景']
  },
  {
    id: 'yuanqu/4',
    title: '四块玉·别情',
    author: '关汉卿',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '自送别，心难舍，一点相思几时绝？凭阑袖拂杨花雪。',
    tags: ['散曲', '离别']
  },
  {
    id: 'yuanqu/5',
    title: '沉醉东风·渔夫',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '黄芦岸白蘋渡口，绿柳堤红蓼滩头。虽无刎颈交，却有忘机友。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/6',
    title: '大德歌·春',
    author: '关汉卿',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '子规啼，不如归，道是春归人未归。几日添憔悴，虚飘飘柳絮飞。',
    tags: ['散曲', '春思']
  },
  {
    id: 'yuanqu/7',
    title: '寿阳曲·远浦帆归',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '夕阳下，酒旆闲，两三航未曾着岸。落花水香茅舍晚，断桥头卖鱼人散。',
    tags: ['小令', '晚归']
  },
  {
    id: 'yuanqu/8',
    title: '蟾宫曲·春情',
    author: '徐再思',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝。',
    tags: ['散曲', '相思']
  },
  {
    id: 'yuanqu/9',
    title: '山坡羊·骊山怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/10',
    title: '清江引·秋怀',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '西风信来家万里，问我归期未？雁啼红叶天，人醉黄花地，芭蕉雨声秋梦里。',
    tags: ['散曲', '思乡']
  },
  {
    id: 'yuanqu/11',
    title: '殿前欢·对菊自叹',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '对菊自叹，可怜秋，一帘疏雨暗西楼。黄花庭院，青灯夜雨，白发秋风。',
    tags: ['散曲', '悲秋']
  },
  {
    id: 'yuanqu/12',
    title: '水仙子·咏江南',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一江烟水照晴岚，两岸人家接画檐，芰荷丛一段秋光淡。',
    tags: ['散曲', '江南']
  },
  {
    id: 'yuanqu/13',
    title: '折桂令·春情',
    author: '徐再思',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝。',
    tags: ['散曲', '相思']
  },
  {
    id: 'yuanqu/14',
    title: '人月圆·山中书事',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '兴亡千古繁华梦，诗眼倦天涯。孔林乔木，吴宫蔓草，楚庙寒鸦。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/15',
    title: '拨不断·叹寒儒',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '叹寒儒，谩读书，读书须索题桥柱。题柱虽乘驷马车，乘车谁买长门赋。',
    tags: ['散曲', '讽世']
  },
  {
    id: 'yuanqu/16',
    title: '落梅风·人初静',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '人初静，月正明。纱窗外玉梅斜映。梅花笑人偏弄影，月沉时一般孤零。',
    tags: ['散曲', '孤愁']
  },
  {
    id: 'yuanqu/17',
    title: '塞鸿秋·浔阳即景',
    author: '周德清',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '长江万里白如练，淮山数点青如淀。江帆几片疾如箭，山泉千尺飞如电。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/18',
    title: '卖花声·怀古',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '阿房舞殿翻罗袖，金谷名园起玉楼，隋堤古柳缆龙舟。不堪回首，东风还又，野花开暮春时候。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/19',
    title: '凭阑人·寄征衣',
    author: '姚燧',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '欲寄君衣君不还，不寄君衣君又寒。寄与不寄间，妾身千万难。',
    tags: ['散曲', '闺情']
  },
  {
    id: 'yuanqu/20',
    title: '折桂令·叹世',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '咸阳百二山河，两字功名，几阵干戈。项废东吴，刘兴西蜀，梦说南柯。',
    tags: ['散曲', '讽世']
  },
  {
    id: 'yuanqu/21',
    title: '水仙子·夜雨',
    author: '徐再思',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一声梧叶一声秋，一点芭蕉一点愁，三更归梦三更后。落灯花棋未收，叹新丰孤馆人留。',
    tags: ['散曲', '秋思']
  },
  {
    id: 'yuanqu/22',
    title: '普天乐·西山夕照',
    author: '徐再思',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '晚云收，夕阳挂，一川枫叶，两岸芦花。鸥鹭栖，牛羊下，万顷波光天图画。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/23',
    title: '天净沙·春',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '春山暖日和风，阑干楼阁帘栊，杨柳秋千院中。啼莺舞燕，小桥流水飞红。',
    tags: ['散曲', '春景']
  },
  {
    id: 'yuanqu/24',
    title: '天净沙·夏',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '云收雨过波添，楼高水冷瓜甜，绿树阴垂画檐。纱厨藤簟，玉人罗扇轻缣。',
    tags: ['散曲', '夏景']
  },
  {
    id: 'yuanqu/25',
    title: '天净沙·冬',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一声画角谯门，半庭新月黄昏，雪里山前水滨。竹篱茅舍，淡烟衰草孤村。',
    tags: ['散曲', '冬景']
  },
  {
    id: 'yuanqu/26',
    title: '沉醉东风·秋景',
    author: '卢挚',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '挂绝壁松枯倒倚，落残霞孤鹜齐飞。四围不尽山，一望无穷水。',
    tags: ['散曲', '秋景']
  },
  {
    id: 'yuanqu/27',
    title: '寿阳曲·潇湘夜雨',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '渔灯暗，客梦回。一声声滴人心碎。孤舟五更家万里，是离人几行情泪。',
    tags: ['散曲', '夜雨']
  },
  {
    id: 'yuanqu/28',
    title: '寿阳曲·烟寺晚钟',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '寒烟细，古寺清，近黄昏礼佛人静。顺西风晚钟三四声，怎生教老僧禅定？',
    tags: ['散曲', '暮钟']
  },
  {
    id: 'yuanqu/29',
    title: '拨不断·菊花开',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '菊花开，正归来。伴虎溪僧鹤林友龙山客，似杜工部陶渊明李太白。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/30',
    title: '清江引·秋居',
    author: '吴西逸',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '白雁乱飞秋似雪，清露生凉夜。扫却石边云，醉踏松根月。星斗满天人睡也。',
    tags: ['散曲', '秋居']
  },
  {
    id: 'yuanqu/31',
    title: '殿前欢·懒云窝',
    author: '阿里西瑛',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '懒云窝，醒时诗酒醉时歌。瑶琴不理抛书卧，无梦南柯。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/32',
    title: '水仙子·寻梅',
    author: '乔吉',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '冬前冬后几村庄，溪北溪南两履霜，树头树底孤山上。冷风来何处香？',
    tags: ['散曲', '咏梅']
  },
  {
    id: 'yuanqu/33',
    title: '山坡羊·未央怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '三杰当日，俱起故里，萧何先因丞相。未央宫里王孙宴，不忍回首斜阳暮。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/34',
    title: '折桂令·客窗清明',
    author: '乔吉',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '风风雨雨梨花，窄索帘栊，巧小窗纱。甚情绪灯前，客怀枕畔，心事天涯。',
    tags: ['散曲', '羁旅']
  },
  {
    id: 'yuanqu/35',
    title: '水仙子·重观瀑布',
    author: '乔吉',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '天机织罢月梭闲，石壁高垂雪练寒。冰丝带雨悬霄汉，几千年晒未干。',
    tags: ['散曲', '咏物']
  },
  {
    id: 'yuanqu/36',
    title: '殿前欢·吊古',
    author: '卢挚',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '酒杯浓，一葫芦春色醉山翁，一葫芦酒压花梢重。随我奚童，葫芦干兴不穷。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/37',
    title: '一半儿·春醉',
    author: '胡祗遹',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '海棠红晕润初妍，杨柳纤腰舞自偏。笑倚玉奴娇欲眠。粉郎前，一半儿支吾一半儿软。',
    tags: ['散曲', '春景']
  },
  {
    id: 'yuanqu/38',
    title: '叨叨令·道情',
    author: '邓玉宾',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '白云深处青山下，茅庵草舍无冬夏。闲来几句渔樵话，困来一枕葫芦架。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/39',
    title: '寄生草·饮',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '长醉后方何碍，不醒时有甚思。糟腌两个功名字，醅渰千古兴亡事，曲埋万丈虹霓志。',
    tags: ['散曲', '咏怀']
  },
  {
    id: 'yuanqu/40',
    title: '沉醉东风·闲居',
    author: '卢挚',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '雨过分畦种瓜，旱时引水浇麻。共几个田舍翁，说几句庄家话。瓦盆边浊酒连糟饮。',
    tags: ['散曲', '田园']
  },
  {
    id: 'yuanqu/41',
    title: '寿阳曲·远浦帆归',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '夕阳下，酒旆闲，两三航未曾着岸。落花水香茅舍晚，断桥头卖鱼人散。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/42',
    title: '山坡羊·骊山怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/43',
    title: '驻马听·吹',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '裂石穿云，玉管宜秋吹。霜重天高，玉管清秋吹。',
    tags: ['散曲', '咏物']
  },
  {
    id: 'yuanqu/44',
    title: '四块玉·闲适',
    author: '关汉卿',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '南亩耕，东山卧，世态人情经历多。闲将往事思量过，贤的是他，愚的是我。',
    tags: ['散曲', '闲适']
  },
  {
    id: 'yuanqu/45',
    title: '庆东原·即景',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '忘忧草，含笑花，劝君闻早冠宜挂。那里也能言陆贾，那里也良谋子牙。',
    tags: ['散曲', '抒怀']
  },
  {
    id: 'yuanqu/46',
    title: '小桃红·春',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一城春色半城花，几点连钱草。尾蝶飞来随落红，莺燕惊飞花底风。',
    tags: ['散曲', '春景']
  },
  {
    id: 'yuanqu/47',
    title: '凭栏人·湖上',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '远水晴天明落霞，古柳渔竿半夕阳。临水整翠翘，水纹镜新描。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/48',
    title: '卖花声·客况',
    author: '乔吉',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '风初定，月正明，雪儿歌白雪齐声。二十五弦夜不冻，玉箫吹起凤孤鸣。',
    tags: ['散曲', '羁旅']
  },
  {
    id: 'yuanqu/49',
    title: '红绣鞋·天台瀑布寺',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '绝顶峰攒雪剑，悬崖水挂冰帘。倚树哀猿弄云尖，月华交露华。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/50',
    title: '蟾宫曲·醉赠乐府',
    author: '卢挚',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '快阁东西，鸥边雨帽，象板霜丝。扫穷愁又怀诗，缀新题又付歌姬。',
    tags: ['散曲', '抒怀']
  },
  {
    id: 'yuanqu/51',
    title: '天净沙·秋',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。',
    tags: ['散曲', '秋景']
  },
  {
    id: 'yuanqu/52',
    title: '天净沙·春',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '春山暖日和风，阑干楼阁帘栊，杨柳秋千院中。啼莺舞燕，小桥流水飞红。',
    tags: ['散曲', '春景']
  },
  {
    id: 'yuanqu/53',
    title: '天净沙·夏',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '云收雨过波添，楼高水冷瓜甜，绿树阴垂画檐。纱厨藤簟，玉人罗扇轻缣。',
    tags: ['散曲', '夏景']
  },
  {
    id: 'yuanqu/54',
    title: '天净沙·冬',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一声画角谯门，半庭新月黄昏，雪里山前水滨。竹篱茅舍，淡烟衰草孤村。',
    tags: ['散曲', '冬景']
  },
  {
    id: 'yuanqu/55',
    title: '沉醉东风·渔夫',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '黄芦岸白蘋渡口，绿柳堤红蓼滩头。虽无刎颈交，却有忘机友。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/56',
    title: '驻马听·舞',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '凤髻蟠空，袅娜腰肢温更柔。轻移莲步，汉宫飞燕旧风流。',
    tags: ['散曲', '咏美']
  },
  {
    id: 'yuanqu/57',
    title: '驻马听·歌',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '裂石穿云，玉管宜秋吹。霜重天高，素月流天。',
    tags: ['散曲', '咏物']
  },
  {
    id: 'yuanqu/58',
    title: '庆东原·叹世',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '忘忧草，含笑花，劝君闻早冠宜挂。那里也能言陆贾，那里也良谋子牙。',
    tags: ['散曲', '叹世']
  },
  {
    id: 'yuanqu/59',
    title: '水仙子·和卢疏斋西湖',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '春风骄马五陵儿，暖日西湖三月时，管弦触水莺花市。',
    tags: ['散曲', '春景']
  },
  {
    id: 'yuanqu/60',
    title: '落梅风·远浦秋帆',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '远浦远，暮帆收，绿波初月上轻鸥。半江寒水明如昼。',
    tags: ['散曲', '秋景']
  },
  {
    id: 'yuanqu/61',
    title: '落梅风·潇湘夜雨',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '渔灯暗，客梦回，一声声滴人心碎。孤舟五更家万里。',
    tags: ['散曲', '羁旅']
  },
  {
    id: 'yuanqu/62',
    title: '落梅风·烟寺晚钟',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '寒烟淡，晚钟残，古佛犹在僧归晚。青猿正抱苍松看。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/63',
    title: '落梅风·平沙落雁',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '传书信，寄南飞，雁行一字排开时。秋水长天同一色。',
    tags: ['散曲', '秋景']
  },
  {
    id: 'yuanqu/64',
    title: '落梅风·江天暮雪',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '残霞暮，晚天寒，雪花飞絮浑无际。渔翁醉里冰簟。',
    tags: ['散曲', '冬景']
  },
  {
    id: 'yuanqu/65',
    title: '清江引·野兴',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '林泉隐居谁到此，有客清风至。闲中作伴，老树为知己。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/66',
    title: '夜行船·秋思',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '百岁光阴一梦蝶，重回首往事堪嗟。今日春来，明朝花谢。',
    tags: ['散曲', '叹世']
  },
  {
    id: 'yuanqu/67',
    title: '乔木查·对景',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '倦途游子，愁闻戍角声，寒灯照影。乡心未遂，剑空弹壮志难成。',
    tags: ['散曲', '羁旅']
  },
  {
    id: 'yuanqu/68',
    title: '拨不断·叹世',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '布衣中，问英雄，王图霸业成何用！不如且尽杯中酒。',
    tags: ['散曲', '叹世']
  },
  {
    id: 'yuanqu/69',
    title: '四块玉·恬退',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '绿鬓衰，朱颜改，羞把尘容画镜台。故人远谪天涯外。',
    tags: ['散曲', '恬退']
  },
  {
    id: 'yuanqu/70',
    title: '庆东原·叹世',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '鹏抟九万，腰缠十万，扬州鹤背骑来惯。世间尤物，敢忽慢。',
    tags: ['散曲', '叹世']
  },
  {
    id: 'yuanqu/71',
    title: '水仙子·咏江南',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一江烟水照晴岚，两岸人家接画檐，芰荷丛一段秋光淡。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/72',
    title: '山坡羊·北邙山怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '悲风成阵，荒烟埋恨，碑铭残缺应难认。知他是汉朝君，晋朝臣？',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/73',
    title: '山坡羊·洛阳怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '洛阳怀古，天津桥上，凭阑凝望思今古。春来春去，花开花谢。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/74',
    title: '红绣鞋·警世',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '那的是为官荣贵，止不过多吃些筵席，比不得田家风味。',
    tags: ['散曲', '警世']
  },
  {
    id: 'yuanqu/75',
    title: '朱履曲·警世',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '那的是为官荣贵，止不过多吃些筵席。',
    tags: ['散曲', '警世']
  },
  {
    id: 'yuanqu/76',
    title: '得胜令·四月一日喜雨',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '万象欲焦枯，一雨足沾濡。天地回生意，风云起壮图。',
    tags: ['散曲', '喜雨']
  },
  {
    id: 'yuanqu/77',
    title: '雁儿落兼得胜令',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '云来山更佳，云去山如画。山因云晦明，云共山高下。',
    tags: ['散曲', '写景']
  },
  {
    id: 'yuanqu/78',
    title: '折桂令·中秋',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一轮飞镜谁磨？照彻乾坤，印透山河。玉露泠泠，洗秋空银汉无波。',
    tags: ['散曲', '中秋']
  },
  {
    id: 'yuanqu/79',
    title: '清江引·咏秋',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '西风信来家万里，问我归期未？雁啼红叶天，人醉黄花地。',
    tags: ['散曲', '秋景']
  },
  {
    id: 'yuanqu/80',
    title: '天净沙·湖上送别',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '红蕉隐隐窗纱，朱帘小小人家，绿柳匆匆去马。断桥西下，满湖烟雨愁花。',
    tags: ['散曲', '送别']
  },
  {
    id: 'shijing/1',
    title: '关雎',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/2',
    title: '蒹葭',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
    tags: ['国风', '思慕']
  },
  {
    id: 'shijing/3',
    title: '桃夭',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '桃之夭夭，灼灼其华。之子于归，宜其室家。',
    tags: ['国风', '婚嫁']
  },
  {
    id: 'shijing/4',
    title: '氓',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。',
    tags: ['国风', '弃妇']
  },
  {
    id: 'shijing/5',
    title: '采薇',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '采薇采薇，薇亦作止。曰归曰归，岁亦莫止。',
    tags: ['小雅', '征戍']
  },
  {
    id: 'shijing/6',
    title: '鹿鸣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。',
    tags: ['小雅', '宴饮']
  },
  {
    id: 'shijing/7',
    title: '静女',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '静女其姝，俟我于城隅。爱而不见，搔首踟蹰。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/8',
    title: '木瓜',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '投我以木瓜，报之以琼琚。匪报也，永以为好也。',
    tags: ['国风', '友谊']
  },
  {
    id: 'shijing/9',
    title: '硕鼠',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。',
    tags: ['国风', '讽刺']
  },
  {
    id: 'shijing/10',
    title: '伐檀',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '坎坎伐檀兮，置之河之干兮，河水清且涟猗。',
    tags: ['国风', '劳动']
  },
  {
    id: 'shijing/11',
    title: '子衿',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '青青子衿，悠悠我心。纵我不往，子宁不嗣音？',
    tags: ['国风', '思慕']
  },
  {
    id: 'shijing/12',
    title: '击鼓',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '击鼓其镗，踊跃用兵。土国城漕，我独南行。',
    tags: ['国风', '征戍']
  },
  {
    id: 'shijing/13',
    title: '无衣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '岂曰无衣？与子同袍。王于兴师，修我戈矛。与子同仇！',
    tags: ['国风', '战友']
  },
  {
    id: 'shijing/14',
    title: '月出',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '月出皎兮，佼人僚兮。舒窈纠兮，劳心悄兮。',
    tags: ['国风', '月夜']
  },
  {
    id: 'shijing/15',
    title: '汉广',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '南有乔木，不可休思。汉有游女，不可求思。',
    tags: ['国风', '思慕']
  },
  {
    id: 'shijing/16',
    title: '芣苢',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '采采芣苢，薄言采之。采采芣苢，薄言有之。',
    tags: ['国风', '劳动']
  },
  {
    id: 'shijing/17',
    title: '卷耳',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '采采卷耳，不盈顷筐。嗟我怀人，寘彼周行。',
    tags: ['国风', '思妇']
  },
  {
    id: 'shijing/18',
    title: '摽有梅',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '摽有梅，其实七兮。求我庶士，迨其吉兮。',
    tags: ['国风', '婚嫁']
  },
  {
    id: 'shijing/19',
    title: '柏舟',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '泛彼柏舟，亦泛其流。耿耿不寐，如有隐忧。',
    tags: ['国风', '忧思']
  },
  {
    id: 'shijing/20',
    title: '绿衣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '绿兮衣兮，绿衣黄里。心之忧矣，曷维其已！',
    tags: ['国风', '悼亡']
  },
  {
    id: 'shijing/21',
    title: '黍离',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '彼黍离离，彼稷之苗。行迈靡靡，中心摇摇。',
    tags: ["王风","亡国"]
  },
  {
    id: 'shijing/22',
    title: '伯兮',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '伯兮朅兮，邦之桀兮。伯也执殳，为王前驱。',
    tags: ["卫风","思妇"]
  },
  {
    id: 'shijing/23',
    title: '风雨',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '风雨凄凄，鸡鸣喈喈。既见君子，云胡不夷。',
    tags: ["郑风","爱情"]
  },
  {
    id: 'shijing/24',
    title: '绸缪',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '绸缪束薪，三星在天。今夕何夕，见此良人。',
    tags: ["唐风","爱情"]
  },
  {
    id: 'shijing/25',
    title: '东山',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '我徂东山，慆慆不归。我来自东，零雨其濛。',
    tags: ["豳风","征役"]
  },
  {
    id: 'shijing/26',
    title: '君子于役',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '君子于役，不知其期。曷至哉？鸡栖于埘。',
    tags: ["王风","思妇"]
  },
  {
    id: 'shijing/27',
    title: '君子阳阳',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '君子阳阳，左执簧，右招我由房。其乐只且！',
    tags: ["王风","乐歌"]
  },
  {
    id: 'shijing/28',
    title: '扬之水',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '扬之水，不流束薪。彼其之子，不与我戍申。',
    tags: ["王风","征役"]
  },
  {
    id: 'shijing/29',
    title: '葛藟',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '绵绵葛藟，在河之浒。终远兄弟，谓他人父。',
    tags: ["王风","流离"]
  },
  {
    id: 'shijing/30',
    title: '溱洧',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '溱与洧，方涣涣兮。士与女，方秉蕑兮。',
    tags: ["郑风","爱情"]
  },
  {
    id: 'shijing/31',
    title: '女曰鸡鸣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '女曰鸡鸣，士曰昧旦。子兴视夜，明星有烂。',
    tags: ["郑风","夫妻"]
  },
  {
    id: 'shijing/32',
    title: '狡童',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '彼狡童兮，不与我言兮。维子之故，使我不能餐兮。',
    tags: ["郑风","爱情"]
  },
  {
    id: 'shijing/33',
    title: '出其东门',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '出其东门，有女如云。虽则如云，匪我思存。',
    tags: ["郑风","爱情"]
  },
  {
    id: 'shijing/34',
    title: '野有蔓草',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '野有蔓草，零露漙兮。有美一人，清扬婉兮。',
    tags: ["郑风","爱情"]
  },
  {
    id: 'shijing/35',
    title: '蒹葭',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
    tags: ["秦风","思慕"]
  },
  {
    id: 'shijing/36',
    title: '黄鸟',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '交交黄鸟，止于棘。谁从穆公？子车奄息。',
    tags: ["秦风","殉葬"]
  },
  {
    id: 'shijing/37',
    title: '七月',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '七月流火，九月授衣。一之日觱发，二之日栗烈。',
    tags: ["豳风","农事"]
  },
  {
    id: 'shijing/38',
    title: '鸱鸮',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '鸱鸮鸱鸮，既取我子，无毁我室！',
    tags: ["豳风","寓言"]
  },
  {
    id: 'shijing/39',
    title: '破斧',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '既破我斧，又缺我斨。周公东征，四国是皇。',
    tags: ["豳风","征役"]
  },
  {
    id: 'shijing/40',
    title: '伐柯',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '伐柯如何？匪斧不克。取妻如何？匪媒不得。',
    tags: ["豳风","婚姻"]
  },
  {
    id: 'shijing/41',
    title: '鹤鸣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '鹤鸣于九皋，声闻于野。鱼潜在渊，或在于渚。',
    tags: ["小雅","哲理"]
  },
  {
    id: 'shijing/42',
    title: '白驹',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '皎皎白驹，食我场苗。絷之维之，以永今朝。',
    tags: ["小雅","留客"]
  },
  {
    id: 'shijing/43',
    title: '蓼莪',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '蓼蓼者莪，匪莪伊蒿。哀哀父母，生我劬劳。',
    tags: ["小雅","孝思"]
  },
  {
    id: 'shijing/44',
    title: '常棣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '常棣之华，鄂不韡韡。凡今之人，莫如兄弟。',
    tags: ["小雅","兄弟"]
  },
  {
    id: 'shijing/45',
    title: '文王',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '文王在上，于昭于天。周虽旧邦，其命维新。',
    tags: ["大雅","颂祖"]
  },
  {
    id: 'shijing/46',
    title: '大明',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '明明在下，赫赫在上。天难忱斯，不易维王。',
    tags: ["大雅","史诗"]
  },
  {
    id: 'shijing/47',
    title: '绵',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '绵绵瓜瓞，民之初生，自土沮漆。',
    tags: ["大雅","史诗"]
  },
  {
    id: 'shijing/48',
    title: '生民',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '厥初生民，时维姜嫄。生民如何？克禋克祀。',
    tags: ["大雅","史诗"]
  },
  {
    id: 'shijing/49',
    title: '清庙',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '于穆清庙，肃雍显相。济济多士，秉文之德。',
    tags: ["周颂","祭祀"]
  },
  {
    id: 'shijing/50',
    title: '维天之命',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '维天之命，于穆不已。于乎不显，文王之德之纯。',
    tags: ["周颂","祭祀"]
  },
  {
    id: 'shijing/51',
    title: '关雎',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/52',
    title: '葛覃',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '葛之覃兮，施于中谷，维叶萋萋。黄鸟于飞，集于灌木，其鸣喈喈。',
    tags: ['国风', '生活']
  },
  {
    id: 'shijing/53',
    title: '卷耳',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '采采卷耳，不盈顷筐。嗟我怀人，置彼周行。',
    tags: ['国风', '相思']
  },
  {
    id: 'shijing/54',
    title: '樛木',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '南有樛木，葛藟累之。乐只君子，福履绥之。',
    tags: ['国风', '颂祝']
  },
  {
    id: 'shijing/55',
    title: '螽斯',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '螽斯羽，诜诜兮。宜尔子孙，振振兮。',
    tags: ['国风', '颂祝']
  },
  {
    id: 'shijing/56',
    title: '桃夭',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '桃之夭夭，灼灼其华。之子于归，宜其室家。',
    tags: ['国风', '婚嫁']
  },
  {
    id: 'shijing/57',
    title: '兔罝',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '肃肃兔罝，椓之丁丁。赳赳武夫，公侯干城。',
    tags: ['国风', '颂武']
  },
  {
    id: 'shijing/58',
    title: '芣苢',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '采采芣苢，薄言采之。采采芣苢，薄言有之。',
    tags: ['国风', '劳动']
  },
  {
    id: 'shijing/59',
    title: '汉广',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '南有乔木，不可休息。汉有游女，不可求思。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/60',
    title: '汝坟',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '遵彼汝坟，伐其条枚。未见君子，惄如调饥。',
    tags: ['国风', '相思']
  },
  {
    id: 'shijing/61',
    title: '麟之趾',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '麟之趾，振振公子，于嗟麟兮！',
    tags: ['国风', '颂祝']
  },
  {
    id: 'shijing/62',
    title: '鹊巢',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '维鹊有巢，维鸠居之。之子于归，百两御之。',
    tags: ['国风', '婚嫁']
  },
  {
    id: 'shijing/63',
    title: '采蘩',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '于以采蘩？于沼于沚。于以用之？公侯之事。',
    tags: ['国风', '祭祀']
  },
  {
    id: 'shijing/64',
    title: '草虫',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '喓喓草虫，趯趯阜螽。未见君子，忧心忡忡。',
    tags: ['国风', '相思']
  },
  {
    id: 'shijing/65',
    title: '采蘋',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '于以采蘋？南涧之滨。于以采藻？于彼行潦。',
    tags: ['国风', '祭祀']
  },
  {
    id: 'shijing/66',
    title: '甘棠',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '蔽芾甘棠，勿剪勿伐，召伯所茇。',
    tags: ['国风', '颂德']
  },
  {
    id: 'shijing/67',
    title: '行露',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '厌浥行露，岂不夙夜，谓行多露。',
    tags: ['国风', '说理']
  },
  {
    id: 'shijing/68',
    title: '羔羊',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '羔羊之皮，素丝五紽。退食自公，委蛇委蛇。',
    tags: ['国风', '颂德']
  },
  {
    id: 'shijing/69',
    title: '殷其雷',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '殷其雷，在南山之阳。何斯违斯，莫敢或遑？',
    tags: ['国风', '相思']
  },
  {
    id: 'shijing/70',
    title: '摽有梅',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '摽有梅，其实七兮。求我庶士，迨其吉兮。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/71',
    title: '小星',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '嘒彼小星，三五在东。肃肃宵征，夙夜在公。',
    tags: ['国风', '生活']
  },
  {
    id: 'shijing/72',
    title: '江有汜',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '江有汜，之子归，不我以。不我以，其后也悔。',
    tags: ['国风', '闺怨']
  },
  {
    id: 'shijing/73',
    title: '野有死麇',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '野有死麇，白茅包之。有女怀春，吉士诱之。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/74',
    title: '何彼秾矣',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '何彼秾矣？唐棣之华。曷不肃雍？王姬之车。',
    tags: ['国风', '颂祝']
  },
  {
    id: 'shijing/75',
    title: '驺虞',
    author: '佚名',
    dynasty: '周',
    category: 'shijing',
    categoryName: '诗经',
    content: '彼茁者葭，壹发五豝，于嗟乎驺虞！',
    tags: ['国风', '颂德']
  },
  {
    id: 'chuci/1',
    title: '离骚',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。',
    tags: ['长篇', '抒情']
  },
  {
    id: 'chuci/2',
    title: '九歌·湘夫人',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝子降兮北渚，目眇眇兮愁予。袅袅兮秋风，洞庭波兮木叶下。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/3',
    title: '九歌·山鬼',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '若有人兮山之阿，被薜荔兮带女萝。既含睇兮又宜笑，子慕予兮善窈窕。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/4',
    title: '天问',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '曰：遂古之初，谁传道之？上下未形，何由考之？',
    tags: ['长篇', '问天']
  },
  {
    id: 'chuci/5',
    title: '九歌·国殇',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '操吴戈兮被犀甲，车错毂兮短兵接。旌蔽日兮敌若云，矢交坠兮士争先。',
    tags: ['九歌', '祭祀']
  },
  {
    id: 'chuci/6',
    title: '九歌·东君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '暾将出兮东方，照吾槛兮扶桑。抚余马兮安驱，夜皎皎兮既明。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/7',
    title: '九章·橘颂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '后皇嘉树，橘徕服兮。受命不迁，生南国兮。深固难徙，更壹志兮。',
    tags: ['九章', '咏物']
  },
  {
    id: 'chuci/8',
    title: '招魂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '朕幼清以廉洁兮，身服义而未沫。主此盛德兮，牵于俗而芜秽。',
    tags: ['长篇', '招魂']
  },
  {
    id: 'chuci/9',
    title: '九歌·湘君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '君不行兮夷犹，蹇谁留兮中洲？美要眇兮宜修，沛吾乘兮桂舟。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/10',
    title: '九歌·河伯',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '与女游兮九河，冲风起兮水扬波。乘水车兮荷盖，驾两龙兮骖螭。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/11',
    title: '九章·涉江',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '余幼好此奇服兮，年既老而不衰。带长铗之陆离兮，冠切云之崔嵬。',
    tags: ['九章', '述志']
  },
  {
    id: 'chuci/12',
    title: '卜居',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '屈原既放，三年不得复见。竭知尽忠，而蔽障于谗。',
    tags: ['短篇', '问卜']
  },
  {
    id: 'chuci/13',
    title: '九歌·大司命',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '广开兮天门，纷吾乘兮玄云。令飘风兮先驱，使涷雨兮洒尘。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/14',
    title: '九歌·少司命',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '秋兰兮麋芜，罗生兮堂下。绿叶兮素华，芳菲菲兮袭予。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/15',
    title: '九章·哀郢',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '皇天之不纯命兮，何百姓之震愆？民离散而相失兮，方仲春而东迁。',
    tags: ['九章', '爱国']
  },
  {
    id: 'chuci/16',
    title: '远游',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悲时俗之迫阨兮，愿轻举而远游。质菲薄而无因兮，焉讬乘而上浮？',
    tags: ['长篇', '游仙']
  },
  {
    id: 'chuci/17',
    title: '渔父',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '屈原既放，游于江潭，行吟泽畔，颜色憔悴。',
    tags: ["辞赋","哲理"]
  },
  {
    id: 'chuci/18',
    title: '招隐士',
    author: '淮南小山',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '桂树丛生兮山之幽，偃蹇连蜷兮枝相缭。',
    tags: ["辞赋","招隐"]
  },
  {
    id: 'chuci/19',
    title: '七谏·初放',
    author: '东方朔',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '平生于国兮，皇考谥予曰正则。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/20',
    title: '九叹·逢纷',
    author: '刘向',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '伊伯庸之末胄兮，谅皇直之屈原。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/21',
    title: '九歌·云中君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '浴兰汤兮沐芳，华采衣兮若英。',
    tags: ["九歌","祭神"]
  },
  {
    id: 'chuci/22',
    title: '九歌·湘君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '君不行兮夷犹，蹇谁留兮中洲？',
    tags: ["九歌","爱情"]
  },
  {
    id: 'chuci/23',
    title: '九歌·礼魂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '成礼兮会鼓，传芭兮代舞，姱女倡兮容与。',
    tags: ["九歌","送神"]
  },
  {
    id: 'chuci/24',
    title: '九章·抽思',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '心郁郁之忧思兮，独永叹乎增伤。',
    tags: ["九章","放逐"]
  },
  {
    id: 'chuci/25',
    title: '九章·思美人',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '思美人兮，擥涕而竚眙。',
    tags: ["九章","思君"]
  },
  {
    id: 'chuci/26',
    title: '九辩',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悲哉秋之为气也！萧瑟兮草木摇落而变衰。',
    tags: ["悲秋","贫士"]
  },
  {
    id: 'chuci/27',
    title: '风赋',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '楚襄王游于兰台之宫，宋玉、景差侍。',
    tags: ["赋","讽喻"]
  },
  {
    id: 'chuci/28',
    title: '高唐赋',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '昔者楚襄王与宋玉游于云梦之台，望高唐之观。',
    tags: ["赋","神女"]
  },
  {
    id: 'chuci/29',
    title: '神女赋',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '楚襄王与宋玉游于云梦之浦，使玉赋高唐之事。',
    tags: ["赋","神女"]
  },
  {
    id: 'chuci/30',
    title: '登徒子好色赋',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '大夫登徒子侍于楚王，短宋玉曰："玉为人体貌闲丽。"',
    tags: ["赋","论辩"]
  },
  {
    id: 'chuci/31',
    title: '对楚王问',
    author: '宋玉',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '楚襄王问于宋玉曰："先生其有遗行与？"',
    tags: ["赋","论辩"]
  },
  {
    id: 'chuci/32',
    title: '吊屈原赋',
    author: '贾谊',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '恭承嘉惠兮，俟罪长沙。侧闻屈原兮，自沉汨罗。',
    tags: ["赋","吊古"]
  },
  {
    id: 'chuci/33',
    title: '鵩鸟赋',
    author: '贾谊',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '单阏之岁兮，四月孟夏，庚子日斜兮，鵩集予舍。',
    tags: ["赋","哲理"]
  },
  {
    id: 'chuci/34',
    title: '七谏·沉江',
    author: '东方朔',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '惟往古之得失兮，亦览此以制宜。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/35',
    title: '九怀·通路',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '天门兮地户，孰由兮贤者？',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/36',
    title: '九思·逢尤',
    author: '王逸',
    dynasty: '东汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悲兮愁，哀兮忧。天生我兮当闇时。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/37',
    title: '哀时命',
    author: '庄忌',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '哀时命之不及古人兮，夫何予生之不遘时！',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/38',
    title: '九怀·匡机',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悲哉于嗟兮，心内切离。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/39',
    title: '九叹·远逝',
    author: '刘向',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '志隐隐而郁怫兮，愁独哀而冤结。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/40',
    title: '九思·伤时',
    author: '王逸',
    dynasty: '东汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '惟昊天兮寥廓，余独悲兮蹙蹙。',
    tags: ["拟骚","伤时"]
  },
  {
    id: 'chuci/41',
    title: '九怀·危俊',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '陶嘉月兮总驾，搴玉英兮自修。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/42',
    title: '九叹·惜贤',
    author: '刘向',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '览屈氏之离骚兮，心哀哀而怫郁。',
    tags: ["拟骚","惜贤"]
  },
  {
    id: 'chuci/43',
    title: '九思·守志',
    author: '王逸',
    dynasty: '东汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '陟玉峦兮乘云，遂逍遥兮周游。',
    tags: ["拟骚","守志"]
  },
  {
    id: 'chuci/44',
    title: '九怀·昭世',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '览往昔兮俊彦，亦诎辱兮系累。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/45',
    title: '九叹·愍命',
    author: '刘向',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '昔皇考之嘉志兮，喜登能而显贤。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/46',
    title: '九思·疾世',
    author: '王逸',
    dynasty: '东汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '周徘徊兮汉渚，求水神兮灵女。',
    tags: ["拟骚","疾世"]
  },
  {
    id: 'chuci/47',
    title: '九怀·桐柏',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '天门兮崇高，乘气兮天街。',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/48',
    title: '九叹·思古',
    author: '刘向',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悲余心之悁悁兮，哀故都之颓荒。',
    tags: ["拟骚","思古"]
  },
  {
    id: 'chuci/49',
    title: '九思·遭厄',
    author: '王逸',
    dynasty: '东汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '悼屈子兮遭厄，沉湘水兮不还。',
    tags: ["拟骚","悼屈"]
  },
  {
    id: 'chuci/50',
    title: '九怀·蓄英',
    author: '王褒',
    dynasty: '西汉',
    category: 'chuci',
    categoryName: '楚辞',
    content: '览杳杳兮世惟，余惆怅兮何归！',
    tags: ["拟骚","抒怀"]
  },
  {
    id: 'chuci/51',
    title: '离骚·节选一',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/52',
    title: '离骚·节选二',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '皇览揆余初度兮，肇锡余以嘉名。名余曰正则兮，字余曰灵均。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/53',
    title: '离骚·节选三',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '日月忽其不淹兮，春与秋其代序。惟草木之零落兮，恐美人之迟暮。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/54',
    title: '离骚·节选四',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '长太息以掩涕兮，哀民生之多艰。余虽好修姱以鞿羁兮，謇朝谇而夕替。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/55',
    title: '离骚·节选五',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '亦余心之所善兮，虽九死其犹未悔。怨灵修之浩荡兮，终不察夫民心。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/56',
    title: '九歌·东皇太一',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '吉日兮辰良，穆将愉兮上皇。抚长剑兮玉珥，璆锵鸣兮琳琅。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/57',
    title: '九歌·云中君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '浴兰汤兮沐芳，华采衣兮若英。灵连蜷兮既留，烂昭昭兮未央。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/58',
    title: '九歌·湘君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '君不行兮夷犹，蹇谁留兮中洲？美要眇兮宜修，沛吾乘兮桂舟。',
    tags: ['楚辞', '爱情']
  },
  {
    id: 'chuci/59',
    title: '九歌·湘夫人',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝子降兮北渚，目眇眇兮愁予。袅袅兮秋风，洞庭波兮木叶下。',
    tags: ['楚辞', '爱情']
  },
  {
    id: 'chuci/60',
    title: '九歌·大司命',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '广开兮天门，纷吾乘兮玄云。令飘风兮先驱，使涷雨兮洒尘。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/61',
    title: '九歌·少司命',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '秋兰兮麋芜，罗生兮堂下。绿叶兮素华，芳菲菲兮袭予。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/62',
    title: '九歌·东君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '暾将出兮东方，照吾槛兮扶桑。抚余马兮安驱，夜皎皎兮既明。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/63',
    title: '九歌·河伯',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '与女游兮九河，冲风起兮横波。乘水车兮荷盖，驾两龙兮骖螭。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/64',
    title: '九歌·山鬼',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '若有人兮山之阿，被薜荔兮带女萝。既含睇兮又宜笑，子慕予兮善窈窕。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/65',
    title: '九歌·国殇',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '操吴戈兮被犀甲，车错毂兮短兵接。旌蔽日兮敌若云，矢交坠兮士争先。',
    tags: ['楚辞', '战争']
  },
  {
    id: 'chuci/66',
    title: '九歌·礼魂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '成礼兮会鼓，传芭兮代舞。姱女倡兮容与。春兰兮秋菊，长无绝兮终古。',
    tags: ['楚辞', '祭祀']
  },
  {
    id: 'chuci/67',
    title: '天问·节选一',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '曰：遂古之初，谁传道之？上下未形，何由考之？',
    tags: ['楚辞', '哲思']
  },
  {
    id: 'chuci/68',
    title: '九章·涉江',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '余幼好此奇服兮，年既老而不衰。带长铗之陆离兮，冠切云之崔嵬。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'chuci/69',
    title: '九章·哀郢',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '皇天之不纯命兮，何百姓之震愆？民离散而相失兮，方仲春而东迁。',
    tags: ['楚辞', '爱国']
  },
  {
    id: 'chuci/70',
    title: '卜居',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '屈原既放，三年不得复见。竭知尽忠而蔽障于谗。心烦虑乱，不知所从。',
    tags: ['楚辞', '抒怀']
  },
  {
    id: 'hanweishi/1',
    title: '短歌行',
    author: '曹操',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '对酒当歌，人生几何？譬如朝露，去日苦多。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'hanweishi/2',
    title: '观沧海',
    author: '曹操',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '东临碣石，以观沧海。水何澹澹，山岛竦峙。',
    tags: ['四言诗', '山水']
  },
  {
    id: 'hanweishi/3',
    title: '龟虽寿',
    author: '曹操',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '神龟虽寿，犹有竟时。腾蛇乘雾，终为土灰。',
    tags: ['四言诗', '抒怀']
  },
  {
    id: 'hanweishi/4',
    title: '蒿里行',
    author: '曹操',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '关东有义士，兴兵讨群凶。初期会盟津，乃心在咸阳。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'hanweishi/5',
    title: '燕歌行',
    author: '曹丕',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '秋风萧瑟天气凉，草木摇落露为霜。群燕辞归鹄南翔。',
    tags: ['七言诗', '秋思']
  },
  {
    id: 'hanweishi/6',
    title: '白马篇',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '白马饰金羁，连翩西北驰。借问谁家子，幽并游侠儿。',
    tags: ['乐府', '游侠']
  },
  {
    id: 'hanweishi/7',
    title: '七步诗',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '煮豆燃豆萁，豆在釜中泣。本是同根生，相煎何太急？',
    tags: ['五言诗', '讽喻']
  },
  {
    id: 'hanweishi/8',
    title: '洛神赋',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。',
    tags: ['辞赋', '爱情']
  },
  {
    id: 'hanweishi/9',
    title: '饮马长城窟行',
    author: '陈琳',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。',
    tags: ['乐府', '思妇']
  },
  {
    id: 'hanweishi/10',
    title: '古诗十九首·行行重行行',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '行行重行行，与君生别离。相去万余里，各在天一涯。',
    tags: ['五言诗', '离别']
  },
  {
    id: 'hanweishi/11',
    title: '长歌行',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。',
    tags: ["乐府","励志"]
  },
  {
    id: 'hanweishi/12',
    title: '迢迢牵牛星',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '迢迢牵牛星，皎皎河汉女。纤纤擢素手，札札弄机杼。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/13',
    title: '明月何皎皎',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '明月何皎皎，照我罗床帏。忧愁不能寐，揽衣起徘徊。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/14',
    title: '西北有高楼',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '西北有高楼，上与浮云齐。交疏结绮窗，阿阁三重阶。',
    tags: ["古诗十九首","抒怀"]
  },
  {
    id: 'hanweishi/15',
    title: '涉江采芙蓉',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '涉江采芙蓉，兰泽多芳草。采之欲遗谁？所思在远道。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/16',
    title: '苦寒行',
    author: '曹操',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '北上太行山，艰哉何巍巍！羊肠坂诘屈，车轮为之摧。',
    tags: ["乐府","行军"]
  },
  {
    id: 'hanweishi/17',
    title: '美女篇',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '美女妖且闲，采桑歧路间。柔条纷冉冉，落叶何翩翩。',
    tags: ["乐府","比兴"]
  },
  {
    id: 'hanweishi/18',
    title: '杂诗·南国有佳人',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '南国有佳人，容华若桃李。朝游江北岸，夕宿潇湘沚。',
    tags: ["五言诗","抒怀"]
  },
  {
    id: 'hanweishi/19',
    title: '送应氏',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '步登北邙阪，遥望洛阳山。洛阳何寂寞，宫室尽烧焚。',
    tags: ["五言诗","战乱"]
  },
  {
    id: 'hanweishi/20',
    title: '赠白马王彪',
    author: '曹植',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '谒帝承明庐，逝将归旧疆。清晨发皇邑，日夕过首阳。',
    tags: ["五言诗","赠别"]
  },
  {
    id: 'hanweishi/21',
    title: '七哀诗',
    author: '王粲',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '西京乱无象，豺虎方遘患。复弃中国去，委身适荆蛮。',
    tags: ["五言诗","战乱"]
  },
  {
    id: 'hanweishi/22',
    title: '登楼赋',
    author: '王粲',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '登兹楼以四望兮，聊暇日以销忧。',
    tags: ["辞赋","思乡"]
  },
  {
    id: 'hanweishi/23',
    title: '咏史',
    author: '班固',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '三王德弥薄，惟后用肉刑。太仓令有罪，就递长安城。',
    tags: ["五言诗","咏史"]
  },
  {
    id: 'hanweishi/24',
    title: '秋胡行',
    author: '傅玄',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '秋胡纳令室，三日宦他乡。皎皎洁妇姿，冷冷守空房。',
    tags: ["乐府","闺怨"]
  },
  {
    id: 'hanweishi/25',
    title: '古诗十九首·青青河畔草',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '青青河畔草，郁郁园中柳。盈盈楼上女，皎皎当窗牖。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/26',
    title: '古诗十九首·青青陵上柏',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '青青陵上柏，磊磊涧中石。人生天地间，忽如远行客。',
    tags: ["古诗十九首","人生"]
  },
  {
    id: 'hanweishi/27',
    title: '古诗十九首·今日良宴会',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '今日良宴会，欢乐难具陈。弹筝奋逸响，新声妙入神。',
    tags: ["古诗十九首","人生"]
  },
  {
    id: 'hanweishi/28',
    title: '古诗十九首·明月皎夜光',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '明月皎夜光，促织鸣东壁。玉衡指孟冬，众星何历历。',
    tags: ["古诗十九首","怨友"]
  },
  {
    id: 'hanweishi/29',
    title: '古诗十九首·冉冉孤生竹',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '冉冉孤生竹，结根泰山阿。与君为新婚，菟丝附女萝。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/30',
    title: '古诗十九首·庭中有奇树',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '庭中有奇树，绿叶发华滋。攀条折其荣，将以遗所思。',
    tags: ["古诗十九首","相思"]
  },
  {
    id: 'hanweishi/31',
    title: '古诗十九首·回车驾言迈',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '回车驾言迈，悠悠涉长道。四顾何茫茫，东风摇百草。',
    tags: ["古诗十九首","人生"]
  },
  {
    id: 'hanweishi/32',
    title: '古诗十九首·东城高且长',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '东城高且长，逶迤自相属。回风动地起，秋草萋已绿。',
    tags: ["古诗十九首","抒怀"]
  },
  {
    id: 'hanweishi/33',
    title: '古诗十九首·驱车上东门',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '驱车上东门，遥望郭北墓。白杨何萧萧，松柏夹广路。',
    tags: ["古诗十九首","人生"]
  },
  {
    id: 'hanweishi/34',
    title: '古诗十九首·去者日以疏',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '去者日以疏，来者日以亲。出郭门直视，但见丘与坟。',
    tags: ["古诗十九首","怀乡"]
  },
  {
    id: 'hanweishi/35',
    title: '古诗十九首·生年不满百',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '生年不满百，常怀千岁忧。昼短苦夜长，何不秉烛游！',
    tags: ["古诗十九首","人生"]
  },
  {
    id: 'hanweishi/36',
    title: '古诗十九首·凛凛岁云暮',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '凛凛岁云暮，蝼蛄夕鸣悲。凉风率已厉，游子寒无衣。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/37',
    title: '古诗十九首·孟冬寒气至',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '孟冬寒气至，北风何惨栗。愁多知夜长，仰观众星列。',
    tags: ["古诗十九首","思妇"]
  },
  {
    id: 'hanweishi/38',
    title: '古诗十九首·客从远方来',
    author: '佚名',
    dynasty: '汉',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '客从远方来，遗我一端绮。相去万余里，故人心尚尔。',
    tags: ["古诗十九首","爱情"]
  },
  {
    id: 'hanweishi/39',
    title: '燕歌行·别日何易会日难',
    author: '曹丕',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '别日何易会日难，山川悠远路漫漫。',
    tags: ["七言诗","思妇"]
  },
  {
    id: 'hanweishi/40',
    title: '杂诗·西北有浮云',
    author: '曹丕',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '西北有浮云，亭亭如车盖。惜哉时不遇，适与飘风会。',
    tags: ["五言诗","游子"]
  },
  {
    id: 'hanweishi/41',
    title: '咏怀诗·夜中不能寐',
    author: '阮籍',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '夜中不能寐，起坐弹鸣琴。薄帷鉴明月，清风吹我襟。',
    tags: ["咏怀","忧思"]
  },
  {
    id: 'hanweishi/42',
    title: '咏怀诗·嘉树下成蹊',
    author: '阮籍',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '嘉树下成蹊，东园桃与李。秋飞飞未央，胡然乃衰萎。',
    tags: ["咏怀","感时"]
  },
  {
    id: 'hanweishi/43',
    title: '赠秀才入军',
    author: '嵇康',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '良马既闲，丽服有晖。左揽繁弱，右接忘归。',
    tags: ["四言诗","赠别"]
  },
  {
    id: 'hanweishi/44',
    title: '幽愤诗',
    author: '嵇康',
    dynasty: '魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '嗟余薄祜，少遭不造。哀茕靡识，越在襁褓。',
    tags: ["四言诗","抒怀"]
  },
  {
    id: 'hanweishi/45',
    title: '悼亡诗',
    author: '潘岳',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '荏苒冬春谢，寒暑忽流易。之子归穷泉，重壤永幽隔。',
    tags: ["悼亡","悼妻"]
  },
  {
    id: 'hanweishi/46',
    title: '咏史·弱冠弄柔翰',
    author: '左思',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '弱冠弄柔翰，卓荦观群书。著论准《过秦》，作赋拟《子虚》。',
    tags: ["咏史","抒怀"]
  },
  {
    id: 'hanweishi/47',
    title: '咏史·郁郁涧底松',
    author: '左思',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '郁郁涧底松，离离山上苗。以彼径寸茎，荫此百尺条。',
    tags: ["咏史","讽喻"]
  },
  {
    id: 'hanweishi/48',
    title: '拟行行重行行',
    author: '陆机',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '昭昭清汉晖，粲粲光天步。牵牛西北回，织女东南顾。',
    tags: ["拟古","抒怀"]
  },
  {
    id: 'hanweishi/49',
    title: '扶风歌',
    author: '刘琨',
    dynasty: '西晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '朝发广莫门，莫宿丹水山。左手弯繁弱，右手挥龙渊。',
    tags: ["五言诗","抒怀"]
  },
  {
    id: 'hanweishi/50',
    title: '游仙诗',
    author: '郭璞',
    dynasty: '东晋',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '京华游侠窟，山林隐遁栖。朱门何足荣，未若托蓬莱。',
    tags: ["游仙","隐逸"]
  },
  {
    id: 'hanweishi/51',
    title: '蒿里行',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '关东有义士，兴兵讨群凶。初期会盟津，乃心在咸阳。',
    tags: ['乐府', '战争']
  },
  {
    id: 'hanweishi/52',
    title: '步出夏门行·冬十月',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '孟冬十月，北风徘徊，天气肃清，繁霜霏霏。',
    tags: ['乐府', '写景']
  },
  {
    id: 'hanweishi/53',
    title: '步出夏门行·河朔寒',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '乡土不同，河朔隆寒。流澌浮漂，舟船行难。',
    tags: ['乐府', '写景']
  },
  {
    id: 'hanweishi/54',
    title: '步出夏门行·神龟虽寿',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '神龟虽寿，犹有竟时。腾蛇乘雾，终为土灰。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'hanweishi/55',
    title: '短歌行·其二',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '周西伯昌，怀此圣德。三分天下，而有其二。',
    tags: ['乐府', '咏史']
  },
  {
    id: 'hanweishi/56',
    title: '善哉行·其一',
    author: '曹操',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '古公亶父，积德垂仁。思弘一道，哲王于豳。',
    tags: ['乐府', '咏史']
  },
  {
    id: 'hanweishi/57',
    title: '燕歌行·其二',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '别日何易会日难，山川悠远路漫漫。郁陶思君未敢言，寄声浮云往不还。',
    tags: ['乐府', '相思']
  },
  {
    id: 'hanweishi/58',
    title: '燕歌行·其三',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '秋风萧瑟天气凉，草木摇落露为霜，群燕辞归鹄南翔。',
    tags: ['乐府', '秋景']
  },
  {
    id: 'hanweishi/59',
    title: '大墙上蒿行',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '阳春无不长成，草木群类，随大风起，零落若何，翩翩。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'hanweishi/60',
    title: '杂诗·其一',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '漫漫秋夜长，烈烈北风凉。展转不能寐，披衣起彷徨。',
    tags: ['五言古诗', '秋夜']
  },
  {
    id: 'hanweishi/61',
    title: '杂诗·其二',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '西北有浮云，亭亭如车盖。惜哉时不遇，适与飘风会。',
    tags: ['五言古诗', '抒怀']
  },
  {
    id: 'hanweishi/62',
    title: '清河作诗',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '方舟戏长水，湛澹自浮沉。弦歌发中流，悲响有余音。',
    tags: ['五言古诗', '抒怀']
  },
  {
    id: 'hanweishi/63',
    title: '黎阳作诗',
    author: '曹丕',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '奉辞罚罪遐征，晨过黎山谽谺。济济鹭斯形庭，其会如林。',
    tags: ['四言诗', '战争']
  },
  {
    id: 'hanweishi/64',
    title: '送应氏·其一',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '步登北芒阪，遥望洛阳山。洛阳何寂寞，宫室尽烧焚。',
    tags: ['五言古诗', '战争']
  },
  {
    id: 'hanweishi/65',
    title: '送应氏·其二',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '清时难屡得，嘉会不可常。天地无终极，人命若朝霜。',
    tags: ['五言古诗', '送别']
  },
  {
    id: 'hanweishi/66',
    title: '杂诗·其一',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '高台多悲风，朝日照北林。之子在万里，江湖迥且深。',
    tags: ['五言古诗', '相思']
  },
  {
    id: 'hanweishi/67',
    title: '杂诗·其二',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '转蓬离本根，飘飖随长风。何意回飙举，吹我入云中。',
    tags: ['五言古诗', '抒怀']
  },
  {
    id: 'hanweishi/68',
    title: '杂诗·其三',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '西北有织妇，绮缟何缤纷。明晨秉机杼，日昃不成文。',
    tags: ['五言古诗', '闺怨']
  },
  {
    id: 'hanweishi/69',
    title: '杂诗·其四',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '南国有佳人，容华若桃李。朝游江北岸，夕宿潇湘沚。',
    tags: ['五言古诗', '抒怀']
  },
  {
    id: 'hanweishi/70',
    title: '杂诗·其五',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '仆夫早严驾，吾行将远游。远游欲何之？吴国为我仇。',
    tags: ['五言古诗', '壮志']
  },
  {
    id: 'hanweishi/71',
    title: '杂诗·其六',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '飞观百余尺，临牖御棂轩。远望周千里，朝夕见平原。',
    tags: ['五言古诗', '登临']
  },
  {
    id: 'hanweishi/72',
    title: '七哀诗',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '明月照高楼，流光正徘徊。上有愁思妇，悲叹有余哀。',
    tags: ['五言古诗', '闺怨']
  },
  {
    id: 'hanweishi/73',
    title: '情诗',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '微阴翳阳景，清风飘我衣。游鱼潜渌水，翔鸟薄天飞。',
    tags: ['五言古诗', '抒怀']
  },
  {
    id: 'hanweishi/74',
    title: '朔风诗',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '仰彼朔风，用怀魏都。愿骋代马，倏忽北徂。',
    tags: ['四言诗', '思乡']
  },
  {
    id: 'hanweishi/75',
    title: '白马篇',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '白马饰金羁，连翩西北驰。借问谁家子，幽并游侠儿。',
    tags: ['乐府', '游侠']
  },
  {
    id: 'hanweishi/76',
    title: '名都篇',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '名都多妖女，京洛出少年。宝剑值千金，被服丽且鲜。',
    tags: ['乐府', '游侠']
  },
  {
    id: 'hanweishi/77',
    title: '美女篇',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '美女妖且闲，采桑歧路间。柔条纷冉冉，落叶何翩翩。',
    tags: ['乐府', '咏美']
  },
  {
    id: 'hanweishi/78',
    title: '吁嗟篇',
    author: '曹植',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '吁嗟此转蓬，居世何独然。长去本根逝，夙夜无休闲。',
    tags: ['乐府', '咏物']
  },
  {
    id: 'hanweishi/79',
    title: '饮酒·其五',
    author: '陶渊明',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '结庐在人境，而无车马喧。问君何能尔？心远地自偏。',
    tags: ['五言古诗', '隐逸']
  },
  {
    id: 'hanweishi/80',
    title: '归园田居·其一',
    author: '陶渊明',
    dynasty: '汉魏',
    category: 'hanweishi',
    categoryName: '汉魏诗',
    content: '少无适俗韵，性本爱丘山。误落尘网中，一去三十年。',
    tags: ['五言古诗', '田园']
  },
  {
    id: 'yuefu/1',
    title: '孔雀东南飞',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '孔雀东南飞，五里一徘徊。十三能织素，十四学裁衣。十五弹箜篌，十六诵诗书。十七为君妇，心中常苦悲。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/2',
    title: '木兰诗',
    author: '佚名',
    dynasty: '南北朝',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/3',
    title: '陌上桑',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。罗敷喜蚕桑，采桑城南隅。青丝为笼系，桂枝为笼钩。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/4',
    title: '长歌行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？',
    tags: ['乐府', '励志']
  },
  {
    id: 'yuefu/5',
    title: '江南',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '江南可采莲，莲叶何田田。鱼戏莲叶间。鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。',
    tags: ['乐府', '写景']
  },
  {
    id: 'yuefu/6',
    title: '上邪',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '上邪，我欲与君相知，长命无绝衰。山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/7',
    title: '有所思',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '有所思，乃在大海南。何用问遗君，双珠玳瑁簪。用玉绍缭之。闻君有他心，拉杂摧烧之。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/8',
    title: '饮马长城窟行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '青青河边草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
    tags: ['乐府', '思妇']
  },
  {
    id: 'yuefu/9',
    title: '十五从军征',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '十五从军征，八十始得归。道逢乡里人：家中有阿谁？遥看是君家，松柏冢累累。兔从狗窦入，雉从梁上飞。',
    tags: ['乐府', '战争']
  },
  {
    id: 'yuefu/10',
    title: '战城南',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '战城南，死郭北，野死不葬乌可食。为我谓乌：且为客豪！野死谅不葬，腐肉安能去子逃？',
    tags: ['乐府', '战争']
  },
  {
    id: 'yuefu/11',
    title: '平陵东',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '平陵东，松柏桐，不知何人劫义公。劫义公，在高堂下，交钱百万两走马。两走马，亦诚难，顾见追吏心中恻。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/12',
    title: '东门行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '东门行，不顾归。来入门，怅欲悲。盎中无斗米储，还视架上无悬衣。拔剑东门去，舍中儿母牵衣啼。',
    tags: ['乐府', '社会']
  },
  {
    id: 'yuefu/13',
    title: '孤儿行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '孤儿生，孤子遇生，命独当苦。父母在时，乘坚车，驾驷马。父母已去，兄嫂令我行贾。南到九江，东到齐与鲁。',
    tags: ['乐府', '社会']
  },
  {
    id: 'yuefu/14',
    title: '病妇行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '妇病连年累岁，传呼丈人前一言。当言未及得言，不知泪下一何翩翩。属累君两三孤子，莫我儿饥且寒。',
    tags: ['乐府', '社会']
  },
  {
    id: 'yuefu/15',
    title: '白头吟',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '皑如山上雪，皎若云间月。闻君有两意，故来相决绝。今日斗酒会，明旦沟水头。躞蹀御沟上，沟水东西流。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/16',
    title: '雉子班',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '雉子班，如此！雉子班，至尊共食。雉子，幼孙！之于雉梁。无以吾翁孺，雉子。知得雉子高蜚止，黄鹄蜚。',
    tags: ['乐府', '寓言']
  },
  {
    id: 'yuefu/17',
    title: '圣人出',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '圣人出，阴阳和。美人出，游九河。美人出，游九河。浴湢沭，风其雨。美人归，遵大路。揽余辔，心内顾。',
    tags: ['乐府', '祭祀']
  },
  {
    id: 'yuefu/18',
    title: '邪径过空庐',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '邪径过空庐，好人常独居。不知何等物，下有一狐狸。狐狸得我便，上我床，寝我床。我欲搤持之，狸又瞋目怒。',
    tags: ['乐府', '寓言']
  },
  {
    id: 'yuefu/19',
    title: '巫山高',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '巫山高，高以大；淮水深，难以逝。我欲东归，害梁不为？我集无高曳，水何梁汤汤回回。',
    tags: ['乐府', '怀乡']
  },
  {
    id: 'yuefu/20',
    title: '上陵',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '上陵何美美，下津风以寒。问客从何来，言从水中央。桂树为君船，青丝为君笮，木兰为君棹，黄金错其间。',
    tags: ['乐府', '游仙']
  },
  {
    id: 'yuefu/21',
    title: '相逢行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '相逢狭路间，道隘不容车。不知何年少，夹毂问君家。君家诚易知，易知复难忘。黄金为君门，白玉为君堂。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/22',
    title: '陇西行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '陇西行，十里一走马，五里一扬鞭。都护军书至，匈奴围酒泉。关山正飞雪，烽火断无烟。',
    tags: ['乐府', '边塞']
  },
  {
    id: 'yuefu/23',
    title: '梁甫吟',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '步出齐城门，遥望荡阴里。里中有三坟，累累正相似。问是谁家墓，田疆古冶氏。力能排南山，又能绝地纪。',
    tags: ['乐府', '咏史']
  },
  {
    id: 'yuefu/24',
    title: '幽兰操',
    author: '韩愈',
    dynasty: '唐',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '幽兰操，习习谷风，以阴以雨。之子于归，远送于野。何彼苍天，不得其所。逍遥九州，无所定处。',
    tags: ['乐府', '咏物']
  },
  {
    id: 'yuefu/25',
    title: '将进酒',
    author: '李白',
    dynasty: '唐',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '将进酒，乘大白。辨加哉，诗审搏。放故歌，心所作。同阴气，诗吟成。使君起，舞洛津。小复住，为君斯。',
    tags: ['乐府', '饮酒']
  },
  {
    id: 'yuefu/26',
    title: '君马黄',
    author: '李白',
    dynasty: '唐',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '君马黄，臣马苍，二马同逐臣马良。易之有騩蔡有赭，美人归以南，驾车驰马，美人伤我心。',
    tags: ['乐府', '抒情']
  },
  {
    id: 'yuefu/27',
    title: '芳树',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '芳树日月，君乱如于风。芳树不上，无心温而鹄。三而为行，临兰池，心中怀我怅。心不可匡，目不可顾。',
    tags: ['乐府', '写景']
  },
  {
    id: 'yuefu/28',
    title: '鼓吹曲',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '有所思，思昔君。我欲与君相知，长命无绝衰。山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。',
    tags: ['乐府', '音乐']
  },
  {
    id: 'yuefu/29',
    title: '薤露',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '薤上露，何易晞。露晞明朝更复落，人死一去何时归。',
    tags: ['乐府', '挽歌']
  },
  {
    id: 'yuefu/30',
    title: '蒿里',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '蒿里谁家地，聚敛魂魄无贤愚。鬼伯一何相催促，人命不得少踟蹰。',
    tags: ['乐府', '挽歌']
  },
  {
    id: 'yuefu/31',
    title: '鸡鸣',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '鸡鸣高树颠，狗吠深宫中。荡子何所之，天下方太平。刑法非有贷，柔协正乱名。黄金为君门，璧玉为轩堂。',
    tags: ['乐府', '社会']
  },
  {
    id: 'yuefu/32',
    title: '平陵曲',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '平陵东，松柏桐，不知何人劫义公。劫义公，在高堂下，交钱百万两走马。两走马，亦诚难，顾见追吏心中恻。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/33',
    title: '陌上歌',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '陌上桑，日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。罗敷喜蚕桑，采桑城南隅。青丝为笼系，桂枝为笼钩。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/34',
    title: '长歌续短歌',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '长歌行，青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？',
    tags: ['乐府', '励志']
  },
  {
    id: 'yuefu/35',
    title: '君子行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '君子行，君子防未然，不处嫌疑间。瓜田不纳履，李下不正冠。嫂叔不亲授，长幼不比肩。劳谦得其柄，和光甚独难。',
    tags: ['乐府', '哲理']
  },
  {
    id: 'yuefu/36',
    title: '猛虎行',
    author: '李白',
    dynasty: '唐',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '猛虎行，饥不从猛虎食，暮不从野雀栖。野雀安无巢，游子为谁骄？',
    tags: ['乐府', '言志']
  },
  {
    id: 'yuefu/37',
    title: '相逢狭路间',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '相逢行，相逢狭路间，道隘不容车。不知何年少，夹毂问君家。君家诚易知，易知复难忘。黄金为君门，白玉为君堂。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/38',
    title: '长安有狭斜行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '长安有狭斜行，长安有狭斜，狭斜不容车。适逢两少年，夹毂问君家。君家新市傍，易知复难忘。大子二千石，中子孝廉郎。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/39',
    title: '饮马行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '饮马长城窟行，青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
    tags: ['乐府', '边塞']
  },
  {
    id: 'yuefu/40',
    title: '青青河畔草',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。梦见在我傍，忽觉在他乡。他乡各异县，展转不相见。',
    tags: ['乐府', '思妇']
  },
  {
    id: 'yuefu/41',
    title: '关雎',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '关雎，关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/42',
    title: '蒹葭',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。',
    tags: ['乐府', '思慕']
  },
  {
    id: 'yuefu/43',
    title: '桃夭',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '桃之夭夭，灼灼其华。之子于归，宜其室家。桃之夭夭，有蕡其实。之子于归，宜其家室。桃之夭夭，其叶蓁蓁。',
    tags: ['乐府', '婚嫁']
  },
  {
    id: 'yuefu/44',
    title: '氓',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。',
    tags: ['乐府', '弃妇']
  },
  {
    id: 'yuefu/45',
    title: '采薇',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '采薇采薇，薇亦作止。曰归曰归，岁亦莫止。靡室靡家，猃狁之故。不遑启居，猃狁之故。',
    tags: ['乐府', '征戍']
  },
  {
    id: 'yuefu/46',
    title: '鹿鸣',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。吹笙鼓簧，承筐是将。人之好我，示我周行。',
    tags: ['乐府', '宴饮']
  },
  {
    id: 'yuefu/47',
    title: '静女',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '静女其姝，俟我于城隅。爱而不见，搔首踟蹰。静女其娈，贻我彤管。彤管有炜，说怿女美。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/48',
    title: '木瓜',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '投我以木瓜，报之以琼琚。匪报也，永以为好也。投我以木桃，报之以琼瑶。匪报也，永以为好也。',
    tags: ['乐府', '友谊']
  },
  {
    id: 'yuefu/49',
    title: '硕鼠',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。逝将去女，适彼乐土。乐土乐土，爰得我所。',
    tags: ['乐府', '讽刺']
  },
  {
    id: 'yuefu/50',
    title: '伐檀',
    author: '佚名',
    dynasty: '先秦',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '坎坎伐檀兮，置之河之干兮，河水清且涟猗。不稼不穑，胡取禾三百廛兮？不狩不猎，胡瞻尔庭有县貆兮？',
    tags: ['乐府', '劳动']
  },
  {
    id: 'yuefu/51',
    title: '长歌行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。',
    tags: ['乐府', '惜时']
  },
  {
    id: 'yuefu/52',
    title: '君子行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '君子防未然，不处嫌疑间。瓜田不纳履，李下不整冠。',
    tags: ['乐府', '说理']
  },
  {
    id: 'yuefu/53',
    title: '相逢行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '相逢狭路间，道隘不容车。不知何年少，夹毂问君家。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/54',
    title: '善哉行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '来日大难，口燥唇干。今日相乐，皆当喜欢。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'yuefu/55',
    title: '西门行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '出西门，步念之。今日不作乐，当待何时？',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'yuefu/56',
    title: '东门行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '出东门，不顾归。来入门，怅欲悲。盎中无斗米储，还视架上无悬衣。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/57',
    title: '妇病行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '妇病连年累岁，传呼丈人前一言。当言未及得言，不知泪下一何翩翩。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/58',
    title: '孤儿行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '孤儿生，孤子遇生，命独当苦。父母在时，乘坚车，驾驷马。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/59',
    title: '雁门太守行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '孝和帝在时，洛阳令王君。本自益州广汉蜀民，少行宦学。',
    tags: ['乐府', '颂德']
  },
  {
    id: 'yuefu/60',
    title: '战城南',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '战城南，死郭北，野死不葬乌可食。为我谓乌：且为客豪！',
    tags: ['乐府', '战争']
  },
  {
    id: 'yuefu/61',
    title: '巫山高',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '巫山高，高以大；淮水深，难以逝。我欲东归，害梁不为？',
    tags: ['乐府', '思乡']
  },
  {
    id: 'yuefu/62',
    title: '有所思',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '有所思，乃在大海南。何用问遗君，双珠玳瑁簪。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/63',
    title: '上邪',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '上邪！我欲与君相知，长命无绝衰。山无陵，江水为竭。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/64',
    title: '江南',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '江南可采莲，莲叶何田田。鱼戏莲叶间。鱼戏莲叶东。',
    tags: ['乐府', '写景']
  },
  {
    id: 'yuefu/65',
    title: '鸡鸣',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '鸡鸣高树颠，狗吠深宫中。荡子何所之，天下方太平。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/66',
    title: '乌生',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '乌生八九子，端坐秦氏桂树间。唶我！秦氏家有游遨荡子。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/67',
    title: '平陵东',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '平陵东，松柏桐，不知何人劫义公。劫义公，在高堂下。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/68',
    title: '陌上桑',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '日出东南隅，照我秦氏楼。秦氏有好女，自名为罗敷。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'yuefu/69',
    title: '长歌行·其二',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '岩岩山上亭，皎皎云间星。远望使心怀，游子恋所生。',
    tags: ['乐府', '思乡']
  },
  {
    id: 'yuefu/70',
    title: '猛虎行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '饥不从猛虎食，暮不从野雀栖。泽中野鹊有其群，哀鸣求其匹。',
    tags: ['乐府', '抒怀']
  },
  {
    id: 'yuefu/71',
    title: '枯鱼过河泣',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '枯鱼过河泣，何时悔复及。作书与鲂鱮，相教慎出入。',
    tags: ['乐府', '寓言']
  },
  {
    id: 'yuefu/72',
    title: '饮马长城窟行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '青青河畔草，绵绵思远道。远道不可思，宿昔梦见之。',
    tags: ['乐府', '相思']
  },
  {
    id: 'yuefu/73',
    title: '十五从军征',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '十五从军征，八十始得归。道逢乡里人，家中有阿谁？',
    tags: ['乐府', '战争']
  },
  {
    id: 'yuefu/74',
    title: '步出夏门行',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '邪径过空庐，好人常独居。卒得神仙道，上与天相扶。',
    tags: ['乐府', '游仙']
  },
  {
    id: 'yuefu/75',
    title: '李陵歌',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '径万里兮度沙幕，为君将兮奋匈奴。身穷困兮辱其主，虽欲报兮将安归！',
    tags: ['乐府', '悲歌']
  },
  {
    id: 'yuefu/76',
    title: '北方有佳人',
    author: '李延年',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '北方有佳人，绝世而独立。一顾倾人城，再顾倾人国。',
    tags: ['乐府', '咏美']
  },
  {
    id: 'yuefu/77',
    title: '怨歌行',
    author: '班婕妤',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '新裂齐纨素，皎洁如霜雪。裁为合欢扇，团团似明月。',
    tags: ['乐府', '闺怨']
  },
  {
    id: 'yuefu/78',
    title: '四愁诗',
    author: '张衡',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '我所思兮在太山，欲往从之梁父艰，侧身东望涕沾翰。',
    tags: ['楚辞体', '相思']
  },
  {
    id: 'yuefu/79',
    title: '孔雀东南飞',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '孔雀东南飞，五里一徘徊。十三能织素，十四学裁衣。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'yuefu/80',
    title: '木兰辞',
    author: '佚名',
    dynasty: '汉',
    category: 'yuefu',
    categoryName: '乐府诗',
    content: '唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。',
    tags: ['乐府', '英雄']
  },
  {
    id: 'nanbeichao/1',
    title: '登池上楼',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '登池上楼。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '抒情']
  },
  {
    id: 'nanbeichao/2',
    title: '山居赋',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '山居赋。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '赋']
  },
  {
    id: 'nanbeichao/3',
    title: '石壁精舍还湖中作',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '石壁精舍还湖中作。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '写景']
  },
  {
    id: 'nanbeichao/4',
    title: '夜宿桐柏山',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '夜宿桐柏山。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '行旅']
  },
  {
    id: 'nanbeichao/5',
    title: '入彭蠡湖口',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '入彭蠡湖口。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '写景']
  },
  {
    id: 'nanbeichao/6',
    title: '过始宁墅',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '过始宁墅。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '田园']
  },
  {
    id: 'nanbeichao/7',
    title: '从斤竹涧越岭溪行',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '从斤竹涧越岭溪行。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '纪行']
  },
  {
    id: 'nanbeichao/8',
    title: '晚出西射堂',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '晚出西射堂。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '咏怀']
  },
  {
    id: 'nanbeichao/9',
    title: '登江中孤屿',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '登江中孤屿。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '写景']
  },
  {
    id: 'nanbeichao/10',
    title: '初去郡',
    author: '谢灵运',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '初去郡。这是南朝代诗人谢灵运的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['山水', '隐逸']
  },
  {
    id: 'nanbeichao/11',
    title: '拟行路难·其一',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '拟行路难·其一。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '咏怀']
  },
  {
    id: 'nanbeichao/12',
    title: '拟行路难·其六',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '拟行路难·其六。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '咏怀']
  },
  {
    id: 'nanbeichao/13',
    title: '梅花落',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '梅花落。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '抒情']
  },
  {
    id: 'nanbeichao/14',
    title: '代出自蓟北门行',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '代出自蓟北门行。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['边塞', '乐府']
  },
  {
    id: 'nanbeichao/15',
    title: '赠故人',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '赠故人。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['赠别', '友谊']
  },
  {
    id: 'nanbeichao/16',
    title: '咏史',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '咏史。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏史', '怀古']
  },
  {
    id: 'nanbeichao/17',
    title: '芜城赋',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '芜城赋。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['赋', '怀古']
  },
  {
    id: 'nanbeichao/18',
    title: '登黄鹤矶',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '登黄鹤矶。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['登临', '写景']
  },
  {
    id: 'nanbeichao/19',
    title: '日落望江赠荀丞',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '日落望江赠荀丞。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['赠别', '思乡']
  },
  {
    id: 'nanbeichao/20',
    title: '玩月城西门廨中',
    author: '鲍照',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '玩月城西门廨中。这是南朝代诗人鲍照的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏月', '抒情']
  },
  {
    id: 'nanbeichao/21',
    title: '归园田居·其一',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '归园田居·其一。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['田园', '隐逸']
  },
  {
    id: 'nanbeichao/22',
    title: '归园田居·其三',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '归园田居·其三。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['田园', '劳动']
  },
  {
    id: 'nanbeichao/23',
    title: '饮酒·其五',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '饮酒·其五。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['田园', '饮酒']
  },
  {
    id: 'nanbeichao/24',
    title: '桃花源记',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '桃花源记。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['散文', '理想']
  },
  {
    id: 'nanbeichao/25',
    title: '五柳先生传',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '五柳先生传。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['散文', '自传']
  },
  {
    id: 'nanbeichao/26',
    title: '归去来兮辞',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '归去来兮辞。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['辞赋', '隐逸']
  },
  {
    id: 'nanbeichao/27',
    title: '咏荆轲',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '咏荆轲。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏史', '豪放']
  },
  {
    id: 'nanbeichao/28',
    title: '读山海经·其一',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '读山海经·其一。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['读书', '抒怀']
  },
  {
    id: 'nanbeichao/29',
    title: '杂诗·其一',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '杂诗·其一。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏怀', '人生']
  },
  {
    id: 'nanbeichao/30',
    title: '移居·其一',
    author: '陶渊明',
    dynasty: '东晋',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '移居·其一。这是东晋代诗人陶渊明的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['田园', '友谊']
  },
  {
    id: 'nanbeichao/31',
    title: '木兰诗',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '木兰诗。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '叙事']
  },
  {
    id: 'nanbeichao/32',
    title: '敕勒歌',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '敕勒歌。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '写景']
  },
  {
    id: 'nanbeichao/33',
    title: '陇头歌辞',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '陇头歌辞。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '羁旅']
  },
  {
    id: 'nanbeichao/34',
    title: '折杨柳歌辞',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '折杨柳歌辞。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '爱情']
  },
  {
    id: 'nanbeichao/35',
    title: '琅琊王歌辞',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '琅琊王歌辞。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '豪侠']
  },
  {
    id: 'nanbeichao/36',
    title: '地驱歌乐辞',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '地驱歌乐辞。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '生活']
  },
  {
    id: 'nanbeichao/37',
    title: '雀劳利歌辞',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '雀劳利歌辞。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '讽刺']
  },
  {
    id: 'nanbeichao/38',
    title: '慕容家自鲁企由谷歌',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '慕容家自鲁企由谷歌。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '爱情']
  },
  {
    id: 'nanbeichao/39',
    title: '捉搦歌',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '捉搦歌。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '婚姻']
  },
  {
    id: 'nanbeichao/40',
    title: '河中之水歌',
    author: '佚名',
    dynasty: '北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '河中之水歌。这是北朝代诗人佚名的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['民歌', '叙事']
  },
  {
    id: 'nanbeichao/41',
    title: '春别诗四首·其一',
    author: '萧子显',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '春别诗四首·其一。这是南朝代诗人萧子显的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['离别', '爱情']
  },
  {
    id: 'nanbeichao/42',
    title: '玉树后庭花',
    author: '陈叔宝',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '玉树后庭花。这是南朝代诗人陈叔宝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['宫体', '咏物']
  },
  {
    id: 'nanbeichao/43',
    title: '乌栖曲',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '乌栖曲。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['宫体', '爱情']
  },
  {
    id: 'nanbeichao/44',
    title: '咏内人昼眠',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '咏内人昼眠。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['宫体', '咏人']
  },
  {
    id: 'nanbeichao/45',
    title: '春江花月夜',
    author: '陈叔宝',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '春江花月夜。这是南朝代诗人陈叔宝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['宫体', '写景']
  },
  {
    id: 'nanbeichao/46',
    title: '三妇艳词',
    author: '萧统',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '三妇艳词。这是南朝代诗人萧统的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '生活']
  },
  {
    id: 'nanbeichao/47',
    title: '采莲曲',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '采莲曲。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '写景']
  },
  {
    id: 'nanbeichao/48',
    title: '棹歌行',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '棹歌行。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '行旅']
  },
  {
    id: 'nanbeichao/49',
    title: '大堤曲',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '大堤曲。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['乐府', '爱情']
  },
  {
    id: 'nanbeichao/50',
    title: '浴女诗',
    author: '萧纲',
    dynasty: '南朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '浴女诗。这是南朝代诗人萧纲的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['宫体', '咏人']
  },
  {
    id: 'nanbeichao/51',
    title: '登池上楼',
    author: '谢灵运',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '潜虬媚幽姿，飞鸿响远音。薄霄愧云浮，栖川怍渊沉。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/52',
    title: '石壁精舍还湖中作',
    author: '谢灵运',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '昏旦变气候，山水含清晖。清晖能娱人，游子憺忘归。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/53',
    title: '七里濑',
    author: '谢灵运',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '羁心积秋晨，晨积展游眺。孤客伤逝湍，徒旅苦奔峭。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/54',
    title: '登江中孤屿',
    author: '谢灵运',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '江南倦历览，江北旷周旋。怀新道转迥，寻异景不延。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/55',
    title: '夜宿石门诗',
    author: '谢灵运',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '朝搴苑中兰，畏彼霜下歇。暝还云际宿，寻此石上月。',
    tags: ['五言古诗', '隐逸']
  },
  {
    id: 'nanbeichao/56',
    title: '晚登三山还望京邑',
    author: '谢朓',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '灞涘望长安，河阳视京县。白日丽飞甍，参差皆可见。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/57',
    title: '之宣城郡出新林浦向板桥',
    author: '谢朓',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '江路西南指，悲歌且长吟。天际识归舟，云中辨江树。',
    tags: ['五言古诗', '羁旅']
  },
  {
    id: 'nanbeichao/58',
    title: '游东田',
    author: '谢朓',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '戚戚苦无悰，携手共行乐。寻云陟累榭，随山望菌阁。',
    tags: ['五言古诗', '游记']
  },
  {
    id: 'nanbeichao/59',
    title: '玉阶怨',
    author: '谢朓',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '夕殿下珠帘，流萤飞息壁。长夜缝罗衣，思君此何极。',
    tags: ['五言绝句', '闺怨']
  },
  {
    id: 'nanbeichao/60',
    title: '王孙游',
    author: '谢朓',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '绿草蔓如丝，杂树红英发。无论君不归，君归芳已歇。',
    tags: ['五言绝句', '相思']
  },
  {
    id: 'nanbeichao/61',
    title: '入若耶溪',
    author: '王籍',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '艅艎何泛泛，空水共悠悠。阴霞生远岫，阳景逐回流。',
    tags: ['五言古诗', '山水']
  },
  {
    id: 'nanbeichao/62',
    title: '临高台',
    author: '王融',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '游人欲骋望，积步上高台。井莲当夏吐，窗桂逐秋开。',
    tags: ['乐府', '登临']
  },
  {
    id: 'nanbeichao/63',
    title: '巫山高',
    author: '王融',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '想象巫山高，薄暮阳台曲。烟云乍舒卷，猿鸟时断续。',
    tags: ['乐府', '写景']
  },
  {
    id: 'nanbeichao/64',
    title: '别范安成',
    author: '沈约',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '生平少年日，分手易前期。及尔同衰暮，非复别离时。',
    tags: ['五言古诗', '送别']
  },
  {
    id: 'nanbeichao/65',
    title: '伤谢朓',
    author: '沈约',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '吏部信才杰，文锋振奇响。调与金石谐，思逐风云上。',
    tags: ['五言古诗', '悼亡']
  },
  {
    id: 'nanbeichao/66',
    title: '咏芙蓉',
    author: '沈约',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '微风摇紫叶，轻露拂朱房。中池所以绿，待我泛红光。',
    tags: ['五言绝句', '咏物']
  },
  {
    id: 'nanbeichao/67',
    title: '拟行路难·其三',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '璇闺玉墀上椒阁，文窗绣户垂罗幕。中有一人字金兰，被服纤罗采芳藿。',
    tags: ['七言古诗', '闺怨']
  },
  {
    id: 'nanbeichao/68',
    title: '拟行路难·其四',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '泻水置平地，各自东西南北流。人生亦有命，安能行叹复坐愁？',
    tags: ['七言古诗', '抒怀']
  },
  {
    id: 'nanbeichao/69',
    title: '拟行路难·其六',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '对案不能食，拔剑击柱长叹息。丈夫生世会几时，安能蹀躞垂羽翼？',
    tags: ['七言古诗', '壮志']
  },
  {
    id: 'nanbeichao/70',
    title: '代出自蓟北门行',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '羽檄起边亭，烽火入咸阳。征骑屯广武，分兵救朔方。',
    tags: ['乐府', '边塞']
  },
  {
    id: 'nanbeichao/71',
    title: '代东武吟',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '主人且勿喧，贱子歌一言。仆本寒乡士，出身蒙汉恩。',
    tags: ['乐府', '战争']
  },
  {
    id: 'nanbeichao/72',
    title: '咏史',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '五都矜财雄，三川养声利。百金不市死，明经有高位。',
    tags: ['五言古诗', '咏史']
  },
  {
    id: 'nanbeichao/73',
    title: '赠傅都曹别',
    author: '鲍照',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '轻鸿戏江潭，孤雁集洲沚。邂逅两相亲，缘念共无已。',
    tags: ['五言古诗', '赠别']
  },
  {
    id: 'nanbeichao/74',
    title: '北山移文',
    author: '孔稚珪',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '钟山之英，草堂之灵，驰烟驿路，勒移山庭。',
    tags: ['骈文', '讽刺']
  },
  {
    id: 'nanbeichao/75',
    title: '与朱元思书',
    author: '吴均',
    dynasty: '南北朝',
    category: 'nanbeichao',
    categoryName: '南北朝诗',
    content: '风烟俱净，天山共色。从流飘荡，任意东西。',
    tags: ['骈文', '山水']
  },
  {
    id: 'wudai/1',
    title: '虞美人·春花秋月何时了',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '虞美人·春花秋月何时了。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '亡国']
  },
  {
    id: 'wudai/2',
    title: '浪淘沙·帘外雨潺潺',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '浪淘沙·帘外雨潺潺。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '亡国']
  },
  {
    id: 'wudai/3',
    title: '相见欢·无言独上西楼',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '相见欢·无言独上西楼。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '离愁']
  },
  {
    id: 'wudai/4',
    title: '相见欢·林花谢了春红',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '相见欢·林花谢了春红。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '惜春']
  },
  {
    id: 'wudai/5',
    title: '乌夜啼·昨夜风兼雨',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '乌夜啼·昨夜风兼雨。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '秋夜']
  },
  {
    id: 'wudai/6',
    title: '子夜歌·人生愁恨何能免',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '子夜歌·人生愁恨何能免。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '愁思']
  },
  {
    id: 'wudai/7',
    title: '望江南·多少恨',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '望江南·多少恨。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '忆旧']
  },
  {
    id: 'wudai/8',
    title: '望江南·多少泪',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '望江南·多少泪。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '悲伤']
  },
  {
    id: 'wudai/9',
    title: '清平乐·别来春半',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '清平乐·别来春半。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '思念']
  },
  {
    id: 'wudai/10',
    title: '采桑子·亭前春逐红英尽',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '采桑子·亭前春逐红英尽。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春愁']
  },
  {
    id: 'wudai/11',
    title: '菩萨蛮·花明月暗笼轻雾',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '菩萨蛮·花明月暗笼轻雾。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '爱情']
  },
  {
    id: 'wudai/12',
    title: '菩萨蛮·蓬莱院闭天台女',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '菩萨蛮·蓬莱院闭天台女。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '爱情']
  },
  {
    id: 'wudai/13',
    title: '菩萨蛮·铜簧韵脆锵寒竹',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '菩萨蛮·铜簧韵脆锵寒竹。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '音乐']
  },
  {
    id: 'wudai/14',
    title: '阮郎归·呈郑王十二弟',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '阮郎归·呈郑王十二弟。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '赠别']
  },
  {
    id: 'wudai/15',
    title: '捣练子令·深院静',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '捣练子令·深院静。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '秋夜']
  },
  {
    id: 'wudai/16',
    title: '捣练子令·云鬓乱',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '捣练子令·云鬓乱。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春情']
  },
  {
    id: 'wudai/17',
    title: '浣溪沙·红日已高三丈透',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '浣溪沙·红日已高三丈透。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '宫廷']
  },
  {
    id: 'wudai/18',
    title: '玉楼春·晚妆初了明肌雪',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '玉楼春·晚妆初了明肌雪。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '宫廷']
  },
  {
    id: 'wudai/19',
    title: '一斛珠·晓妆初过',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '一斛珠·晓妆初过。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '美人']
  },
  {
    id: 'wudai/20',
    title: '临江仙·樱桃落尽春归去',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '临江仙·樱桃落尽春归去。这是五朝代诗人李煜的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '伤春']
  },
  {
    id: 'wudai/21',
    title: '鹊踏枝·谁道闲情抛掷久',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '鹊踏枝·谁道闲情抛掷久。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '闲情']
  },
  {
    id: 'wudai/22',
    title: '鹊踏枝·几日行云何处去',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '鹊踏枝·几日行云何处去。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '思念']
  },
  {
    id: 'wudai/23',
    title: '鹊踏枝·庭院深深深几许',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '鹊踏枝·庭院深深深几许。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '闺怨']
  },
  {
    id: 'wudai/24',
    title: '采桑子·花前失却游春侣',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '采桑子·花前失却游春侣。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '孤独']
  },
  {
    id: 'wudai/25',
    title: '采桑子·笙歌放散人归去',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '采桑子·笙歌放散人归去。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '寂寞']
  },
  {
    id: 'wudai/26',
    title: '谒金门·风乍起',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '谒金门·风乍起。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '闺怨']
  },
  {
    id: 'wudai/27',
    title: '谒金门·杨柳陌',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '谒金门·杨柳陌。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春景']
  },
  {
    id: 'wudai/28',
    title: '清平乐·雨晴烟晚',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '清平乐·雨晴烟晚。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春愁']
  },
  {
    id: 'wudai/29',
    title: '清平乐·西园春早',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '清平乐·西园春早。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春景']
  },
  {
    id: 'wudai/30',
    title: '醉桃源·南园春半踏青时',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '醉桃源·南园春半踏青时。这是五朝代诗人冯延巳的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春游']
  },
  {
    id: 'wudai/31',
    title: '浣溪沙·五两竿头风欲平',
    author: '和凝',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '浣溪沙·五两竿头风欲平。这是五朝代诗人和凝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '行旅']
  },
  {
    id: 'wudai/32',
    title: '江城子·竹里风生月上门',
    author: '和凝',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '江城子·竹里风生月上门。这是五朝代诗人和凝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '爱情']
  },
  {
    id: 'wudai/33',
    title: '临江仙·海棠香老春江晚',
    author: '和凝',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '临江仙·海棠香老春江晚。这是五朝代诗人和凝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '春愁']
  },
  {
    id: 'wudai/34',
    title: '菩萨蛮·越梅半拆轻寒里',
    author: '和凝',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '菩萨蛮·越梅半拆轻寒里。这是五朝代诗人和凝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '咏梅']
  },
  {
    id: 'wudai/35',
    title: '菩萨蛮·含峰帽底纤腰袅',
    author: '和凝',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '菩萨蛮·含峰帽底纤腰袅。这是五朝代诗人和凝的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '美人']
  },
  {
    id: 'wudai/36',
    title: '渔歌子·西塞山前白鹭飞',
    author: '张志和',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '渔歌子·西塞山前白鹭飞。这是唐代诗人张志和的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '隐逸']
  },
  {
    id: 'wudai/37',
    title: '渔歌子·钓台渔父褐为裘',
    author: '张志和',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '渔歌子·钓台渔父褐为裘。这是唐代诗人张志和的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '隐逸']
  },
  {
    id: 'wudai/38',
    title: '渔歌子·霅溪湾里钓鱼翁',
    author: '张志和',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '渔歌子·霅溪湾里钓鱼翁。这是唐代诗人张志和的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '隐逸']
  },
  {
    id: 'wudai/39',
    title: '潇湘神·斑竹枝',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '潇湘神·斑竹枝。这是唐代诗人刘禹锡的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '怀古']
  },
  {
    id: 'wudai/40',
    title: '潇湘神·湘水流',
    author: '刘禹锡',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '潇湘神·湘水流。这是唐代诗人刘禹锡的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '怀古']
  },
  {
    id: 'wudai/41',
    title: '梦江南·兰烬落',
    author: '皇甫松',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '梦江南·兰烬落。这是唐代诗人皇甫松的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '思乡']
  },
  {
    id: 'wudai/42',
    title: '梦江南·楼上寝',
    author: '皇甫松',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '梦江南·楼上寝。这是唐代诗人皇甫松的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '忆旧']
  },
  {
    id: 'wudai/43',
    title: '采莲子·菡萏香连十顷陂',
    author: '皇甫松',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '采莲子·菡萏香连十顷陂。这是唐代诗人皇甫松的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '采莲']
  },
  {
    id: 'wudai/44',
    title: '采莲子·船动湖光滟滟秋',
    author: '皇甫松',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '采莲子·船动湖光滟滟秋。这是唐代诗人皇甫松的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '采莲']
  },
  {
    id: 'wudai/45',
    title: '忆江南·江南好',
    author: '白居易',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '忆江南·江南好。这是唐代诗人白居易的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '忆旧']
  },
  {
    id: 'wudai/46',
    title: '忆江南·江南忆',
    author: '白居易',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '忆江南·江南忆。这是唐代诗人白居易的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '忆旧']
  },
  {
    id: 'wudai/47',
    title: '长相思·汴水流',
    author: '白居易',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '长相思·汴水流。这是唐代诗人白居易的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '相思']
  },
  {
    id: 'wudai/48',
    title: '长相思·深画眉',
    author: '白居易',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '长相思·深画眉。这是唐代诗人白居易的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '相思']
  },
  {
    id: 'wudai/49',
    title: '更漏子·玉炉香',
    author: '温庭筠',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '更漏子·玉炉香。这是唐代诗人温庭筠的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '闺怨']
  },
  {
    id: 'wudai/50',
    title: '更漏子·金雀钗',
    author: '温庭筠',
    dynasty: '唐',
    category: 'wudai',
    categoryName: '五代词',
    content: '更漏子·金雀钗。这是唐代诗人温庭筠的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '闺怨']
  },
  {
    id: 'wudai/51',
    title: '虞美人·春花秋月何时了',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/52',
    title: '浪淘沙令·帘外雨潺潺',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/53',
    title: '相见欢·无言独上西楼',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '无言独上西楼，月如钩。寂寞梧桐深院锁清秋。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/54',
    title: '相见欢·林花谢了春红',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '林花谢了春红，太匆匆。无奈朝来寒雨晚来风。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/55',
    title: '清平乐·别来春半',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。',
    tags: ['婉约派', '相思']
  },
  {
    id: 'wudai/56',
    title: '忆江南·多少恨',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '多少恨，昨夜梦魂中。还似旧时游上苑，车如流水马如龙。',
    tags: ['婉约派', '怀旧']
  },
  {
    id: 'wudai/57',
    title: '忆江南·多少泪',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '多少泪，沾袖复垂胸。伤感春光留不住，斑斑点点湿罗衣。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/58',
    title: '子夜歌·人生愁恨何能了',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '人生愁恨何能了，销魂独我情何限。故国梦重归，觉来双泪垂。',
    tags: ['婉约派', '亡国']
  },
  {
    id: 'wudai/59',
    title: '捣练子令·深院静',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '深院静，小庭空，断续寒砧断续风。无奈夜长人不寐，数声和月到帘栊。',
    tags: ['婉约派', '秋夜']
  },
  {
    id: 'wudai/60',
    title: '采桑子·辘轳金井梧桐晚',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '辘轳金井梧桐晚，几树惊秋。昼雨新愁，百尺虾须上玉钩。',
    tags: ['婉约派', '秋景']
  },
  {
    id: 'wudai/61',
    title: '菩萨蛮·花明月暗笼轻雾',
    author: '李煜',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '花明月暗笼轻雾，今宵好向郎边去。刬袜步香阶，手提金缕鞋。',
    tags: ['婉约派', '爱情']
  },
  {
    id: 'wudai/62',
    title: '鹊踏枝·谁道闲情抛掷久',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '谁道闲情抛掷久？每到春来，惆怅还依旧。日日花前常病酒，不辞镜里朱颜瘦。',
    tags: ['婉约派', '闲情']
  },
  {
    id: 'wudai/63',
    title: '谒金门·风乍起',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '风乍起，吹皱一池春水。闲引鸳鸯香径里，手挼红杏蕊。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'wudai/64',
    title: '采桑子·群芳过后西湖好',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '群芳过后西湖好，狼籍残红。飞絮濛濛。垂柳阑干尽日风。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'wudai/65',
    title: '醉花间·晴雪小园春未到',
    author: '冯延巳',
    dynasty: '五代',
    category: 'wudai',
    categoryName: '五代词',
    content: '晴雪小园春未到，池面梅花粉早。数枝萼，几枝开，待得春来花更好。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'mingqingshi/1',
    title: '石灰吟',
    author: '于谦',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '石灰吟。这是明代诗人于谦的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '言志']
  },
  {
    id: 'mingqingshi/2',
    title: '咏煤炭',
    author: '于谦',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '咏煤炭。这是明代诗人于谦的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '言志']
  },
  {
    id: 'mingqingshi/3',
    title: '过零丁洋',
    author: '文天祥',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '过零丁洋。这是宋代诗人文天祥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '叙事']
  },
  {
    id: 'mingqingshi/4',
    title: '正气歌',
    author: '文天祥',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '正气歌。这是宋代诗人文天祥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '咏怀']
  },
  {
    id: 'mingqingshi/5',
    title: '金陵驿',
    author: '文天祥',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '金陵驿。这是宋代诗人文天祥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '怀古']
  },
  {
    id: 'mingqingshi/6',
    title: '满江红·怒发冲冠',
    author: '岳飞',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '满江红·怒发冲冠。这是宋代诗人岳飞的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '爱国']
  },
  {
    id: 'mingqingshi/7',
    title: '满江红·登黄鹤楼有感',
    author: '岳飞',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '满江红·登黄鹤楼有感。这是宋代诗人岳飞的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '怀古']
  },
  {
    id: 'mingqingshi/8',
    title: '小重山·昨夜寒蛩不住鸣',
    author: '岳飞',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '小重山·昨夜寒蛩不住鸣。这是宋代诗人岳飞的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '报国']
  },
  {
    id: 'mingqingshi/9',
    title: '游山西村',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '游山西村。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['田园', '纪游']
  },
  {
    id: 'mingqingshi/10',
    title: '书愤',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '书愤。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '咏怀']
  },
  {
    id: 'mingqingshi/11',
    title: '示儿',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '示儿。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '绝笔']
  },
  {
    id: 'mingqingshi/12',
    title: '秋夜将晓出篱门迎凉有感',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '秋夜将晓出篱门迎凉有感。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '忧民']
  },
  {
    id: 'mingqingshi/13',
    title: '十一月四日风雨大作',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '十一月四日风雨大作。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '抒怀']
  },
  {
    id: 'mingqingshi/14',
    title: '金错刀行',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '金错刀行。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '言志']
  },
  {
    id: 'mingqingshi/15',
    title: '关山月',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '关山月。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['爱国', '边塞']
  },
  {
    id: 'mingqingshi/16',
    title: '卜算子·咏梅',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '卜算子·咏梅。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '咏物']
  },
  {
    id: 'mingqingshi/17',
    title: '钗头凤·红酥手',
    author: '陆游',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '钗头凤·红酥手。这是宋代诗人陆游的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '爱情']
  },
  {
    id: 'mingqingshi/18',
    title: '青玉案·元夕',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '青玉案·元夕。这是宋代诗人辛弃疾的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '元宵']
  },
  {
    id: 'mingqingshi/19',
    title: '破阵子·为陈同甫赋壮词以寄之',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '破阵子·为陈同甫赋壮词以寄之。这是宋代诗人辛弃疾的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '军旅']
  },
  {
    id: 'mingqingshi/20',
    title: '永遇乐·京口北固亭怀古',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '永遇乐·京口北固亭怀古。这是宋代诗人辛弃疾的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '怀古']
  },
  {
    id: 'mingqingshi/21',
    title: '桃花庵歌',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '桃花庵歌。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['隐逸', '饮酒']
  },
  {
    id: 'mingqingshi/22',
    title: '把酒对月歌',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '把酒对月歌。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏月', '抒怀']
  },
  {
    id: 'mingqingshi/23',
    title: '言志',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '言志。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['言志', '隐逸']
  },
  {
    id: 'mingqingshi/24',
    title: '画鸡',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '画鸡。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '题画']
  },
  {
    id: 'mingqingshi/25',
    title: '咏鸡诗',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '咏鸡诗。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '题画']
  },
  {
    id: 'mingqingshi/26',
    title: '落花诗',
    author: '唐寅',
    dynasty: '明',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '落花诗。这是明代诗人唐寅的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '伤春']
  },
  {
    id: 'mingqingshi/27',
    title: '题画竹',
    author: '郑板桥',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '题画竹。这是清代诗人郑板桥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '题画']
  },
  {
    id: 'mingqingshi/28',
    title: '竹石',
    author: '郑板桥',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '竹石。这是清代诗人郑板桥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '言志']
  },
  {
    id: 'mingqingshi/29',
    title: '潍县署中画竹呈年伯包大中丞括',
    author: '郑板桥',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '潍县署中画竹呈年伯包大中丞括。这是清代诗人郑板桥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['题画', '忧民']
  },
  {
    id: 'mingqingshi/30',
    title: '予告归里画竹别潍县绅士民',
    author: '郑板桥',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '予告归里画竹别潍县绅士民。这是清代诗人郑板桥的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['题画', '告别']
  },
  {
    id: 'mingqingshi/31',
    title: '沁园春·雪',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '沁园春·雪。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '咏雪']
  },
  {
    id: 'mingqingshi/32',
    title: '沁园春·长沙',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '沁园春·长沙。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '抒怀']
  },
  {
    id: 'mingqingshi/33',
    title: '七律·长征',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '七律·长征。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['七言', '长征']
  },
  {
    id: 'mingqingshi/34',
    title: '七律·人民解放军占领南京',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '七律·人民解放军占领南京。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['七言', '革命']
  },
  {
    id: 'mingqingshi/35',
    title: '水调歌头·游泳',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '水调歌头·游泳。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '游泳']
  },
  {
    id: 'mingqingshi/36',
    title: '蝶恋花·答李淑一',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '蝶恋花·答李淑一。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['婉约', '悼亡']
  },
  {
    id: 'mingqingshi/37',
    title: '卜算子·咏梅',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '卜算子·咏梅。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '言志']
  },
  {
    id: 'mingqingshi/38',
    title: '菩萨蛮·黄鹤楼',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '菩萨蛮·黄鹤楼。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '怀古']
  },
  {
    id: 'mingqingshi/39',
    title: '清平乐·六盘山',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '清平乐·六盘山。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '长征']
  },
  {
    id: 'mingqingshi/40',
    title: '忆秦娥·娄山关',
    author: '毛泽东',
    dynasty: '近代',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '忆秦娥·娄山关。这是近代诗人毛泽东的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['豪放', '战争']
  },
  {
    id: 'mingqingshi/41',
    title: '己亥杂诗·浩荡离愁白日斜',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '己亥杂诗·浩荡离愁白日斜。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['七言', '抒怀']
  },
  {
    id: 'mingqingshi/42',
    title: '己亥杂诗·九州生气恃风雷',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '己亥杂诗·九州生气恃风雷。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['七言', '社会']
  },
  {
    id: 'mingqingshi/43',
    title: '己亥杂诗·只筹一缆十夫多',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '己亥杂诗·只筹一缆十夫多。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['七言', '社会']
  },
  {
    id: 'mingqingshi/44',
    title: '咏史',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '咏史。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏史', '讽喻']
  },
  {
    id: 'mingqingshi/45',
    title: '夜坐',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '夜坐。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏怀', '感时']
  },
  {
    id: 'mingqingshi/46',
    title: '西郊落花歌',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '西郊落花歌。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '伤春']
  },
  {
    id: 'mingqingshi/47',
    title: '秋心三首·其一',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '秋心三首·其一。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏怀', '悲秋']
  },
  {
    id: 'mingqingshi/48',
    title: '赋得秋河',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '赋得秋河。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏物', '抒情']
  },
  {
    id: 'mingqingshi/49',
    title: '投宋于庭',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '投宋于庭。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['赠友', '抒怀']
  },
  {
    id: 'mingqingshi/50',
    title: '自春徂秋偶有所触',
    author: '龚自珍',
    dynasty: '清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '自春徂秋偶有所触。这是清代诗人龚自珍的代表作品。诗歌以其精湛的艺术技巧和深挚的思想感情，流传千古。',
    tags: ['咏怀', '感时']
  },
  {
    id: 'mingqingshi/51',
    title: '登金陵雨花台望大江',
    author: '高启',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '大江来从万山中，山势尽与江流东。钟山如龙独西上，欲破巨浪乘长风。',
    tags: ['七言古诗', '登临']
  },
  {
    id: 'mingqingshi/52',
    title: '梅花九首·其一',
    author: '高启',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '琼姿只合在瑶台，谁向江南处处栽。雪满山中高士卧，月明林下美人来。',
    tags: ['七言律诗', '咏物']
  },
  {
    id: 'mingqingshi/53',
    title: '寻胡隐君',
    author: '高启',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '渡水复渡水，看花还看花。春风江上路，不觉到君家。',
    tags: ['五言绝句', '访友']
  },
  {
    id: 'mingqingshi/54',
    title: '田家行',
    author: '高启',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '中田有禾穗不长，肥水竭尽禾根黄。县吏夜来急如火，未熟先催输官仓。',
    tags: ['乐府', '悯农']
  },
  {
    id: 'mingqingshi/55',
    title: '卖柑者言',
    author: '刘基',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '杭有卖果者，善藏柑，涉寒暑不溃。出之烨然，玉质而金色。',
    tags: ['散文', '寓言']
  },
  {
    id: 'mingqingshi/56',
    title: '题太公钓渭图',
    author: '刘基',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '璇室群酣夜，璜溪独钓时。浮云看富贵，流水淡须眉。',
    tags: ['五言律诗', '咏史']
  },
  {
    id: 'mingqingshi/57',
    title: '北风行',
    author: '刘基',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '城外萧萧北风起，城上健儿吹落耳。将军玉帐貂鼠衣，手持酒杯看雪飞。',
    tags: ['七言古诗', '边塞']
  },
  {
    id: 'mingqingshi/58',
    title: '马上作',
    author: '戚继光',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '南北驱驰报主情，江花边草笑平生。一年三百六十日，多是横戈马上行。',
    tags: ['七言绝句', '军旅']
  },
  {
    id: 'mingqingshi/59',
    title: '韬钤深处',
    author: '戚继光',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '小筑惭高枕，忧时旧有盟。呼尊来揖客，挥麈坐谈兵。',
    tags: ['五言律诗', '军旅']
  },
  {
    id: 'mingqingshi/60',
    title: '临江仙·滚滚长江东逝水',
    author: '杨慎',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。',
    tags: ['词', '咏史']
  },
  {
    id: 'mingqingshi/61',
    title: '西江月·道德三皇五帝',
    author: '杨慎',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '道德三皇五帝，功名夏后商周。五霸七雄闹春秋，顷刻兴亡过手。',
    tags: ['词', '咏史']
  },
  {
    id: 'mingqingshi/62',
    title: '三岔驿',
    author: '杨慎',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '三岔驿，十字路，北去南来几朝暮。朝见扬扬拥盖来，暮看寂寂回车去。',
    tags: ['乐府', '咏世']
  },
  {
    id: 'mingqingshi/63',
    title: '寄答张孟威',
    author: '杨士奇',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '去年逢君黄花秋，尊前共醉黄花楼。今年黄花依旧发，万里相思天际头。',
    tags: ['七言古诗', '相思']
  },
  {
    id: 'mingqingshi/64',
    title: '秦淮海祠',
    author: '杨士奇',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '策马出东城，孤舟渺何之。忆昔全盛日，兹馆乃在兹。',
    tags: ['五言古诗', '怀古']
  },
  {
    id: 'mingqingshi/65',
    title: '五人墓碑记',
    author: '张溥',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '五人者，盖当蓼洲周公之被逮，激于义而死焉者也。',
    tags: ['散文', '忠义']
  },
  {
    id: 'mingqingshi/66',
    title: '秋日杂诗',
    author: '曹学佺',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '秋风一以深，百草乃俱瘁。昆虫各有时，吾生亦何贵。',
    tags: ['五言古诗', '秋景']
  },
  {
    id: 'mingqingshi/67',
    title: '马上口号',
    author: '于谦',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '医国医心无别剂，圣贤书是起死丹。古来豪杰多苦心，忍痛须臾何足难。',
    tags: ['七言绝句', '抒怀']
  },
  {
    id: 'mingqingshi/68',
    title: '石灰吟',
    author: '于谦',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '千锤万凿出深山，烈火焚烧若等闲。粉骨碎身浑不怕，要留清白在人间。',
    tags: ['七言绝句', '咏物']
  },
  {
    id: 'mingqingshi/69',
    title: '入塞',
    author: '于谦',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '将军传令出居庸，万骑如云一鼓攻。胡骑已从平日遁，边尘不似向来浓。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'mingqingshi/70',
    title: '咏煤炭',
    author: '于谦',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '凿开混沌得乌金，藏蓄阳和意最深。爝火燃回春浩浩，洪炉照破夜沉沉。',
    tags: ['七言律诗', '咏物']
  },
  {
    id: 'mingqingshi/71',
    title: '己亥杂诗·其一二五',
    author: '龚自珍',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。',
    tags: ['七言绝句', '抒怀']
  },
  {
    id: 'mingqingshi/72',
    title: '己亥杂诗·其五',
    author: '龚自珍',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '浩荡离愁白日斜，吟鞭东指即天涯。落红不是无情物，化作春泥更护花。',
    tags: ['七言绝句', '抒怀']
  },
  {
    id: 'mingqingshi/73',
    title: '己亥杂诗·其二二零',
    author: '龚自珍',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。',
    tags: ['七言绝句', '抒怀']
  },
  {
    id: 'mingqingshi/74',
    title: '秋兴',
    author: '黄景仁',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '满目江山涕泪频，谁从沧海问迷津。岂期诸葛终军旅，又见汾阳老本兵。',
    tags: ['七言律诗', '抒怀']
  },
  {
    id: 'mingqingshi/75',
    title: '杂感',
    author: '黄景仁',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '仙佛茫茫两未成，只知独夜不平鸣。风蓬飘尽悲歌气，泥絮沾来薄幸名。',
    tags: ['七言律诗', '抒怀']
  },
  {
    id: 'mingqingshi/76',
    title: '绮怀十六首·其十五',
    author: '黄景仁',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '几回花下坐吹箫，银汉红墙入望遥。似此星辰非昨夜，为谁风露立中宵。',
    tags: ['七言律诗', '爱情']
  },
  {
    id: 'mingqingshi/77',
    title: '别老母',
    author: '黄景仁',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '搴帷拜母河梁去，白发愁看泪眼枯。惨惨柴门风雪夜，此时有子不如无。',
    tags: ['七言绝句', '亲情']
  },
  {
    id: 'mingqingshi/78',
    title: '苔',
    author: '袁枚',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '白日不到处，青春恰自来。苔花如米小，也学牡丹开。',
    tags: ['五言绝句', '咏物']
  },
  {
    id: 'mingqingshi/79',
    title: '马嵬',
    author: '袁枚',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '莫唱当年长恨歌，人间亦自有银河。石壕村里夫妻别，泪比长生殿上多。',
    tags: ['七言绝句', '咏史']
  },
  {
    id: 'mingqingshi/80',
    title: '寒夜',
    author: '袁枚',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '寒夜读书忘却眠，锦衾香尽炉无烟。美人含怒夺灯去，问郎知是几更天！',
    tags: ['七言绝句', '生活']
  },
  {
    id: 'mingqingshi/81',
    title: '论诗五首·其二',
    author: '赵翼',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '李杜诗篇万口传，至今已觉不新鲜。江山代有才人出，各领风骚数百年。',
    tags: ['七言绝句', '论诗']
  },
  {
    id: 'mingqingshi/82',
    title: '秋柳四首·其一',
    author: '王士禛',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '秋来何处最销魂？残照西风白下门。他日差池春燕影，祗今憔悴晚烟痕。',
    tags: ['七言律诗', '咏物']
  },
  {
    id: 'mingqingshi/83',
    title: '真州绝句',
    author: '王士禛',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '江干多是钓人居，柳陌菱塘一带疏。好是日斜风定后，半江红树卖鲈鱼。',
    tags: ['七言绝句', '写景']
  },
  {
    id: 'mingqingshi/84',
    title: '题秋江独钓图',
    author: '王士禛',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '一蓑一笠一扁舟，一夫丝纶一寸钩。一曲高歌一樽酒，一人独钓一江秋。',
    tags: ['七言绝句', '题画']
  },
  {
    id: 'mingqingshi/85',
    title: '浣溪沙·谁念西风独自凉',
    author: '纳兰性德',
    dynasty: '明清',
    category: 'mingqingshi',
    categoryName: '明清诗词',
    content: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。',
    tags: ['词', '悼亡']
  }
]

const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = 20

const filteredPoems = computed(() => {
  if (activeCategory.value === 'all') {
    return poems
  }
  return poems.filter(poem => poem.category === activeCategory.value)
})

const totalCount = computed(() => filteredPoems.value.length)
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const paginatedPoems = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredPoems.value.slice(start, end)
})

const pageNumbers = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push({ type: 'page', number: i })
    }
    return pages
  }

  pages.push({ type: 'page', number: 1 })

  if (current > 3) {
    pages.push({ type: 'ellipsis' })
  }

  const startPage = Math.max(2, current - 2)
  const endPage = Math.min(total - 1, current + 2)
  for (let i = startPage; i <= endPage; i++) {
    pages.push({ type: 'page', number: i })
  }

  if (current < total - 2) {
    pages.push({ type: 'ellipsis' })
  }

  pages.push({ type: 'page', number: total })

  return pages
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function getPoemLink(poem) {
  return `/shici/${poem.id}`
}

function getCoverColor(title) {
  const colors = ['#85662e', '#9a7a42', '#ad8e56', '#b8956a', '#c4a35a', '#9a7a42']
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}
</script>

<template>
  <div class="library-page">
    <aside class="library-sidebar">
      <div class="sidebar-title">题材分类</div>
      <nav class="category-nav">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="category-item"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </nav>
    </aside>

    <main class="library-main">
      <div class="library-header">
        <h2 class="header-title">全部作品</h2>
        <span class="header-count">共 {{ totalCount }} 首</span>
      </div>

      <div class="poems-grid">
        <a
          v-for="poem in paginatedPoems"
          :key="poem.id"
          :href="getPoemLink(poem)"
          class="poem-card"
        >
          <div class="poem-cover">
            <div class="cover-spine" :style="{ backgroundColor: getCoverColor(poem.title) }"></div>
            <div class="cover-body">
              <div class="cover-circle"></div>
            </div>
          </div>
          <div class="poem-info">
            <h3 class="poem-title">{{ poem.title }}</h3>
            <div class="poem-author">[{{ poem.dynasty }}] {{ poem.author }}</div>
            <p class="poem-content">{{ poem.content }}</p>
            <div class="poem-tags">
              <span v-for="tag in poem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>

      <div v-if="filteredPoems.length === 0" class="empty-state">
        <p>该分类下暂无诗词</p>
      </div>

      <div v-if="totalPages > 1" class="pagination">
        <button
          class="page-btn"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          上一页
        </button>
        <template v-for="(item, index) in pageNumbers" :key="index">
          <span v-if="item.type === 'ellipsis'" class="page-ellipsis">...</span>
          <button
            v-else
            class="page-btn"
            :class="{ active: currentPage === item.number }"
            @click="goToPage(item.number)"
          >
            {{ item.number }}
          </button>
        </template>
        <button
          class="page-btn"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          下一页
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.library-page {
  display: flex;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
}

.library-sidebar {
  width: 180px;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 12px;
}

.category-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border: none;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.category-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.category-item.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.library-main {
  flex: 1;
  min-width: 0;
}

.library-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.header-count {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.poems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.poem-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.poem-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .poem-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.poem-cover {
  width: 72px;
  height: 96px;
  flex-shrink: 0;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: #f5f0e8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.dark .poem-cover {
  background: #2a2a2a;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.cover-spine {
  width: 6px;
  flex-shrink: 0;
}

.cover-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cover-circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-3);
  border-radius: 50%;
  opacity: 0.4;
  position: absolute;
  right: 8px;
  bottom: 8px;
}

.poem-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.poem-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.poem-author {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}

.poem-content {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.poem-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 3px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--vp-c-text-3);
}

@media (max-width: 960px) {
  .library-page {
    flex-direction: column;
    gap: 20px;
    padding: 24px 16px;
  }

  .library-sidebar {
    width: 100%;
  }

  .category-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .category-item {
    width: auto;
    padding: 6px 14px;
  }

  .poems-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .library-page {
    padding: 16px 12px;
  }

  .poem-card {
    padding: 16px;
  }

  .poem-cover {
    width: 60px;
    height: 80px;
  }

  .poem-title {
    font-size: 15px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}

.page-btn {
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  min-width: 40px;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.page-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.page-ellipsis {
  padding: 8px 4px;
  color: var(--vp-c-text-3);
  font-size: 14px;
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
