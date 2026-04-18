/* ============================
   YanTravel - 核心逻辑
   ============================ */

// 景点数据集
const spots = [
  // 自然奇观
  {
    id: 1, name: '大堡礁', country: '澳大利亚', region: '大洋洲',
    category: '自然奇观', emoji: '🐠',
    rating: 4.9, bestTime: '6月-10月', cost: '💰💰💰',
    desc: '世界上最大的珊瑚礁系统，拥有超过1500种鱼类和400种珊瑚，是潜水和浮潜的天堂。',
    img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop'
  },
  {
    id: 2, name: '维多利亚瀑布', country: '赞比亚/津巴布韦', region: '非洲',
    category: '自然奇观', emoji: '💧',
    rating: 4.8, bestTime: '2月-5月', cost: '💰💰',
    desc: '世界上最大的瀑布之一，宽1708米，落差108米。当地人称之为"雷鸣之烟"。',
    img: 'https://images.unsplash.com/photo-1609948951656-4a6c0bb2b844?w=600&h=400&fit=crop'
  },
  {
    id: 3, name: '北极光', country: '冰岛/挪威', region: '欧洲',
    category: '自然奇观', emoji: '🌌',
    rating: 4.9, bestTime: '9月-3月', cost: '💰💰💰',
    desc: '大自然最壮观的光影秀，绿色、紫色的光带在夜空中舞动，一生必看的自然现象。',
    img: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop'
  },
  {
    id: 4, name: '张家界国家森林公园', country: '中国', region: '亚洲',
    category: '自然奇观', emoji: '⛰️',
    rating: 4.8, bestTime: '4月-10月', cost: '💰💰',
    desc: '《阿凡达》悬浮山的灵感来源，独特的石英砂岩峰林地貌，云雾缭绕如仙境。',
    img: 'https://images.unsplash.com/photo-1537531383496-f4749b603528?w=600&h=400&fit=crop'
  },
  {
    id: 5, name: '亚马逊雨林', country: '巴西', region: '南美洲',
    category: '自然奇观', emoji: '🌿',
    rating: 4.7, bestTime: '6月-11月', cost: '💰💰',
    desc: '地球之肺，全球最大的热带雨林，拥有超过10万物种，是地球上生物多样性最丰富的地区。',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop'
  },
  {
    id: 6, name: '大峡谷', country: '美国', region: '北美洲',
    category: '自然奇观', emoji: '🏜️',
    rating: 4.8, bestTime: '3月-5月', cost: '💰💰',
    desc: '由科罗拉多河历经数百万年侵蚀而成，深达1800米，壮观的地层记录了20亿年的地质历史。',
    img: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&h=400&fit=crop'
  },
  // 历史古迹
  {
    id: 7, name: '马丘比丘', country: '秘鲁', region: '南美洲',
    category: '历史古迹', emoji: '🏛️',
    rating: 4.9, bestTime: '5月-9月', cost: '💰💰',
    desc: '印加帝国的失落之城，坐落在海拔2430米的安第斯山脉上，被称为"天空之城"。',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop'
  },
  {
    id: 8, name: '吴哥窟', country: '柬埔寨', region: '亚洲',
    category: '历史古迹', emoji: '🛕',
    rating: 4.8, bestTime: '11月-3月', cost: '💰',
    desc: '世界上最大的宗教建筑群，高棉帝国鼎盛时期的杰作，日出时分的倒影令人窒息。',
    img: 'https://images.unsplash.com/photo-1508159452718-d22daa7c02af?w=600&h=400&fit=crop'
  },
  {
    id: 9, name: '罗马斗兽场', country: '意大利', region: '欧洲',
    category: '历史古迹', emoji: '🏟️',
    rating: 4.7, bestTime: '4月-6月', cost: '💰💰',
    desc: '古罗马最宏伟的建筑，可容纳5万观众。近2000年的历史让每一块石头都诉说着故事。',
    img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop'
  },
  {
    id: 10, name: '长城', country: '中国', region: '亚洲',
    category: '历史古迹', emoji: '🧱',
    rating: 4.9, bestTime: '4月-10月', cost: '💰',
    desc: '人类建筑史上最伟大的工程之一，总长超过2万公里，跨越两千多年的历史。',
    img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop'
  },
  {
    id: 11, name: '吉萨金字塔', country: '埃及', region: '非洲',
    category: '历史古迹', emoji: '🔺',
    rating: 4.8, bestTime: '10月-4月', cost: '💰',
    desc: '古代世界七大奇迹中唯一存存的，胡夫金字塔建造于4500年前，至今仍是未解之谜。',
    img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&h=400&fit=crop'
  },
  // 现代都市
  {
    id: 12, name: '东京', country: '日本', region: '亚洲',
    category: '现代都市', emoji: '🗼',
    rating: 4.8, bestTime: '3月-5月', cost: '💰💰💰',
    desc: '传统与未来完美融合的城市，从浅草寺到涩谷十字路口，每个街角都有惊喜。',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'
  },
  {
    id: 13, name: '纽约', country: '美国', region: '北美洲',
    category: '现代都市', emoji: '🗽',
    rating: 4.7, bestTime: '4月-6月', cost: '💰💰💰',
    desc: '永不眠的城市，时代广场的霓虹、中央公园的宁静、百老汇的精彩，令人目不暇接。',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'
  },
  {
    id: 14, name: '迪拜', country: '阿联酋', region: '亚洲',
    category: '现代都市', emoji: '🏗️',
    rating: 4.6, bestTime: '11月-3月', cost: '💰💰💰',
    desc: '从沙漠中崛起的未来之城，世界最高建筑哈利法塔、棕榈岛，处处刷新人类建筑极限。',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
  },
  {
    id: 15, name: '新加坡', country: '新加坡', region: '亚洲',
    category: '现代都市', emoji: '🌃',
    rating: 4.7, bestTime: '全年', cost: '💰💰💰',
    desc: '花园城市，滨海湾的灯光秀、鱼尾狮公园、小印度的色彩，多元文化完美融合。',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
  },
  {
    id: 16, name: '上海', country: '中国', region: '亚洲',
    category: '现代都市', emoji: '🌆',
    rating: 4.6, bestTime: '3月-5月', cost: '💰💰',
    desc: '东方明珠、外滩万国建筑群、陆家嘴天际线，古典与现代交汇的国际大都市。',
    img: 'https://images.unsplash.com/photo-1537531383496-f4749b603528?w=600&h=400&fit=crop'
  },
  // 海岛沙滩
  {
    id: 17, name: '马尔代夫', country: '马尔代夫', region: '亚洲',
    category: '海岛沙滩', emoji: '🏖️',
    rating: 4.9, bestTime: '11月-4月', cost: '💰💰💰',
    desc: '印度洋上的珍珠项链，水上别墅、清澈见底的海水、白沙滩，蜜月圣地。',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop'
  },
  {
    id: 18, name: '圣托里尼', country: '希腊', region: '欧洲',
    category: '海岛沙滩', emoji: '🏠',
    rating: 4.8, bestTime: '4月-10月', cost: '💰💰',
    desc: '爱琴海上的蓝白色梦幻，悬崖上的白色小屋、蓝顶教堂、绝美日落，明信片般的存在。',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop'
  },
  {
    id: 19, name: '巴厘岛', country: '印度尼西亚', region: '亚洲',
    category: '海岛沙滩', emoji: '🌺',
    rating: 4.7, bestTime: '4月-10月', cost: '💰',
    desc: '众神之岛，梯田、火山、神庙、冲浪海滩，自然与灵性完美融合的热带天堂。',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop'
  },
  {
    id: 20, name: '大溪地', country: '法属波利尼西亚', region: '大洋洲',
    category: '海岛沙滩', emoji: '🐚',
    rating: 4.9, bestTime: '5月-10月', cost: '💰💰💰',
    desc: '南太平洋上的天堂，被称为"最接近天堂的地方"，碧蓝的潟湖和翠绿的山峰。',
    img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop'
  },
  {
    id: 21, name: '三亚', country: '中国', region: '亚洲',
    category: '海岛沙滩', emoji: '🌴',
    rating: 4.5, bestTime: '10月-3月', cost: '💰💰',
    desc: '中国最南端的热带滨海城市，亚龙湾、蜈支洲岛、天涯海角，国内最佳度假目的地。',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop'
  },
  // 文化遗产
  {
    id: 22, name: '京都', country: '日本', region: '亚洲',
    category: '文化遗产', emoji: '⛩️',
    rating: 4.8, bestTime: '3月-5月', cost: '💰💰',
    desc: '千年古都，2000多座寺庙和神社、艺妓文化、茶道、和服体验，日本文化的精髓。',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop'
  },
  {
    id: 23, name: '伊斯坦布尔', country: '土耳其', region: '欧亚交界',
    category: '文化遗产', emoji: '🕌',
    rating: 4.7, bestTime: '4月-5月', cost: '💰💰',
    desc: '横跨欧亚大陆的城市，圣索菲亚大教堂、蓝色清真寺、大巴扎，东西文明交汇点。',
    img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop'
  },
  {
    id: 24, name: '巴塞罗那', country: '西班牙', region: '欧洲',
    category: '文化遗产', emoji: '🎨',
    rating: 4.8, bestTime: '5月-6月', cost: '💰💰',
    desc: '高迪的奇幻世界，圣家堂、巴特罗之家、古埃尔公园，每一处都是建筑艺术杰作。',
    img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop'
  },
  {
    id: 25, name: '敦煌莫高窟', country: '中国', region: '亚洲',
    category: '文化遗产', emoji: '🎨',
    rating: 4.9, bestTime: '5月-10月', cost: '💰💰',
    desc: '千佛洞，735个洞窟中保存着跨越千年的壁画和彩塑，丝绸之路上的艺术瑰宝。',
    img: 'https://images.unsplash.com/photo-1591017403286-fd8493c07998?w=600&h=400&fit=crop'
  },
  {
    id: 26, name: '佛罗伦萨', country: '意大利', region: '欧洲',
    category: '文化遗产', emoji: '🖼️',
    rating: 4.7, bestTime: '4月-6月', cost: '💰💰',
    desc: '文艺复兴的摇篮，乌菲兹美术馆、大教堂、老桥，达芬奇和米开朗基罗的故乡。',
    img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&h=400&fit=crop'
  },
  // 探险胜地
  {
    id: 27, name: '南极洲', country: '南极洲', region: '南极洲',
    category: '探险胜地', emoji: '🐧',
    rating: 5.0, bestTime: '11月-3月', cost: '💰💰💰',
    desc: '地球最后的净土，壮丽的冰川、企鹅群落、鲸鱼出没，人生终极探险目的地。',
    img: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&h=400&fit=crop'
  },
  {
    id: 28, name: '帕塔哥尼亚', country: '阿根廷/智利', region: '南美洲',
    category: '探险胜地', emoji: '🏔️',
    rating: 4.9, bestTime: '10月-3月', cost: '💰💰',
    desc: '世界尽头的荒野，百内国家公园、莫雷诺冰川、菲茨罗伊峰，徒步者的天堂。',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop'
  },
  {
    id: 29, name: '尼泊尔', country: '尼泊尔', region: '亚洲',
    category: '探险胜地', emoji: '🧗',
    rating: 4.7, bestTime: '10月-11月', cost: '💰',
    desc: '喜马拉雅山脚下，珠峰大本营徒步、安纳普尔纳环线、滑翔伞，冒险爱好者的圣地。',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop'
  },
  {
    id: 30, name: '肯尼亚马赛马拉', country: '肯尼亚', region: '非洲',
    category: '探险胜地', emoji: '🦁',
    rating: 4.8, bestTime: '7月-10月', cost: '💰💰',
    desc: '野生动物大迁徙的壮观舞台，百万角马渡河的瞬间，非洲Safari的终极体验。',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop'
  },
  {
    id: 31, name: '新西兰南岛', country: '新西兰', region: '大洋洲',
    category: '探险胜地', emoji: '🎯',
    rating: 4.8, bestTime: '12月-2月', cost: '💰💰',
    desc: '中土世界的原型，米尔福德峡湾、皇后镇蹦极、弗朗茨约瑟夫冰川，冒险与美景并存。',
    img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=400&fit=crop'
  },
  {
    id: 32, name: '九寨沟', country: '中国', region: '亚洲',
    category: '自然奇观', emoji: '💎',
    rating: 4.9, bestTime: '9月-11月', cost: '💰💰',
    desc: '九寨归来不看水，五彩池、珍珠滩瀑布、诺日朗瀑布，大自然的调色板。',
    img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop'
  },
  {
    id: 33, name: '布拉格', country: '捷克', region: '欧洲',
    category: '文化遗产', emoji: '🏰',
    rating: 4.7, bestTime: '5月-9月', cost: '💰',
    desc: '百塔之城，查理大桥、布拉格城堡、老城广场，欧洲保存最完好的中世纪城市之一。',
    img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&h=400&fit=crop'
  },
  {
    id: 34, name: '巴黎', country: '法国', region: '欧洲',
    category: '现代都市', emoji: '🗼',
    rating: 4.7, bestTime: '4月-6月', cost: '💰💰',
    desc: '浪漫之都，埃菲尔铁塔、卢浮宫、香榭丽舍大道，艺术、美食与时尚的殿堂。',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'
  },
  {
    id: 35, name: '瑞士阿尔卑斯山', country: '瑞士', region: '欧洲',
    category: '自然奇观', emoji: '🏔️',
    rating: 4.9, bestTime: '6月-9月', cost: '💰💰💰',
    desc: '欧洲屋脊，少女峰、马特洪峰、因特拉肯，雪山、湖泊、草甸构成的人间仙境。',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop'
  },
  {
    id: 36, name: '夏威夷', country: '美国', region: '北美洲',
    category: '海岛沙滩', emoji: '🌺',
    rating: 4.7, bestTime: '全年', cost: '💰💰💰',
    desc: '太平洋上的热带天堂，威基基海滩、火山国家公园、冲浪圣地， Aloha 精神的故乡。',
    img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop'
  }
];

