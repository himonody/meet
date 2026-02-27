export const languageRoutes = [
  { slug: 'en', code: 'en', short: 'EN', label: 'English', hreflang: 'en', html: 'en' },
  { slug: 'ms', code: 'ms', short: 'MS', label: 'Bahasa Melayu', hreflang: 'ms', html: 'ms' },
  { slug: 'id', code: 'id', short: 'ID', label: 'Bahasa Indonesia', hreflang: 'id', html: 'id' },
  { slug: 'zh-cn', code: 'zh-CN', short: '简中', label: '简体中文', hreflang: 'zh-Hans', html: 'zh-CN' },
  { slug: 'zh-tw', code: 'zh-TW', short: '繁中', label: '繁體中文', hreflang: 'zh-Hant', html: 'zh-TW' },
  { slug: 'vi', code: 'vi', short: 'VI', label: 'Tiếng Việt', hreflang: 'vi', html: 'vi' },
  { slug: 'ko', code: 'ko', short: 'KO', label: '한국어', hreflang: 'ko', html: 'ko' },
  { slug: 'ja', code: 'ja', short: 'JA', label: '日本語', hreflang: 'ja', html: 'ja' }
];

export const countries = ['kh', 'my'];
export const locations = ['all', 'phnom_penh', 'sihanouk', 'kuala_lumpur'];
export const categories = ['spa', 'ktv', 'delivery', 'partyGirls', 'seaTrip'];

