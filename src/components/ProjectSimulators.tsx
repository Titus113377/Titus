import { useState } from 'react';
import { X, CheckCircle, AlertTriangle, Check, ArrowRight } from 'lucide-react';

interface SimulatorModalProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectSimulators({ projectId, onClose }: SimulatorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
          <div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
              Live Logic Sandbox
            </div>
            <h3 className="text-lg font-semibold text-white mt-0.5">
              {projectId === 'voter-eligibility' && 'Voter Eligibility Calculator'}
              {projectId === 'atm-management' && 'ATM Management System'}
              {projectId === 'grade-calculator' && 'Student Grade Calculator'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors"
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
        <div className="pt-4 mt-5 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
          <span>Python algorithmic logic ported directly to client sandbox</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
          >
            Close
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
      <p className="text-neutral-400">
        Test the multi-branch conditional logic verifying voter eligibility parameters.
      </p>

      <div className="space-y-3 bg-neutral-950/60 p-4 rounded-lg border border-neutral-800">
        <div>
          <div className="flex justify-between mb-1.5 text-neutral-300 font-medium">
            <span>Applicant Age:</span>
            <span className="font-mono text-white text-sm">{age} years</span>
          </div>
          <input
            type="range"
            min={12}
            max={90}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-neutral-200 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
            <span>12</span>
            <span>18 (Legal Minimum)</span>
            <span>90</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <label className="flex items-center gap-2 text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isCitizen}
              onChange={(e) => setIsCitizen(e.target.checked)}
              className="rounded bg-neutral-800 border-neutral-700 text-neutral-100"
            />
            <span>Citizen Status</span>
          </label>

          <label className="flex items-center gap-2 text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              checked={hasVoterId}
              onChange={(e) => setHasVoterId(e.target.checked)}
              className="rounded bg-neutral-800 border-neutral-700 text-neutral-100"
            />
            <span>Registered on Electoral Roll</span>
          </label>
        </div>
      </div>

      {/* Result feedback */}
      <div
        className={`p-4 rounded-lg border flex items-start gap-3 ${
          canVoteImmediately
            ? 'bg-emerald-950/20 border-emerald-900/60 text-emerald-300'
            : isEligible
            ? 'bg-amber-950/20 border-amber-900/60 text-amber-300'
            : 'bg-red-950/20 border-red-900/60 text-red-300'
        }`}
      >
        {canVoteImmediately ? (
          <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
        ) : (
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        )}
        <div>
          <div className="font-semibold text-sm">
            {canVoteImmediately
              ? 'Status: Fully Eligible to Vote'
              : isEligible
              ? 'Status: Age & Citizen Criteria Met (Registration Required)'
              : 'Status: Ineligible to Vote'}
          </div>
          <div className="mt-1 text-xs opacity-90 leading-relaxed">
            {age < 18 && `Applicant is currently ${age}. Must wait ${18 - age} year(s) until legal voting age.`}
            {!isCitizen && ' Constitutional voting rights require certified citizenship.'}
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
      <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono text-neutral-400">Account Balance</div>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
            ₹{balance.toFixed(2)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-mono text-neutral-500">Security State</div>
          <span className="text-[11px] text-emerald-400 font-mono">PIN Validated</span>
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter amount (e.g. 100)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 text-xs"
        />
        <button
          type="button"
          onClick={handleDeposit}
          className="px-3.5 py-2 rounded-md bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-colors font-medium"
        >
          Deposit
        </button>
        <button
          type="button"
          onClick={handleWithdraw}
          className="px-3.5 py-2 rounded-md bg-neutral-100 text-neutral-900 hover:bg-white transition-colors font-medium"
        >
          Withdraw
        </button>
      </div>

      {feedback && (
        <div className="p-2.5 rounded bg-neutral-800/60 border border-neutral-700 text-neutral-200 font-mono text-[11px]">
          {feedback}
        </div>
      )}

      {/* Mini statement log */}
      <div>
        <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
          Mini-Statement Ledger:
        </div>
        <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 font-mono text-[11px] text-neutral-400 space-y-1">
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
      <p className="text-neutral-400">
        Adjust course marks (0–100) to see dynamic aggregate GPA, classification, and boundary logic.
      </p>

      <div className="space-y-2 bg-neutral-950/60 p-3.5 rounded-lg border border-neutral-800">
        {courses.map((course, i) => (
          <div key={course.name} className="flex items-center justify-between gap-3">
            <span className="text-neutral-300 font-medium">{course.name}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                max={100}
                value={course.marks}
                onChange={(e) => updateMark(i, parseInt(e.target.value))}
                className="w-16 bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-center font-mono text-white text-xs"
              />
              <span className="text-[11px] text-neutral-500 font-mono">/ 100</span>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate Output */}
      <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-[10px] font-mono text-neutral-500">Average %</div>
          <div className="text-base font-bold font-mono text-white mt-0.5">
            {average.toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500">Letter Grade</div>
          <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
            {grade} ({gpa.toFixed(1)})
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500">Classification</div>
          <div className="text-xs font-semibold text-neutral-300 mt-1 truncate">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}
