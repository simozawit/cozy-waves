import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Menu, X, ChevronRight, CheckCircle2, Info } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select Date/Time, 2: Details, 3: Success
  const [selectedDuration, setSelectedDuration] = useState('1h');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerDetails, setCustomerDetails] = useState({ name: '', email: '', phone: '' });
  const [showNotification, setShowNotification] = useState(false);
  const [bookingError, setBookingError] = useState('');

  // Business settings
  const businessHours = { start: 11, end: 20 }; // 11 AM to 8 PM
  const prices = {
    '1h': 150,
    '2h': 300,
    '3h': 400,
    '8h': 650
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = businessHours.start; i < businessHours.end; i++) {
      slots.push(`${i > 12 ? i - 12 : i}:00 ${i >= 12 ? 'PM' : 'AM'}`);
    }
    return slots;
  };

  const handleStep1Next = () => {
    setBookingError('');
    if (!selectedDate) {
      setBookingError('Please select a date.');
      return;
    }
    if (!selectedTime) {
      setBookingError('Please select a time.');
      return;
    }
    setBookingStep(2);
  };

  const handleStep2Submit = () => {
    setBookingError('');
    if (!customerDetails.name.trim()) {
      setBookingError('Please enter your full name.');
      return;
    }
    if (!customerDetails.email.trim() || !customerDetails.email.includes('@')) {
      setBookingError('Please enter a valid email address.');
      return;
    }
    if (!customerDetails.phone.trim()) {
      setBookingError('Please enter a valid phone number.');
      return;
    }
    
    setBookingStep(3);
    // Simulate sending email
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 1000);
  };

  const resetBooking = () => {
    setBookingStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setBookingError('');
    setCustomerDetails({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      
      {/* Toast Notification Simulation */}
      <div className={`fixed top-24 right-4 z-50 transition-all duration-500 transform ${showNotification ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-slate-900 border border-teal-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <CheckCircle2 className="text-teal-400" />
          <div>
            <h4 className="font-bold">Email Sent!</h4>
            <p className="text-sm text-slate-300">Check your inbox for confirmation details.</p>
          </div>
        </div>
      </div>

      {}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-2xl tracking-tighter">
                COZY<span className="text-teal-400">WAVES</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#fleet" className="text-gray-300 hover:text-white transition-colors">Our Fleet</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#book" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu Dropdown */}
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

      {}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
        {/* Background Image Setup */}
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
                  Premium Sea-Doo GTI 130 rentals. Modern equipment, seamless booking, and unforgettable moments on the river.
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

      {}
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

      {}
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
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedDuration(duration);
                      document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full font-bold py-3 px-4 rounded-xl transition-colors ${duration === '2h' ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="book" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="flex flex-wrap md:flex-nowrap">
              
              {/* Booking Info Sidebar */}
              <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-slate-700 bg-slate-800">
                <h3 className="text-2xl font-bold text-white mb-6">Reservation</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <Clock size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Duration</p>
                      <p className="text-lg font-semibold">{selectedDuration} <span className="text-slate-400 text-sm">(${prices[selectedDuration]})</span></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <Calendar size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Date & Time</p>
                      <p className="text-lg font-semibold">
                        {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString() : 'Not selected'}
                        <br/>
                        {selectedTime ? selectedTime : ''}
                      </p>
                    </div>
                  </div>

                   <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <MapPin size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Location</p>
                      <p className="text-base font-medium">Ottawa River</p>
                      <p className="text-xs text-slate-400 mt-1">Exact launch point provided in email.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-teal-400">${prices[selectedDuration]} CAD</span>
                  </div>
                </div>
              </div>

              {/* Booking Form Area */}
              <div className="w-full md:w-2/3 p-8 bg-slate-900">
                
                {bookingStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h4 className="text-xl font-semibold mb-4 border-b border-slate-700 pb-2">1. Select Date & Time</h4>
                    
                    {bookingError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                        {bookingError}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Select Duration</label>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.keys(prices).map(dur => (
                          <button
                            key={dur}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedDuration(dur);
                            }}
                            className={`py-2 rounded-lg border ${selectedDuration === dur ? 'bg-teal-500 border-teal-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}`}
                          >
                            {dur}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-slate-300 mb-2">Choose Date</label>
                       <input 
                          type="date" 
                          min={new Date().toISOString().split('T')[0]}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                       />
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-slate-300 mb-2">Choose Start Time (11 AM - 8 PM)</label>
                       <select 
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                       >
                         <option value="">Select a time slot...</option>
                         {generateTimeSlots().map(slot => (
                           <option key={slot} value={slot}>{slot}</option>
                         ))}
                       </select>
                    </div>

                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleStep1Next();
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 rounded-xl mt-6 transition-colors shadow-lg"
                    >
                      Continue to Details
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                     <div className="flex items-center mb-4 border-b border-slate-700 pb-2">
                       <button 
                          type="button" 
                          onClick={(e) => {
                            e.preventDefault();
                            setBookingStep(1); 
                            setBookingError(''); 
                          }} 
                          className="text-slate-400 hover:text-white mr-2 flex items-center"
                        >
                          <ChevronRight size={20} className="rotate-180 mr-1" /> Back
                       </button>
                       <h4 className="text-xl font-semibold ml-2">2. Your Details</h4>
                     </div>
                     
                     {bookingError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                        {bookingError}
                      </div>
                    )}

                     <div>
                       <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                       <input 
                          type="text" 
                          value={customerDetails.name}
                          onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                          placeholder="John Doe"
                       />
                    </div>
                     <div>
                       <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                       <input 
                          type="email" 
                          value={customerDetails.email}
                          onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                          placeholder="john@example.com"
                       />
                       <p className="text-xs text-slate-400 mt-1">Confirmation and management links will be sent here.</p>
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                       <input 
                          type="tel" 
                          value={customerDetails.phone}
                          onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                          placeholder="(613) 555-0123"
                       />
                    </div>

                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleStep2Submit();
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 rounded-xl mt-6 transition-colors shadow-lg flex justify-center items-center gap-2"
                    >
                      Confirm Booking <CheckCircle2 size={20} />
                    </button>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="text-center py-10 animate-fadeIn">
                    <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={48} className="text-teal-400" />
                    </div>
                    <h4 className="text-3xl font-bold mb-4">Request Received!</h4>
                    <p className="text-slate-300 mb-8 max-w-md mx-auto">
                      Thank you, {customerDetails.name.split(' ')[0]}. An email confirmation has been sent to <strong>{customerDetails.email}</strong>. 
                    </p>
                    <div className="bg-slate-800 p-4 rounded-lg mb-8 text-sm text-slate-400 text-left border border-slate-700">
                      <p className="mb-2"><strong className="text-white">To modify or cancel:</strong></p>
                      <p>Please use the secure link provided in your confirmation email up to 24 hours before your booking time.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        resetBooking();
                      }}
                      className="border border-slate-600 hover:bg-slate-800 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Book Another
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">COZY<span className="text-teal-500">WAVES</span></h4>
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

      {/* Basic custom styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default App;