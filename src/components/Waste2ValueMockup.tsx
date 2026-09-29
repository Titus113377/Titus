import { useState } from 'react';
import { Sparkles, DollarSign, Hammer, Recycle, Leaf, ShieldCheck, ChevronRight } from 'lucide-react';

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
    material: 'Corrugated Cardboard',
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

  const currentItem = PRESET_ITEMS[selectedIdx];

  return (
    <div className="border border-neutral-800 rounded-xl bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-xs">
      {/* Concept disclaimer */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-semibold text-neutral-200">Interactive Prototype Simulation</span>
        </div>
        <span className="font-mono text-[11px] text-neutral-500">Conceptual AI UX</span>
      </div>

      {/* Input / Item Selector */}
      <div className="mb-5">
        <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
          Select Sample Waste Material to Inspect:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_ITEMS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`p-2.5 rounded-lg text-left text-xs transition-all border ${
                selectedIdx === idx
                  ? 'bg-neutral-800 border-neutral-600 text-white shadow-xs'
                  : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <div className="font-medium truncate">{item.name.split('(')[0]}</div>
              <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{item.estimatedValue}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Detection Result Summary */}
      <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-800/70">
          <div>
            <div className="text-xs text-neutral-400 font-mono">Detected Classification</div>
            <div className="text-base font-semibold text-white mt-0.5">
              {currentItem.name}
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xs text-neutral-400 font-mono">Estimated Material Value</div>
            <div className="text-base font-bold text-emerald-400 mt-0.5">
              {currentItem.estimatedValue}
            </div>
          </div>
        </div>

        {/* Unboxed Metadata row */}
        <div className="pt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
          <span>Category: <strong className="text-neutral-300 font-normal">{currentItem.category}</strong></span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Material: <strong className="text-neutral-300 font-normal">{currentItem.material}</strong></span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Status: <strong className="text-neutral-300 font-normal">{currentItem.condition}</strong></span>
        </div>
      </div>

      {/* Decision Pathway Tabs */}
      <div className="mb-4">
        <div className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
          Action Pathways (Select one):
        </div>
        <div className="grid grid-cols-3 gap-2 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
          <button
            type="button"
            onClick={() => setActivePathway('sell')}
            className={`py-2 px-3 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
              activePathway === 'sell'
                ? 'bg-neutral-800 text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>SELL</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePathway('create')}
            className={`py-2 px-3 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
              activePathway === 'create'
                ? 'bg-neutral-800 text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Hammer className="w-3.5 h-3.5" />
            <span>CREATE</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePathway('recycle')}
            className={`py-2 px-3 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
              activePathway === 'recycle'
                ? 'bg-neutral-800 text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Recycle className="w-3.5 h-3.5" />
            <span>RECYCLE</span>
          </button>
        </div>
      </div>

      {/* Pathway Action Card Content */}
      <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800 mb-5 min-h-[140px]">
        {activePathway === 'sell' && (
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-neutral-200 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Monetization &amp; Scrap Value Strategy</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              {currentItem.sellGuidance}
            </p>
            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              Action: Locate nearest certified buyer · Batch minimum weights for optimal payout
            </div>
          </div>
        )}

        {activePathway === 'create' && (
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-neutral-200 flex items-center gap-1.5">
              <Hammer className="w-4 h-4 text-amber-400" />
              <span>DIY Upcycling Concept: {currentItem.createIdea}</span>
            </div>
            <ol className="space-y-1.5 pl-4 list-decimal text-neutral-400 marker:text-neutral-500">
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
            <div className="font-semibold text-neutral-200 flex items-center gap-1.5">
              <Recycle className="w-4 h-4 text-sky-400" />
              <span>Proper Material Sorting &amp; Disposal Protocol</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              {currentItem.recycleGuidance}
            </p>
            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              Avoid contamination: Mixing adhesives or wet organic waste degrades recycler yield.
            </div>
          </div>
        )}
      </div>

      {/* Environmental Impact Counter */}
      <div className="p-3.5 rounded-lg bg-neutral-900/50 border border-neutral-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-neutral-400 font-medium">Estimated Environmental Impact:</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 font-mono text-[11px]">
          <span>-{currentItem.carbonOffsetKg} kg CO₂</span>
          <span className="text-neutral-600">·</span>
          <span>+{currentItem.landfillDiversionKg} kg Landfill Diverted</span>
        </div>
      </div>
    </div>
  );
}
