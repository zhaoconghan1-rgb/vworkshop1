export const regions = ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'] as const;
export type Region = typeof regions[number];
export const seasons = ['春', '夏', '秋', '冬'] as const;
export type Season = typeof seasons[number];
export type Tree = { id: string; name: string; region: Region; place: string; latin?: string; intro?: string; habitat?: string; culture?: string; features?: string[]; seasonNotes?: Partial<Record<Season,string>>; photos?: Partial<Record<Season,string>>; details?: string[] };
// 20 项是可替换的选树示例，其中亚洲 10 项；地区代表性及正式内容尚待确认。
export const trees: Tree[] = [
{id:'birch', name:'白桦',region:'亚洲',place:'东亚 · 中国东北',latin:'Betula platyphylla',intro:'树皮白色，叶片三角状卵形，边缘有锯齿；秋季叶片逐渐变黄。',features:['树皮：白色，可见横向皮孔，常呈薄片状剥落。','枝叶：叶片三角状卵形，叶缘有锯齿。','树形：落叶乔木，冬季可观察枝干轮廓。'],habitat:'主要分布于亚洲温带地区。此页以中国东北地区为观察背景，具体展叶和落叶时间随纬度、海拔及当年天气变化。',culture:'地区文化资料待补充。本站不将示例地区等同于唯一分布区或官方代表树种。',seasonNotes:{春:'观察新叶展开、枝梢与花序。实际时间随当地气温变化，示例图不作为季节记录。',夏:'观察树冠、成熟叶片与枝干结构。夏季实拍照片待补充。',秋:'观察叶片由绿转黄及落叶过程。秋季实拍照片待补充。',冬:'观察落叶后的枝条、冬芽和白色树皮。冬季实拍照片待补充。'},photos:{春:'/images/birch-0.jpg'},details:['/images/birch-1.jpg','/images/birch-2.jpg','/images/birch-3.jpg']},
{id:'camphor',name:'香樟',region:'亚洲',place:'东亚 · 中国南方'},
{id:'ginkgo',name:'银杏',region:'亚洲',place:'东亚 · 中国'},
{id:'cherry',name:'樱花',region:'亚洲',place:'东亚 · 日本'},
{id:'maple',name:'鸡爪槭',region:'亚洲',place:'东亚 · 日本'},
{id:'metasequoia',name:'水杉',region:'亚洲',place:'东亚 · 中国中部'},
{id:'poplar',name:'胡杨',region:'亚洲',place:'中亚 · 干旱地区'},
{id:'cedar',name:'黎巴嫩雪松',region:'亚洲',place:'西亚 · 黎巴嫩'},
{id:'banyan',name:'孟加拉榕',region:'亚洲',place:'南亚 · 印度'},
{id:'teak',name:'柚木',region:'亚洲',place:'东南亚 · 缅甸'},
{id:'oak',name:'夏栎',region:'欧洲',place:'西欧 · 英国'},
{id:'beech',name:'欧洲山毛榉',region:'欧洲',place:'中欧 · 德国'},
{id:'spruce',name:'欧洲云杉',region:'欧洲',place:'北欧 · 挪威'},
{id:'baobab',name:'猴面包树',region:'非洲',place:'东非 · 坦桑尼亚'},
{id:'acacia',name:'伞形金合欢',region:'非洲',place:'东非 · 肯尼亚'},
{id:'redwood',name:'北美红杉',region:'北美洲',place:'美国 · 加利福尼亚'},
{id:'sugar-maple',name:'糖槭',region:'北美洲',place:'加拿大 · 东部'},
{id:'araucaria',name:'智利南洋杉',region:'南美洲',place:'智利 · 安第斯山地'},
{id:'jacaranda',name:'蓝花楹',region:'南美洲',place:'阿根廷 · 西北部'},
{id:'eucalyptus',name:'蓝桉',region:'大洋洲',place:'澳大利亚 · 塔斯马尼亚'},
];
