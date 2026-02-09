import React from 'react';
import { SlideData, SlideLayout } from '../types';
import { Check, X, Quote } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface Props {
  data: SlideData;
}

// Brand Color: #FF5533
const BRAND_COLOR = "text-[#FF5533]";
const BRAND_BG = "bg-[#FF5533]";
const BRAND_BORDER = "border-[#FF5533]";

// Helper to detect if content already has a bullet/emoji
const hasCustomBullet = (text: string) => {
  const trimmed = text.trim();
  const indicators = ['❌', '👉', '✅', '🔑', '•', '📊', '⚠️', '🔔', '⏱️', '🚫', '1️⃣', '2️⃣', '3️⃣', '🎁', '👤', '🤖', '❓', '💰', '➡️', '🛑', '👥', '🤝', '🔍', '🚨'];
  if (indicators.some(i => trimmed.startsWith(i))) return true;
  // Detect numbered items like "1.", "2.", etc.
  if (/^\d+\./.test(trimmed)) return true;
  return false;
};

const highlightText = (text: string, terms: string[]) => {
  if (!text) return null;
  // Escape special regex characters in terms
  const escapedTerms = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'g');
  
  return text.split(regex).map((part, i) => {
    // Check if the part matches one of the terms
    const isMatch = terms.includes(part);
    return isMatch ? <span key={i} className="text-[#FF5533] font-semibold">{part}</span> : part;
  });
};

