import React, { useState } from 'react';
import { 
  Lightbulb, 
  Users, 
  Building2, 
  Phone, 
  GraduationCap, 
  Link as LinkIcon, 
  UserCheck, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';

export default function CareersSection() {
  const [activeForm, setActiveForm] = useState('project');

  // Project Form States
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    brief: ''
  });

  // Internship Form States
  const [internshipForm, setInternshipForm] = useState({
    name: '',
    email: '',
    role: '',
    school: '',
    link: '',
    sop: ''
  });

  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (activeForm === 'project') {
      const { name, email, organization, phone, brief } = projectForm;
      if (!name.trim() || !email.trim() || !brief.trim()) {
        setValidationError('Please fill in all required fields (Full Name, Active Email, and Project Brief).');
        return;
      }

      const formattedText = `Project Inquiry from Krytil Website:
- Name: ${name}
- Email: ${email}
- Organization: ${organization || 'N/A'}
- Phone: ${phone || 'N/A'}
- Project Brief: ${brief}`;

      sendData(formattedText, 'New Project Briefing');
    } else {
      const { name, email, role, school, link, sop } = internshipForm;
      if (!name.trim() || !email.trim() || !role || !sop.trim()) {
        setValidationError('Please fill in all required fields (Full Name, Active Email, Target Role, and Statement of Purpose).');
        return;
      }

      const formattedText = `Internship Candidacy from Krytil Website:
- Name: ${name}
- Email: ${email}
- Target Role: ${role}
- Academic Institution: ${school || 'N/A'}
- Portfolio/Resume Link: ${link || 'N/A'}
- Statement of Purpose: ${sop}`;

      sendData(formattedText, `Internship Candidacy - ${role}`);
    }
  };

  const sendData = (text, subject) => {
    const whatsappNumber = '918904542699';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    const mailtoUrl = `mailto:Hr@krytil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
    // Open standard email client redirect
    window.location.href = mailtoUrl;
  };

  return (
    <section id="careers" className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70">
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
          {activeForm === 'project' ? "Build Your " : "Start Your "}
          <span className={`${activeForm === 'project' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'} font-black transition-colors duration-500`}>
            {activeForm === 'project' ? "Digital Core." : "Career Hub."}
          </span>
        </h2>
        
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12 w-full text-center">
             <div 
              onClick={() => { setActiveForm('project'); setValidationError(''); }} 
              className={`flex flex-col items-center w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border cursor-pointer transition-all duration-500 shadow-sm hover:-translate-y-1 ${activeForm === 'project' ? 'bg-zinc-900 border-zinc-900 text-white shadow-2xl' : 'bg-white border-zinc-200/80 group hover:shadow-xl'}`}
             >
               <Lightbulb className={`mb-6 w-8 h-8 md:w-10 md:h-10 ${activeForm === 'project' ? 'text-yellow-400' : 'text-zinc-900'}`} />
               <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tighter text-center">Start Your Project</h4>
               <p className={`leading-relaxed font-light text-sm md:text-lg text-center ${activeForm === 'project' ? 'text-zinc-400' : 'text-zinc-500'}`}>Scale your product from ideation to launch with precision engineering.</p>
             </div>
             <div 
              onClick={() => { setActiveForm('internship'); setValidationError(''); }} 
              className={`flex flex-col items-center w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border cursor-pointer transition-all duration-500 shadow-sm hover:-translate-y-1 ${activeForm === 'internship' ? 'bg-zinc-900 border-zinc-900 text-white shadow-2xl' : 'bg-white border-zinc-200/80 group hover:shadow-xl'}`}
             >
               <Users className={`mb-6 w-8 h-8 md:w-10 md:h-10 ${activeForm === 'internship' ? 'text-blue-400' : 'text-blue-500'}`} />
               <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tighter text-center">Apply for Internship</h4>
               <p className={`leading-relaxed font-light text-sm md:text-lg text-center ${activeForm === 'internship' ? 'text-zinc-400' : 'text-zinc-500'}`}>Join our team to work on real-world projects and build the future.</p>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6 md:space-y-8 animate-in fade-in duration-700 bg-white/50 backdrop-blur-sm p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-zinc-200/60 shadow-inner">
             {validationError && (
               <div className="text-red-600 font-bold text-sm bg-red-50 border border-red-100 p-4 rounded-2xl text-center">
                 {validationError}
               </div>
             )}
             
             <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {activeForm === 'project' ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Full Name *</label>
                      <input 
                        type="text"
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                        placeholder="Deepak" 
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Email *</label>
                      <input 
                        type="email"
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                        placeholder="deepak@example.com" 
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Organization</label>
                      <div className="relative">
                        <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                        <input 
                          type="text"
                          className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                          placeholder="Company Name" 
                          value={projectForm.organization}
                          onChange={(e) => setProjectForm({ ...projectForm, organization: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                        <input 
                          type="tel"
                          className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                          placeholder="+91 XXXXX XXXXX" 
                          value={projectForm.phone}
                          onChange={(e) => setProjectForm({ ...projectForm, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2 pt-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Project Brief *</label>
                      <textarea 
                        rows="4" 
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-[2rem] text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold resize-none text-left" 
                        placeholder="Describe your vision and requirements..."
                        value={projectForm.brief}
                        onChange={(e) => setProjectForm({ ...projectForm, brief: e.target.value })}
                        required
                      ></textarea>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Full Name *</label>
                      <input 
                        type="text"
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                        placeholder="Deepak" 
                        value={internshipForm.name}
                        onChange={(e) => setInternshipForm({ ...internshipForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Email *</label>
                      <input 
                        type="email"
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                        placeholder="deepak@example.com" 
                        value={internshipForm.email}
                        onChange={(e) => setInternshipForm({ ...internshipForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Target Role *</label>
                      <div className="relative">
                        <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 pointer-events-none z-10" size={20} />
                        <select 
                          className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 pr-10 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all font-bold appearance-none relative text-left"
                          value={internshipForm.role}
                          onChange={(e) => setInternshipForm({ ...internshipForm, role: e.target.value })}
                          required
                        >
                          <option value="">Select Desired Role</option>
                          <option value="Frontend Developer">Frontend Developer</option>
                          <option value="Backend Developer">Backend Developer</option>
                          <option value="Full-Stack Developer">Full-Stack Developer</option>
                          <option value="AI/ML Engineer">AI/ML Engineer</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Business Development Associate">Business Development Associate</option>
                        </select>
                        <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-zinc-300 pointer-events-none" size={18} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Academic Institution</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                        <input 
                          type="text"
                          className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                          placeholder="University Name" 
                          value={internshipForm.school}
                          onChange={(e) => setInternshipForm({ ...internshipForm, school: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Portfolio/Resume Link</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                        <input 
                          type="url"
                          className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" 
                          placeholder="https://github.com/profile or Drive Link" 
                          value={internshipForm.link}
                          onChange={(e) => setInternshipForm({ ...internshipForm, link: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2 pt-2">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Statement of Purpose *</label>
                      <textarea 
                        rows="4" 
                        className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-[2rem] text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold resize-none text-left" 
                        placeholder="Tell us about your skillsets, goals and why you want to join Krytil..."
                        value={internshipForm.sop}
                        onChange={(e) => setInternshipForm({ ...internshipForm, sop: e.target.value })}
                        required
                      ></textarea>
                    </div>
                  </>
                )}
             </div>
             
             <button 
               type="submit" 
               className="bg-zinc-900 text-white font-black px-10 py-5 md:px-14 md:py-6 rounded-full text-[10px] md:text-[12px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center group mt-8 mx-auto w-fit"
             >
               <span>{activeForm === 'project' ? 'Initiate Briefing' : 'Submit Candidacy'}</span>
               <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
             </button>
          </form>
        </div>
      </div>
    </section>
  );
}