export const i18n = {
  'zh-CN': {
    countries: {
      kh: '柬埔寨',
      my: '马来西亚'
    },
    locations: {
      all: '全部地区',
      phnom_penh: '金边',
      sihanouk: '西港',
      kuala_lumpur: '吉隆坡'
    },
    categories: {
      spa: '水疗会所',
      ktv: 'KTV',
      delivery: '外送',
      partyGirls: '嗨妹冰妹',
      seaTrip: '出海游玩'
    },
    venues: {
      spa: ['威尼斯国际会所', '名玺水汇', '贵族水疗', '帝豪会所', '7号公馆', '大浪淘沙', '天空之城', '汤泉水疗', '九天瑶池', '壹号汤泉'],
      ktv: ['红馆', '嘉年华', '名流KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: '加载更多',
      age: '年龄',
      height: '身高',
      weight: '体重',
      bust: '胸围',
      service: '服务内容',
      bio: '特点',
      languages: '语言',
      availability: '状态',
      availableNow: '可预约',
      book: '立即预约',
      view: '查看作品',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: '招募',
      filterHot: '热门',
      filterRecommend: '推荐',
      filterNew: '新品',
      filterYoung: '年龄小'
    }
  },
  'zh-TW': {
    countries: {
      kh: '柬埔寨',
      my: '馬來西亞'
    },
    locations: {
      all: '全部地區',
      phnom_penh: '金邊',
      sihanouk: '西港',
      kuala_lumpur: '吉隆坡'
    },
    categories: {
      spa: '水療會所',
      ktv: 'KTV',
      delivery: '外送',
      partyGirls: '嗨妹冰妹',
      seaTrip: '出海遊玩'
    },
    venues: {
      spa: ['威尼斯國際會所', '名璽水匯', '貴族水療', '帝豪會所', '7號公館', '大浪淘沙', '天空之城', '湯泉水療', '九天瑤池', '壹號湯泉'],
      ktv: ['紅館', '嘉年華', '名流KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: '載入更多',
      age: '年齡',
      height: '身高',
      weight: '體重',
      bust: '胸圍',
      service: '服務內容',
      bio: '特點',
      languages: '語言',
      availability: '狀態',
      availableNow: '可預約',
      book: '立即預約',
      view: '查看作品',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: '招募',
      filterHot: '熱門',
      filterRecommend: '推薦',
      filterNew: '新品',
      filterYoung: '年齡小'
    }
  },
  en: {
    countries: {
      kh: 'Cambodia',
      my: 'Malaysia'
    },
    locations: {
      all: 'All Locations',
      phnom_penh: 'Phnom Penh',
      sihanouk: 'Sihanoukville',
      kuala_lumpur: 'Kuala Lumpur',
    },
    categories: {
      spa: 'Spa Club',
      ktv: 'KTV',
      delivery: 'Delivery',
      partyGirls: 'Party Girls',
      seaTrip: 'Sea Trip'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: 'Load More',
      age: 'Age',
      height: 'Height',
      weight: 'Weight',
      bust: 'Bust',
      service: 'Services',
      bio: 'Highlights',
      languages: 'Languages',
      availability: 'Availability',
      availableNow: 'Available Now',
      book: 'Book Appointment',
      view: 'View Portfolio',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: 'Recruit',
      filterHot: 'Hot',
      filterRecommend: 'Recommended',
      filterNew: 'New',
      filterYoung: 'Young'
    }
  },
  ms: {
    countries: {
      kh: 'Kemboja',
      my: 'Malaysia'
    },
    locations: {
      all: 'Semua Lokasi',
      phnom_penh: 'Phnom Penh',
      sihanouk: 'Sihanoukville',
      kuala_lumpur: 'Kuala Lumpur'
    },
    categories: {
      spa: 'Kelab Spa',
      ktv: 'KTV',
      delivery: 'Penghantaran',
      partyGirls: 'Gadis Parti',
      seaTrip: 'Lawatan Laut'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: 'Muat Lagi',
      age: 'Umur',
      height: 'Ketinggian',
      weight: 'Berat',
      bust: 'Dada',
      service: 'Perkhidmatan',
      bio: 'Ciri-ciri',
      languages: 'Bahasa',
      availability: 'Ketersediaan',
      availableNow: 'Tersedia Kini',
      book: 'Tempah Sekarang',
      view: 'Lihat Portfolio',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: 'Rekrut',
      filterHot: 'Popular',
      filterRecommend: 'Disyorkan',
      filterNew: 'Baharu',
      filterYoung: 'Lebih Muda'
    }
  },
  id: {
    countries: {
      kh: 'Kamboja',
      my: 'Malaysia'
    },
    locations: {
      all: 'Semua Lokasi',
      phnom_penh: 'Phnom Penh',
      sihanouk: 'Sihanoukville',
      kuala_lumpur: 'Kuala Lumpur'
    },
    categories: {
      spa: 'Klub Spa',
      ktv: 'KTV',
      delivery: 'Pengantaran',
      partyGirls: 'Gadis Pesta',
      seaTrip: 'Wisata Laut'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: 'Muat Lagi',
      age: 'Usia',
      height: 'Tinggi',
      weight: 'Berat',
      bust: 'Dada',
      service: 'Layanan',
      bio: 'Keunggulan',
      languages: 'Bahasa',
      availability: 'Ketersediaan',
      availableNow: 'Tersedia Sekarang',
      book: 'Pesan Sekarang',
      view: 'Lihat Portofolio',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: 'Rekrut',
      filterHot: 'Populer',
      filterRecommend: 'Rekomendasi',
      filterNew: 'Baru',
      filterYoung: 'Lebih Muda'
    }
  },
  vi: {
    countries: {
      kh: 'Campuchia',
      my: 'Malaysia'
    },
    locations: {
      all: 'Tất cả khu vực',
      phnom_penh: 'Phnom Penh',
      sihanouk: 'Sihanoukville',
      kuala_lumpur: 'Kuala Lumpur'
    },
    categories: {
      spa: 'CLB Spa',
      ktv: 'KTV',
      delivery: 'Giao tận nơi',
      partyGirls: 'Tiệc Gái',
      seaTrip: 'Du thuyền'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: 'Tải thêm',
      age: 'Tuổi',
      height: 'Chiều cao',
      weight: 'Cân nặng',
      bust: 'Vòng ngực',
      service: 'Dịch vụ',
      bio: 'Đặc điểm',
      languages: 'Ngôn ngữ',
      availability: 'Tình trạng',
      availableNow: 'Sẵn sàng',
      book: 'Đặt ngay',
      view: 'Xem hồ sơ',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: 'Tuyển dụng',
      filterHot: 'Nổi bật',
      filterRecommend: 'Đề xuất',
      filterNew: 'Mới',
      filterYoung: 'Trẻ'
    }
  },
  ko: {
    countries: {
      kh: '캄보디아',
      my: '말레이시아'
    },
    locations: {
      all: '전체 지역',
      phnom_penh: '프놈펜',
      sihanouk: '시아누크빌',
      kuala_lumpur: '쿠알라룸푸르'
    },
    categories: {
      spa: '스파 클럽',
      ktv: 'KTV',
      delivery: '출장',
      partyGirls: '파티 걸스',
      seaTrip: '바다 투어'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: '더 보기',
      age: '나이',
      height: '키',
      weight: '체중',
      bust: '가슴',
      service: '서비스',
      bio: '특징',
      languages: '언어',
      availability: '상태',
      availableNow: '예약 가능',
      book: '예약하기',
      view: '포트폴리오',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: '모집',
      filterHot: '인기',
      filterRecommend: '추천',
      filterNew: '신규',
      filterYoung: '젊음'
    }
  },
  ja: {
    countries: {
      kh: 'カンボジア',
      my: 'マレーシア'
    },
    locations: {
      all: 'すべてのエリア',
      phnom_penh: 'プノンペン',
      sihanouk: 'シアヌークビル',
      kuala_lumpur: 'クアラルンプール'
    },
    categories: {
      spa: 'スパクラブ',
      ktv: 'KTV',
      delivery: 'デリバリー',
      partyGirls: 'パーティーガール',
      seaTrip: '海ツアー'
    },
    venues: {
      spa: ['Venice International Club', 'Mingxi Spa', 'Noble Spa', 'Dihao Club', 'No.7 Mansion', 'Big Wave Spa', 'Sky City', 'Hot Spring Spa', 'Nine Heavens Pool', 'No.1 Hot Spring'],
      ktv: ['Red Pavilion', 'Carnival', 'Celebrities KTV'],
      delivery: [],
      partyGirls: [],
      seaTrip: []
    },
    labels: {
      loadMore: 'もっと見る',
      age: '年齢',
      height: '身長',
      weight: '体重',
      bust: 'バスト',
      service: 'サービス内容',
      bio: '特徴',
      languages: '言語',
      availability: 'ステータス',
      availableNow: '予約可能',
      book: '予約する',
      view: 'ポートフォリオ',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      recruit: '募集',
      filterHot: '人気',
      filterRecommend: 'おすすめ',
      filterNew: '新着',
      filterYoung: '若い'
    }
  }
};

export const models = [
  { id: 1, name: 'Sophia', location: 'marina', tag: 'filterHot', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop' },
  { id: 2, name: 'Isabella', location: 'orchard', tag: 'filterRecommend', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop' },
  { id: 3, name: 'Emma', location: 'downtown', tag: 'filterNew', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop' },
  { id: 4, name: 'Olivia', location: 'sentosa', tag: 'filterYoung', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop' },
  { id: 5, name: 'Ava', location: 'clarke', tag: 'filterHot', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop' },
  { id: 6, name: 'Mia', location: 'marina', tag: 'filterRecommend', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop' },
  { id: 7, name: 'Charlotte', location: 'orchard', tag: 'filterNew', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop' },
  { id: 8, name: 'Amelia', location: 'downtown', tag: 'filterYoung', image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=600&fit=crop' }
];
