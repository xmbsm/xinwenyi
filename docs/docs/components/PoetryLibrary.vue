<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', name: '全部' },
  { id: 'tangshi', name: '唐诗' },
  { id: 'songci', name: '宋词' },
  { id: 'yuanqu', name: '元曲' },
  { id: 'shijing', name: '诗经' },
  { id: 'chuci', name: '楚辞' },
  { id: 'hanweishi', name: '汉魏诗' }
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
    tags: ['婉约派', '春景']
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
        <button
          v-for="page in totalPages"
          :key="page"
          class="page-btn"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
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

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
