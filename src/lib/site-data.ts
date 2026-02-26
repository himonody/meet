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

export const countries = ['sg', 'my', 'th', 'id', 'ph'];
export const locations = ['all', 'downtown', 'marina', 'orchard', 'sentosa', 'clarke'];
export const categories = ['club', 'ktv', 'nightParty', 'privateSession'];

export const i18n = {
  'zh-CN': {
    countries: {
      sg: '新加坡',
      my: '马来西亚',
      th: '泰国',
      id: '印度尼西亚',
      ph: '菲律宾'
    },
    locations: {
      all: '全部地区',
      downtown: '市中心',
      marina: '滨海湾',
      orchard: '乌节路',
      sentosa: '圣淘沙',
      clarke: '克拉码头'
    },
    categories: {
      club: '水疗会所',
      ktv: 'KTV',
      nightParty: '夜场派对',
      privateSession: '私人专场'
    },
    venues: {
      club: ['天空会所', '金色会馆', '水晶殿堂', '钻石名邸'],
      ktv: ['皇室KTV', '金嗓之夜', '明星卡拉OK', '奢华包厢'],
      nightParty: ['霓虹之夜', '日蚀', '午夜玫瑰', '地下之城']
    },
    labels: {
      loadMore: '加载更多',
      height: '身高',
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
      sg: '新加坡',
      my: '馬來西亞',
      th: '泰國',
      id: '印度尼西亞',
      ph: '菲律賓'
    },
    locations: {
      all: '全部地區',
      downtown: '市中心',
      marina: '濱海灣',
      orchard: '烏節路',
      sentosa: '聖淘沙',
      clarke: '克拉碼頭'
    },
    categories: {
      club: '水療會所',
      ktv: 'KTV',
      nightParty: '夜場派對',
      privateSession: '私人專場'
    },
    venues: {
      club: ['天空會所', '金色會館', '水晶殿堂', '鑽石名邸'],
      ktv: ['皇室KTV', '金嗓之夜', '明星卡拉OK', '奢華包廂'],
      nightParty: ['霓虹之夜', '日蝕', '午夜玫瑰', '地下之城']
    },
    labels: {
      loadMore: '載入更多',
      height: '身高',
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
      sg: 'Singapore',
      my: 'Malaysia',
      th: 'Thailand',
      id: 'Indonesia',
      ph: 'Philippines'
    },
    locations: {
      all: 'All Locations',
      downtown: 'Downtown',
      marina: 'Marina Bay',
      orchard: 'Orchard',
      sentosa: 'Sentosa',
      clarke: 'Clarke Quay'
    },
    categories: {
      club: 'Club',
      ktv: 'KTV',
      nightParty: 'Night Party',
      privateSession: 'Private Session'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: 'Load More',
      height: 'Height',
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
      sg: 'Singapura',
      my: 'Malaysia',
      th: 'Thailand',
      id: 'Indonesia',
      ph: 'Filipina'
    },
    locations: {
      all: 'Semua Lokasi',
      downtown: 'Pusat Bandar',
      marina: 'Marina Bay',
      orchard: 'Orchard',
      sentosa: 'Sentosa',
      clarke: 'Clarke Quay'
    },
    categories: {
      club: 'Kelab',
      ktv: 'KTV',
      nightParty: 'Parti Malam',
      privateSession: 'Sesi Peribadi'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: 'Muat Lagi',
      height: 'Ketinggian',
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
      sg: 'Singapura',
      my: 'Malaysia',
      th: 'Thailand',
      id: 'Indonesia',
      ph: 'Filipina'
    },
    locations: {
      all: 'Semua Lokasi',
      downtown: 'Pusat Kota',
      marina: 'Marina Bay',
      orchard: 'Orchard',
      sentosa: 'Sentosa',
      clarke: 'Clarke Quay'
    },
    categories: {
      club: 'Klub',
      ktv: 'KTV',
      nightParty: 'Pesta Malam',
      privateSession: 'Sesi Privat'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: 'Muat Lagi',
      height: 'Tinggi',
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
      sg: 'Singapore',
      my: 'Malaysia',
      th: 'Thái Lan',
      id: 'Indonesia',
      ph: 'Philippines'
    },
    locations: {
      all: 'Tất cả khu vực',
      downtown: 'Trung tâm',
      marina: 'Marina Bay',
      orchard: 'Orchard',
      sentosa: 'Sentosa',
      clarke: 'Clarke Quay'
    },
    categories: {
      club: 'Câu lạc bộ',
      ktv: 'KTV',
      nightParty: 'Tiệc đêm',
      privateSession: 'Phiên riêng'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: 'Tải thêm',
      height: 'Chiều cao',
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
      sg: '싱가포르',
      my: '말레이시아',
      th: '태국',
      id: '인도네시아',
      ph: '필리핀'
    },
    locations: {
      all: '전체 지역',
      downtown: '도심',
      marina: '마리나 베이',
      orchard: '오차드',
      sentosa: '센토사',
      clarke: '클라키 키'
    },
    categories: {
      club: '클럽',
      ktv: 'KTV',
      nightParty: '나이트 파티',
      privateSession: '프라이빗 세션'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: '더 보기',
      height: '키',
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
      sg: 'シンガポール',
      my: 'マレーシア',
      th: 'タイ',
      id: 'インドネシア',
      ph: 'フィリピン'
    },
    locations: {
      all: 'すべてのエリア',
      downtown: 'ダウンタウン',
      marina: 'マリーナベイ',
      orchard: 'オーチャード',
      sentosa: 'セントーサ',
      clarke: 'クラーク・キー'
    },
    categories: {
      club: 'クラブ',
      ktv: 'KTV',
      nightParty: 'ナイトパーティー',
      privateSession: 'プライベートセッション'
    },
    venues: {
      club: ['Sky Palace', 'Golden Lounge', 'Crystal Heights', 'Diamond Elite'],
      ktv: ['Royal KTV', 'Golden Voice', 'Star Karaoke', 'Luxury Box'],
      nightParty: ['Neon Nights', 'Eclipse', 'Midnight Rose', 'The Underground']
    },
    labels: {
      loadMore: 'もっと見る',
      height: '身長',
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
