import React, { useState, useEffect } from 'react';
import { Calendar, Info, MapPin, Menu, X, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const prices = {
    '1h': 150,
    '2h': 300,
    '3h': 400,
    '8h': 650
  };

  useEffect(() => {
    // We check if the script is already added so it doesn't duplicate during React updates
    if (document.getElementById('simplybook-script')) return;

    // Load the main SimplyBook library
    const script1 = document.createElement('script');
    script1.id = 'simplybook-script';
    script1.src = '//widget.simplybook.me/v2/widget/widget.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Once loaded, initialize your specific widget configuration
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.id = 'simplybook-init';
      
      // Note: I changed the "sb_base_color" and button colors from your snippet 
      // to "#14b8a6" to perfectly match the Teal branding of the website!
      script2.innerHTML = `
        var widget = new SimplybookWidget({
          "widget_type":"button",
          "url":"https://cozyw.simplybook.me",
          "theme":"default",
          "theme_settings":{
            "timeline_hide_unavailable":"1",
            "hide_past_days":"0",
            "timeline_show_end_time":"0",
            "timeline_modern_display":"as_slots",
            "sb_base_color":"#14b8a6", 
            "display_item_mode":"block",
            "booking_nav_bg_color":"#14b8a6",
            "body_bg_color":"#f2f2f2",
            "sb_review_image":"",
            "dark_font_color":"#474747",
            "light_font_color":"#f5fcff",
            "btn_color_1":"#14b8a6",
            "sb_company_label_color":"#ffffff",
            "hide_img_mode":"0",
            "show_sidebar":"1",
            "sb_busy":"#c7b3b3",
            "sb_available":"#ccfbf1"
          },
          "timeline":"modern",
          "datepicker":"top_calendar",
          "is_rtl":false,
          "app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},
          "button_title":"Book now",
          "button_background_color":"#14b8a6",
          "button_text_color":"#ffffff",
          "button_position":"right",
          "button_position_offset":"55%"
        });
      `;
      document.body.appendChild(script2);
    };
  }, []); // The empty array ensures this only runs once when the site loads

  const Navbar = () => (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-white font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
              COZY<span className="text-teal-400">WAVES</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#fleet" className="text-gray-300 hover:text-white transition-colors">Our Fleet</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#book" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]">
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#fleet" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Our Fleet</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Pricing</a>
            <a href="#book" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-teal-400 hover:text-teal-300 hover:bg-slate-800">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('image_248a1b.jpg')",
          backgroundPosition: "center 40%"
        }}
      >
        <span className="w-full h-full absolute opacity-60 bg-slate-950"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl md:text-6xl tracking-tight leading-tight mb-6">
                Experience Ottawa's Waters Like Never Before.
              </h1>
              <p className="mt-4 text-lg text-gray-300 mb-10 font-light">
                Premium Sea-Doo GTI 130 rentals. Modern equipment, automated real-time booking, and unforgettable moments on the river.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#book" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center justify-center gap-2">
                  Reserve Your Ride <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Fleet = () => (
    <section id="fleet" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-16">
          <div className="w-full lg:w-8/12 px-4">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Fleet</h2>
            <p className="text-lg leading-relaxed m-4 text-slate-600">
              We exclusively offer a fleet of 5 pristine <strong className="text-teal-600">Sea-Doo GTI 130s</strong>. Known for their stability, comfort, and exhilarating performance, they are perfect for both beginners and experienced riders.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-teal-100">
              <Info className="text-teal-500" size={32} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-slate-900">
              Sea-Doo GTI 130
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Designed for versatile family fun. Features a large swim platform, comfortable seating, and a robust Rotax engine that delivers a thrilling ride with impressive fuel efficiency.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                      <CheckCircle2 size={16} />
                    </span>
                  </div>
                  <div><h4 className="text-slate-600">Intelligent Brake and Reverse (iBR)</h4></div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                      <CheckCircle2 size={16} />
                    </span>
                  </div>
                  <div><h4 className="text-slate-600">Large Swim Platform</h4></div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                      <CheckCircle2 size={16} />
                    </span>
                  </div>
                  <div><h4 className="text-slate-600">Eco Mode for Efficiency</h4></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-12 md:mt-0">
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-2xl rounded-2xl bg-white overflow-hidden group">
              <img
                alt="Sea-Doo GTI 130 Side View"
                src="image_2489a2.png"
                className="w-full align-middle p-8 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Sleek, modern design for the ultimate ride.</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
                <div className="w-1/2 shadow-lg rounded-xl bg-white p-4 overflow-hidden border border-slate-100">
                    <img src="image_2489e2.png" alt="Sea-Doo Front" className="w-full object-contain h-32" />
                </div>
                <div className="w-1/2 shadow-lg rounded-xl bg-white p-4 overflow-hidden border border-slate-100">
                     <img src="image_248a5a.png" alt="Sea-Doo Alternate Colors" className="w-full object-contain h-32" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">Fuel and life jackets included. No hidden fees.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(prices).map(([duration, price]) => (
            <div key={duration} className="w-full md:w-64 relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              {duration === '2h' && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Popular</span>
                </div>
              )}
              <div className="px-6 py-8 flex-auto text-center">
                <h6 className="text-xl font-semibold text-slate-700 uppercase tracking-wide">{duration} Rental</h6>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold text-slate-900">${price}</span>
                  <span className="text-slate-500 font-medium ml-1">CAD</span>
                </div>
                <ul className="text-left text-slate-600 mb-8 space-y-3">
                  <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-500 mr-2" /> 1 Sea-Doo GTI 130</li>
                  <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-500 mr-2" /> Life Jackets Provided</li>
                  <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-500 mr-2" /> Full Tank of Gas</li>
                  <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-500 mr-2" /> Brief Safety Orientation</li>
                </ul>
                <a 
                  href="#book"
                  className={`w-full font-bold py-3 px-4 rounded-xl transition-colors block text-center ${duration === '2h' ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // We replaced the old form with this sleek call-to-action that points to SimplyBook
  const BookingSection = () => (
    <section id="book" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 p-8 md:p-12 text-center">
          
          <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar size={40} className="text-teal-400" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Live Booking & Availability</h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            To guarantee your reservation and prevent double-bookings, we have upgraded to a real-time availability system. Click below to view open time slots and secure your Sea-Doo instantly.
          </p>

          <div className="flex flex-col justify-center items-center gap-6">
            <a 
              href="https://cozyw.simplybook.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-xl py-5 px-12 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Open Booking Portal <ExternalLink size={24} />
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-400">
             <div className="flex items-center gap-2">
                <Info size={16} className="text-teal-500" /> 
                <span>You can also use the floating <strong>"Book now"</strong> button on the edge of your screen.</span>
             </div>
             <div className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></div>
             <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-500" /> 
                <span>Exact launch point provided upon confirmation.</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <a href="#" className="text-3xl font-semibold text-white hover:opacity-80 transition-opacity inline-block">
              COZY<span className="text-teal-500">WAVES</span>
            </a>
            <h5 className="text-lg mt-2 mb-2 text-slate-400">
              Premium Jet Ski Rentals in Ottawa, ON.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <a 
                href="https://www.instagram.com/cozywaves.613?igsh=eWN2dnJ0amRlZWFq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 text-teal-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex hover:bg-teal-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Navbar />
      <Hero />
      <Fleet />
      <Pricing />
      <BookingSection />
      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default App;