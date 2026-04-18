/* ============================
   YanTravel - 区域浏览
   ============================ */

const spots = [
  { id: 1, name: '大堡礁', country: '澳大利亚', region: '大洋洲', category: '自然奇观', emoji: '🐠' },
  { id: 2, name: '维多利亚瀑布', country: '赞比亚/津巴布韦', region: '非洲', category: '自然奇观', emoji: '💧' },
  { id: 3, name: '北极光', country: '冰岛/挪威', region: '欧洲', category: '自然奇观', emoji: '🌌' },
  { id: 4, name: '张家界', country: '中国', region: '亚洲', category: '自然奇观', emoji: '⛰️' },
  { id: 5, name: '亚马逊雨林', country: '巴西', region: '南美洲', category: '自然奇观', emoji: '🌿' },
  { id: 6, name: '大峡谷', country: '美国', region: '北美洲', category: '自然奇观', emoji: '🏜️' },
  { id: 7, name: '马丘比丘', country: '秘鲁', region: '南美洲', category: '历史古迹', emoji: '🏛️' },
  { id: 8, name: '吴哥窟', country: '柬埔寨', region: '亚洲', category: '历史古迹', emoji: '🛕' },
  { id: 9, name: '罗马斗兽场', country: '意大利', region: '欧洲', category: '历史古迹', emoji: '🏟️' },
  { id: 10, name: '长城', country: '中国', region: '亚洲', category: '历史古迹', emoji: '🧱' },
  { id: 11, name: '吉萨金字塔', country: '埃及', region: '非洲', category: '历史古迹', emoji: '🔺' },
  { id: 12, name: '东京', country: '日本', region: '亚洲', category: '现代都市', emoji: '🗼' },
  { id: 13, name: '纽约', country: '美国', region: '北美洲', category: '现代都市', emoji: '🗽' },
  { id: 14, name: '迪拜', country: '阿联酋', region: '亚洲', category: '现代都市', emoji: '🏗️' },
  { id: 15, name: '新加坡', country: '新加坡', region: '亚洲', category: '现代都市', emoji: '🌃' },
  { id: 16, name: '上海', country: '中国', region: '亚洲', category: '现代都市', emoji: '🌆' },
  { id: 17, name: '马尔代夫', country: '马尔代夫', region: '亚洲', category: '海岛沙滩', emoji: '🏖️' },
  { id: 18, name: '圣托里尼', country: '希腊', region: '欧洲', category: '海岛沙滩', emoji: '🏠' },
  { id: 19, name: '巴厘岛', country: '印度尼西亚', region: '亚洲', category: '海岛沙滩', emoji: '🌺' },
  { id: 20, name: '大溪地', country: '法属波利尼西亚', region: '大洋洲', category: '海岛沙滩', emoji: '🐚' },
  { id: 21, name: '三亚', country: '中国', region: '亚洲', category: '海岛沙滩', emoji: '🌴' },
  { id: 22, name: '京都', country: '日本', region: '亚洲', category: '文化遗产', emoji: '⛩️' },
  { id: 23, name: '伊斯坦布尔', country: '土耳其', region: '欧亚交界', category: '文化遗产', emoji: '🕌' },
  { id: 24, name: '巴塞罗那', country: '西班牙', region: '欧洲', category: '文化遗产', emoji: '🎨' },
  { id: 25, name: '敦煌莫高窟', country: '中国', region: '亚洲', category: '文化遗产', emoji: '🎨' },
  { id: 26, name: '佛罗伦萨', country: '意大利', region: '欧洲', category: '文化遗产', emoji: '🖼️' },
  { id: 27, name: '南极洲', country: '南极洲', region: '南极洲', category: '探险胜地', emoji: '🐧' },
  { id: 28, name: '帕塔哥尼亚', country: '阿根廷/智利', region: '南美洲', category: '探险胜地', emoji: '🏔️' },
  { id: 29, name: '尼泊尔', country: '尼泊尔', region: '亚洲', category: '探险胜地', emoji: '🧗' },
  { id: 30, name: '肯尼亚马赛马拉', country: '肯尼亚', region: '非洲', category: '探险胜地', emoji: '🦁' },
  { id: 31, name: '新西兰南岛', country: '新西兰', region: '大洋洲', category: '探险胜地', emoji: '🎯' },
  { id: 32, name: '九寨沟', country: '中国', region: '亚洲', category: '自然奇观', emoji: '💎' },
  { id: 33, name: '布拉格', country: '捷克', region: '欧洲', category: '文化遗产', emoji: '🏰' },
  { id: 34, name: '巴黎', country: '法国', region: '欧洲', category: '现代都市', emoji: '🗼' },
  { id: 35, name: '瑞士阿尔卑斯山', country: '瑞士', region: '欧洲', category: '自然奇观', emoji: '🏔️' },
  { id: 36, name: '夏威夷', country: '美国', region: '北美洲', category: '海岛沙滩', emoji: '🌺' }
];

const regionInfo = {
  '亚洲': { flag: '🌏', desc: '从日本的古寺到迪拜的未来建筑，亚洲的多样性令人惊叹' },
  '欧洲': { flag: '🌍', desc: '文艺复兴的遗产、壮丽的自然风光和浪漫的城市' },
  '北美洲': { flag: '🗽', desc: '从纽约的繁华到大峡谷的壮阔，自然与现代并存' },
  '南美洲': { flag: '🌎', desc: '亚马逊雨林、印加文明和巴塔哥尼亚的荒野' },
  '非洲': { flag: '🌍', desc: '野生动物大迁徙、古老文明和壮观的瀑布' },
  '大洋洲': { flag: '🦘', desc: '大堡礁、毛利文化和南太平洋的天堂海岛' },
  '南极洲': { flag: '🧊', desc: '地球最后的净土，企鹅与冰川的白色世界' },
  '欧亚交界': { flag: '🌐', desc: '横跨两大洲的文明交汇之地' }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderRegions();
});

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('yantravel-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    toggle.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    toggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('yantravel-theme', isLight ? 'light' : 'dark');
  });
}

function renderRegions() {
  const grid = document.getElementById('regionsGrid');
  
  // 按区域分组
  const grouped = {};
  spots.forEach(s => {
    if (!grouped[s.region]) grouped[s.region] = [];
    grouped[s.region].push(s);
  });
  
  // 排序：按景点数量降序
  const sortedRegions = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
  
  grid.innerHTML = sortedRegions.map(([region, regionSpots], i) => {
    const info = regionInfo[region] || { flag: '📍', desc: '探索这片区域的美丽景点' };
    const tags = regionSpots.map(s =>
      `<span class="region-spot-tag">${s.emoji} ${s.name}</span>`
    ).join('');
    
    return `
      <div class="region-card" style="animation: fadeInUp 0.5s ease ${i * 0.08}s both">
        <div class="region-header">
          <span class="region-flag">${info.flag}</span>
          <div>
            <div class="region-name">${region}</div>
            <div class="region-count">${regionSpots.length} 个景点</div>
          </div>
        </div>
        <p class="region-desc">${info.desc}</p>
        <div class="region-spots">${tags}</div>
      </div>
    `;
  }).join('');
}
