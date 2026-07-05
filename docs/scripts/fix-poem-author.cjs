const fs = require('fs')
const path = require('path')

const shiciDir = path.join(__dirname, '..', 'shici')

const authors = {
  '佚名': { years: '不详', desc: '古代佚名诗人，其作品流传千古，作者姓名已不可考。这些作品多来自民间，反映了当时的社会生活和人民的思想感情。', link: '' },
  '谢灵运': { years: '385年－433年', desc: '东晋末年至南朝宋初年的著名诗人，被誉为山水诗派的开创者。其诗善于描绘自然景物，语言精雕细琢，对后世山水诗的发展产生了深远影响。', link: '' },
  '鲍照': { years: '约415年－470年', desc: '南朝宋著名文学家，字明远。其诗风格俊逸豪放，擅长乐府诗和七言诗，对唐代诗歌发展有重要影响。与谢灵运、颜延之并称元嘉三大家。', link: '' },
  '庾信': { years: '513年－581年', desc: '南北朝时期著名文学家，字子山。早年与徐陵齐名，并称徐庾。其诗赋风格华丽，晚年因经历亡国之痛，作品转为沉郁苍凉，对唐代诗歌影响深远。', link: '' },
  '谢朓': { years: '464年－499年', desc: '南朝齐著名诗人，字玄晖。与谢灵运同族，人称小谢。其诗风格清新秀丽，擅长山水诗，对仗工整，对唐代近体诗的形成有重要影响。', link: '' },
  '沈约': { years: '441年－513年', desc: '南朝梁著名文学家、史学家，字休文。竟陵八友之一，创四声八病之说，对近体诗的形成有重要贡献。其诗风格清丽，注重声律。', link: '' },
  '何逊': { years: '约472年－约519年', desc: '南朝梁诗人，字仲言。其诗风格清新自然，擅长写景和抒情，尤以山水诗和赠别诗著称。与阴铿齐名，并称阴何。', link: '' },
  '王融': { years: '467年－493年', desc: '南朝齐文学家，字元长。竟陵八友之一，其诗讲究声律，文辞富丽，对永明体的形成有重要贡献。', link: '' },
  '吴均': { years: '469年－520年', desc: '南朝梁文学家，字叔庠。其诗风格清新挺拔，擅长山水写景，时称吴均体。也擅长骈文，尤以小品书札著称。', link: '' },
  '王籍': { years: '不详', desc: '南朝梁诗人，字文海。其诗擅长写景，以《入若耶溪》最为著名，其中蝉噪林逾静，鸟鸣山更幽两句，被誉为千古名句。', link: '' },
  '孔稚珪': { years: '447年－501年', desc: '南朝齐文学家，字德璋。其文辞工丽，尤以《北山移文》最为著名，文章风格诙谐犀利，是南朝骈文的名篇。', link: '' },
  '颜延之': { years: '384年－456年', desc: '南朝宋文学家，字延年。与谢灵运齐名，并称颜谢，同为元嘉三大家之一。其诗好用典故，讲究雕琢，风格凝重华丽。', link: '' },
  '李煜': { years: '937年－978年', desc: '南唐后主，字重光，号钟隐、莲峰居士。五代时期最杰出的词人，其词前期多写宫廷生活，后期多抒亡国之痛，感情真挚，语言自然，对后世词的发展影响深远。', link: '' },
  '韦庄': { years: '约836年－约910年', desc: '晚唐至五代时期著名诗人、词人，字端己。花间派代表词人之一，与温庭筠并称温韦。其词风格清丽，多写离愁别绪和身世之感。', link: '' },
  '温庭筠': { years: '约812年－约866年', desc: '唐代诗人、词人，字飞卿。花间派词派的鼻祖，其词风格秾艳精致，多写闺情。诗与李商隐齐名，并称温李。', link: '' },
  '冯延巳': { years: '903年－960年', desc: '五代南唐词人，字正中。其词多写闲情逸致和离愁别绪，语言清丽，意境深远，对北宋初期的词人有较大影响。', link: '' },
  '杨慎': { years: '1488年－1559年', desc: '明代著名文学家，字用修，号升庵。明代三才子之首，博学多才，诗词、文、考据等无不精通。其词风格清丽婉约，《临江仙·滚滚长江东逝水》千古传诵。', link: '' },
  '戚继光': { years: '1528年－1588年', desc: '明代抗倭名将、军事家，字元敬，号南塘。不仅战功赫赫，亦能诗文，其诗多抒发爱国豪情和军事生涯的感慨，风格慷慨悲壮。', link: '' },
  '刘基': { years: '1311年－1375年', desc: '明代开国元勋，字伯温。元末明初杰出的政治家、军事家、文学家。其诗文雄浑古朴，多反映社会现实和抒发政治抱负。', link: '' },
  '高启': { years: '1336年－1374年', desc: '明初著名诗人，字季迪，号青丘子。吴中四杰之首，其诗风格清新俊逸，各体兼工，被誉为明代诗人之冠。', link: '' },
  '夏完淳': { years: '1631年－1647年', desc: '南明抗清英雄、诗人，字存古，号小隐。少年英才，投身抗清斗争，兵败被俘，英勇就义，年仅十七岁。其诗慷慨悲壮，充满爱国情怀。', link: '' },
  '张溥': { years: '1602年－1641年', desc: '明末文学家，字天如，号西铭。复社领袖，其散文风格朴实，内容充实，《五人墓碑记》是其代表作。', link: '' },
  '杨士奇': { years: '1365年－1444年', desc: '明代名臣、文学家，字士奇，号东里。三杨之一，其诗风格雍容典雅，多为台阁体，是明初台阁体诗文的代表人物之一。', link: '' },
  '曹学佺': { years: '1574年－1647年', desc: '明代文学家、藏书家，字能始，号石仓。著述宏富，其诗风格清新自然，多写山水和闲情逸致。', link: '' },
  '朱彝尊': { years: '1629年－1709年', desc: '清代著名词人、学者，字锡鬯，号竹垞。浙西词派的开创者，与陈维崧并称朱陈。其词风格清丽醇雅，多写身世之感和咏物怀古。', link: '' },
  '王士禛': { years: '1634年－1711年', desc: '清代著名诗人，字子真，号阮亭、渔洋山人。神韵说的倡导者，其诗风格含蓄蕴藉，意境悠远，为清初诗坛领袖。', link: '' },
  '纳兰性德': { years: '1655年－1685年', desc: '清代著名词人，原名成德，字容若，号楞伽山人。其词风格清新婉丽，多写爱情、相思和悼亡，情感真挚，被誉为清代第一词人。', link: '' },
  '郑燮': { years: '1693年－1765年', desc: '清代书画家、文学家，字克柔，号板桥。扬州八怪之一，其诗、书、画世称三绝。其诗风格清新质朴，多反映民间疾苦和抒写性情。', link: '' },
  '袁枚': { years: '1716年－1797年', desc: '清代著名诗人、文学家，字子才，号简斋、随园老人。性灵说的倡导者，其诗风格清新灵巧，多写个人性情和生活情趣。', link: '' },
  '赵翼': { years: '1727年－1814年', desc: '清代史学家、诗人，字云崧，号瓯北。其诗风格开朗畅达，多咏史和论诗之作，与袁枚、蒋士铨并称乾隆三大家。', link: '' },
  '黄景仁': { years: '1749年－1783年', desc: '清代诗人，字汉镛，号仲则、鹿菲子。其诗风格清新俊逸，多写身世之感和愁思哀怨，被誉为清代李白。', link: '' },
  '龚自珍': { years: '1792年－1841年', desc: '清代思想家、文学家，字璱人，号定庵。其诗风格瑰丽奇肆，多抒发爱国情怀和改革思想，开近代文学风气之先。', link: '' },
  '班婕妤': { years: '约前48年－约公元2年', desc: '西汉女文学家，名不详，为汉成帝妃子，封为婕妤。其诗赋多写宫中愁怨，《怨歌行》相传为她所作，是最早的宫怨诗之一。', link: '' },
  '曹植': { years: '192年－232年', desc: '三国魏著名诗人，字子建。曹操第三子，封陈王，谥思，世称陈思王。其诗风格华丽，语言精炼，与曹操、曹丕并称三曹，为建安文学的代表人物。', link: '' },
  '曹操': { years: '155年－220年', desc: '东汉末年杰出的政治家、军事家、文学家，字孟德。其诗风格苍凉悲壮，气魄雄伟，与子曹丕、曹植并称三曹，为建安文学的开创者和领袖。', link: '' },
  '傅玄': { years: '217年－278年', desc: '西晋文学家、思想家，字休奕。其诗擅长乐府，多反映社会现实和妇女问题，风格质朴刚健。', link: '' },
  '王粲': { years: '177年－217年', desc: '东汉末年文学家，字仲宣。建安七子之一，其诗风格慷慨悲凉，多写乱离之苦和思乡之情，《七哀诗》是其代表作。', link: '' },
  '王僧孺': { years: '465年－522年', desc: '南朝梁文学家，字僧孺。其诗风格艳丽，多写闺情和咏物，是梁代宫廷文学的代表作家之一。', link: '' },
  '吴迈远': { years: '？－474年', desc: '南朝宋诗人，其诗多为乐府诗，风格清丽，多写男女爱情和离愁别绪，是南朝乐府诗的重要作者。', link: '' },
  '庾肩吾': { years: '约487年－约551年', desc: '南朝梁文学家，字子慎。庾信之父，宫体诗的重要作家之一，其诗风格华丽，多写宫廷生活和景物。', link: '' }
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;')
}

function fixPoemFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  
  const titleMatch = content.match(/^# (.+)$/m)
  const authorMatch = content.match(/^\*\*(.+?) · (.+?)\*\*$/m)
  
  if (!titleMatch || !authorMatch) {
    console.log(`Skipped (no title/author): ${filePath}`)
    return false
  }
  
  const title = titleMatch[1]
  const dynasty = authorMatch[1]
  const authorName = authorMatch[2]
  
  const authorInfo = authors[authorName] || { 
    years: '不详', 
    desc: `${dynasty}代诗人，生平事迹不详。`, 
    link: '' 
  }
  
  const oldPoemAuthorRegex = /<PoemAuthor\s*[^>]*\/>/g
  const newPoemAuthor = `<PoemAuthor name="${escapeAttr(authorName)}" years="${escapeAttr(authorInfo.years)}" desc="${escapeAttr(authorInfo.desc)}" link="${escapeAttr(authorInfo.link)}" />`
  
  if (oldPoemAuthorRegex.test(content)) {
    content = content.replace(oldPoemAuthorRegex, newPoemAuthor)
  } else {
    const poemNavRegex = /<PoemNav\s*\/>/
    if (poemNavRegex.test(content)) {
      content = content.replace(poemNavRegex, `${newPoemAuthor}\n\n<PoemNav />`)
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf-8')
  return true
}

function fixCategory(categoryId) {
  const categoryDir = path.join(shiciDir, categoryId)
  if (!fs.existsSync(categoryDir)) {
    console.log(`Category not found: ${categoryId}`)
    return 0
  }
  
  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md')).sort((a, b) => {
    return parseInt(a) - parseInt(b)
  })
  
  let count = 0
  files.forEach(file => {
    const filePath = path.join(categoryDir, file)
    if (fixPoemFile(filePath)) {
      count++
    }
  })
  
  return count
}

console.log('=== 开始修复诗词详情页作者介绍 ===\n')

const categories = ['yuefu', 'nanbeichao', 'wudai', 'mingqingshi']
let total = 0

categories.forEach(cat => {
  console.log(`修复 ${cat}...`)
  const count = fixCategory(cat)
  total += count
  console.log(`  完成 ${count} 首\n`)
})

console.log('=== 修复完成 ===')
console.log(`总计修复：${total} 首诗词详情页`)
