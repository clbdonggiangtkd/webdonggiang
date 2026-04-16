/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Users, 
  Trophy, 
  Target, 
  Zap,
  Gift,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Facebook,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const locations = [
    {
      id: "quang-xuong",
      name: "PHÒNG TẬP 68 QUẢNG XƯƠNG",
image: "4.jpg",
      type: "Phòng tập chuyên sâu",
      mapUrl: "https://maps.app.goo.gl/s6qMief43hGVhMZt8",
      pricing: [
        { label: "8 buổi / tháng", price: "300.000 VNĐ" },
        { label: "12 buổi / tháng", price: "350.000 VNĐ" },
        { label: "16 buổi / tháng", price: "400.000 VNĐ" },
        { label: "Tự do", price: "500.000 VNĐ" }
      ],
      schedule: "Cả tuần",
      hours: {
        morning: ["7:30 - 9:00", "8:00 - 9:30", "8:30 - 10:00"],
        afternoon: ["15:15 - 16:45", "15:45 - 16:15", "16:45 - 18:15", "17:45 - 19:15"]
      },
      special: [
        { label: "Lớp hè (tặng kèm bộ đồ)", price: "1.000.000 VNĐ" },
        { label: "Học Nhóm (3 - 5 người)", price: "2.000.000 VNĐ / nhóm" }
      ]
    },
    {
      id: "hoa-khuong",
      name: "TRƯỜNG TIỂU HỌC HÒA KHƯƠNG",
image: "2.jpg",
      type: "Cơ sở trường học",
      mapUrl: "https://maps.app.goo.gl/kNtJQG1bEcB8434U7",
      price: "350.000 VNĐ",
      schedule: "Thứ 2, 4, 6",
      hours: ["17:00 - 18:30", "17:30 - 19:00"]
    },
    {
      id: "hoa-nhon",
      name: "TRƯỜNG TIỂU HỌC SỐ 1 HÒA NHƠN",
image: "3.jpg",
      type: "Cơ sở trường học",
      mapUrl: "https://maps.app.goo.gl/2uyJhwxVPrBYNpG86",
      price: "350.000 VNĐ",
      schedule: "Thứ 3, 5, 7",
      hours: ["17:00 - 18:30", "17:30 - 19:00"]
    }
  ];

  const promotions = [
    {
      title: "ƯU ĐÃI GÓI DÀI HẠN",
      items: [
        "Đăng ký 3 tháng: giảm 5% học phí",
        "Đăng ký 4 tháng: giảm 7% học phí",
        "Đăng ký 6 tháng: giảm 10% học phí",
        "Đăng ký 1 năm: giảm 15% học phí"
      ]
    },
    {
      title: "DÀNH CHO HỌC VIÊN MỚI",
      items: [
        "Miễn phí học phí Tháng đầu tiên",
        "HOẶC Tặng kèm 01 Đồng phục Taekwondo"
      ],
      highlight: true
    },
    {
      title: "ƯU ĐÃI GIA ĐÌNH (≥3 người)",
      items: [
        "Đăng ký 6 tháng → giảm 15% học phí",
        "Đăng ký 1 năm → giảm 20% học phí"
      ]
    },
    {
      title: "KHUYẾN KHÍCH GIỚI THIỆU",
      items: [
        "Giới thiệu 1 bạn: giảm 10% tháng tiếp theo",
        "Giới thiệu 3 bạn: Giảm 30% + 1 buổi tập FREE + Quà tặng (áo thun/dây đai)"
      ]
    }
  ];

  const services = [
    { title: "Tập luyện Taekwondo", desc: "Đào tạo từ cơ bản đến nâng cao, thi lên đai quốc gia.", icon: <Trophy className="w-6 h-6" /> },
    { title: "Tăng chiều cao", desc: "Bài tập bổ trợ chuyên sâu giúp phát triển thể chất tối ưu.", icon: <Target className="w-6 h-6" /> },
    { title: "Giảm cân", desc: "Đốt cháy năng lượng hiệu quả qua các bài tập võ thuật cường độ cao.", icon: <Zap className="w-6 h-6" /> },
    { title: "Dạy kèm PT", desc: "Huấn luyện cá nhân 1-1 theo yêu cầu và mục tiêu riêng.", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-secondary text-white border-b-4 border-primary shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white p-1 rounded-full shadow-lg border-2 border-primary overflow-hidden">
                <img 
                  src="logo.png"
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl md:text-3xl tracking-tight leading-none text-gold font-black">ĐÔNG GIANG TKD</span>
                <span className="text-xs md:text-sm italic opacity-90 mt-1 font-bold">Nơi ươm mầm võ đạo - Khơi nguồn sức mạnh</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-center px-4 border-r border-white/20">
                <span className="text-[10px] uppercase font-bold opacity-70 mb-1">Kết nối ngay</span>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/hanulsportscenter" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://zalo.me/0913599044" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold opacity-70 mb-1">Hotline Đăng Ký</span>
                <div className="flex flex-col items-end">
                  <a href="tel:0913599044" className="text-gold font-black text-xl hover:scale-105 transition-transform">0913.599.044</a>
                  <a href="tel:0965345676" className="text-gold font-black text-xl hover:scale-105 transition-transform">0965.345.676</a>
                </div>
              </div>
            </div>

            <button className="lg:hidden bg-primary p-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 font-bold uppercase"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
            <a href="#locations" onClick={() => setIsMenuOpen(false)}>Cơ sở</a>
            <a href="#offers" onClick={() => setIsMenuOpen(false)}>Ưu đãi</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500">LIÊN HỆ ĐĂNG KÝ:</p>
              <a href="tel:0913599044" className="text-primary">0913 599 044</a>
              <a href="tel:0965345676" className="text-primary">0965 345 676</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Services Bar */}
      <div className="fixed top-[104px] w-full z-40 bg-white border-b border-slate-200 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-around text-xs font-bold uppercase text-accent tracking-widest">
          <span>🥋 Tập luyện Taekwondo</span>
          <span>📏 Tăng chiều cao</span>
          <span>⚖️ Giảm cân hiệu quả</span>
          <span>🥇 Dạy kèm PT chuyên sâu</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-64 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <Badge className="mb-6 bg-secondary text-white border-none rounded-none px-6 py-2 text-sm font-bold tracking-widest">ĐÀO TẠO CHUYÊN NGHIỆP</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] font-black tracking-tighter">
                <span className="whitespace-nowrap">CÂU LẠC BỘ</span> <br />
                <span className="text-primary block my-2">TAEKWONDO</span>
                <span className="whitespace-nowrap">ĐÔNG GIANG</span>
              </h1>
              <p className="text-2xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                Nơi rèn luyện ý chí, thể chất và kỹ năng tự vệ đỉnh cao. 
                Đội ngũ huấn luyện viên tâm huyết, môi trường tập luyện hiện đại.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button 
                  size="lg" 
                  className="rounded-none h-16 px-10 text-xl bg-primary text-white font-black shadow-xl hover:scale-105 transition-all"
                  onClick={() => scrollToSection('offers')}
                >
                  ĐĂNG KÝ NGAY <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-none h-16 px-10 text-xl border-4 border-secondary font-black hover:bg-secondary hover:text-white transition-all"
                  onClick={() => scrollToSection('locations')}
                >
                  XEM LỊCH TẬP
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden border-[8px] border-white shadow-2xl rotate-1">
                <img 
                  src="1.jpg" 
                  alt="Taekwondo Training" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 md:p-4 shadow-2xl border-t-4 border-primary hidden md:block -rotate-1 z-20">
                <p className="font-heading text-2xl md:text-3xl leading-none text-primary font-black">300+</p>
                <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-tighter">Học viên đang theo học</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Text Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heading text-slate-50 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
          DONG GIANG TKD
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">DỊCH VỤ ĐÀO TẠO</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-6 text-primary rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3 text-secondary">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl mb-4 text-secondary font-black">HỆ THỐNG CƠ SỞ</h2>
              <p className="text-2xl text-slate-600 font-bold">Chọn địa điểm tập luyện thuận tiện nhất cho bạn</p>
            </div>
            <div className="flex gap-6 text-lg font-black">
              <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-sm"><CheckCircle2 className="w-6 h-6 text-primary" /> Chuyên nghiệp</div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-sm"><CheckCircle2 className="w-6 h-6 text-primary" /> Tận tâm</div>
            </div>
          </div>

          <Tabs defaultValue="quang-xuong" className="w-full">
            <TabsList className="w-full flex flex-col md:flex-row h-auto bg-transparent p-0 rounded-none mb-16 md:mb-12 shadow-none border-none gap-4">
              <TabsTrigger value="quang-xuong" className="w-full rounded-none py-6 text-xl md:text-2xl font-black text-secondary/80 data-[state=active]:!bg-primary data-[state=active]:!text-white data-[state=active]:shadow-2xl transition-all border border-slate-200">68 QUẢNG XƯƠNG</TabsTrigger>
              <TabsTrigger value="hoa-khuong" className="w-full rounded-none py-6 text-xl md:text-2xl font-black text-secondary/80 data-[state=active]:!bg-primary data-[state=active]:!text-white data-[state=active]:shadow-2xl transition-all border border-slate-200">HÒA KHƯƠNG</TabsTrigger>
              <TabsTrigger value="hoa-nhon" className="w-full rounded-none py-6 text-xl md:text-2xl font-black text-secondary/80 data-[state=active]:!bg-primary data-[state=active]:!text-white data-[state=active]:shadow-2xl transition-all border border-slate-200">HÒA NHƠN</TabsTrigger>
            </TabsList>

            {locations.map((loc) => (
              <TabsContent key={loc.id} value={loc.id} className="mt-8 md:mt-0 outline-none">
                <Card className="rounded-none border-none shadow-2xl overflow-hidden bg-white">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                      <Badge className="mb-6 bg-primary text-white border-none rounded-none px-6 py-2 text-sm font-black uppercase tracking-widest self-start shadow-md">{loc.type}</Badge>
                      <h3 className="text-4xl md:text-5xl mb-8 text-secondary border-b-8 border-primary pb-6 font-black leading-tight tracking-tighter">{loc.name}</h3>
                      
                      <div className="space-y-10">
                        <div className="flex items-start gap-6">
                          <div className="mt-1 bg-secondary p-4 rounded-none border-2 border-gold shadow-lg"><Clock className="w-8 h-8 text-gold" /></div>
                          <div className="flex-1">
                            <p className="font-black uppercase text-sm text-slate-400 mb-2 tracking-widest">LỊCH TẬP CHI TIẾT</p>
                            <p className="font-black text-2xl text-secondary mb-4">{loc.schedule}</p>
                            {typeof loc.hours === 'object' && !Array.isArray(loc.hours) ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-5 border-t-4 border-secondary shadow-sm">
                                  <p className="text-sm font-black text-secondary mb-3 uppercase tracking-tighter flex items-center gap-2">
                                    <span className="w-2 h-2 bg-secondary rounded-full"></span> BUỔI SÁNG:
                                  </p>
                                  <div className="space-y-1">
                                    {loc.hours.morning.map((h, i) => <p key={i} className="text-xl font-black text-slate-800">{h}</p>)}
                                  </div>
                                </div>
                                <div className="bg-slate-50 p-5 border-t-4 border-primary shadow-sm">
                                  <p className="text-sm font-black text-primary mb-3 uppercase tracking-tighter flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span> BUỔI CHIỀU:
                                  </p>
                                  <div className="space-y-1">
                                    {loc.hours.afternoon.map((h, i) => <p key={i} className="text-xl font-black text-slate-800">{h}</p>)}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-4 mt-2">
                                {loc.hours?.map((h, i) => (
                                  <span key={i} className="bg-secondary text-white px-6 py-3 text-xl font-black shadow-md">{h}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start gap-6">
                          <div className="mt-1 bg-primary/10 p-4 rounded-none border-2 border-primary/20"><Gift className="w-8 h-8 text-primary" /></div>
                          <div className="w-full">
                            <p className="font-black uppercase text-sm text-slate-400 mb-2 tracking-widest">HỌC PHÍ ƯU ĐÃI</p>
                            {loc.pricing ? (
                              <div className="grid grid-cols-1 gap-3 mt-2">
                                {loc.pricing.map((p, i) => (
                                  <div key={i} className="flex justify-between items-center gap-4 border-b-2 border-slate-100 pb-2 hover:bg-slate-50 transition-colors px-2">
                                    <span className="text-lg font-bold text-slate-600">{p.label}</span>
                                    <span className="font-black text-primary text-xl">{p.price}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="bg-secondary text-white px-6 py-3 rounded-none inline-block font-black text-2xl shadow-lg">
                                {loc.price} / tháng
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 space-y-4">
                        {loc.id === 'quang-xuong' && (
                          <div className="bg-gold text-secondary px-6 py-4 rounded-none inline-block font-black text-xl shadow-md border-2 border-secondary/10">
                            Tập tự do: 500.000đ / tháng
                          </div>
                        )}
                        <div className="p-6 bg-primary text-white rounded-none shadow-xl">
                          <p className="text-sm font-black mb-1 uppercase tracking-widest">GÓI TẬP KẾT HỢP NÂNG CAO:</p>
                          <p className="text-lg font-bold italic">Tăng chiều cao - Giảm cân chuyên sâu: Phụ phí +200.000 VNĐ</p>
                        </div>
                      </div>
                    </div>
                    <a 
                      href={loc.mapUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-slate-200 relative min-h-[500px] hidden lg:block group overflow-hidden"
                    >
                      <img 
                        src={loc.image} 
                        alt={loc.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex items-end p-12">
                        <div className="text-white">
                          <p className="text-sm font-black uppercase tracking-widest mb-2 text-gold">Bấm để xem bản đồ</p>
                          <p className="text-2xl font-black flex items-center gap-3">
                            <MapPin className="w-8 h-8 text-primary" /> {loc.name}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white text-secondary px-8 py-4 font-black text-xl shadow-2xl">XEM GOOGLE MAPS</div>
                      </div>
                    </a>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6 text-secondary font-black">ƯU ĐÃI ĐẶC BIỆT</h2>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-bold">Chính sách hỗ trợ tốt nhất để phụ huynh yên tâm gửi gắm con em.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="promo-gradient p-10 rounded-none text-white relative overflow-hidden shadow-2xl lg:col-span-1 flex flex-col justify-center"
            >
              <div className="absolute top-6 right-[-40px] bg-gold text-secondary px-12 py-2 rotate-45 text-sm font-black uppercase tracking-widest shadow-lg">
                HOT DEAL
              </div>
              <h3 className="text-4xl mb-8 font-black tracking-tight leading-tight">DÀNH CHO <br />HỌC VIÊN MỚI</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-xl font-bold">
                  <span className="text-gold text-2xl">✓</span>
                  Miễn phí học phí Tháng đầu tiên
                </li>
                <li className="flex items-start gap-4 text-xl font-bold">
                  <span className="text-gold text-2xl">✓</span>
                  HOẶC Tặng kèm 01 Đồng phục Taekwondo cao cấp
                </li>
                <li className="flex items-start gap-4 text-xl font-bold pt-6 border-t border-white/20">
                  <span className="text-gold text-2xl">✓</span>
                  Giới thiệu 1 bạn: giảm 10% học phí
                </li>
                <li className="flex items-start gap-4 text-xl font-bold">
                  <span className="text-gold text-2xl">✓</span>
                  Giới thiệu 3 bạn: Giảm 30% + Quà tặng (Áo thun/Dây đai)
                </li>
              </ul>
            </motion.div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-none border-4 border-slate-100 shadow-xl hover:border-primary transition-all">
                <h4 className="text-lg font-black text-accent uppercase mb-6 border-b-4 border-slate-50 pb-3 tracking-widest">Đăng Ký Dài Hạn</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">03 tháng</span>
                    <span className="font-black text-primary bg-primary/5 px-3 py-1">Giảm 5%</span>
                  </li>
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">04 tháng</span>
                    <span className="font-black text-primary bg-primary/5 px-3 py-1">Giảm 7%</span>
                  </li>
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">06 tháng</span>
                    <span className="font-black text-primary bg-primary/5 px-3 py-1">Giảm 10%</span>
                  </li>
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">01 năm</span>
                    <span className="font-black text-primary bg-primary/5 px-3 py-1">Giảm 15%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-none border-4 border-slate-100 shadow-xl hover:border-primary transition-all">
                <h4 className="text-lg font-black text-accent uppercase mb-6 border-b-4 border-slate-50 pb-3 tracking-widest">Gia Đình (≥3 người)</h4>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">Đăng ký 6 tháng</span>
                    <span className="font-black text-primary bg-primary/10 px-4 py-2">Giảm 15%</span>
                  </li>
                  <li className="flex justify-between items-center text-xl font-bold">
                    <span className="text-slate-600">Đăng ký 1 năm</span>
                    <span className="font-black text-primary bg-primary/10 px-4 py-2">Giảm 20%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary text-white p-8 rounded-none shadow-xl md:col-span-2 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gold uppercase mb-4 tracking-widest">Dịch Vụ Bổ Trợ Chuyên Sâu</h4>
                  <p className="text-xl font-bold leading-relaxed opacity-90">
                    Chương trình <span className="text-gold underline underline-offset-4">PT Cá Nhân</span> thiết kế riêng cho từng thể trạng. 
                    Tập trung Tăng chiều cao & Giảm cân an toàn cho trẻ em.
                  </p>
                </div>
                <div className="bg-gold p-6 rounded-none shadow-lg text-center min-w-[240px] hover:scale-105 transition-transform cursor-default">
                  <p className="font-black text-secondary text-xl leading-tight">
                    BUỔI TẬP ĐẦU TIÊN <br />
                    <span className="text-3xl">MIỄN PHÍ!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-24 pb-12 border-t-8 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white p-2 rounded-full border-2 border-primary">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <span className="font-heading text-3xl tracking-tight text-gold">ĐÔNG GIANG TKD</span>
              </div>
              <p className="text-xl text-slate-300 max-w-md mb-10 font-medium leading-relaxed">
                Câu lạc bộ Taekwondo Đông Giang cam kết mang đến môi trường tập luyện võ thuật 
                chuyên nghiệp, giúp học viên phát triển toàn diện về thể chất, tinh thần và kỷ luật.
              </p>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/hanulsportscenter" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-full hover:bg-primary transition-all shadow-lg">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://zalo.me/0913599044" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-full hover:bg-primary transition-all shadow-lg">
                  <MessageCircle className="w-7 h-7" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8 text-gold uppercase tracking-widest">LIÊN HỆ</h4>
              <ul className="space-y-6 text-slate-300 text-lg font-bold">
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" /> 0913 599 044
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" /> 0965 345 676
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Đà Nẵng: Hòa Khương, Hòa Nhơn, Quảng Xương.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8 text-gold uppercase tracking-widest">GIỜ TẬP</h4>
              <ul className="space-y-6 text-slate-300 text-lg font-bold">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Thứ 2 - Thứ 7:</span>
                  <span className="text-white">15:15 - 19:15</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Chủ Nhật:</span>
                  <span className="text-white">7:30 - 10:00</span>
                </li>
                <li className="pt-4 text-sm italic opacity-60">
                  * Lịch tập chi tiết theo từng cơ sở bên trên.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} CÂU LẠC BỘ TAEKWONDO ĐÔNG GIANG. THIẾT KẾ CHUYÊN NGHIỆP.
          </div>
        </div>
      </footer>
    </div>
  );
}
