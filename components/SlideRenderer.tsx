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
  const indicators = ['❌', '👉', '✅', '🔑', '•', '📊', '⚠️', '1️⃣', '2️⃣', '3️⃣', '🎁', '👤', '🤖', '❓', '💰', '➡️', '🛑', '👥', '🤝', '🔍'];
  return indicators.some(i => text.trim().startsWith(i));
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
                {data.title?.split(/(40% mais|SECRET \d|SDR DE IA|OBRIGADO!)/).map((part, i) => 
                  part.match(/(40% mais|SECRET \d|SDR DE IA|OBRIGADO!)/) ? (
                    <span key={i} className="text-[#FF5533]">{part}</span>
                  ) : (
                    part
                  )
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl">
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
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
             {data.title && <h2 className="text-slate-400 font-bold uppercase tracking-wider mb-8 text-xl">{data.title}</h2>}
             <h1 className={`text-5xl md:text-7xl font-bold text-slate-900 leading-tight max-w-6xl`}>
               {data.highlight?.split('\n').map((line, i) => {
                 const isHighlighted = line.includes('R$14.000') || line.includes('Valor real');
                 return (
                   <React.Fragment key={i}>
                     <span className={isHighlighted ? BRAND_COLOR : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"}>
                       {line}
                     </span>
                     {i < (data.highlight?.split('\n').length || 0) - 1 && <br />}
                   </React.Fragment>
                 )
               })}
             </h1>
             {data.subtitle && <p className="mt-10 text-2xl text-slate-500 max-w-4xl">{data.subtitle}</p>}
             {data.footer && (
               <div className="mt-16 animate-pulse bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
                 <p className={`${BRAND_COLOR} font-mono font-medium`}>{data.footer}</p>
               </div>
             )}
          </div>
        );

      case SlideLayout.BULLETS:
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-32">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold mb-4 uppercase tracking-wide text-sm`}>
                {data.section}
              </h2>
            )}
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">{data.title}</h1>
            {data.subtitle && <p className="text-2xl text-slate-500 mb-12">{data.subtitle}</p>}
            <ul className="space-y-6">
              {data.content?.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="flex items-start text-3xl md:text-4xl text-slate-700 leading-snug"
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
        );
      
      case SlideLayout.CYCLE:
        const items = data.content || [];
        const radius = 220; // Fixed radius for the cycle circle

        return (
          <div className="flex flex-col items-center justify-center h-full relative">
            {data.section && (
              <h2 className={`${BRAND_COLOR} font-bold mb-4 uppercase tracking-wide text-sm absolute top-12`}>
                {data.section}
              </h2>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 absolute top-20 z-10 text-center px-4">
              {data.title}
            </h1>

            {/* Container for cycle */}
            <div className="relative w-[600px] h-[600px] mt-24">
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
                    <div className={`bg-white border-2 ${BRAND_BORDER} rounded-xl p-4 shadow-xl z-20 relative min-h-[80px] flex items-center justify-center w-full`}>
                      <p className="font-bold text-slate-800 text-lg leading-tight">{item}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Arrows Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#FF5533" />
                  </marker>
                </defs>
                {items.map((_, i) => {
                  const startAngle = (360 / items.length) * i - 90;
                  const endAngle = (360 / items.length) * ((i + 1) % items.length) - 90;

                  // Center of the container
                  const cX = 300; 
                  const cY = 300;
                  const r = radius;

                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  // Coordinates of nodes
                  const x1 = cX + Math.cos(startRad) * r;
                  const y1 = cY + Math.sin(startRad) * r;
                  // const x2 = cX + Math.cos(endRad) * r;
                  // const y2 = cY + Math.sin(endRad) * r;

                  // Calculate vector to target to shorten the line so arrowhead doesn't hide under card
                  const rawX2 = cX + Math.cos(endRad) * r;
                  const rawY2 = cY + Math.sin(endRad) * r;
                  
                  // Control point for curve (push out)
                  // Handle wrap around angle for last item
                  let midAngleRad = (startRad + endRad) / 2;
                  if (i === items.length - 1) {
                     midAngleRad = (startRad + endRad + Math.PI * 2) / 2;
                  }

                  const cpR = r * 1.4; // Curve outwards
                  const cpx = cX + Math.cos(midAngleRad) * cpR;
                  const cpy = cY + Math.sin(midAngleRad) * cpR;

                  // Shorten end point
                  // We approximate the direction from control point to end point
                  // Vector from CP to P2
                  const dx = rawX2 - cpx;
                  const dy = rawY2 - cpy;
                  const dist = Math.sqrt(dx*dx + dy*dy);
                  const shortenBy = 70; // Approx half width of card + margin
                  const x2 = rawX2 - (dx / dist) * shortenBy;
                  const y2 = rawY2 - (dy / dist) * shortenBy;

                  // Shorten start point too slightly
                  const dxS = x1 - cpx;
                  const dyS = y1 - cpy;
                  const distS = Math.sqrt(dxS*dxS + dyS*dyS);
                  const shortenStart = 60;
                  const x1_adj = x1 - (dxS / distS) * shortenStart;
                  const y1_adj = y1 - (dyS / distS) * shortenStart;


                  return (
                    <motion.path
                      key={`arrow-${i}`}
                      d={`M ${x1_adj} ${y1_adj} Q ${cpx} ${cpy} ${x2} ${y2}`}
                      fill="none"
                      stroke="#FF5533"
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
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
          <div className="flex flex-col items-center justify-center h-full text-center px-12">
            <div className={`${BRAND_COLOR} mb-8`}>
              <Quote size={60} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif italic text-slate-800 mb-12 leading-tight max-w-5xl">
              "{data.highlight}"
            </h1>
            {data.subtitle && <p className={`text-xl ${BRAND_COLOR} uppercase tracking-widest font-bold`}>{data.subtitle}</p>}
          </div>
        );

      case SlideLayout.SPLIT_IMAGE:
        return (
          <div className="flex h-full items-center">
            <div className="w-1/2 px-12 pr-6">
               {data.section && (
                 <h2 className={`${BRAND_COLOR} font-bold mb-3 uppercase tracking-wide text-sm`}>
                   {data.section}
                 </h2>
               )}
               <h1 className="text-6xl font-black text-slate-900 mb-6 leading-tight">{data.title}</h1>
               {data.subtitle && <h3 className="text-2xl text-slate-500 mb-8 font-light">{data.subtitle}</h3>}
            </div>
            <div className="w-1/2 h-3/4 bg-white rounded-l-3xl p-12 flex flex-col justify-center border-l border-t border-b border-orange-100 shadow-2xl shadow-orange-900/5">
               <ul className="space-y-8">
                {data.content?.map((item, idx) => (
                  <li key={idx} className={`text-2xl text-slate-700 border-l-4 ${BRAND_BORDER} pl-6 py-1`}>
                    {item}
                  </li>
                ))}
               </ul>
            </div>
          </div>
        );

      case SlideLayout.TABLE:
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
             <h1 className="text-4xl font-bold text-slate-900 mb-2">{data.title}</h1>
             {data.subtitle && <p className={`text-xl ${BRAND_COLOR} mb-8`}>{data.subtitle}</p>}
             
             <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
               <table className="w-full text-left">
                 <thead className="bg-slate-50 text-slate-500 uppercase text-sm font-bold border-b border-slate-200">
                   <tr>
                     {data.tableData?.headers.map((h, i) => (
                       <th key={i} className="px-6 py-4">{h}</th>
                     ))}
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {data.tableData?.rows.map((row, i) => (
                      <tr key={i} className={row.highlight ? 'bg-orange-50' : 'hover:bg-slate-50'}>
                        <td className="px-6 py-5 font-bold text-slate-800 text-xl">{row.label}</td>
                        <td className="px-6 py-5 text-slate-600 text-xl">{row.value1}</td>
                        {row.value2 && <td className="px-6 py-5 text-slate-600 text-xl">{row.value2}</td>}
                        {row.value3 && <td className={`px-6 py-5 text-xl ${row.value4 ? 'text-slate-600' : `${BRAND_COLOR} font-bold font-mono`}`}>{row.value3}</td>}
                        {row.value4 && <td className={`px-6 py-5 font-mono ${BRAND_COLOR} font-bold text-xl`}>{row.value4}</td>}
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>
        );

      case SlideLayout.COMPARISON:
        return (
          <div className="flex flex-col h-full justify-center px-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">{data.title}</h1>
            <div className="flex gap-8">
              <div className="flex-1 bg-red-50 border border-red-100 p-8 rounded-2xl">
                 <h2 className="text-2xl font-bold text-red-500 mb-6 uppercase tracking-wider">{data.comparisonData?.leftTitle}</h2>
                 <ul className="space-y-4">
                   {data.comparisonData?.leftContent?.map((item, i) => (
                     <li key={i} className="flex items-start text-red-900/80 text-xl font-medium">
                       <X className="w-6 h-6 text-red-400 mr-2 shrink-0" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="flex-1 bg-white border border-orange-100 shadow-xl shadow-orange-500/10 p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Check size={100} className="text-[#FF5533]" />
                 </div>
                 <h2 className={`text-2xl font-bold ${BRAND_COLOR} mb-6 uppercase tracking-wider`}>{data.comparisonData?.rightTitle}</h2>
                 <ul className="space-y-4">
                   {data.comparisonData?.rightContent?.map((item, i) => (
                     <li key={i} className="flex items-start text-slate-800 font-semibold text-xl">
                       <Check className={`w-6 h-6 ${BRAND_COLOR} mr-2 shrink-0`} /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        );

      case SlideLayout.OFFER:
        // High impact dark slide with brand color
        return (
          <div className={`flex flex-col items-center justify-center h-full text-center px-12 relative overflow-hidden ${BRAND_BG}`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
             <div className="bg-white text-[#FF5533] font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-8 text-sm shadow-md">
               Oferta Especial
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-sm">{data.title}</h1>
             <h2 className="text-3xl text-orange-50 max-w-4xl mb-12">{data.subtitle}</h2>
             <div className="bg-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
               <p className={`text-[#FF5533] text-5xl font-black font-mono tracking-tighter`}>{data.highlight}</p>
             </div>
          </div>
        );

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
    </motion.div>
  );
};

export default SlideRenderer;