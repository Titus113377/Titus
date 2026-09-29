import { useState } from 'react';
import { X, CheckCircle, AlertTriangle, Check, ArrowRight, ShieldCheck, CreditCard, Award } from 'lucide-react';

interface SimulatorModalProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectSimulators({ projectId, onClose }: SimulatorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182B]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#18254A] to-[#10182B] border border-[#3949AB]/50 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden text-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3949AB]/30">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F7CFF] shadow-[0_0_8px_#4F7CFF]" />
            <div>
              <div className="text-[11px] font-mono text-[#22D3EE] uppercase tracking-widest font-bold">
                Live Interactive Logic Sandbox
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {projectId === 'voter-eligibility' && 'Voter Eligibility Calculator'}
                {projectId === 'atm-management' && 'ATM Management System'}
                {projectId === 'grade-calculator' && 'Student Grade Calculator'}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-[#18254A] transition-colors border border-transparent hover:border-[#3949AB]/40 cursor-pointer"
            aria-label="Close Simulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content depending on selected project */}
        {projectId === 'voter-eligibility' && <VoterCalculatorSimulator />}
        {projectId === 'atm-management' && <AtmSystemSimulator />}
        {projectId === 'grade-calculator' && <GradeCalculatorSimulator />}

        {/* Modal Footer */}
        <div className="pt-4 mt-6 border-t border-[#3949AB]/30 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono text-[11px] text-slate-400">Pure Python algorithmic logic executed client-side</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#18254A] border border-[#3949AB]/50 text-slate-200 hover:text-white hover:border-[#4F7CFF] transition-all font-semibold cursor-pointer"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. Voter Eligibility Simulator
function VoterCalculatorSimulator() {
  const [age, setAge] = useState<number>(19);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [hasVoterId, setHasVoterId] = useState<boolean>(true);

  const isEligible = age >= 18 && isCitizen;
  const canVoteImmediately = isEligible && hasVoterId;

  return (
    <div className="space-y-4 text-xs">
      <p className="text-slate-300">
        Test the multi-branch conditional validation algorithm governing statutory voter eligibility.
      </p>

      <div className="space-y-3.5 bg-[#0B1120] p-4 rounded-xl border border-[#4F7CFF]/30">
        <div>
          <div className="flex justify-between mb-2 text-slate-200 font-medium">
            <span>Applicant Age:</span>
            <span className="font-mono text-[#4F7CFF] text-sm font-bold">{age} years</span>
          </div>
          <input
            type="range"
            min={12}
            max={90}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-[#4F7CFF] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>12 years</span>
            <span className="text-[#22D3EE] font-bold">18 (Statutory Threshold)</span>
            <span>90 years</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <label className="flex items-center gap-2 text-slate-200 cursor-pointer">
            <input
              type="checkbox"
              checked={isCitizen}
              onChange={(e) => setIsCitizen(e.target.checked)}
              className="rounded bg-[#18254A] border-[#3949AB] text-[#4F7CFF] focus:ring-0"
            />
            <span>Certified Citizen</span>
          </label>

          <label className="flex items-center gap-2 text-slate-200 cursor-pointer">
            <input
              type="checkbox"
              checked={hasVoterId}
              onChange={(e) => setHasVoterId(e.target.checked)}
              className="rounded bg-[#18254A] border-[#3949AB] text-[#4F7CFF] focus:ring-0"
            />
            <span>Enrolled on Registry</span>
          </label>
        </div>
      </div>

      {/* Result feedback */}
      <div
        className={`p-4 rounded-xl border flex items-start gap-3 ${
          canVoteImmediately
            ? 'bg-[#27AE78]/15 border-[#27AE78]/50 text-[#27AE78]'
            : isEligible
            ? 'bg-[#E4A853]/15 border-[#E4A853]/50 text-[#E4A853]'
            : 'bg-[#E87961]/15 border-[#E87961]/50 text-[#E87961]'
        }`}
      >
        {canVoteImmediately ? (
          <CheckCircle className="w-5 h-5 shrink-0 text-[#27AE78] mt-0.5" />
        ) : (
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        )}
        <div>
          <div className="font-bold text-sm">
            {canVoteImmediately
              ? 'Status: Fully Eligible to Vote in Elections'
              : isEligible
              ? 'Status: Age & Citizen Criteria Met (Registration Form Required)'
              : 'Status: Ineligible Under Electoral Laws'}
          </div>
          <div className="mt-1 text-xs opacity-90 leading-relaxed text-slate-200">
            {age < 18 && `Applicant is currently ${age}. Must wait ${18 - age} year(s) until legal voting age.`}
            {!isCitizen && ' Constitutional voting rights require legal citizenship credentials.'}
            {isEligible && !hasVoterId && ' Age and citizenship validated. Next step: complete registration form at local electoral office.'}
            {canVoteImmediately && ' Verified against statutory age guidelines and electoral enrollment status.'}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. ATM System Simulator
function AtmSystemSimulator() {
  const [balance, setBalance] = useState<number>(1200);
  const [amount, setAmount] = useState<string>('200');
  const [history, setHistory] = useState<string[]>([
    'Account authenticated successfully',
    'Opening balance: ₹1,200',
  ]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDeposit = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback('Error: Enter a valid positive deposit amount.');
      return;
    }
    const newBal = balance + val;
    setBalance(newBal);
    setHistory((prev) => [`Deposited ₹${val.toFixed(2)} (New Balance: ₹${newBal.toFixed(2)})`, ...prev.slice(0, 4)]);
    setFeedback(`Success: ₹${val} added to your account.`);
    setAmount('');
  };

  const handleWithdraw = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback('Error: Enter a valid positive withdrawal amount.');
      return;
    }
    if (val > balance) {
      setFeedback(`Transaction Declined: Insufficient balance (Current: ₹${balance.toFixed(2)}).`);
      return;
    }
    const newBal = balance - val;
    setBalance(newBal);
    setHistory((prev) => [`Withdrew ₹${val.toFixed(2)} (New Balance: ₹${newBal.toFixed(2)})`, ...prev.slice(0, 4)]);
    setFeedback(`Dispensed: ₹${val}. Take your cash.`);
    setAmount('');
  };

  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-xl bg-[#0B1120] border border-[#E4A853]/40 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono text-[#E4A853] font-bold uppercase tracking-wider">
            Verified Account Balance
          </div>
          <div className="text-2xl font-bold font-mono text-[#E4A853] mt-0.5">
            ₹{balance.toFixed(2)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-mono text-slate-400">Security State</div>
          <span className="text-[11px] text-[#27AE78] font-mono font-bold">● PIN Validated</span>
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter amount (e.g. 100)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 bg-[#0B1120] border border-[#3949AB]/50 rounded-xl px-3.5 py-2 text-white font-mono placeholder:text-slate-500 focus:outline-none focus:border-[#E4A853] text-xs"
        />
        <button
          type="button"
          onClick={handleDeposit}
          className="px-4 py-2 rounded-xl bg-[#18254A] border border-[#3949AB]/50 text-slate-200 hover:text-white hover:bg-[#3949AB] transition-colors font-bold cursor-pointer"
        >
          Deposit
        </button>
        <button
          type="button"
          onClick={handleWithdraw}
          className="px-4 py-2 rounded-xl bg-[#E4A853] text-[#10131A] hover:brightness-110 transition-colors font-bold cursor-pointer shadow-md"
        >
          Withdraw
        </button>
      </div>

      {feedback && (
        <div className="p-2.5 rounded-lg bg-[#18254A]/80 border border-[#3949AB]/50 text-slate-200 font-mono text-[11px]">
          {feedback}
        </div>
      )}

      {/* Mini statement log */}
      <div>
        <div className="text-[11px] font-mono text-[#E4A853] uppercase tracking-wider mb-1.5 font-bold">
          Mini-Statement Ledger:
        </div>
        <div className="p-3.5 rounded-xl bg-[#0B1120] border border-[#3949AB]/40 font-mono text-[11px] text-slate-300 space-y-1.5">
          {history.map((log, i) => (
            <div key={i} className="truncate">
              › {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Student Grade Calculator Simulator
function GradeCalculatorSimulator() {
  const [courses, setCourses] = useState<{ name: string; marks: number }[]>([
    { name: 'Python Programming', marks: 88 },
    { name: 'Web Fundamentals', marks: 82 },
    { name: 'Engineering Mathematics', marks: 76 },
    { name: 'Digital Logic', marks: 85 },
  ]);

  const updateMark = (index: number, val: number) => {
    const clamped = Math.max(0, Math.min(100, isNaN(val) ? 0 : val));
    const next = [...courses];
    next[index].marks = clamped;
    setCourses(next);
  };

  const total = courses.reduce((acc, c) => acc + c.marks, 0);
  const average = total / courses.length;

  let grade = 'F';
  let gpa = 0.0;
  let status = 'Fail';

  if (average >= 90) {
    grade = 'A+';
    gpa = 10.0;
    status = 'Outstanding Distinction';
  } else if (average >= 80) {
    grade = 'A';
    gpa = 9.0;
    status = 'First Class Distinction';
  } else if (average >= 70) {
    grade = 'B+';
    gpa = 8.0;
    status = 'First Class';
  } else if (average >= 60) {
    grade = 'B';
    gpa = 7.0;
    status = 'Second Class';
  } else if (average >= 50) {
    grade = 'C';
    gpa = 6.0;
    status = 'Pass';
  }

  return (
    <div className="space-y-4 text-xs">
      <p className="text-slate-300">
        Adjust course marks (0–100) to see dynamic aggregate GPA, classification, and grade boundary logic.
      </p>

      <div className="space-y-2.5 bg-[#0B1120] p-4 rounded-xl border border-[#E87961]/30">
        {courses.map((course, i) => (
          <div key={course.name} className="flex items-center justify-between gap-3">
            <span className="text-slate-200 font-medium">{course.name}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                max={100}
                value={course.marks}
                onChange={(e) => updateMark(i, parseInt(e.target.value))}
                className="w-16 bg-[#18254A] border border-[#E87961]/50 rounded-lg px-2 py-1 text-center font-mono text-white text-xs font-bold"
              />
              <span className="text-[11px] text-slate-400 font-mono">/ 100</span>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate Output */}
      <div className="p-4 rounded-xl bg-[#0B1120] border border-[#E87961]/40 grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Average %</div>
          <div className="text-lg font-bold font-mono text-white mt-0.5">
            {average.toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[#E87961] uppercase font-bold">Grade (GPA)</div>
          <div className="text-lg font-extrabold font-mono text-[#E87961] mt-0.5">
            {grade} ({gpa.toFixed(1)})
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[#27AE78] uppercase font-bold">Classification</div>
          <div className="text-xs font-bold text-[#27AE78] mt-1 truncate">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}