// 分类对应的 badge 样式
const badgeMap = {
  '自然奇观': 'badge-nature',
  '历史古迹': 'badge-history',
  '现代都市': 'badge-city',
  '海岛沙滩': 'badge-island',
  '文化遗产': 'badge-culture',
  '探险胜地': 'badge-adventure'
};

// 当前过滤状态
let currentFilter = 'all';
let searchQuery = '';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSpots();
  initFilters();
  initSearch();
  initRandom();
  updateStats();
});

// 主题切换
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

// 渲染景点
function renderSpots() {
  const grid = document.getElementById('spotsGrid');
  const empty = document.getElementById('emptyState');
  
  let filtered = spots;
  
  if (currentFilter !== 'all') {
    filtered = filtered.filter(s => s.category === currentFilter);
  }
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q) ||
      s.region.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q)
    );
  }
  
  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  
  empty.style.display = 'none';
  
  grid.innerHTML = filtered.map((spot, i) => `
    <div class="spot-card" style="animation-delay: ${i * 0.05}s">
      <div class="spot-cover">
        <img class="spot-cover-img" src="${spot.img}" alt="${spot.name}" loading="lazy" onerror="this.style.display='none'">
        <div class="spot-cover-overlay"></div>
        <div class="spot-badges">
          <span class="spot-badge ${badgeMap[spot.category] || ''}">${spot.emoji} ${spot.category}</span>
        </div>
        <span class="spot-region-badge">📍 ${spot.region}</span>
      </div>
      <div class="spot-body">
        <div class="spot-header">
          <h3 class="spot-name">${spot.name}</h3>
          <span class="spot-rating">⭐ ${spot.rating}</span>
        </div>
        <div class="spot-location">📍 ${spot.country}</div>
        <p class="spot-desc">${spot.desc}</p>
      </div>
      <div class="spot-footer">
        <div class="spot-meta">
          <span class="spot-meta-item">📅 ${spot.bestTime}</span>
          <span class="spot-meta-item">${spot.cost}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 分类过滤
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderSpots();
    });
  });
}

// 搜索
function initSearch() {
  const input = document.getElementById('searchInput');
  
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderSpots();
  });
  
  // 键盘快捷键 /
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape') {
      input.blur();
      input.value = '';
      searchQuery = '';
      renderSpots();
    }
  });
}

// 随机推荐
function initRandom() {
  const btn = document.getElementById('randomBtn');
  btn.addEventListener('click', () => {
    const spot = spots[Math.floor(Math.random() * spots.length)];
    
    const nameEl = document.getElementById('randomName');
    const locationEl = document.getElementById('randomLocation');
    const descEl = document.getElementById('randomDesc');
    const metaEl = document.getElementById('randomMeta');
    
    // 动画效果
    nameEl.style.opacity = '0';
    nameEl.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      nameEl.textContent = `${spot.emoji} ${spot.name}`;
      locationEl.textContent = `📍 ${spot.country} · ${spot.region}`;
      descEl.textContent = spot.desc;
      metaEl.innerHTML = `
        <span>⭐ ${spot.rating}</span>
        <span>📅 ${spot.bestTime}</span>
        <span>${spot.cost}</span>
        <span>${spot.category}</span>
      `;
      nameEl.style.opacity = '1';
      nameEl.style.transform = 'translateY(0)';
    }, 200);
  });
}

// 更新统计
function updateStats() {
  const regions = [...new Set(spots.map(s => s.region))];
  const countries = [...new Set(spots.map(s => s.country))];
  
  document.querySelector('.stat-num[data-count]')?.remove();
  document.querySelector('.stat-num')?.remove();
  document.querySelector('.stat-num')?.remove();
  
  const statNums = document.querySelectorAll('.stat-num');
  if (statNums.length >= 3) {
    animateCount(statNums[0], spots.length);
    animateCount(statNums[1], countries.length);
    animateCount(statNums[2], regions.length);
  }
}

function animateCount(el, target) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 30);
}
