/**
 * data.js - Dữ liệu kỷ niệm, mốc thời gian và lưu bút thanh xuân cấp 3
 */

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Tất cả ký ức' },
  { id: 'san-truong', label: 'Sân Trường' },
  { id: 'lop-hoc', label: 'Lớp Học' },
  { id: 'mua-he', label: 'Mùa Hè' },
  { id: 'le-hoi', label: 'Lễ Hội' }
];

const MEMORIES_DATA = [
  {
    id: 1,
    title: 'Hàng Cây Bàng Mùa Hạ',
    category: 'san-truong',
    categoryLabel: 'Sân Trường',
    date: 'Tháng 09, 2021',
    caption: 'Gốc bàng già xòe ô che mát cả một góc sân trường, nơi những câu chuyện giờ ra chơi chẳng bao giờ hết.',
    gradient: 'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
    icon: '🌳'
  },
  {
    id: 2,
    title: 'Góc Bàn Cuối Lớp',
    category: 'lop-hoc',
    categoryLabel: 'Lớp Học',
    date: 'Tháng 11, 2021',
    caption: 'Chiếc bàn gỗ khắc đầy những dòng chữ vu vơ, nơi có cuốn lưu bút chuyền tay và giấc ngủ gật trưa hè.',
    gradient: 'linear-gradient(135deg, #FFE259 0%, #FFA751 100%)',
    icon: '📝'
  },
  {
    id: 3,
    title: 'Cơn Mưa Rào Tháng Năm',
    category: 'mua-he',
    categoryLabel: 'Mùa Hè',
    date: 'Tháng 05, 2022',
    caption: 'Thanh xuân như một cơn mưa rào, dù từng bị cảm lạnh vì ướt mưa nhưng ta vẫn muốn đắm chìm lần nữa.',
    gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
    icon: '🌧️'
  },
  {
    id: 4,
    title: 'Đêm Hội Văn Nghệ 26/3',
    category: 'le-hoi',
    categoryLabel: 'Lễ Hội',
    date: 'Tháng 03, 2023',
    caption: 'Ánh đèn sân khấu lung linh, tiếng vỗ tay rộn vang và những điệu nhảy hết mình của tuổi trẻ không toan tính.',
    gradient: 'linear-gradient(135deg, #F3553C 0%, #F5AF19 100%)',
    icon: '✨'
  },
  {
    id: 5,
    title: 'Sắc Phượng Rực Trời',
    category: 'mua-he',
    categoryLabel: 'Mùa Hè',
    date: 'Tháng 05, 2023',
    caption: 'Khi cánh phượng đầu tiên hé nở cũng là lúc tiếng ve hối hả báo hiệu một mùa chia tay đang đến rất gần.',
    gradient: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
    icon: '🌺'
  },
  {
    id: 6,
    title: 'Tiết Thể Dục Chiều Nắng',
    category: 'san-truong',
    categoryLabel: 'Sân Trường',
    date: 'Tháng 02, 2023',
    caption: 'Tiếng bóng rổ đập rộn rã, những giọt mồ hôi ướt đẫm lưng áo và nụ cười rạng rỡ dưới vạt nắng vàng xiên.',
    gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    icon: '🏀'
  },
  {
    id: 7,
    title: 'Bảng Đen & Bụi Phấn Trắng',
    category: 'lop-hoc',
    categoryLabel: 'Lớp Học',
    date: 'Tháng 04, 2023',
    caption: 'Bụi phấn rơi vương trên tóc thầy, những công thức dài dằng dặc hóa thành hành trang chắp cánh ước mơ bay xa.',
    gradient: 'linear-gradient(135deg, #30CFD0 0%, #330867 100%)',
    icon: '📚'
  },
  {
    id: 8,
    title: 'Lễ Tri Ân & Trưởng Thành',
    category: 'le-hoi',
    categoryLabel: 'Lễ Hội',
    date: 'Tháng 06, 2023',
    caption: 'Những cái ôm siết chặt, chiếc áo đồng phục kín đặc nét chữ ký lưu niệm và giọt nước mắt nghẹn ngào ngày bế giảng.',
    gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
    icon: '🎓'
  }
];

const TIMELINE_DATA = [
  {
    grade: 'Lớp 10',
    title: 'Ngày Đầu Bỡ Ngỡ',
    year: '2020 - 2021',
    description: 'Tà áo dài trắng tinh khôi, ánh mắt rụt rè trước cánh cổng trường mới. Những người bạn xa lạ dần trở thành tri kỷ dưới hiên trường rợp mát bóng bàng.',
    highlight: 'Khai giảng đầu tiên • Những người bạn mới'
  },
  {
    grade: 'Lớp 11',
    title: 'Rực Rỡ Nắng Hạ',
    year: '2021 - 2022',
    description: 'Năm tháng đẹp nhất với những buổi chiều trốn nắng học nhóm, hội trại 26/3 bùng nổ nhiệt huyết và những rung động đầu đời trong trẻo.',
    highlight: 'Hội trại tuổi trẻ • Mùa thi rộn rã'
  },
  {
    grade: 'Lớp 12',
    title: 'Mùa Chia Tay & Ước Mơ',
    year: '2022 - 2023',
    description: 'Chạy đua cùng kỳ thi tốt nghiệp, những đêm ôn bài miệt mài bên trang sách và lễ bế giảng đong đầy nước mắt hẹn ngày tái ngộ tương lai.',
    highlight: 'Kỳ thi cuộc đời • Lời hứa thanh xuân'
  }
];

const DEFAULT_NOTES = [
  {
    id: 'note-1',
    author: 'Lan Anh',
    className: '12A1',
    message: 'Chúc cả lớp 12A1 ai cũng chạm tay tới nguyện vọng 1! Hẹn 10 năm nữa họp lớp thật đông đủ nhé cả nhà.',
    date: '02/06/2023',
    colorTheme: 'note-pastel-pink'
  },
  {
    id: 'note-2',
    author: 'Minh Khôi',
    className: '12D2',
    message: 'Cảm ơn thanh xuân này vì đã cho tớ gặp các cậu. Dù mỗi đứa một phương trời, đừng bao giờ quên nụ cười năm ấy.',
    date: '04/06/2023',
    colorTheme: 'note-pastel-blue'
  },
  {
    id: 'note-3',
    author: 'Thu Trang',
    className: '12A3',
    message: 'Nhớ những hôm cả bàn cùng nhau trực nhật, lén chia nhau bịch bánh tráng dưới ngăn bàn. Yêu thương rất nhiều!',
    date: '05/06/2023',
    colorTheme: 'note-pastel-yellow'
  },
  {
    id: 'note-4',
    author: 'Hoàng Long',
    className: '12B1',
    message: 'Gửi lời chúc tốt đẹp nhất đến tương lai của mỗi chúng ta. Cảm ơn 3 năm cấp ba rực rỡ và trọn vẹn nhất cuộc đời!',
    date: '06/06/2023',
    colorTheme: 'note-pastel-green'
  }
];

// Gán biến toàn cục dùng chung cho ứng dụng
window.MEMORIES_DATA = MEMORIES_DATA;
window.TIMELINE_DATA = TIMELINE_DATA;
window.DEFAULT_NOTES = DEFAULT_NOTES;
window.CATEGORY_FILTERS = CATEGORY_FILTERS;