const SlideRenderer: React.FC<Props> = ({ data }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const renderContent = () => {
    switch (data.layout) {
      case SlideLayout.IMPACT_COVER:
        return (
          <div className="absolute inset-0 w-full h-full bg-black overflow-hidden flex flex-col items-center justify-center text-center px-4">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-[#FF5533] opacity-60 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center w-[80%] mx-auto">
              {/* Logo */}
              <div className="mb-12">
                <img 
                  src="https://www.assis.co/_astro/assis_logo.Mt_6m-GC.svg?dpl=dpl_B2MQdrw45vFMduP1PMk4nr3ui3wG" 
                  alt="Assis" 
                  className="h-10 md:h-12 brightness-0 invert" 
                />
              </div>

              {/* Tag / Pill */}
              {data.section && (
                <div className="inline-block px-6 py-2 rounded-full border border-orange-500/50 bg-black/30 backdrop-blur-sm mb-10">
                  <span className="text-[#FF5533] font-bold text-sm tracking-widest uppercase">
                    • {data.section} •
                  </span>
                </div>
              )}

              {/* Title with highlighting */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {data.title?.split('\n').map((line, li) => (
                  <React.Fragment key={li}>
                    {line.split(/(40% mais|SEGREDO \d|CHATBOT IA|OBRIGADO!)/).map((part, i) =>
                      part.match(/(40% mais|SEGREDO \d|CHATBOT IA|OBRIGADO!)/) ? (
                        <span key={i} className="text-[#FF5533]">{part}</span>
                      ) : (
                        part
                      )
                    )}
                    {li < (data.title?.split('\n').length || 0) - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-slate-300 font-medium max-w-4xl">
                {data.subtitle}
              </p>

              {/* Optional Footer Highlight */}
               {data.highlight && (
                <div className="mt-8">
                  <span className="text-[#FF5533] font-medium">{data.highlight}</span>
                </div>
              )}
            </div>
          </div>
        );
      
      case SlideLayout.BIO:
        return (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-end px-12 md:px-24"
            style={{ backgroundImage: `url(${data.backgroundImage})` }}
          >
             {/* Gradient overlay for better text readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/90 pointer-events-none" />
             
             <div className="relative z-10 w-full md:w-[60%] lg:w-[50%] text-left space-y-10 pl-8 md:pl-0">
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {highlightText(data.title || "", ["Raphael Machioni?", "Rapha Machioni?"])}
               </h1>
               <div className="space-y-8 text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                 {data.content?.map((paragraph, idx) => (
                   <p key={idx}>
                     {highlightText(paragraph, ["Assis", "1,2 milhão de negociações de WhatsApp.", "Vee Benefícios", "R$200+ milhões."])}
                   </p>
                 ))}
               </div>
             </div>
          </div>
        );

      case SlideLayout.TITLE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-12 pt-12">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold tracking-widest uppercase mb-6 text-xl`}>
                {data.section}
              </h2>
            )}
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">{data.title}</h1>
            <h3 className="text-2xl md:text-3xl text-slate-500 font-light max-w-4xl leading-normal">{data.subtitle}</h3>
            {data.highlight && (
              <div className="mt-12 bg-white border border-orange-100 p-8 rounded-2xl shadow-xl shadow-orange-500/5 max-w-4xl">
                <p className={`${BRAND_COLOR} text-xl font-medium`}>{data.highlight}</p>
              </div>
            )}
          </div>
        );

      case SlideLayout.CENTER_STATEMENT:
        return (
          <div className={`flex flex-col items-center justify-center h-full text-center px-12 md:px-20 ${data.ctaLink ? 'pb-32' : ''}`}>
             {data.title && <h2 className="text-slate-400 font-black uppercase tracking-wider mb-6 text-2xl md:text-3xl">{data.title}</h2>}

             {/* Optional visual icon between title and highlight */}
             {data.icon && (
               <motion.div
                 className="mb-6"
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
               >
                 <span className="text-[7rem] md:text-[9rem] leading-none select-none block">{data.icon}</span>
               </motion.div>
             )}

             <h1 className={`text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 leading-[1.1] ${data.maxWidth || 'max-w-7xl'}`}>
               {data.highlight?.split('\n').map((line, i) => {
                 const isHighlighted = line.includes('R$14.000') || line.includes('Valor real');
                 const terms = data.highlightTerms || [];
                 const rendered = terms.length > 0 ? highlightText(line, terms) : line;
                 return (
                   <React.Fragment key={i}>
                     <span className={isHighlighted ? BRAND_COLOR : ""}>
                       {rendered}
                     </span>
                     {i < (data.highlight?.split('\n').length || 0) - 1 && <br />}
                   </React.Fragment>
                 )
               })}
             </h1>
             {data.subtitle && <p className="mt-10 text-2xl md:text-3xl text-slate-500 max-w-4xl">{data.subtitle}</p>}
             {data.footer && (
               <div className="mt-14 animate-pulse bg-slate-100 px-8 py-4 rounded-full border border-slate-200">
                 <p className={`${BRAND_COLOR} font-mono font-bold text-xl`}>{data.footer}</p>
               </div>
             )}
          </div>
        );

      case SlideLayout.BULLETS:
        const hasImages = !!(data.images?.length);
        const hasSideVisual = !!(data.icon || hasImages);
        return (
          <div className={`flex ${hasSideVisual ? 'flex-row items-center' : 'flex-col justify-center'} h-full ${hasImages ? 'px-10 md:px-16' : 'px-12 md:px-24 lg:px-28'} ${data.ctaLink ? 'pb-32' : ''}`}>
            <div className={hasSideVisual ? 'flex-1 pr-8' : ''}>
              {data.section && (
                <h2 className={`${BRAND_COLOR} font-bold mb-4 uppercase tracking-widest text-base md:text-lg`}>
                  {data.section}
                </h2>
              )}
              <h1 className={`font-black text-slate-900 mb-4 leading-[1.1] ${hasImages ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl mb-6'}`}>
                {(data.title || "").split('\n').map((line, li) => (
                  <React.Fragment key={li}>
                    {data.highlightTerms?.length ? highlightText(line, data.highlightTerms) : line}
                    {li < (data.title?.split('\n').length || 0) - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              {data.subtitle && <p className={`text-slate-500 font-medium ${hasImages ? 'text-xl md:text-2xl mb-6' : 'text-2xl md:text-3xl mb-10'}`}>{data.subtitle}</p>}
              <ul className={hasImages ? 'space-y-3' : 'space-y-5'}>
                {data.content?.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className={`flex items-start text-slate-800 leading-snug font-semibold ${hasImages ? 'text-2xl md:text-3xl' : 'text-3xl md:text-[2.5rem]'}`}
                  >
                    {!hasCustomBullet(item) && (
                      <span className={`mr-6 mt-2 ${BRAND_COLOR} shrink-0`}>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6" /></svg>
                      </span>
                    )}
                    {item}
                  </motion.li>
                ))}
              </ul>

            </div>

            {/* Optional images on the right */}
            {hasImages && (
              <motion.div
                className="flex-shrink-0 w-[50%] flex flex-col gap-4 items-center justify-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {data.images!.map((src, i) => (
                  <div key={i} className={`relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/60 w-full ${i % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1deg]'} hover:rotate-0 transition-transform`}>
                    <img src={src} alt="" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                ))}
              </motion.div>
            )}

            {/* Optional footer text */}
            {data.footer && (
              <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center gap-4">
                {data.footerImage && (
                  <img src={data.footerImage} alt="" className="h-10 w-10 object-contain" />
                )}
                <p className={`${BRAND_COLOR} font-bold text-lg tracking-wide`}>{data.footer}</p>
              </div>
            )}

            {/* Optional visual icon on the right */}
            {data.icon && !hasImages && (
              <motion.div
                className="flex-shrink-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
              >
                <span className="text-[10rem] md:text-[14rem] leading-none select-none block opacity-90">{data.icon}</span>
              </motion.div>
            )}
          </div>
        );
      
      case SlideLayout.CYCLE:
        const items = data.content || [];
        const radius = 250; // Fixed radius for the cycle circle
        const isNegativeCycle = !!(data.title?.includes('VICIOSO'));
        const cycleAccent = isNegativeCycle ? '#EF4444' : '#10B981'; // red for negative, green for positive
        const cycleBorderClass = isNegativeCycle ? 'border-red-400' : 'border-emerald-400';
        const cycleBgClass = isNegativeCycle ? 'bg-red-50' : 'bg-emerald-50';
        const cycleTextClass = isNegativeCycle ? 'text-red-900' : 'text-emerald-900';
        const cycleTitleClass = isNegativeCycle ? 'text-red-600' : 'text-emerald-600';

        return (
          <div className={`flex flex-col items-center justify-center h-full relative ${isNegativeCycle ? 'bg-red-50/40' : 'bg-emerald-50/30'}`}>
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold mb-4 uppercase tracking-wide text-sm absolute top-12`}>
                {data.section}
              </h2>
            )}
            <h1 className={`text-4xl md:text-5xl font-black mb-4 absolute top-16 z-10 text-center px-4 ${cycleTitleClass}`}>
              {isNegativeCycle ? '❌ ' : '✅ '}{data.title}
            </h1>

            {/* Center icon - absolutely centered on the full slide */}
            {data.icon && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pt-16"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.5 }}
              >
                  {data.icon === 'leaky-bucket' ? (
                    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Handle - arc above the bucket */}
                      <path d="M55 45 C55 15 145 15 145 45" stroke={cycleAccent} strokeWidth="5" fill="none" strokeLinecap="round"/>
                      {/* Bucket top rim - wide ellipse */}
                      <ellipse cx="100" cy="50" rx="50" ry="12" stroke={cycleAccent} strokeWidth="4" fill="none"/>
                      {/* Bucket body - trapezoid shape, wider at top, narrower at bottom */}
                      <path d="M50 50 L65 150" stroke={cycleAccent} strokeWidth="4" strokeLinecap="round"/>
                      <path d="M150 50 L135 150" stroke={cycleAccent} strokeWidth="4" strokeLinecap="round"/>
                      {/* Bucket bottom - narrower ellipse */}
                      <ellipse cx="100" cy="150" rx="35" ry="8" stroke={cycleAccent} strokeWidth="4" fill="none"/>
                      {/* Metal bands */}
                      <path d="M56 75 Q100 90 144 75" stroke={cycleAccent} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                      <path d="M62 110 Q100 125 138 110" stroke={cycleAccent} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                      {/* Holes */}
                      <circle cx="75" cy="90" r="5" fill={cycleAccent}/>
                      <circle cx="130" cy="85" r="5" fill={cycleAccent}/>
                      <circle cx="95" cy="125" r="4.5" fill={cycleAccent}/>
                      {/* Water drops - left hole */}
                      <motion.g
                        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <path d="M72 96 C70 108 68 116 68 120" stroke={cycleAccent} strokeWidth="3" strokeLinecap="round" fill="none"/>
                        <circle cx="67" cy="124" r="3" fill={cycleAccent}/>
                      </motion.g>
                      {/* Water drops - right hole */}
                      <motion.g
                        animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut", delay: 0.4 }}
                      >
                        <path d="M133 91 C136 103 138 111 138 115" stroke={cycleAccent} strokeWidth="3" strokeLinecap="round" fill="none"/>
                        <circle cx="139" cy="119" r="3" fill={cycleAccent}/>
                      </motion.g>
                      {/* Water drops - bottom hole */}
                      <motion.g
                        animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut", delay: 0.7 }}
                      >
                        <path d="M95 131 C94 142 93 155 92 165" stroke={cycleAccent} strokeWidth="3" strokeLinecap="round" fill="none"/>
                        <circle cx="91" cy="169" r="3" fill={cycleAccent}/>
                      </motion.g>
                      {/* Water puddle at bottom */}
                      <motion.ellipse
                        cx="100" cy="195" rx="45" ry="6"
                        fill={cycleAccent}
                        animate={{ opacity: [0.2, 0.4, 0.2], rx: [40, 48, 40] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                  ) : (
                    <span className="text-[8rem] leading-none select-none block">{data.icon}</span>
                  )}
                </motion.div>
            )}

            {/* Container for cycle */}
            <div className="relative w-[680px] h-[680px] mt-14">
              {items.map((item, i) => {
                // Calculate position on the circle
                // Start from top ( -90 degrees)
                const angleDeg = (360 / items.length) * i - 90;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-56 -ml-28 -mt-12 flex flex-col items-center justify-center text-center"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className={`${cycleBgClass} border-2 ${cycleBorderClass} rounded-xl p-4 shadow-xl z-20 relative min-h-[80px] flex items-center justify-center w-full`}>
                      <p className={`font-black ${cycleTextClass} text-xl leading-tight`}>{item}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Arrows Layer - using SVG arcs for perfect circular paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <marker id={`arrowhead-${data.id}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill={cycleAccent} />
                  </marker>
                </defs>
                {items.map((_, i) => {
                  const n = items.length;
                  const cX = 340;
                  const cY = 340;
                  const arcR = radius + 30; // Arc runs slightly outside the node circle

                  // Angles for start and end nodes
                  const startAngleDeg = (360 / n) * i - 90;
                  const endAngleDeg = (360 / n) * ((i + 1) % n) - 90;

                  // Shorten arc by an offset (in degrees) so arrows don't overlap cards
                  const offsetDeg = 18;
                  const a1Deg = startAngleDeg + offsetDeg;
                  const a2Deg = endAngleDeg - offsetDeg;

                  const a1Rad = (a1Deg * Math.PI) / 180;
                  const a2Rad = (a2Deg * Math.PI) / 180;

                  const x1 = cX + Math.cos(a1Rad) * arcR;
                  const y1 = cY + Math.sin(a1Rad) * arcR;
                  const x2 = cX + Math.cos(a2Rad) * arcR;
                  const y2 = cY + Math.sin(a2Rad) * arcR;

                  return (
                    <motion.path
                      key={`arrow-${i}`}
                      d={`M ${x1} ${y1} A ${arcR} ${arcR} 0 0 1 ${x2} ${y2}`}
                      fill="none"
                      stroke={cycleAccent}
                      strokeWidth="3"
                      markerEnd={`url(#arrowhead-${data.id})`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: i * 0.2 + 0.2, duration: 0.5 }}
                      strokeDasharray="8 4"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        );

      case SlideLayout.QUOTE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-12 md:px-20">
            {/* Optional visual icon */}
            {data.icon ? (
              <motion.div
                className="mb-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              >
                <span className="text-[7rem] md:text-[9rem] leading-none select-none block">{data.icon}</span>
              </motion.div>
            ) : (
              <div className={`${BRAND_COLOR} mb-10`}>
                <Quote size={80} />
              </div>
            )}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-12 leading-[1.15] ${data.maxWidth || 'max-w-6xl'}`}>
              {data.highlight}
            </h1>
            {data.subtitle && <p className={`text-2xl md:text-3xl ${BRAND_COLOR} uppercase tracking-widest font-bold`}>{data.subtitle}</p>}
          </div>
        );

      case SlideLayout.SPLIT_IMAGE:
        return (
          <div className="flex h-full items-center">
            <div className="w-1/2 px-12 pr-6">
               {data.section && (
                 <h2 className={`${BRAND_COLOR} font-bold mb-3 uppercase tracking-widest text-base md:text-lg`}>
                   {data.section}
                 </h2>
               )}
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">{data.title}</h1>
               {data.subtitle && <h3 className="text-2xl md:text-3xl text-slate-500 mb-8 font-medium">{data.subtitle}</h3>}
            </div>
            <div className="w-1/2 h-3/4 bg-white rounded-l-3xl p-12 flex flex-col justify-center border-l border-t border-b border-orange-100 shadow-2xl shadow-orange-900/5">
               <ul className="space-y-8">
                {data.content?.map((item, idx) => (
                  <li key={idx} className={`text-2xl md:text-3xl text-slate-700 font-semibold border-l-4 ${BRAND_BORDER} pl-6 py-1`}>
                    {item}
                  </li>
                ))}
               </ul>
            </div>
          </div>
        );

      case SlideLayout.TABLE:
        return (
          <div className="flex flex-col justify-center h-full px-10 md:px-20">
             <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-2">{data.title}</h1>
             {data.subtitle && <p className={`text-2xl md:text-3xl ${BRAND_COLOR} mb-8 font-bold`}>{data.subtitle}</p>}

             <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
               <table className="w-full text-left">
                 <thead className="bg-slate-50 text-slate-500 uppercase text-base font-black border-b border-slate-200">
                   <tr>
                     {data.tableData?.headers.map((h, i) => (
                       <th key={i} className="px-6 py-5">{h}</th>
                     ))}
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {data.tableData?.rows.map((row, i) => (
                      <tr key={i} className={row.highlight ? 'bg-orange-50' : 'hover:bg-slate-50'}>
                        <td className="px-6 py-5 font-black text-slate-800 text-2xl">{row.label}</td>
                        <td className="px-6 py-5 text-slate-600 text-2xl font-semibold">{row.value1}</td>
                        {row.value2 && <td className="px-6 py-5 text-slate-600 text-2xl font-semibold">{row.value2}</td>}
                        {row.value3 && <td className={`px-6 py-5 text-2xl font-semibold ${row.value4 ? 'text-slate-600' : `${BRAND_COLOR} font-black font-mono`}`}>{row.value3}</td>}
                        {row.value4 && <td className={`px-6 py-5 font-mono ${BRAND_COLOR} font-black text-2xl`}>{row.value4}</td>}
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
             {data.footer && (
               <p className="text-slate-400 text-base mt-4 ml-2 italic">{data.footer}</p>
             )}
          </div>
        );

      case SlideLayout.COMPARISON:
        return (
          <div className="flex flex-col h-full justify-center px-10 md:px-16">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-12 text-center">{data.title}</h1>
            <div className="flex gap-8">
              <div className="flex-1 bg-red-50 border border-red-100 p-8 md:p-10 rounded-2xl">
                 <h2 className="text-2xl md:text-3xl font-black text-red-500 mb-8 uppercase tracking-wider">{data.comparisonData?.leftTitle}</h2>
                 <ul className="space-y-5">
                   {data.comparisonData?.leftContent?.map((item, i) => (
                     <li key={i} className="flex items-start text-red-900/80 text-2xl md:text-[1.7rem] font-semibold leading-snug">
                       <X className="w-8 h-8 text-red-400 mr-3 shrink-0 mt-0.5" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="flex-1 bg-white border border-orange-100 shadow-xl shadow-orange-500/10 p-8 md:p-10 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Check size={120} className="text-[#FF5533]" />
                 </div>
                 <h2 className={`text-2xl md:text-3xl font-black ${BRAND_COLOR} mb-8 uppercase tracking-wider`}>{data.comparisonData?.rightTitle}</h2>
                 <ul className="space-y-5">
                   {data.comparisonData?.rightContent?.map((item, i) => (
                     <li key={i} className="flex items-start text-slate-800 font-bold text-2xl md:text-[1.7rem] leading-snug">
                       <Check className={`w-8 h-8 ${BRAND_COLOR} mr-3 shrink-0 mt-0.5`} /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
            {data.footer && (
              <div className="mt-10 text-center">
                {data.footer.split('\n').map((line, i) => (
                  <p key={i} className={`${BRAND_COLOR} font-black text-2xl md:text-3xl tracking-wide leading-relaxed`}>{line}</p>
                ))}
              </div>
            )}
          </div>
        );

      case SlideLayout.ICON_IMPACT:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-10 md:px-16 relative overflow-hidden">
            {/* Subtle radial glow behind the icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5533]/8 rounded-full blur-[100px] pointer-events-none" />

            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold uppercase tracking-widest text-base md:text-lg mb-6 relative z-10`}>
                {data.section}
              </h2>
            )}

            {data.title && (
              <h3 className="text-3xl md:text-4xl text-slate-400 font-black uppercase tracking-wide mb-4 relative z-10 max-w-4xl">
                {data.title}
              </h3>
            )}

            {/* The big icon/emoji */}
            <motion.div
              className="relative z-10 mb-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <span className="text-[10rem] md:text-[14rem] leading-none select-none block">
                {data.icon}
              </span>
            </motion.div>

            {/* Headline */}
            {data.highlight && (
              <motion.h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] ${data.maxWidth || 'max-w-5xl'} relative z-10`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {data.highlight.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {data.highlightTerms?.length ? highlightText(line, data.highlightTerms) : line}
                    {i < (data.highlight!.split('\n').length - 1) && <br />}
                  </React.Fragment>
                ))}
              </motion.h1>
            )}

            {data.subtitle && (
              <motion.p
                className="mt-6 text-2xl md:text-3xl text-slate-500 max-w-3xl relative z-10 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {data.subtitle}
              </motion.p>
            )}
          </div>
        );

      case SlideLayout.VIDEO:
        return (
          <div className="flex flex-col items-center justify-center h-full px-10 md:px-16 pt-10 pb-16">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold uppercase tracking-widest text-sm md:text-base mb-2`}>
                {data.section}
              </h2>
            )}
            {data.title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-2 text-center leading-[1.1]">
                {data.title}
              </h1>
            )}
            {data.subtitle && (
              <p className="text-lg md:text-xl text-slate-500 mb-4 text-center max-w-4xl font-medium">{data.subtitle}</p>
            )}
            <div className="flex gap-6 items-center justify-center w-full max-w-[80%]">
              {data.videos?.map((src, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-black aspect-video max-h-[65vh]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 0.2 }}
                >
                  <video
                    src={src}
                    controls
                    className="w-full h-full object-contain"
                    preload="metadata"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      case SlideLayout.TESTIMONIALS:
        const testimonialImages = data.images || [];
        return (
          <div className="flex flex-col h-full px-8 md:px-12 py-6 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-4 shrink-0">
              {data.section && (
                <h2 className={`${BRAND_COLOR} font-bold uppercase tracking-widest text-sm md:text-base mb-1`}>
                  {data.section}
                </h2>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1]">
                {data.title}
              </h1>
              {data.subtitle && (
                <p className="text-lg md:text-xl text-slate-500 mt-1 font-medium">{data.subtitle}</p>
              )}
            </div>

            {/* Mosaic of testimonial images - no cropping */}
            <div className="flex-1 flex flex-wrap gap-3 justify-center items-start content-start overflow-hidden min-h-0">
              {testimonialImages.map((src, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg border border-slate-200/60 bg-white"
                  style={{ maxHeight: '30%', maxWidth: '24%' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      case SlideLayout.OFFER:
        // High impact dark slide with brand color
        return (
          <div className={`flex flex-col items-center justify-center h-full text-center px-10 md:px-16 relative overflow-hidden ${BRAND_BG}`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
             <div className="bg-white text-[#FF5533] font-black px-6 py-2 rounded-full uppercase tracking-wider mb-8 text-base shadow-md">
               Oferta Especial
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-sm leading-[1.1]">{data.title}</h1>
             <h2 className="text-3xl md:text-4xl text-orange-50 max-w-4xl mb-12 font-medium">{data.subtitle}</h2>
             <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
               <p className={`text-[#FF5533] text-5xl md:text-6xl font-black font-mono tracking-tighter`}>{data.highlight}</p>
             </div>
          </div>
        );

      case SlideLayout.GRID:
        const gridItems = data.content || [];
        return (
          <div className="flex flex-col h-full justify-center px-10 md:px-16">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold mb-3 uppercase tracking-widest text-base md:text-lg`}>
                {data.section}
              </h2>
            )}
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1]">{data.title}</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {gridItems.map((item, idx) => {
                const parts = item.split(' ');
                const emoji = parts[0];
                const label = parts.slice(1).join(' ');
                return (
                  <motion.div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:border-[#FF5533]/30 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 + 0.1 }}
                  >
                    <span className="text-4xl md:text-5xl mb-3 block">{emoji}</span>
                    <span className="text-base md:text-lg font-bold text-slate-800 leading-tight">{label}</span>
                  </motion.div>
                );
              })}
            </div>
            {data.footer && (
              <p className={`mt-8 text-center text-xl md:text-2xl ${BRAND_COLOR} font-bold`}>{data.footer}</p>
            )}
          </div>
        );

      case SlideLayout.BONUS_STACK: {
        const bonusItems = data.content || [];
        return (
          <div className="flex flex-col h-full justify-center px-10 md:px-20 pt-12 pb-8">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold mb-0.5 uppercase tracking-widest text-xs`}>
                {data.section}
              </h2>
            )}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 leading-[1.1]">{data.title}</h1>

            <div className="flex flex-col gap-1.5">
              {bonusItems.map((item, idx) => {
                const parts = item.split('|');
                const name = parts[0] || '';
                const desc = parts[1] || '';
                const value = parts[2] || '';
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-5 py-2.5 shadow-sm hover:shadow-md hover:border-[#FF5533]/30 transition-all"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg font-black text-slate-900 leading-tight">{name}</p>
                      <p className="text-xs md:text-sm text-slate-500 font-medium">{desc}</p>
                    </div>
                    <div className={`ml-4 shrink-0 ${BRAND_BG} text-white font-black text-sm md:text-base px-4 py-1.5 rounded-lg font-mono tracking-tight`}>
                      {value}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {data.highlight && (
              <motion.div
                className="mt-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: bonusItems.length * 0.1 + 0.3 }}
              >
                <span className={`inline-block ${BRAND_BG} text-white font-black text-lg md:text-xl px-6 py-2.5 rounded-xl font-mono tracking-tight shadow-lg`}>
                  {data.highlight}
                </span>
              </motion.div>
            )}
          </div>
        );
      }

      case SlideLayout.BONUS_STACK_OFFER: {
        const offerItems = data.content || [];
        return (
          <div className="flex h-full px-8 md:px-14 pt-10 pb-32 gap-8">
            {/* Left: compact bonus list */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-[1.1]">{data.title}</h1>
              <div className="flex flex-col gap-1">
                {offerItems.map((item, idx) => {
                  const parts = item.split('|');
                  const name = parts[0] || '';
                  const value = parts[1] || '';
                  return (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-1.5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 + 0.1 }}
                    >
                      <span className="text-sm md:text-base font-bold text-slate-800">{name}</span>
                      <span className="text-sm md:text-base text-slate-400 font-mono font-semibold ml-3 shrink-0">{value}</span>
                    </motion.div>
                  );
                })}

                {/* Total row - same format as items but crossed out */}
                {data.highlight && (
                  <motion.div
                    className="flex items-center justify-between bg-slate-100 border border-slate-300 rounded-lg px-4 py-1.5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: offerItems.length * 0.06 + 0.1 }}
                  >
                    <span className="text-sm md:text-base font-black text-slate-500 uppercase">Total</span>
                    <span className="text-sm md:text-base font-black font-mono ml-3 shrink-0 text-slate-400 line-through decoration-red-500 decoration-[3px]">
                      {data.highlight}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right: real price */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.9 }}
                className="flex flex-col items-center"
              >
                <span className="text-slate-500 font-bold text-xl md:text-2xl mb-2 uppercase tracking-wider">Você paga apenas</span>
                <span className={`${BRAND_COLOR} font-black text-7xl md:text-8xl lg:text-9xl font-mono leading-none`}>
                  {data.subtitle}
                </span>
                {data.footer && (
                  <p className="mt-4 text-slate-500 text-lg md:text-xl font-medium max-w-sm">
                    {data.footer}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        );
      }

      default:
        return <div>Unknown Layout</div>;
    }
  };

  return (
    <motion.div
      className="w-full h-full max-w-full mx-auto flex flex-col relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {renderContent()}
      {data.ctaLink && (
        <div className="absolute bottom-28 left-0 right-0 flex justify-center z-40">
          <span className="text-blue-600 underline underline-offset-8 decoration-[3px] font-black text-5xl md:text-6xl tracking-wide cursor-pointer select-all">
            {data.ctaLink}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default SlideRenderer;