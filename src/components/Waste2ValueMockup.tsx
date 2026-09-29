import { useState } from 'react';
import { Sparkles, DollarSign, Hammer, Recycle, Leaf, Scan, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface PresetItem {
  name: string;
  category: string;
  material: string;
  condition: string;
  estimatedValue: string;
  carbonOffsetKg: number;
  landfillDiversionKg: number;
  sellGuidance: string;
  createIdea: string;
  createSteps: string[];
  recycleGuidance: string;
}

const PRESET_ITEMS: PresetItem[] = [
  {
    name: 'Cardboard Shipping Boxes (4.5 kg)',
    category: 'Paper & Pulp Products',
    material: 'Corrugated Cellulose Fiber',
    condition: 'Dry, Flattened, Clean',
    estimatedValue: '₹45 – ₹60',
    carbonOffsetKg: 3.8,
    landfillDiversionKg: 4.5,
    sellGuidance: 'High demand by local scrap collectors (kabadiwala) and box manufacturers. Keep dry and bundles tied.',
    createIdea: 'Modular Desk Organizer or Acoustic Sound Dampening Tile',
    createSteps: [
      'Cut corrugated sheets into 30x30cm geometric squares',
      'Layer 3 plies with water-based PVA adhesive for rigidity',
      'Mount as geometric noise-absorbing wall decor or compartment dividers'
    ],
    recycleGuidance: 'Place in designated dry paper bin. Remove adhesive packaging tape and shipping labels.'
  },
  {
    name: 'Retired Android Smartphone (Display Broken)',
    category: 'Electronic Scrap (E-Waste)',
    material: 'Lithium Battery, Copper, Gold traces, Aluminum',
    condition: 'Internal motherboard intact, screen shattered',
    estimatedValue: '₹350 – ₹600',
    carbonOffsetKg: 18.2,
    landfillDiversionKg: 0.22,
    sellGuidance: 'Authorized e-waste buyback programs (Cashify, local authorized electronic refurbishers) offer salvage value.',
    createIdea: 'Dedicated Local Smart Home Server or Network Security Camera',
    createSteps: [
      'Connect to external display via USB-C OTG or ADB over Wi-Fi',
      'Install Linux Deploy or IP Webcam server app',
      'Repurpose as headless 24/7 home automation dashboard'
    ],
    recycleGuidance: 'Drop off at authorized CPCB e-waste collection center. Never dispose of lithium battery in municipal bins.'
  },
  {
    name: 'Clear PET Plastic Bottles (25 units)',
    category: 'Polymers (Type 1)',
    material: 'Polyethylene Terephthalate',
    condition: 'Rinsed, caps removed',
    estimatedValue: '₹20 – ₹35',
    carbonOffsetKg: 2.1,
    landfillDiversionKg: 0.95,
    sellGuidance: 'Sorted clear PET scrap commands highest scrap price per kg due to bottle-to-fiber spinning mills.',
    createIdea: 'Self-Watering Seedling Micro-Greenhouse Kit',
    createSteps: [
      'Invert bottle top half inside lower half with cotton wick',
      'Fill upper chamber with soil and compost; bottom acts as water reservoir',
      'Ideal for urban kitchen herb gardening'
    ],
    recycleGuidance: 'Crush flat to conserve transport volume. Separate plastic caps (HDPE) from PET bottles.'
  },
  {
    name: 'Denim Jeans Scrap Fabric (2.0 kg)',
    category: 'Textile Waste',
    material: 'Heavy Cotton Twill',
    condition: 'Clean, frayed seams',
    estimatedValue: '₹30 – ₹50',
    carbonOffsetKg: 7.4,
    landfillDiversionKg: 2.0,
    sellGuidance: 'Textile upcyclers purchase in bulk for industrial insulation and paper making.',
    createIdea: 'Thermal Laptop Sleeve or Heavy-Duty Cable Pouch',
    createSteps: [
      'Cut back pocket panels and main leg sections',
      'Stitch double-layered sleeve with recycled foam padding',
      'Pockets serve as built-in charger and stylus organizers'
    ],
    recycleGuidance: 'Submit to specialized clothing recycling deposit boxes or industrial rag shredders.'
  }
];

export function Waste2ValueMockup() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activePathway, setActivePathway] = useState<'sell' | 'create' | 'recycle'>('create');
  const [isScanning, setIsScanning] = useState(false);
  const [customItemQuery, setCustomItemQuery] = useState('');
  const [scanStep, setScanStep] = useState(3); // 1: Scan, 2: AI ID, 3: Material, 4: Value

  const currentItem = PRESET_ITEMS[selectedIdx];

  const handleSimulateScan = (newIdx?: number) => {
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 300);
    setTimeout(() => setScanStep(3), 600);
    setTimeout(() => {
      if (typeof newIdx === 'number') {
        setSelectedIdx(newIdx);
      }
      setScanStep(4);
      setIsScanning(false);
    }, 900);
  };

  const handleCustomAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemQuery.trim()) return;
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 300);
    setTimeout(() => {
      const lower = customItemQuery.toLowerCase();
      let matchedIdx = 0;
      if (lower.includes('phone') || lower.includes('battery') || lower.includes('electronic') || lower.includes('laptop')) {
        matchedIdx = 1;
      } else if (lower.includes('plastic') || lower.includes('bottle') || lower.includes('cup') || lower.includes('can')) {
        matchedIdx = 2;
      } else if (lower.includes('cloth') || lower.includes('jeans') || lower.includes('shirt') || lower.includes('fabric')) {
        matchedIdx = 3;
      } else {
        matchedIdx = 0;
      }
      setSelectedIdx(matchedIdx);
      setScanStep(4);
      setIsScanning(false);
      setCustomItemQuery('');
    }, 850);
  };

  return (
    <div
      data-cursor="card"
      className="relative rounded-2xl overflow-hidden p-6 sm:p-7 border border-[#16A394]/40 bg-gradient-to-br from-[#083B3A] via-[#0F4741] to-[#10182B] text-white shadow-2xl shadow-[#083B3A]/40 backdrop-blur-md"
    >
      {/* Top Header bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#16A394]/30 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#27AE78] shadow-[0_0_8px_#27AE78] animate-pulse" />
          <span className="font-bold text-[#FAFAF7]">Waste2Value Interactive AI Scanner</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#22D3EE]">
          <Zap className="w-3.5 h-3.5 text-[#E4A853]" />
          <span>Vision Prototype v1</span>
        </div>
      </div>

      {/* Workflow Step Tracker: SCAN → AI ID → MATERIAL → VALUE → ACTION */}
      <div className="mb-5 p-2 rounded-xl bg-[#051C1B]/80 border border-[#16A394]/30 grid grid-cols-4 gap-1 text-center text-[10px] font-mono">
        <div className={`py-1 rounded ${scanStep >= 1 ? 'bg-[#4F7CFF] text-white font-bold' : 'text-slate-400'}`}>
          1. SCAN
        </div>
        <div className={`py-1 rounded ${scanStep >= 2 ? 'bg-[#3949AB] text-white font-bold' : 'text-slate-400'}`}>
          2. AI ID
        </div>
        <div className={`py-1 rounded ${scanStep >= 3 ? 'bg-[#16A394] text-white font-bold' : 'text-slate-400'}`}>
          3. MATERIAL
        </div>
        <div className={`py-1 rounded ${scanStep >= 4 ? 'bg-[#E4A853] text-[#10131A] font-bold' : 'text-slate-400'}`}>
          4. VALUE
        </div>
      </div>

      {/* Preset Item Selector */}
      <div className="mb-4">
        <label className="block text-xs font-mono text-[#22D3EE] mb-2 uppercase tracking-wider font-semibold">
          Select Material to Scan:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_ITEMS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleSimulateScan(idx)}
              className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#16A394] border-[#22D3EE] text-white shadow-[0_0_12px_rgba(22,163,148,0.5)] font-semibold'
                  : 'bg-[#082B29]/70 border-[#16A394]/30 text-slate-300 hover:text-white hover:border-[#16A394]'
              }`}
            >
              <div className="truncate font-medium">{item.name.split('(')[0]}</div>
              <div className="text-[10px] text-[#E4A853] font-mono mt-0.5">{item.estimatedValue}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick custom item scanner query */}
      <form onSubmit={handleCustomAnalyze} className="mb-5 flex gap-2">
        <input
          type="text"
          placeholder="Test custom item (e.g. Copper wiring, Newspaper, Soda cans)..."
          value={customItemQuery}
          onChange={(e) => setCustomItemQuery(e.target.value)}
          className="flex-1 bg-[#051C1B]/90 border border-[#16A394]/40 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#22D3EE] font-sans"
        />
        <button
          type="submit"
          disabled={isScanning}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#16A394] hover:brightness-110 text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-md"
        >
          {isScanning ? 'Analyzing...' : 'Scan Item'}
        </button>
      </form>

      {/* Scanning Target Visualizer with Laser Sweep Effect */}
      <div className="relative p-5 rounded-xl bg-[#041615] border border-[#16A394]/50 mb-5 overflow-hidden">
        {/* Animated Laser Scanning Beam */}
        {isScanning && (
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent shadow-[0_0_15px_#22D3EE] animate-scan-sweep pointer-events-none" />
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#16A394]/30">
          <div>
            <div className="text-[11px] font-mono text-[#22D3EE] uppercase tracking-wider font-semibold">
              AI Identification Output
            </div>
            <div className="text-lg font-bold text-white mt-0.5">
              {currentItem.name}
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-[11px] font-mono text-[#E4A853] uppercase tracking-wider font-semibold">
              Estimated Salvage Value
            </div>
            <div className="text-xl font-extrabold text-[#E4A853] mt-0.5">
              {currentItem.estimatedValue}
            </div>
          </div>
        </div>

        {/* Unboxed Metadata row */}
        <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <span>Category: <strong className="text-white font-medium">{currentItem.category}</strong></span>
          <span className="text-[#16A394]">·</span>
          <span>Material: <strong className="text-white font-medium">{currentItem.material}</strong></span>
          <span className="text-[#16A394]">·</span>
          <span>Status: <strong className="text-white font-medium">{currentItem.condition}</strong></span>
        </div>
      </div>

      {/* Decision Pathway Tabs */}
      <div className="mb-4">
        <div className="text-xs font-mono text-[#22D3EE] mb-2 uppercase tracking-wider font-semibold">
          Select Recommended Pathway:
        </div>
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#051C1B] rounded-xl border border-[#16A394]/35">
          <button
            type="button"
            onClick={() => setActivePathway('sell')}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activePathway === 'sell'
                ? 'bg-[#E4A853] text-[#10131A] shadow-[0_0_12px_rgba(228,168,83,0.5)]'
                : 'text-slate-300 hover:text-white hover:bg-[#082B29]'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>SELL</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePathway('create')}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activePathway === 'create'
                ? 'bg-[#16A394] text-white shadow-[0_0_12px_rgba(22,163,148,0.5)]'
                : 'text-slate-300 hover:text-white hover:bg-[#082B29]'
            }`}
          >
            <Hammer className="w-4 h-4" />
            <span>CREATE</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePathway('recycle')}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activePathway === 'recycle'
                ? 'bg-[#27AE78] text-white shadow-[0_0_12px_rgba(39,174,120,0.5)]'
                : 'text-slate-300 hover:text-white hover:bg-[#082B29]'
            }`}
          >
            <Recycle className="w-4 h-4" />
            <span>RECYCLE</span>
          </button>
        </div>
      </div>

      {/* Pathway Action Card Content */}
      <div className="p-4 rounded-xl bg-[#051C1B]/90 border border-[#16A394]/40 mb-5 min-h-[140px]">
        {activePathway === 'sell' && (
          <div className="space-y-2 text-xs">
            <div className="font-bold text-[#E4A853] flex items-center gap-1.5 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Scrap Buyer Valuation &amp; Payout</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              {currentItem.sellGuidance}
            </p>
            <div className="pt-2 text-[11px] text-[#22D3EE] font-mono">
              Recommendation: Bundle similar weight classifications for best unit pricing.
            </div>
          </div>
        )}

        {activePathway === 'create' && (
          <div className="space-y-2.5 text-xs">
            <div className="font-bold text-[#22D3EE] flex items-center gap-1.5 text-sm">
              <Hammer className="w-4 h-4 text-[#16A394]" />
              <span>DIY Upcycling Concept: {currentItem.createIdea}</span>
            </div>
            <ol className="space-y-1.5 pl-4 list-decimal text-slate-200 marker:text-[#16A394]">
              {currentItem.createSteps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {activePathway === 'recycle' && (
          <div className="space-y-2 text-xs">
            <div className="font-bold text-[#27AE78] flex items-center gap-1.5 text-sm">
              <Recycle className="w-4 h-4" />
              <span>Ecological Separation Protocol</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              {currentItem.recycleGuidance}
            </p>
            <div className="pt-2 text-[11px] text-[#27AE78] font-mono">
              Clean stream sorting ensures 98%+ mechanical recycling purity.
            </div>
          </div>
        )}
      </div>

      {/* Environmental Impact Counter with Emerald & Teal glow */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#041615] via-[#082B29] to-[#041615] border border-[#27AE78]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[#27AE78] shrink-0" />
          <span className="text-slate-200 font-semibold">Estimated Environmental Footprint:</span>
        </div>
        <div className="flex items-center gap-3 text-white font-mono text-xs font-bold">
          <span className="text-[#27AE78]">-{currentItem.carbonOffsetKg} kg CO₂e</span>
          <span className="text-slate-600">·</span>
          <span className="text-[#22D3EE]">+{currentItem.landfillDiversionKg} kg Landfill Diverted</span>
        </div>
      </div>
    </div>
  );
}
