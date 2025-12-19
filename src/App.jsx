import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, AlertCircle, Clock, Zap, Shield, Database, Code, FileText, Users, ArrowRight, Layers } from 'lucide-react';

export default function SilenceLabsCREBriefing() {
  const [activeSection, setActiveSection] = useState('executive');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    { id: 'executive', label: 'Executive Summary', icon: FileText },
    { id: 'positioning', label: 'Strategic Positioning', icon: Zap },
    { id: 'cre', label: 'Part 1: Understanding CRE', icon: Layers },
    { id: 'ace', label: 'Part 2: Understanding ACE', icon: Shield },
    { id: 'mapping', label: 'Part 3: Tech Stack Mapping', icon: Database },
    { id: 'architecture', label: 'Part 4: Silent Orchestration Architecture', icon: Code },
    { id: 'zk', label: 'Part 5: ZK Differentiation', icon: Zap },
    { id: 'usecases', label: 'Part 6: Target Use Cases', icon: Users },
    { id: 'questions', label: 'Part 7: Engineering Questions', icon: AlertCircle },
    { id: 'nextsteps', label: 'Next Steps', icon: ArrowRight },
    { id: 'appendix-policy', label: 'Appendix A: Policy Engine', icon: Shield },
    { id: 'appendix-regulated', label: 'Appendix B: Regulated Requirements', icon: Shield },
    { id: 'appendix-formats', label: 'Appendix C: Message Formats', icon: FileText },
    { id: 'appendix-performance', label: 'Appendix D: Performance (TBD)', icon: Clock },
    { id: 'appendix-xweave', label: 'Appendix E: Xweave POC', icon: ArrowRight },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-slate-400 mb-2">INTERNAL - Silence Laboratories Engineering</div>
          <h1 className="text-3xl font-bold mb-2">Silent Orchestration</h1>
          <p className="text-xl text-slate-300">Architecture & Strategic Positioning</p>
          <p className="text-sm text-slate-400 mt-4">December 2025 • Target Audience: Engineering Team</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex gap-6 p-6">
        {/* Sidebar Navigation */}
        <nav className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Contents</h3>
            <ul className="space-y-1">
              {sections.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => setActiveSection(id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors ${
                      activeSection === id 
                        ? 'bg-slate-800 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="truncate">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Executive Summary */}
          {activeSection === 'executive' && (
            <Section title="Executive Summary">
              <p className="text-gray-700 mb-4">
                This document defines the <strong>Silent Orchestration</strong> architecture — a settlement-layer agnostic 
                framework for privacy-preserving multi-party computation with cryptographic authorization. It provides 
                engineering with context on Chainlink's CRE/ACE (as a reference architecture and competitive benchmark), 
                maps Silence Labs capabilities, and outlines our strategic positioning.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-slate-800 mb-2">Four Strategic Priorities</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">P1</span>
                    <span><strong>Confidential Enterprise Automation:</strong> Cross-border payments, supply chain coordination, multi-party compliance for TradFi and large enterprises</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">P2</span>
                    <span><strong>Privacy-Preserving Cross-Enterprise Attestation:</strong> Joint verification across organizations without revealing private inputs — our unique MPC advantage vs pure-play ZK</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-gray-500 text-white text-xs font-bold px-2 py-0.5 rounded">P3</span>
                    <span><strong>Regulated Institutional DeFi:</strong> Tokenization, stablecoin issuance, digital asset custody with compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded">P4</span>
                    <span><strong>Agentic Collaboration:</strong> Privacy-preserving computation for AI agent-to-agent workflows via AP3 protocol</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">AP3</span>
                  <p className="text-purple-800 text-sm">
                    <strong>Open Protocol:</strong> Silent Orchestration implements <a href="https://ap3-protocol.org" className="underline">AP3 (Agent Privacy-Preserving Protocol)</a> — 
                    an open standard extending Google's A2A for privacy-preserving agent collaboration.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="font-semibold text-amber-800">Key Technical Insight</p>
                  <p className="text-amber-900 text-sm">
                    Our cryptographic primitives (Silent Compute, SilentShard, ZK) are strong. The main gap is 
                    <strong> workflow orchestration</strong> — triggers, step execution, retries, developer tooling.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="font-semibold text-blue-800">Key Strategic Insight</p>
                  <p className="text-blue-900 text-sm">
                    <strong>Blockchain is optional.</strong> Many enterprise customers want MPC benefits without DLT. 
                    Silent Orchestration works with public/private blockchain, non-EVM DLT, or traditional API/DB settlement.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="font-semibold text-green-800">Core Differentiator vs Chainlink</p>
                <p className="text-green-900 text-sm">
                  Chainlink CRE/ACE: DON nodes see data during execution; blockchain-first; crypto-native positioning.<br/>
                  <strong>Silence:</strong> No party sees inputs (MPC); settlement-agnostic; enterprise/TradFi positioning.
                </p>
              </div>
            </Section>
          )}

          {/* Strategic Positioning - NEW SECTION */}
          {activeSection === 'positioning' && (
            <Section title="Strategic Positioning: Carving a Distinct Market">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Core Thesis</h3>
                <p className="text-slate-200">
                  Silence Labs is building <strong>Confidential Trust Infrastructure</strong> for multi-party enterprise 
                  workflows—not a "crypto oracle network." Our buyers are traditional finance institutions and large 
                  enterprises who need privacy-preserving orchestration across organizational boundaries, 
                  not crypto-native protocols.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">AP3</div>
                  <div>
                    <p className="font-semibold text-purple-800 mb-1">Open Protocol Standard: AP3</p>
                    <p className="text-purple-700 text-sm mb-2">
                      Silence Labs has developed <strong>AP3 (Agent Privacy-Preserving Protocol)</strong> — an open protocol 
                      for privacy-preserving collaboration between autonomous agents. AP3 extends Google's A2A protocol 
                      with cryptographic MPC capabilities.
                    </p>
                    <div className="bg-white p-3 rounded border border-purple-200 text-sm">
                      <p className="text-gray-700 mb-2"><strong>Stack Positioning:</strong></p>
                      <div className="font-mono text-xs text-gray-600 space-y-1">
                        <p>Build agents with <span className="text-blue-600">ADK</span> (or any framework)</p>
                        <p className="pl-4">→ Equip with <span className="text-green-600">MCP</span> (or any tool)</p>
                        <p className="pl-8">→ Collaborate via <span className="text-orange-600">A2A</span></p>
                        <p className="pl-12">→ Secure with <span className="text-purple-600 font-bold">AP3</span> (privacy-preserving compute)</p>
                        <p className="pl-16">→ Settle via <span className="text-slate-600">AP2</span> or enterprise rails</p>
                      </div>
                    </div>
                    <p className="text-purple-600 text-xs mt-2">
                      <strong>Silent Orchestration</strong> is the reference implementation of AP3 — providing the runtime, 
                      policy engine, and infrastructure for AP3-compliant privacy-preserving workflows.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Target Market Segments (Prioritized)</h3>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">PRIORITY 1</span>
                    <span className="font-semibold text-gray-800">Confidential Enterprise Automation</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Large enterprises and TradFi institutions needing privacy-preserving workflows across organizational 
                    boundaries. Cross-border payments, supply chain coordination, multi-party compliance.
                  </p>
                  <p className="text-gray-600 text-xs mt-1"><strong>Buyers:</strong> Global banks, payment networks, large corporates</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">PRIORITY 2</span>
                    <span className="font-semibold text-gray-800">Privacy-Preserving Cross-Enterprise Attestation</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Enable organizations to prove facts about shared data or collaborative computations without revealing 
                    underlying inputs. <strong>What makes Silence unique:</strong> MPC-based attestation across multiple enterprises, 
                    not just single-party ZK proofs. Parties can jointly attest to outcomes while each keeps their data private.
                  </p>
                  <p className="text-gray-600 text-xs mt-1"><strong>Use cases:</strong> Joint compliance verification, consortium data validation, 
                  multi-bank credit checks, supply chain provenance across vendors</p>
                  <p className="text-gray-600 text-xs mt-1"><strong>Key differentiator vs pure-play ZK:</strong> ZK proves "I computed X correctly" — 
                  Silence proves "We jointly computed X correctly, and none of us saw each other's inputs"</p>
                </div>

                <div className="border-l-4 border-gray-400 pl-4 py-2 bg-gray-50 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">PRIORITY 3</span>
                    <span className="font-semibold text-gray-800">Regulated Institutional DeFi</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Tier 1 banks and asset managers doing tokenization, stablecoin issuance, and digital asset custody 
                    with compliance requirements. Closer to Chainlink's target market.
                  </p>
                  <p className="text-gray-600 text-xs mt-1"><strong>Buyers:</strong> Tier 1 banks, asset managers, regulated issuers</p>
                  <p className="text-gray-600 text-xs mt-1"><strong>Note:</strong> Lower priority as this overlaps more with Chainlink's positioning</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silent Compute: Technical Foundation</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700 text-sm mb-3">
                  Silent Compute is a <strong>Cryptographic Virtual Machine</strong> — a 3-party MPC platform with malicious security 
                  (secure with abort). Key capabilities that enable cross-enterprise attestation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-1">Arithmetic Black Boxes (ABBs)</p>
                    <p className="text-gray-600 text-xs">Boolean Bit, Boolean Integer, Arithmetic Integer, Galois Field, Modular Arithmetic, Elliptic Curve — with secure conversions between types</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-1">Secure Operations</p>
                    <p className="text-gray-600 text-xs">Addition, multiplication, comparison, bit-shifts, shuffling — all on secret-shared data across 3 parties</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-1">Malicious Security Model</p>
                    <p className="text-gray-600 text-xs">At most 1 of 3 parties corrupted; adversary cannot learn more or cause incorrect outputs (secure with abort)</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-1">Yao's Garbled Circuits</p>
                    <p className="text-gray-600 text-xs">Constant-round circuit evaluation for latency-sensitive operations; dual-execution for malicious security</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-3 italic">
                  This foundation enables the "joint attestation" differentiator: multiple enterprises run Silent Compute nodes, 
                  each contributing private inputs, and collectively produce a signed attestation — without any party seeing another's data.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why We're NOT Positioning Against CRE</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Dimension</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Chainlink CRE</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Silence Labs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Primary Buyer</td>
                    <td className="border border-gray-300 px-4 py-2">Crypto protocols, DeFi, neo-banks</td>
                    <td className="border border-gray-300 px-4 py-2">TradFi, large enterprises, global banks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Trust Model</td>
                    <td className="border border-gray-300 px-4 py-2">Public DON operator network</td>
                    <td className="border border-gray-300 px-4 py-2">Permissioned consortium with explicit governance</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Data Handling</td>
                    <td className="border border-gray-300 px-4 py-2">Nodes see data during execution</td>
                    <td className="border border-gray-300 px-4 py-2">Data never leaves encrypted form (MPC)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Rail Coverage</td>
                    <td className="border border-gray-300 px-4 py-2">Blockchain-native, crypto-first</td>
                    <td className="border border-gray-300 px-4 py-2">Rail-agnostic (fiat + crypto + enterprise)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Compliance Approach</td>
                    <td className="border border-gray-300 px-4 py-2">Policy execution in workflow</td>
                    <td className="border border-gray-300 px-4 py-2">Privacy-preserving verification with ZK proofs</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Naming Implications</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-red-800 mb-2">❌ Avoid CRE-Anchored Names</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• "Silent Confidential Runtime Environment" — anchors us to Chainlink's framing</li>
                  <li>• "Silent CRE" — positions us as a follower</li>
                  <li>• Any name that requires explaining CRE first</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-green-800 mb-2">✅ Consider Names That Own Our Category</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• <strong>Silent Trust Network</strong> — emphasizes cross-org trust infrastructure</li>
                  <li>• <strong>Silent Orchestration</strong> — focuses on workflow coordination</li>
                  <li>• <strong>Silent Compliance Layer</strong> — targets regulated use cases directly</li>
                  <li>• <strong>Silent Enterprise Platform</strong> — signals TradFi/enterprise focus</li>
                  <li>• <strong>Xweave</strong> (if partnership) — already positioned as "Trust Infrastructure for Multi-Rail Payments"</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800">Open Question for Leadership</p>
                <p className="text-amber-900">
                  If Xweave becomes a key go-to-market partner, consider whether "Xweave powered by Silence Labs" 
                  or a joint brand makes sense for the payments/compliance infrastructure market. The Xweave positioning 
                  ("Trust Infrastructure for the Multi-Rail Payments Ecosystem") already captures what we're building 
                  better than any CRE-derivative name.
                </p>
              </div>
            </Section>
          )}

          {/* Part 1: Understanding CRE */}
          {activeSection === 'cre' && (
            <Section title="Part 1: Understanding Chainlink CRE">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Why Are We Studying CRE?</h4>
                <p className="text-blue-900 text-sm mb-2">
                  Chainlink is the dominant infrastructure provider for blockchain-based institutional finance, with deep 
                  relationships across TradFi, DeFi, and regulatory bodies. CRE (Chainlink Runtime Environment) is their 
                  new workflow orchestration layer — and understanding its architecture helps us in three ways:
                </p>
                <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
                  <li><strong>Architectural Patterns:</strong> CRE's design (triggers → workflows → signed reports → forwarder → consumer) 
                  is well-engineered. We can adopt similar patterns where they make sense.</li>
                  <li><strong>Integration Boundary:</strong> If customers already use Chainlink, understanding the Forwarder/Consumer 
                  interface lets us potentially slot Silence capabilities into existing CRE workflows.</li>
                  <li><strong>Competitive Positioning:</strong> By understanding CRE's trust model (DON consensus, nodes see data), 
                  we can articulate where Silence's MPC-based approach offers stronger privacy guarantees.</li>
                </ol>
                <p className="text-blue-700 text-xs mt-2 italic">
                  We're not trying to replicate CRE. We're learning from it to build something complementary — or, in some cases, superior.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">What Problem Does CRE Solve?</h3>
              <p className="text-gray-700 mb-4">
                CRE is Chainlink's "workflow orchestration layer" for institutional-grade smart contracts. It allows 
                developers to build complex offchain workflows that interact with onchain contracts in a verifiable, 
                compliant, and privacy-preserving manner.
              </p>
              
              <p className="font-semibold text-gray-800 mb-2">CRE addresses three core institutional requirements:</p>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Verifiable Execution:</strong> Multiple independent nodes execute the same workflow; results are aggregated via BFT consensus.</li>
                <li><strong>Compliance Integration:</strong> Policy checks (KYC/AML, sanctions, limits) can be embedded in workflows before any onchain action.</li>
                <li><strong>Secure Onchain Delivery:</strong> Signed reports are verified by a Forwarder contract before being delivered to the target application.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">CRE Architecture: Critical Components</h3>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Workflow DON', 'Monitors triggers and coordinates workflow execution across the network'],
                    ['Capability DONs', 'Specialized DONs for specific tasks (HTTP fetch, EVM read/write, compute)'],
                    ['BFT Consensus', 'Independent node execution with cryptographic verification and result aggregation'],
                    ['KeystoneForwarder', 'Onchain contract that verifies signed reports before calling consumer contracts'],
                    ['Consumer Contract', 'Customer\'s application contract implementing onReport(metadata, report)'],
                  ].map(([comp, func], i) => (
                    <tr key={comp} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">{comp}</td>
                      <td className="border border-gray-300 px-4 py-2">{func}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* DEEP DIVE: Secure Onchain Delivery */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Shield size={24} className="text-blue-600" />
                  Deep Dive: Secure Onchain Delivery (The Forwarder Pattern)
                </h3>
                <p className="text-gray-700 mb-4">
                  This is the <strong>most important architectural concept</strong> to understand. CRE workflows don't write directly 
                  to customer contracts. Instead, they use an intermediary "gatekeeper" pattern that provides security guarantees.
                </p>

                <h4 className="font-semibold text-gray-800 mb-2">Why Not Write Directly to Consumer Contracts?</h4>
                <p className="text-gray-700 mb-4">
                  If workflows wrote directly to consumer contracts, you'd have several problems:
                </p>
                <ul className="space-y-2 mb-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No signature verification:</strong> Anyone could call your contract claiming to be the workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No replay protection:</strong> Old reports could be resubmitted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No expiry enforcement:</strong> Stale data could be used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Every consumer reimplements security:</strong> Error-prone and inconsistent</span>
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-2">The Forwarder as a Security Gateway</h4>
                <p className="text-gray-700 mb-4">
                  The <strong>KeystoneForwarder</strong> contract sits between the offchain workflow and the customer's consumer contract.
                  It acts as a trusted "mailroom" that validates all incoming reports before delivery:
                </p>

                <div className="bg-white rounded-lg p-4 mb-4 border border-slate-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    <div className="bg-slate-100 rounded-lg p-3 flex-1">
                      <div className="text-sm text-slate-500 mb-1">OFFCHAIN</div>
                      <div className="font-semibold">Workflow</div>
                      <div className="text-xs text-slate-500">Produces signed report</div>
                    </div>
                    <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
                    <div className="bg-blue-100 rounded-lg p-3 flex-1 border-2 border-blue-400">
                      <div className="text-sm text-blue-600 mb-1">SECURITY GATE</div>
                      <div className="font-semibold text-blue-800">Forwarder</div>
                      <div className="text-xs text-blue-600">Validates everything</div>
                    </div>
                    <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
                    <div className="bg-green-100 rounded-lg p-3 flex-1">
                      <div className="text-sm text-green-600 mb-1">CUSTOMER APP</div>
                      <div className="font-semibold text-green-800">Consumer</div>
                      <div className="text-xs text-green-600">Receives verified data</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-2">What the Forwarder Validates</h4>
                <table className="w-full border-collapse mb-4 text-sm">
                  <thead>
                    <tr className="bg-slate-700 text-white">
                      <th className="border border-gray-300 px-3 py-2 text-left">Check</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">What It Prevents</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">How It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Signature Verification</td>
                      <td className="border border-gray-300 px-3 py-2">Unauthorized reports, impersonation</td>
                      <td className="border border-gray-300 px-3 py-2">Cryptographic proof that the authorized DON/committee signed this exact report</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Nonce Check</td>
                      <td className="border border-gray-300 px-3 py-2">Replay attacks (resubmitting old reports)</td>
                      <td className="border border-gray-300 px-3 py-2">Each report has a sequential nonce; forwarder rejects anything ≤ last seen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Deadline/Expiry</td>
                      <td className="border border-gray-300 px-3 py-2">Stale data being used</td>
                      <td className="border border-gray-300 px-3 py-2">Report includes deadline timestamp; forwarder rejects if block.timestamp &gt; deadline</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Workflow/Receiver Match</td>
                      <td className="border border-gray-300 px-3 py-2">Report sent to wrong contract</td>
                      <td className="border border-gray-300 px-3 py-2">Report includes intended receiver address; forwarder only calls that address</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold text-gray-800 mb-2">The Consumer Contract Interface</h4>
                <p className="text-gray-700 mb-2">
                  Once validated, the Forwarder calls the consumer's <code className="bg-gray-200 px-1 rounded">onReport()</code> function.
                  The consumer contract only needs to:
                </p>
                <pre className="bg-slate-800 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`interface IReceiver {
    function onReport(
        bytes calldata metadata,  // workflowId, epoch, nonce, etc.
        bytes calldata report     // the actual payload (e.g., price, authorization)
    ) external;
}

contract MyConsumer is IReceiver {
    address public immutable forwarder;  // Only accept calls from forwarder
    
    modifier onlyForwarder() {
        require(msg.sender == forwarder, "not forwarder");
        _;
    }
    
    function onReport(bytes calldata metadata, bytes calldata report) 
        external 
        onlyForwarder  // <-- Security: Only forwarder can call this
    {
        // Decode and use the verified data
        // At this point, you KNOW:
        //   ✓ Report was signed by authorized committee
        //   ✓ Report hasn't been replayed
        //   ✓ Report hasn't expired
        //   ✓ Report was intended for this contract
    }
}`}
                </pre>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="font-semibold text-amber-800">Why This Matters for Silence</p>
                  <p className="text-amber-900">
                    The Forwarder pattern is <strong>the integration boundary</strong> that institutions will build to. 
                    If we replicate this exact interface (<code className="bg-amber-100 px-1 rounded">onReport(metadata, report)</code>), 
                    customers can adopt our solution <strong>without changing their consumer contracts</strong>. 
                    They just point to our SilentForwarder instead of Chainlink's KeystoneForwarder.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Complete Flow</h3>
              <p className="text-gray-700 mb-2">CRE's documented "secure write" flow end-to-end:</p>
              <div className="bg-slate-100 p-3 rounded-md font-mono text-slate-700 mb-4 text-center">
                Workflow → Signed Report → Forwarder (validates) → Consumer.onReport()
              </div>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                <li><strong>Generate Report:</strong> Workflow computes result and calls <code className="bg-gray-100 px-1 rounded">runtime.report()</code> with the payload</li>
                <li><strong>DON Consensus:</strong> Multiple nodes independently verify; BFT consensus produces a collective signature</li>
                <li><strong>Package for Delivery:</strong> Report is packaged with metadata (workflowId, nonce, deadline, receiver address)</li>
                <li><strong>Submit to Chain:</strong> A relayer node submits the signed report to the KeystoneForwarder contract</li>
                <li><strong>Forwarder Validates:</strong> Checks signature, nonce, deadline, receiver match</li>
                <li><strong>Deliver to Consumer:</strong> If all checks pass, forwarder calls <code className="bg-gray-100 px-1 rounded">receiver.onReport(metadata, report)</code></li>
                <li><strong>Consumer Acts:</strong> Consumer decodes report and takes action (mint tokens, update state, etc.)</li>
              </ol>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-semibold text-blue-800">Engineering Note</p>
                <p className="text-blue-900">
                  This Forwarder → onReport() pattern is the exact integration seam we should preserve. 
                  Our <strong>SilentForwarder</strong> will perform the same role, but validate threshold ECDSA 
                  signatures from SilentShard instead of DON BFT signatures.
                </p>
              </div>
            </Section>
          )}

          {/* Part 2: Understanding ACE */}
          {activeSection === 'ace' && (
            <Section title="Part 2: Understanding Chainlink ACE">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-purple-800 mb-2">Why Are We Studying ACE?</h4>
                <p className="text-purple-900 text-sm mb-2">
                  ACE (Automated Compliance Engine) represents Chainlink's answer to institutional compliance requirements. 
                  It's already being adopted by major players (Apex Group, Aave Horizon, custody providers). Understanding 
                  ACE matters for three reasons:
                </p>
                <ol className="text-purple-800 text-sm space-y-1 list-decimal list-inside">
                  <li><strong>Market Validation:</strong> ACE's existence confirms that "compliance-as-infrastructure" is a real 
                  market need. Institutions want embedded compliance, not bolted-on checks.</li>
                  <li><strong>Feature Benchmark:</strong> ACE's components (CCID for identity, Policy Manager, CCT extensions) 
                  define the baseline feature set that institutional buyers expect. We need parity or better.</li>
                  <li><strong>Privacy Gap:</strong> ACE's execution model has a fundamental limitation — CRE nodes see the data 
                  during policy evaluation. This is where Silent Compute offers a clear upgrade: MPC-based policy execution 
                  where <em>no party sees the inputs</em>.</li>
                </ol>
                <p className="text-purple-700 text-xs mt-2 italic">
                  Our goal: Offer the same "Policy as a Guardrail" integration pattern that ACE provides, but with cryptographic 
                  privacy guarantees that ACE cannot match.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                ACE (Automated Compliance Engine) is a unified, modular standard for onchain compliance built ON TOP of CRE. 
                It enables institutions to transact on public and private chains under clear regulatory controls while 
                preserving privacy (PII/NPI stays offchain; only cryptographic proofs go onchain).
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ACE Core Components (Onchain Primitives)</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">CCID (Cross-Chain Identity Framework)</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    A reusable identity framework representing investor identities, attestations, and credentials across 
                    multiple blockchains. Stores only cryptographic proofs onchain — not underlying personal data.
                  </p>
                  <div className="text-xs text-blue-600 space-y-1">
                    <p><strong>Key properties:</strong></p>
                    <p>• Cross-chain identity — One CCID reused on multiple chains (no re-KYC for each protocol)</p>
                    <p>• PII remains offchain — Onchain stores hashes/proofs + links; actual data held by IDV/institutions</p>
                    <p>• Compatible with LEI/vLEI, ONCHAINID, DIDs, Ethereum Attestation Service (EAS)</p>
                  </div>
                  <div className="mt-3 p-2 bg-blue-100 rounded text-xs">
                    <strong>Trust Models Supported:</strong>
                    <p className="mt-1">1. <strong>Issuer-driven</strong> — Asset issuers themselves issue attestations</p>
                    <p>2. <strong>IDV-driven</strong> — Dedicated Identity Verification providers issue attestations</p>
                    <p>3. <strong>Government-anchored</strong> — Official authorities as primary identity issuers</p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">CCT Compliance Extension</h4>
                  <p className="text-purple-700 text-sm mb-2">
                    A lightweight interface that connects any CCT (Cross-Chain Token) to CCID (identity) and 
                    Policy Manager (rules). Turns tokens into <strong>compliance-aware assets</strong>.
                  </p>
                  <div className="text-xs text-purple-600">
                    <p><strong>Enables:</strong> Eligibility checks, transaction restrictions, policy-bound behavior</p>
                    <p><strong>Other CCT extensions:</strong> CCIP Extension (cross-chain), Data Link Extension (price/NAV/PoR feeds)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">ACE Core Services (Offchain + Orchestration)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Services run offchain on CRE but tightly integrate with onchain contracts.
              </p>

              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-slate-700 text-white px-4 py-2 font-semibold">Policy Manager — The Heart of ACE</div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-3">
                    A customizable rules engine with both onchain (contracts) and offchain (CRE execution) components.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-100 p-3 rounded text-center">
                      <div className="text-2xl mb-1">📝</div>
                      <div className="font-semibold text-sm">1. DEFINE</div>
                      <div className="text-xs text-gray-600">Issuer configures policy in offchain env (code/config)</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded text-center">
                      <div className="text-2xl mb-1">⚙️</div>
                      <div className="font-semibold text-sm">2. EXECUTE</div>
                      <div className="text-xs text-gray-600">Policy runs (on/off/hybrid) before txn; outputs yes/no</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded text-center">
                      <div className="text-2xl mb-1">🔒</div>
                      <div className="font-semibold text-sm">3. ENFORCE</div>
                      <div className="text-xs text-gray-600">Onchain proof generated; contract approves/rejects</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <p className="font-semibold text-gray-700 mb-2">Execution Models:</p>
                      <table className="w-full text-xs border-collapse">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-1 font-semibold">Onchain</td>
                            <td className="py-1">Transparent, trustless; but public & costly</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-1 font-semibold">Offchain</td>
                            <td className="py-1">Private, scalable; needs verification proof</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">Hybrid</td>
                            <td className="py-1">Mix based on sensitivity; enforcement always onchain</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-700 mb-2">Enforcement Points:</p>
                      <table className="w-full text-xs border-collapse">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-1 font-semibold">Asset-level</td>
                            <td className="py-1">Logic in token contracts (who can hold/transfer)</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">Protocol-level</td>
                            <td className="py-1">Workflow contracts; multi-step, multi-asset processes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-700 text-sm mb-2">Pre-built Policy Templates:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Allow/Deny List', 'Negative Credentials', 'RBAC', 'Volume Rate Limits', 'Time-based Limits', 
                        'Secure Mint', 'Pause/Circuit Breaker', 'Wallet Balance Limits', 'Max Token Holders'].map(p => (
                        <span key={p} className="bg-white px-2 py-1 rounded border">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Adoption: "Policy as a Guardrail" for MPC Custody</h3>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <p className="text-emerald-800 text-sm mb-3">
                  <strong>Key insight from custody integrations:</strong> ACE functions as a <strong>Policy Decision Point</strong> for 
                  decentralized keys. MPC nodes sign only if user authenticates AND ACE provides a compliance attestation.
                </p>
                <div className="text-xs text-emerald-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-bold">Flow:</span>
                    <span>User requests txn → MPC coordinator queries ACE → ACE checks (sanctions, credentials) → 
                    Returns Pass/Fail → If Pass, MPC signs; if Fail, signature blocked</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-emerald-200">
                  <p className="font-semibold text-emerald-800 text-xs mb-1">Live Implementations:</p>
                  <div className="text-xs text-emerald-700">
                    <p>• <strong>Apex Group:</strong> Jurisdiction-specific rules on tokenized assets</p>
                    <p>• <strong>Veridian Wallet:</strong> "Compliant self-custody" for RWA interaction</p>
                    <p>• <strong>Aave Horizon:</strong> Gated access to institutional liquidity pools</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800">Strategic Implication for Silence</p>
                <p className="text-amber-900 text-sm">
                  ACE's "Policy as a Guardrail" pattern is <strong>exactly what Silence can offer</strong> — but with 
                  <strong> privacy-preserving policy execution</strong>. In ACE, policy evaluation happens in CRE nodes 
                  that see the data. With Silent Compute, policy evaluation happens via MPC where <em>no single party 
                  sees the inputs</em>. This is the differentiation: same integration pattern, stronger privacy guarantees.
                </p>
              </div>
            </Section>
          )}

          {/* Part 3: Tech Stack Mapping */}
          {activeSection === 'mapping' && (
            <Section title="Part 3: Silence Labs Tech Stack Mapping">
              <p className="text-gray-700 mb-4">
                This section maps our current capabilities to both CRE (runtime) and ACE (compliance) functions, 
                and identifies gaps. The mapping shows how Silence could deliver equivalent functionality with 
                stronger privacy guarantees.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">CRE Function Mapping</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">CRE Function</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Silence Labs Product</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">DON Consensus / Signing</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>SilentShard</strong> - MPC-TSS threshold signing</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800"><strong>STRONG</strong> - Threshold ECDSA produces standard signatures</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Private Policy Evaluation</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>Silent Compute</strong> - 3-party MPC with malicious security</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800"><strong>STRONGER</strong> - No party sees inputs (vs CRE nodes see data)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Workflow Orchestration</td>
                    <td className="border border-gray-300 px-3 py-2 text-gray-500 italic">None</td>
                    <td className="border border-gray-300 px-3 py-2 bg-red-100 text-red-800"><strong>GAP</strong> - Need triggers, DAG execution, retries</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Developer SDK/CLI</td>
                    <td className="border border-gray-300 px-3 py-2 text-gray-500 italic">None</td>
                    <td className="border border-gray-300 px-3 py-2 bg-red-100 text-red-800"><strong>GAP</strong> - Need workflow authoring tools</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Onchain Forwarder</td>
                    <td className="border border-gray-300 px-3 py-2 text-gray-500 italic">None</td>
                    <td className="border border-gray-300 px-3 py-2 bg-orange-100 text-orange-800"><strong>BUILD</strong> - Straightforward EIP-712 pattern</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Control Plane</td>
                    <td className="border border-gray-300 px-3 py-2 text-gray-500 italic">Partial - Key mgmt exists</td>
                    <td className="border border-gray-300 px-3 py-2 bg-orange-100 text-orange-800"><strong>EXTEND</strong> - Add policy versioning, audit</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">ACE Component Mapping</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-purple-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">ACE Component</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Silence Equivalent</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Privacy Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">CCID (Cross-Chain Identity)</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <strong>Silent Identity</strong> (to build)<br/>
                      <span className="text-xs text-gray-600">MPC-held identity credentials with selective disclosure</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">
                      Credentials evaluated without any party seeing raw PII. ZK proofs for onchain attestation.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Policy Manager</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <strong>PDP/PEP + Silent Compute</strong><br/>
                      <span className="text-xs text-gray-600">PDP evaluates policy → PEP mints CDT → MPC executes with CDT binding</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">
                      ACE offchain execution: CRE nodes see inputs.<br/>
                      Silence: No party sees inputs; CDT cryptographically binds authorized parameters.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">CCT Compliance Extension</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <strong>Silent Token Hooks</strong> (to build)<br/>
                      <span className="text-xs text-gray-600">Token transfer gates backed by MPC policy</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 bg-orange-50 text-orange-800 text-xs">
                      Interface-compatible with CCT. Policy attestation via SilentShard signature.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">DECO (Identity Proofs)</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <strong>ZK + Silent Compute</strong><br/>
                      <span className="text-xs text-gray-600">MPC for data fetch, ZK for attestation</span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">
                      DECO: TLS oracle, single notary sees data.<br/>
                      Silence: 3-party MPC, no single party sees data.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">"Policy as a Guardrail" — MPC Custody Integration</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700 text-sm mb-3">
                  The ACE custody integration pattern maps directly to Silence's MPC architecture:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-2 text-sm">ACE Pattern (Chainlink)</p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>1. User requests transfer via MPC wallet</p>
                      <p>2. MPC coordinator queries ACE Policy Manager</p>
                      <p>3. ACE checks sanctions list, credentials (via DECO)</p>
                      <p>4. ACE returns cryptographic Pass/Fail</p>
                      <p>5. If Pass → MPC nodes sign; If Fail → blocked</p>
                    </div>
                    <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                      <strong>Privacy gap:</strong> ACE nodes see policy inputs
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-slate-700 mb-2 text-sm">Silent Pattern (Silence Labs)</p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>1. User requests transfer via SilentShard wallet</p>
                      <p>2. Request triggers Silent Compute policy evaluation</p>
                      <p>3. 3 compute parties run MPC on private inputs</p>
                      <p>4. Output: decision + ZK proof (optional)</p>
                      <p>5. If Pass → SilentShard signs; If Fail → blocked</p>
                    </div>
                    <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                      <strong>Privacy win:</strong> No party sees raw policy inputs
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Gaps We Need to Fill</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">Workflow Orchestrator</p>
                    <p className="text-red-700 text-xs">Triggers (cron/HTTP/logs), step execution, retries, secrets</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">Capability Adapters</p>
                    <p className="text-red-700 text-xs">HTTP client, DB connectors, chain read/write, message queues</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                  <Clock size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-800 text-sm">Onchain Contracts</p>
                    <p className="text-orange-700 text-xs">SilentForwarder + CommitteeRegistry + reference receivers</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">Developer Experience</p>
                    <p className="text-red-700 text-xs">SDK/CLI for workflow definition, testing, deployment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                  <Clock size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-800 text-sm">Observability</p>
                    <p className="text-orange-700 text-xs">Logs, metrics, audit trails, SIEM integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                  <Clock size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-800 text-sm">Policy Templates</p>
                    <p className="text-orange-700 text-xs">Pre-built: Allow/Deny, RBAC, Rate Limits, Sanctions check</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800">Key Takeaway</p>
                <p className="text-amber-900 text-sm">
                  Silence has strong cryptographic primitives (Silent Compute, SilentShard) that can deliver <strong>better 
                  privacy</strong> than ACE's execution model. The gaps are in <strong>orchestration infrastructure</strong> and 
                  <strong>developer tooling</strong> — not in the core compliance capabilities. For the Xweave POC, we should 
                  build the minimum orchestration needed for that specific flow rather than replicating all of CRE.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">Enterprise Integration Requirements</h3>
              <p className="text-gray-600 text-sm mb-4">
                Chainlink emphasizes "without replacing your infrastructure, custody, identity, or key management." 
                Enterprises have existing systems; we need to <strong>integrate with</strong> them, not require replacement. 
                This section maps what enterprises typically have and what we need to build or integrate.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mb-6">
                <p className="font-semibold text-emerald-800">Where Silence is Already Strong</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  <div className="bg-white p-2 rounded border border-emerald-200 text-center">
                    <p className="font-semibold text-emerald-700 text-sm">Custody</p>
                    <p className="text-emerald-600 text-xs">SilentShard MPC wallets</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-emerald-200 text-center">
                    <p className="font-semibold text-emerald-700 text-sm">Key Management</p>
                    <p className="text-emerald-600 text-xs">Distributed key gen & signing</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-emerald-200 text-center">
                    <p className="font-semibold text-emerald-700 text-sm">Policy Enforcement</p>
                    <p className="text-emerald-600 text-xs">Silent Compute evaluation</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-emerald-200 text-center">
                    <p className="font-semibold text-emerald-700 text-sm">Threshold Signing</p>
                    <p className="text-emerald-600 text-xs">t-of-n ECDSA</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Integration Requirements by Priority</h4>
              
              <ExpandableCard 
                title="Tier 1: Must Have for Enterprise (Blocking)" 
                expanded={expandedItems['tier1-integration']} 
                onToggle={() => toggleExpand('tier1-integration')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-3">
                    <p className="font-semibold text-gray-800">Custody: SilentShard Self-Custody (Primary)</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Lead with SilentShard as the custody solution. MPC-based self-custody for retail and institutional customers.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-2 py-1 text-left">Capability</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Description</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">MPC Key Generation</td>
                          <td className="border border-gray-300 px-2 py-1">Distributed key generation — no single party holds full key</td>
                          <td className="border border-gray-300 px-2 py-1 text-green-600">✓ Exists</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Threshold Signing</td>
                          <td className="border border-gray-300 px-2 py-1">t-of-n ECDSA signing without key reconstruction</td>
                          <td className="border border-gray-300 px-2 py-1 text-green-600">✓ Exists</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Policy-Gated Signing</td>
                          <td className="border border-gray-300 px-2 py-1">Silent Compute evaluates policy → SilentShard signs if allowed</td>
                          <td className="border border-gray-300 px-2 py-1 text-green-600">✓ Core integration</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Key Rotation</td>
                          <td className="border border-gray-300 px-2 py-1">Epoch-based key rotation with grace periods</td>
                          <td className="border border-gray-300 px-2 py-1 text-green-600">✓ Exists</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border-l-4 border-red-400 pl-3">
                    <p className="font-semibold text-gray-800">Identity & KYC: Credential Pass-Through</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Start with simple credential pass-through. Accept existing credentials and evaluate them in Silent Compute.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-2 py-1 text-left">Requirement</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Description</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Credential Ingestion</td>
                          <td className="border border-gray-300 px-2 py-1">Accept credentials from KYC providers (VCs, OIDC tokens, signed attestations)</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Credential Verification</td>
                          <td className="border border-gray-300 px-2 py-1">Verify credential signatures and check expiry/revocation</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Policy Evaluation on Credentials</td>
                          <td className="border border-gray-300 px-2 py-1">Silent Compute evaluates policy using credential claims as inputs</td>
                          <td className="border border-gray-300 px-2 py-1 text-green-600">✓ Core capability</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Operator IAM Integration</td>
                          <td className="border border-gray-300 px-2 py-1">Connect to enterprise IAM (Okta, Azure AD) for admin/operator identity</td>
                          <td className="border border-gray-300 px-2 py-1 text-orange-600">Integrate</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-blue-50 p-2 rounded mt-2 text-xs">
                      <p className="text-blue-700">
                        <strong>Future:</strong> Silent Identity (MPC-held credentials with selective disclosure) is a potential 
                        differentiator vs Chainlink's CCID — defer to Phase 2/3 after credential pass-through is working.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-400 pl-3">
                    <p className="font-semibold text-gray-800">Basic External System Connectors</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Minimum connectivity to external systems for POC and initial deployments.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-2 py-1 text-left">Connector</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Use Case</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">HTTP/REST Adapter</td>
                          <td className="border border-gray-300 px-2 py-1">Call external APIs from workflows</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Message Queue Adapter</td>
                          <td className="border border-gray-300 px-2 py-1">Kafka, AMQP, SQS for enterprise integration</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Chain Reader/Writer</td>
                          <td className="border border-gray-300 px-2 py-1">Read events, submit transactions to EVM chains</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Tier 2: Important for Scale (Phase 2)" 
                expanded={expandedItems['tier2-integration']} 
                onToggle={() => toggleExpand('tier2-integration')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-3">
                    <p className="font-semibold text-gray-800">Existing KMS Integration</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Enterprises may want to use their existing KMS alongside SilentShard (hybrid custody model).
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">AWS KMS</td>
                          <td className="border border-gray-300 px-2 py-1">Use AWS KMS for certain signing operations</td>
                          <td className="border border-gray-300 px-2 py-1 text-orange-600">Integrate</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">GCP Cloud HSM</td>
                          <td className="border border-gray-300 px-2 py-1">Google Cloud HSM integration</td>
                          <td className="border border-gray-300 px-2 py-1 text-orange-600">Integrate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Azure Key Vault</td>
                          <td className="border border-gray-300 px-2 py-1">Microsoft Azure key management</td>
                          <td className="border border-gray-300 px-2 py-1 text-orange-600">Integrate</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">HSM Integration</td>
                          <td className="border border-gray-300 px-2 py-1">SilentShard working with enterprise HSMs (hybrid model)</td>
                          <td className="border border-gray-300 px-2 py-1 text-orange-600">Investigate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-3">
                    <p className="font-semibold text-gray-800">Audit & Compliance Infrastructure</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Enterprises need audit trails and compliance reporting that integrates with existing tools.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">SIEM Integration</td>
                          <td className="border border-gray-300 px-2 py-1">Send logs to Splunk, DataDog, etc.</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build adapter</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Audit Log Export</td>
                          <td className="border border-gray-300 px-2 py-1">Immutable, signed logs exportable to enterprise systems</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Compliance Reporting</td>
                          <td className="border border-gray-300 px-2 py-1">Generate reports for regulators</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Proof Archive</td>
                          <td className="border border-gray-300 px-2 py-1">Store ZK proofs and attestations for later verification</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-3">
                    <p className="font-semibold text-gray-800">Additional External Connectors</p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Database Adapter</td>
                          <td className="border border-gray-300 px-2 py-1">Read/write to enterprise databases</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Non-EVM Chain Support</td>
                          <td className="border border-gray-300 px-2 py-1">R3 Corda, Hyperledger Fabric integration</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-3">
                    <p className="font-semibold text-gray-800">Agentic Collaboration Connectors</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Enable privacy-preserving agent-to-agent workflows as enterprises deploy AI agents.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">A2A Protocol Adapter</td>
                          <td className="border border-gray-300 px-2 py-1">Google Agent-to-Agent protocol integration — receive agent requests, return results</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Agent Identity Verification</td>
                          <td className="border border-gray-300 px-2 py-1">mTLS, agent credentials, cryptographic consent for agent authorization</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Secure Function Registry</td>
                          <td className="border border-gray-300 px-2 py-1">Catalog of approved f_secure functions (PSI, PIR, private eval) agents can invoke</td>
                          <td className="border border-gray-300 px-2 py-1 text-red-600">Build</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Tier 3: Future Considerations" 
                expanded={expandedItems['tier3-integration']} 
                onToggle={() => toggleExpand('tier3-integration')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-400 pl-3">
                    <p className="font-semibold text-gray-800">Core Banking & Payment Rails</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Complex integrations that are often partnership-dependent.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">SWIFT Messaging</td>
                          <td className="border border-gray-300 px-2 py-1">Integration with SWIFT network (MT/MX messages)</td>
                          <td className="border border-gray-300 px-2 py-1 text-gray-500">Partnership</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">FedNow / ACH</td>
                          <td className="border border-gray-300 px-2 py-1">US domestic payment rails</td>
                          <td className="border border-gray-300 px-2 py-1 text-gray-500">Partnership</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Card Networks</td>
                          <td className="border border-gray-300 px-2 py-1">Visa, Mastercard integration (note: Mastercard + Chainlink announced)</td>
                          <td className="border border-gray-300 px-2 py-1 text-gray-500">Partnership</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-3">
                    <p className="font-semibold text-gray-800">AI Agent Integration</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Chainlink is already positioning CRE for AI agent workflows (x402 + CRE). Consider for future roadmap.
                    </p>
                    <table className="w-full border-collapse text-xs">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1 font-semibold">Agent-Triggered Workflows</td>
                          <td className="border border-gray-300 px-2 py-1">Enable AI agents to trigger Silent Orchestration workflows</td>
                          <td className="border border-gray-300 px-2 py-1 text-gray-500">Future</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 py-1 font-semibold">A2A Protocol</td>
                          <td className="border border-gray-300 px-2 py-1">Google Agent-to-Agent protocol integration</td>
                          <td className="border border-gray-300 px-2 py-1 text-gray-500">Future</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ExpandableCard>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <p className="font-semibold text-slate-800 mb-2">Custody Strategy: Lead with Self-Custody</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-emerald-50 p-3 rounded border-2 border-emerald-400">
                    <p className="font-semibold text-emerald-700 mb-1">Primary: SilentShard Self-Custody</p>
                    <p className="text-gray-600 text-xs mb-2">Customer uses SilentShard for MPC-based self-custody (retail or institutional).</p>
                    <p className="text-emerald-600 text-xs">✓ Full control over signing policy</p>
                    <p className="text-emerald-600 text-xs">✓ Integrated policy enforcement + signing</p>
                    <p className="text-emerald-600 text-xs">✓ Already built — core Silence capability</p>
                    <p className="text-emerald-600 text-xs">✓ No third-party custody dependency</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-semibold text-gray-600 mb-1">Secondary: External Custodian + Silent Policy</p>
                    <p className="text-gray-500 text-xs mb-2">For customers with existing custodian relationships they cannot migrate.</p>
                    <p className="text-gray-500 text-xs">✓ No custody migration required</p>
                    <p className="text-gray-500 text-xs">✓ Works with existing infrastructure</p>
                    <p className="text-orange-500 text-xs">⚠ Requires custodian API adapters (Phase 2)</p>
                    <p className="text-orange-500 text-xs">⚠ Policy enforcement less tightly integrated</p>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* Part 4: Architecture */}
          {activeSection === 'architecture' && (
            <Section title="Part 4: Silent Orchestration Architecture">
              <p className="text-gray-700 mb-4">
                Silent Orchestration is a <strong>settlement-layer agnostic</strong> architecture. The core value — 
                privacy-preserving computation with cryptographic authorization — works whether the final settlement 
                happens on public blockchain, private ledger, or traditional enterprise systems.
              </p>
              
              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 mb-6">
                <p className="font-semibold text-slate-800">Trust Model</p>
                <p className="text-slate-700">
                  Permissioned consortium with explicit committee membership, key rotation, and allowlisted relayers. 
                  This aligns better with regulated institutions than relying on a public DON operator set.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Capability Model</h3>
              <p className="text-gray-600 text-sm mb-3">
                Silent Orchestration is built on <strong>modular capabilities</strong> — composable primitives that can be 
                combined into workflows. This mirrors the microservices approach but with cryptographic guarantees at each step.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-700 text-white">
                      <th className="border border-gray-300 px-3 py-2 text-left">Capability</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Service</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Triggers</strong> — What initiates workflow execution
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">trigger.http</td>
                      <td className="border border-gray-300 px-3 py-2">Orchestrator</td>
                      <td className="border border-gray-300 px-3 py-2">HTTP webhook initiates workflow</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">trigger.cron</td>
                      <td className="border border-gray-300 px-3 py-2">Orchestrator</td>
                      <td className="border border-gray-300 px-3 py-2">Scheduled/periodic execution</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">trigger.chain</td>
                      <td className="border border-gray-300 px-3 py-2">Chain Reader</td>
                      <td className="border border-gray-300 px-3 py-2">Blockchain event/log triggers workflow</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">trigger.queue</td>
                      <td className="border border-gray-300 px-3 py-2">Queue Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Message queue (Kafka, AMQP, SQS) triggers</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">trigger.agent</td>
                      <td className="border border-gray-300 px-3 py-2">A2A Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Agent request via A2A protocol</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Data Fetching</strong> — Read from external systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">fetch.http</td>
                      <td className="border border-gray-300 px-3 py-2">HTTP Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">External API calls (REST, GraphQL)</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">fetch.chain</td>
                      <td className="border border-gray-300 px-3 py-2">Chain Reader</td>
                      <td className="border border-gray-300 px-3 py-2">Read blockchain state/events</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">fetch.credential</td>
                      <td className="border border-gray-300 px-3 py-2">Credential Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Retrieve and verify VCs, attestations</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    
                    <tr className="bg-purple-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Compute</strong> — Privacy-preserving computation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">compute.mpc</td>
                      <td className="border border-gray-300 px-3 py-2">Silent Compute</td>
                      <td className="border border-gray-300 px-3 py-2">MPC evaluation on private inputs (PSI, aggregation, policy)</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">compute.zk</td>
                      <td className="border border-gray-300 px-3 py-2">ZK Prover</td>
                      <td className="border border-gray-300 px-3 py-2">Generate ZK proof of computation correctness</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Policy</strong> — Authorization and enforcement
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">policy.evaluate</td>
                      <td className="border border-gray-300 px-3 py-2">PDP</td>
                      <td className="border border-gray-300 px-3 py-2">Evaluate policy rules, return decision + constraints</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">policy.enforce</td>
                      <td className="border border-gray-300 px-3 py-2">PEP</td>
                      <td className="border border-gray-300 px-3 py-2">Gate execution, mint CDT</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Signing</strong> — Cryptographic authorization
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">sign.threshold</td>
                      <td className="border border-gray-300 px-3 py-2">SilentShard</td>
                      <td className="border border-gray-300 px-3 py-2">t-of-n ECDSA threshold signing</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Delivery</strong> — Write to external systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">write.chain</td>
                      <td className="border border-gray-300 px-3 py-2">Chain Writer</td>
                      <td className="border border-gray-300 px-3 py-2">Submit transaction to blockchain</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">write.http</td>
                      <td className="border border-gray-300 px-3 py-2">HTTP Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Deliver result to external API</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">write.queue</td>
                      <td className="border border-gray-300 px-3 py-2">Queue Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Publish to message queue</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">write.agent</td>
                      <td className="border border-gray-300 px-3 py-2">A2A Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">Deliver result to requesting agent</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="font-semibold text-blue-800">Key Difference from Chainlink CRE</p>
                <p className="text-blue-700 text-sm">
                  CRE runs <em>every</em> capability through a dedicated DON with BFT consensus. Silent Orchestration 
                  applies <strong>consensus at critical decision points</strong> (policy decisions, MPC outputs, signing) 
                  rather than every step. This is more efficient for permissioned consortiums where the trust model is 
                  already established between known parties.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Trigger Taxonomy</h3>
              <p className="text-gray-600 text-sm mb-3">
                Workflows can be initiated by multiple trigger types. The orchestrator normalizes all triggers into a 
                common execution context.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-700 text-white">
                      <th className="border border-gray-300 px-3 py-2 text-left">Trigger Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Use Case</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">HTTP Webhook</td>
                      <td className="border border-gray-300 px-3 py-2">External API call</td>
                      <td className="border border-gray-300 px-3 py-2">Enterprise system initiates workflow; real-time requests</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Cron Schedule</td>
                      <td className="border border-gray-300 px-3 py-2">Timer</td>
                      <td className="border border-gray-300 px-3 py-2">Periodic PoR attestation; daily reconciliation</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Chain Event</td>
                      <td className="border border-gray-300 px-3 py-2">Blockchain log/event</td>
                      <td className="border border-gray-300 px-3 py-2">React to on-chain activity (mint request, transfer, etc.)</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Chain Condition</td>
                      <td className="border border-gray-300 px-3 py-2">Polled chain state</td>
                      <td className="border border-gray-300 px-3 py-2">Trigger when condition met (price threshold, balance change)</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Message Queue</td>
                      <td className="border border-gray-300 px-3 py-2">Kafka, AMQP, SQS</td>
                      <td className="border border-gray-300 px-3 py-2">Enterprise message-driven architecture integration</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Agent Request</td>
                      <td className="border border-gray-300 px-3 py-2">A2A protocol</td>
                      <td className="border border-gray-300 px-3 py-2">AI agent requests MPC computation with another agent</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Execution Model</h3>
              <p className="text-gray-600 text-sm mb-3">
                Silent Orchestration uses a <strong>stateless, async execution model</strong>. Each trigger invocation 
                creates an independent execution context with no persistent state between runs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                  <p className="font-semibold text-slate-800 mb-2">Execution Principles</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• <strong>Stateless:</strong> No persistent state in orchestrator; state lives in external systems</li>
                    <li>• <strong>Idempotent:</strong> Same input + same workflow → same result (via idempotency keys)</li>
                    <li>• <strong>Async:</strong> Capabilities return Promises; long-running ops don't block</li>
                    <li>• <strong>Parallel:</strong> Independent capabilities can execute concurrently</li>
                    <li>• <strong>Retriable:</strong> Failed capabilities can be retried with backoff</li>
                  </ul>
                </div>
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                  <p className="font-semibold text-slate-800 mb-2">Consensus Scope</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• <strong>Policy Decisions:</strong> Committee agrees on ALLOW/DENY</li>
                    <li>• <strong>MPC Outputs:</strong> All MPC parties agree on result</li>
                    <li>• <strong>Threshold Signing:</strong> t-of-n parties sign attestation</li>
                    <li className="text-slate-500 italic">• NOT on: HTTP fetches, chain reads (trusted sources)</li>
                  </ul>
                  <p className="text-slate-600 text-xs mt-2">
                    BFT tolerance: Can tolerate up to <code>f</code> Byzantine nodes where <code>t ≥ 2f + 1</code>
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
                <p className="text-slate-400 mb-2">// Execution Flow (Simplified)</p>
{`Trigger (http|cron|chain|queue|agent)
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  Policy Check (policy.evaluate → policy.enforce)    │◄── Consensus
│  → DENY: abort                                      │
│  → ALLOW: mint CDT                                  │
└─────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  Parallel Fetches (fetch.http | fetch.chain | ...)  │
│  → Gather inputs from external systems              │
└─────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  MPC Compute (compute.mpc)                          │◄── Consensus
│  → Parties verify CDT                               │
│  → Execute on secret-shared inputs                  │
│  → Output: decision + witness                       │
└─────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  ZK Prove [optional] (compute.zk)                   │
│  → Generate proof of computation correctness        │
└─────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  Threshold Sign (sign.threshold)                    │◄── Consensus
│  → Committee signs attestation                      │
└─────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  Deliver (write.chain | write.http | write.agent)   │
│  → Signed result to settlement layer                │
└─────────────────────────────────────────────────────┘`}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Data Flow (Settlement-Agnostic)</h3>
              <p className="text-gray-600 text-sm mb-3">
                Stages 1-5 are identical regardless of settlement layer. Stage 6-8 adapt to the target system.
              </p>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left w-32">Stage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1. Trigger', 'External event (API call, cron, chain log, message queue, or agent request via A2A protocol) initiates workflow'],
                    ['2. Orchestrate', 'Workflow Orchestrator executes step graph with retries/idempotency'],
                    ['3. Compute', 'Silent Compute evaluates sensitive policy on private inputs → outputs (decision, policyHash, authId)'],
                    ['4. Authorize', 'SilentShard committee signs digest IFF policy decision = allow'],
                    ['5. Prove (opt)', 'ZK Prover generates proof-of-policy correctness'],
                    ['6. Deliver', 'Signed report delivered to settlement layer (blockchain, API, message queue)'],
                    ['7. Verify', 'Settlement layer verifies signature against known committee key'],
                    ['8. Execute', 'Target system processes the authorized action'],
                  ].map(([stage, desc], i) => (
                    <tr key={stage} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">{stage}</td>
                      <td className="border border-gray-300 px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <p className="font-semibold text-purple-800">Agentic Workflows: Same Architecture</p>
                <p className="text-purple-700 text-sm">
                  The same data flow supports <strong>agent-to-agent collaboration</strong>. When Agent A needs to perform 
                  privacy-preserving computation with Agent B's data (e.g., PSI, private evaluation), the trigger is an 
                  agent request via A2A protocol. The orchestrator coordinates the MPC session, Silent Compute executes 
                  the secure function, and the signed result is delivered back to the requesting agent. The policy layer 
                  (PDP/PEP) ensures agents are authorized to collaborate before any computation begins.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Policy Layer: PDP/PEP & Authorization</h3>
              <p className="text-gray-600 text-sm mb-3">
                Before any MPC computation executes, a policy decision must authorize it. This follows the 
                standard <strong>PDP/PEP pattern</strong> used in enterprise security architectures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <p className="font-semibold text-blue-800 mb-2">PDP (Policy Decision Point)</p>
                  <p className="text-blue-700 text-sm mb-2">The "brain" — evaluates policy and returns a decision.</p>
                  <ul className="text-blue-600 text-xs space-y-1">
                    <li>• <strong>Stateless:</strong> Inputs = attributes + policy rules</li>
                    <li>• <strong>Output:</strong> ALLOW | DENY | REQUIRE_APPROVAL(quorum)</li>
                    <li>• <strong>Plus:</strong> Constraints (k_min, rows_max, recipients)</li>
                    <li>• <strong>Plus:</strong> MPC parameters (protocol, security model, t-of-n)</li>
                    <li>• <strong>Deterministic:</strong> Same inputs → same decision (auditable)</li>
                  </ul>
                </div>
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <p className="font-semibold text-green-800 mb-2">PEP (Policy Enforcement Point)</p>
                  <p className="text-green-700 text-sm mb-2">The "teeth" — gates execution and mints authorization.</p>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• <strong>Gates:</strong> UI/API entry AND MPC coordinator</li>
                    <li>• <strong>On ALLOW:</strong> Mints Compute-Decision Token (CDT)</li>
                    <li>• <strong>CDT binds:</strong> Function, datasets, parties, constraints, TTL</li>
                    <li>• <strong>Enforcement:</strong> Every MPC party verifies CDT before starting</li>
                    <li>• <strong>No valid CDT → No compute</strong></li>
                  </ul>
                </div>
              </div>

              <ExpandableCard 
                title="Compute-Decision Token (CDT)" 
                expanded={expandedItems['cdt']} 
                onToggle={() => toggleExpand('cdt')}
              >
                <p className="text-gray-700 mb-3">
                  The CDT is the cryptographic "ticket" that authorizes an MPC job. It binds all parameters 
                  so that the computation is <strong>exactly what was authorized</strong> — no more, no less.
                </p>
                <div className="bg-slate-800 text-green-400 p-4 rounded-lg mb-3 overflow-x-auto text-sm">
{`CDT = sign(committee_key, {
  function_id,           // Approved function (e.g., "psi_v3", "pjc_sum_v1")
  code_hash,             // Hash of circuit/code to execute
  datasets: [{           // Data inputs with consent binding
    handle, consent_snapshot_id, classification, residency
  }],
  parties: [{            // Authorized participants
    org_id, cert_fingerprint, endpoint
  }],
  mpc: {                 // Protocol parameters
    protocol_class,      // "2PC" | "N-party"
    security_model,      // "semi-honest" | "malicious"
    t, n,                // Threshold (e.g., 2-of-3)
    expected_peers       // Must match actual session peers
  },
  constraints: {         // Policy-imposed limits
    k_min,               // Minimum count for reveal
    rows_max,            // Size cap
    recipients,          // Who can receive output
    output_modality      // "cardinality_only" | "flagged_ids"
  },
  ttl,                   // Expiry timestamp
  policy_version,        // For audit trail
  nonce                  // Replay protection
})`}
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-3">
                  <p className="font-semibold text-red-800 text-sm">Critical: Peer Verification</p>
                  <p className="text-red-700 text-xs">
                    Every MPC party must verify the CDT signature, check that the peer set matches exactly, 
                    and confirm all bound fields before starting the session. <strong>Any mismatch → abort.</strong> 
                    This prevents a malicious coordinator from substituting parties or changing parameters.
                  </p>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Failure Posture: Fail-Closed" 
                expanded={expandedItems['failclosed']} 
                onToggle={() => toggleExpand('failclosed')}
              >
                <p className="text-gray-700 mb-3">
                  The policy layer operates with <strong>fail-closed semantics</strong> for compute operations:
                </p>
                <table className="w-full border-collapse text-sm mb-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Condition</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Consent cannot be verified</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">DENY</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">Data residency mismatch</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">DENY</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Unexpected peer in session</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">ABORT</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">Policy version mismatch</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">DENY</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">CDT expired or invalid signature</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">ABORT</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">Read/metadata operations</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600 font-semibold">ALLOWED</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-600 text-xs">
                  <strong>SLO targets:</strong> PDP evaluation p95 &lt; 200ms; API paths p95 &lt; 100ms; 
                  legal freeze application &lt; 5s.
                </p>
              </ExpandableCard>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mt-4 mb-6">
                <p className="font-semibold text-emerald-800">Where Policy Fits in the Data Flow</p>
                <p className="text-emerald-700 text-sm">
                  Policy evaluation happens <strong>between Trigger and Compute</strong>. The Orchestrator 
                  calls the PDP before invoking Silent Compute. If ALLOW, PEP mints the CDT which is passed 
                  to all MPC parties. Only with a valid CDT does the MPC session begin.
                </p>
                <p className="text-emerald-600 text-xs mt-2">
                  Trigger → <strong>[PDP evaluates → PEP mints CDT]</strong> → Orchestrate → Compute (with CDT) → Authorize → ...
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Settlement Layer Options</h3>
              <p className="text-gray-600 text-sm mb-3">
                The MPC/ZK primitives are the value — the settlement layer is the customer's choice based on their 
                existing infrastructure and regulatory requirements.
              </p>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Settlement Option</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Examples</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Delivery Mechanism</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Public EVM</td>
                    <td className="border border-gray-300 px-3 py-2">Ethereum, Polygon, Arbitrum, Base</td>
                    <td className="border border-gray-300 px-3 py-2">SilentForwarder contract (EIP-712)</td>
                    <td className="border border-gray-300 px-3 py-2">DeFi integrations, public tokenization</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Private EVM</td>
                    <td className="border border-gray-300 px-3 py-2">Canton, Besu, Quorum, Avalanche Subnets</td>
                    <td className="border border-gray-300 px-3 py-2">Same Forwarder pattern, private network</td>
                    <td className="border border-gray-300 px-3 py-2">Bank consortiums, regulated assets</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Non-EVM DLT</td>
                    <td className="border border-gray-300 px-3 py-2">R3 Corda, Hyperledger Fabric, XRP Ledger</td>
                    <td className="border border-gray-300 px-3 py-2">Native contract/chaincode + sig verification</td>
                    <td className="border border-gray-300 px-3 py-2">Trade finance, supply chain, existing DLT investments</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">No Blockchain</td>
                    <td className="border border-gray-300 px-3 py-2">REST API, Message Queue, Enterprise DB</td>
                    <td className="border border-gray-300 px-3 py-2">Signed payload via HTTPS/AMQP; proof stored in audit DB</td>
                    <td className="border border-gray-300 px-3 py-2">Enterprises wanting MPC benefits without DLT</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <p className="font-semibold text-amber-800">Key Insight: Blockchain is Optional</p>
                <p className="text-amber-900 text-sm">
                  Many enterprise customers don't want or need blockchain. The core value proposition — 
                  <strong>privacy-preserving multi-party computation with cryptographic proof of correct execution</strong> — 
                  is independent of where the result lands. A signed attestation from a SilentShard committee is equally 
                  valid whether it's verified by an Ethereum smart contract or an enterprise API gateway.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connector Catalog</h3>
              <p className="text-gray-600 text-sm mb-3">
                Connectors enable Silent Orchestration to integrate with external systems. Each connector is a 
                standardized adapter that handles protocol translation, authentication, and error handling.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-700 text-white">
                      <th className="border border-gray-300 px-3 py-2 text-left">Connector</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Direction</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Phase 1: Core Connectors</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">HTTP/REST</td>
                      <td className="border border-gray-300 px-3 py-2">In/Out</td>
                      <td className="border border-gray-300 px-3 py-2">Generic API integration; webhooks, REST calls</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">EVM Chain Reader</td>
                      <td className="border border-gray-300 px-3 py-2">In</td>
                      <td className="border border-gray-300 px-3 py-2">Read events, logs, state from EVM chains</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">EVM Chain Writer</td>
                      <td className="border border-gray-300 px-3 py-2">Out</td>
                      <td className="border border-gray-300 px-3 py-2">Submit transactions to EVM chains (via Forwarder)</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Credential Verifier</td>
                      <td className="border border-gray-300 px-3 py-2">In</td>
                      <td className="border border-gray-300 px-3 py-2">Verify VCs, OIDC tokens, signed attestations</td>
                      <td className="border border-gray-300 px-3 py-2 text-green-600">Phase 1</td>
                    </tr>
                    
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Phase 2: Enterprise & Agent Connectors</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Message Queue</td>
                      <td className="border border-gray-300 px-3 py-2">In/Out</td>
                      <td className="border border-gray-300 px-3 py-2">Kafka, AMQP, SQS for enterprise integration</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">A2A Protocol</td>
                      <td className="border border-gray-300 px-3 py-2">In/Out</td>
                      <td className="border border-gray-300 px-3 py-2">Google Agent-to-Agent protocol for agent collaboration</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Non-EVM DLT</td>
                      <td className="border border-gray-300 px-3 py-2">Out</td>
                      <td className="border border-gray-300 px-3 py-2">R3 Corda, Hyperledger Fabric, XRP Ledger</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Database Adapter</td>
                      <td className="border border-gray-300 px-3 py-2">In/Out</td>
                      <td className="border border-gray-300 px-3 py-2">Read/write to enterprise databases</td>
                      <td className="border border-gray-300 px-3 py-2 text-orange-600">Phase 2</td>
                    </tr>
                    
                    <tr className="bg-slate-100">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs" colSpan="4">
                        <strong>Future: Partnership-Dependent</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Swift ISO 20022</td>
                      <td className="border border-gray-300 px-3 py-2">In/Out</td>
                      <td className="border border-gray-300 px-3 py-2">Financial messaging (MT/MX messages)</td>
                      <td className="border border-gray-300 px-3 py-2 text-slate-500">Partnership</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">FedNow / ACH</td>
                      <td className="border border-gray-300 px-3 py-2">Out</td>
                      <td className="border border-gray-300 px-3 py-2">US domestic payment rails</td>
                      <td className="border border-gray-300 px-3 py-2 text-slate-500">Partnership</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Agent Integration Layer</h3>
              <p className="text-gray-600 text-sm mb-3">
                As enterprises deploy AI agents, Silent Orchestration provides the <strong>privacy-preserving computation 
                layer</strong> that enables secure agent-to-agent collaboration. This section defines how agents interact 
                with the orchestration system via the <strong>AP3 protocol</strong>.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">AP3</div>
                  <div>
                    <p className="font-semibold text-purple-800 mb-1">AP3: Agent Privacy-Preserving Protocol</p>
                    <p className="text-purple-700 text-sm mb-2">
                      Agent integration follows the <strong>AP3 open protocol</strong> — an extension to Google's A2A protocol 
                      that adds cryptographic privacy guarantees. AP3 defines:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">Roles</p>
                        <p className="text-gray-600">Initiator, Responder, Coordinator</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">Operations</p>
                        <p className="text-gray-600">PSI, Dot Product, Aggregation</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">Commitments</p>
                        <p className="text-gray-600">Cryptographic input/output binding</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">Directives</p>
                        <p className="text-gray-600">Policy rules and constraints</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">Binaries</p>
                        <p className="text-gray-600">Compiled MPC circuits</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-purple-200">
                        <p className="font-semibold text-purple-700">A2A Extension</p>
                        <p className="text-gray-600">Protocol-level integration</p>
                      </div>
                    </div>
                    <p className="text-purple-600 text-xs mt-2">
                      See: <a href="https://ap3-protocol.org" className="underline">ap3-protocol.org</a> for full specification
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-slate-800 mb-2">Phase 2 Capability</p>
                <p className="text-slate-700 text-sm">
                  Agent integration builds on the core Phase 1 infrastructure. The same MPC, signing, and policy 
                  capabilities used for enterprise workflows also power agent collaboration — with additional 
                  authentication and guardrail mechanisms for autonomous operation.
                </p>
              </div>

              <ExpandableCard 
                title="Agent Authentication & Identity" 
                expanded={expandedItems['agent-auth']} 
                onToggle={() => toggleExpand('agent-auth')}
              >
                <p className="text-gray-700 mb-3">
                  Agents must authenticate to invoke workflows. We support multiple credential types:
                </p>
                <table className="w-full border-collapse text-sm mb-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Credential Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Use Case</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Binding</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">mTLS Certificate</td>
                      <td className="border border-gray-300 px-3 py-2">Transport-layer authentication</td>
                      <td className="border border-gray-300 px-3 py-2">Agent ↔ Orchestrator connection</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Signed Agent Credential</td>
                      <td className="border border-gray-300 px-3 py-2">Proof of agent identity and organization</td>
                      <td className="border border-gray-300 px-3 py-2">CDT includes agent_id, org_id</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Delegated Authority Token</td>
                      <td className="border border-gray-300 px-3 py-2">Human-approved scope for agent actions</td>
                      <td className="border border-gray-300 px-3 py-2">CDT includes delegation_id, scope</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-100 p-3 rounded text-xs">
                  <p className="font-semibold text-gray-700 mb-1">Agent Identity in CDT:</p>
                  <code className="text-gray-600">
                    {`initiator: { type: "agent", agent_id: "...", org_id: "...", delegation_id: "..." }`}
                  </code>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Agent-to-Orchestration API" 
                expanded={expandedItems['agent-api']} 
                onToggle={() => toggleExpand('agent-api')}
              >
                <p className="text-gray-700 mb-3">
                  Agents invoke workflows via a REST/gRPC API. The API is designed for both synchronous (short-lived) 
                  and asynchronous (long-running) operations.
                </p>
                <div className="bg-slate-800 text-green-400 p-3 rounded-lg mb-3 overflow-x-auto text-xs">
{`// Agent requests MPC computation
POST /v1/workflows/{workflow_id}/invoke
Authorization: Bearer <agent_credential>

{
  "request_id": "unique-request-id",
  "function": "psi_v3",              // Which MPC function to run
  "inputs": { ... },                  // Agent's contribution to MPC
  "counterparty": {                   // For 2-party MPC
    "agent_id": "agent-b-id",
    "endpoint": "https://agent-b.example.com/a2a"
  },
  "callback": {                       // For async result delivery
    "url": "https://agent-a.example.com/results",
    "method": "POST"
  },
  "ttl": 300                          // Request expires in 5 minutes
}`}
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Response modes:</strong> Synchronous (wait for result) or async (receive callback when complete).
                </p>
              </ExpandableCard>

              <ExpandableCard 
                title="Agent Guardrails (Policy Extensions)" 
                expanded={expandedItems['agent-guardrails']} 
                onToggle={() => toggleExpand('agent-guardrails')}
              >
                <p className="text-gray-700 mb-3">
                  Agents operate autonomously, so additional policy constraints are needed beyond human-initiated workflows:
                </p>
                <table className="w-full border-collapse text-sm mb-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Guardrail</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Policy Attribute</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Rate Limiting</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">agent_rate_limit</td>
                      <td className="border border-gray-300 px-3 py-2">Max invocations per hour/day</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Budget Cap</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">agent_budget_limit</td>
                      <td className="border border-gray-300 px-3 py-2">Max compute credits per period</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Function Allowlist</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">agent_function_allowlist</td>
                      <td className="border border-gray-300 px-3 py-2">Which MPC functions agent can invoke</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Counterparty Allowlist</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">agent_counterparty_allowlist</td>
                      <td className="border border-gray-300 px-3 py-2">Which other agents it can collaborate with</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Human Escalation</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">require_human_approval</td>
                      <td className="border border-gray-300 px-3 py-2">Certain operations require human sign-off</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Audit Mode</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">agent_audit_level</td>
                      <td className="border border-gray-300 px-3 py-2">Enhanced logging for agent actions</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-yellow-800 text-sm">
                    <strong>Key Principle:</strong> Agents inherit their organization's base policies, with additional 
                    agent-specific constraints layered on top. The most restrictive policy wins.
                  </p>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Multi-Agent MPC Session Coordination" 
                expanded={expandedItems['multi-agent-mpc']} 
                onToggle={() => toggleExpand('multi-agent-mpc')}
              >
                <p className="text-gray-700 mb-3">
                  When two (or more) agents need to perform MPC together, the orchestrator coordinates the session:
                </p>
                <div className="bg-slate-100 p-3 rounded-lg text-sm mb-3">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Agent A requests computation</strong> with Agent B, specifying function and counterparty</li>
                    <li><strong>Orchestrator validates</strong> Agent A's credentials and policy authorization</li>
                    <li><strong>Orchestrator notifies Agent B</strong> via A2A protocol callback</li>
                    <li><strong>Agent B accepts/rejects</strong> within TTL (rejection reasons: policy, unavailable, etc.)</li>
                    <li><strong>If accepted:</strong> Orchestrator mints CDT binding both agents + function</li>
                    <li><strong>Both agents provide inputs</strong> to their respective MPC parties (via secure channel)</li>
                    <li><strong>MPC executes</strong> — parties verify CDT, run protocol, output result</li>
                    <li><strong>Result delivered</strong> to both agents via their specified callbacks</li>
                  </ol>
                </div>
                <div className="bg-purple-50 p-3 rounded text-xs">
                  <p className="font-semibold text-purple-800 mb-1">Privacy Guarantees:</p>
                  <p className="text-purple-700">
                    • Agent A learns only the agreed-upon output (not Agent B's raw inputs)<br/>
                    • Agent B learns only the agreed-upon output (not Agent A's raw inputs)<br/>
                    • Orchestrator never sees plaintext inputs from either agent<br/>
                    • CDT ensures computation matches what both agents authorized
                  </p>
                </div>
              </ExpandableCard>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reference Implementation: EVM Settlement</h3>
              <p className="text-gray-600 text-sm mb-3">
                The following components are specific to EVM-based settlement (public or private). Similar patterns 
                apply to other settlement layers with appropriate adaptations.
              </p>
              
              <ExpandableCard 
                title="CommitteeRegistry" 
                expanded={expandedItems['registry']} 
                onToggle={() => toggleExpand('registry')}
              >
                <p className="text-gray-700 mb-2">Manages committee identity, rotation, and access control:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <code className="bg-gray-100 px-1 rounded">committeeSigner[epoch]</code> — Ethereum address derived from committee ECDSA pubkey</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">committeeMembers[epoch]</code> — List of consortium member addresses (for governance/slashing)</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">allowedRelayer[address]</code> — Allowlist for transaction submitters</li>
                  <li>• <strong>Rotation:</strong> Accept current + previous epoch for grace window during key rotation</li>
                </ul>
              </ExpandableCard>

              <ExpandableCard 
                title="SilentForwarder" 
                expanded={expandedItems['forwarder']} 
                onToggle={() => toggleExpand('forwarder')}
              >
                <p className="text-gray-700 mb-2">The CRE-equivalent integration point. This contract:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Checks relayer is in allowlist</li>
                  <li>Parses metadata: (workflowId, epoch, nonce, deadline)</li>
                  <li>Computes EIP-712 digest over (workflowId, receiver, epoch, nonce, deadline, reportHash)</li>
                  <li>Verifies signature via ecrecover against committeeSigner[epoch]</li>
                  <li>Enforces replay protection (nonce) and expiry (deadline)</li>
                  <li>Calls <code className="bg-gray-100 px-1 rounded">IReceiver(receiver).onReport(metadata, report)</code></li>
                </ol>
              </ExpandableCard>

              <ExpandableCard 
                title="Reference Consumer Contracts" 
                expanded={expandedItems['consumers']} 
                onToggle={() => toggleExpand('consumers')}
              >
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>MintGate:</strong> For stablecoin issuance. Accepts authorization report, checks authId for replay, mints tokens.</li>
                  <li>• <strong>PoRReceiver:</strong> For Proof of Reserve. Stores (reserves, supply, timestamp), enforces invariants.</li>
                  <li>• <strong>AssetServicer:</strong> For tokenized assets. Updates state from offchain system-of-record.</li>
                </ul>
              </ExpandableCard>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4 mb-6">
                <p className="font-semibold text-green-800">Key Technical Insight</p>
                <p className="text-green-900">
                  Threshold ECDSA from SilentShard collapses to a standard ECDSA signature. Onchain, it's just 
                  <code className="bg-green-100 px-1 rounded mx-1">ecrecover</code> — no special verification logic needed.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alternative: No-Blockchain Settlement</h3>
              <p className="text-gray-600 text-sm mb-3">
                For enterprises that don't want blockchain exposure, the same architecture works with traditional systems.
              </p>
              
              <ExpandableCard 
                title="API Gateway Pattern (No Blockchain)" 
                expanded={expandedItems['apigateway']} 
                onToggle={() => toggleExpand('apigateway')}
              >
                <p className="text-gray-700 mb-3">
                  Replace SilentForwarder with an <strong>API Gateway</strong> that performs the same verification:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 mb-3">
                  <li>Receive signed payload via HTTPS POST or message queue</li>
                  <li>Verify ECDSA signature against known committee public key</li>
                  <li>Check nonce for replay protection; check timestamp for expiry</li>
                  <li>Store proof (signature, payload hash, timestamp) in immutable audit log</li>
                  <li>Forward authorized action to downstream system (ERP, core banking, etc.)</li>
                </ol>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold text-gray-700 mb-1">What Enterprises Get Without Blockchain:</p>
                  <div className="text-gray-600 text-xs space-y-1">
                    <p>✓ <strong>Same cryptographic guarantees</strong> — MPC computation, threshold signatures, optional ZK proofs</p>
                    <p>✓ <strong>Tamper-evident audit trail</strong> — Signed attestations stored in append-only log</p>
                    <p>✓ <strong>Multi-party trust</strong> — No single party can forge authorization</p>
                    <p>✓ <strong>Regulatory defensibility</strong> — Cryptographic proof of compliance execution</p>
                    <p>✗ <strong>No public verifiability</strong> — Audit is internal, not on public ledger</p>
                    <p>✗ <strong>No smart contract automation</strong> — Downstream actions via API, not self-executing contracts</p>
                  </div>
                </div>
              </ExpandableCard>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <p className="font-semibold text-slate-800 mb-2">Settlement Layer Decision Framework</p>
                <div className="text-slate-700 text-sm space-y-2">
                  <p><strong>Choose Public EVM if:</strong> DeFi integration, public tokenization, maximum transparency required</p>
                  <p><strong>Choose Private EVM if:</strong> Consortium of known parties, regulatory preference for private ledger, existing Besu/Canton investment</p>
                  <p><strong>Choose Non-EVM DLT if:</strong> Existing Corda/Fabric deployment, specific DLT ecosystem requirements</p>
                  <p><strong>Choose No Blockchain if:</strong> No DLT mandate, enterprise systems integration, maximum deployment flexibility</p>
                </div>
              </div>
            </Section>
          )}

          {/* Part 5: ZK Differentiation */}
          {activeSection === 'zk' && (
            <Section title="Part 5: Where ZK Creates Differentiation">
              <p className="text-gray-700 mb-4">
                ZK is our strongest differentiator. While Chainlink CRE relies on "trust from redundancy" 
                (multiple DON nodes), we can offer "trust from cryptographic proof." Combined with MPC, 
                this creates a unique capability: <strong>prove correctness of computation on private inputs 
                without revealing those inputs to anyone</strong>.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">How MPC + ZK Work Together</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700 text-sm mb-3">
                  MPC and ZK serve complementary roles in the Silent Orchestration architecture:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-blue-700 mb-2">Silent Compute (MPC)</p>
                    <p className="text-gray-600 text-xs mb-2"><strong>Role:</strong> Perform computation on private inputs</p>
                    <p className="text-gray-600 text-xs mb-2"><strong>Guarantee:</strong> No single party sees the inputs during computation</p>
                    <p className="text-gray-600 text-xs"><strong>Output:</strong> Result (e.g., "approved") + intermediate values for ZK</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="font-semibold text-purple-700 mb-2">ZK Proofs</p>
                    <p className="text-gray-600 text-xs mb-2"><strong>Role:</strong> Prove that computation was done correctly</p>
                    <p className="text-gray-600 text-xs mb-2"><strong>Guarantee:</strong> Verifier learns nothing except that the statement is true</p>
                    <p className="text-gray-600 text-xs"><strong>Output:</strong> Succinct proof verifiable by anyone (including smart contracts)</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded border border-emerald-200">
                  <p className="font-semibold text-emerald-800 text-sm mb-1">Combined Flow</p>
                  <p className="text-emerald-700 text-xs">
                    1. Parties provide private inputs to Silent Compute → 2. MPC evaluates policy on secret-shared data → 
                    3. MPC outputs decision + "witness" data → 4. ZK prover generates proof that decision followed from valid inputs → 
                    5. Proof is attached to signed attestation → 6. Anyone can verify proof without seeing original inputs
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">High-Impact ZK Applications</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">ZK Application</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">What It Proves</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Business Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof-of-Policy</td>
                    <td className="border border-gray-300 px-3 py-2">Decision complies with policy on private inputs (KYC status, limits, sanctions)</td>
                    <td className="border border-gray-300 px-3 py-2">Converts "trust us" into "verify it" — critical for regulated issuers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof-of-Arithmetic</td>
                    <td className="border border-gray-300 px-3 py-2">PoR aggregation is correct; reserves ≥ supply; computation is faithful</td>
                    <td className="border border-gray-300 px-3 py-2">Reduces trust in committee arithmetic; strong for auditors</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof-of-Source</td>
                    <td className="border border-gray-300 px-3 py-2">Data came from authenticated source (signed statement, attested API)</td>
                    <td className="border border-gray-300 px-3 py-2">Biggest unlock for PoR — addresses "is the data real?" problem</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof-of-Eligibility</td>
                    <td className="border border-gray-300 px-3 py-2">User meets criteria (age, accreditation, jurisdiction) without revealing specifics</td>
                    <td className="border border-gray-300 px-3 py-2">Enables compliant access control without PII exposure</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Specific Proof Types for Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Range Proofs</p>
                  <p className="text-gray-600 text-xs mb-2">Prove a value falls within a range without revealing the value.</p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p className="font-semibold text-gray-600">Use cases:</p>
                    <p className="text-gray-500">• Transaction amount ≤ daily limit</p>
                    <p className="text-gray-500">• Account balance ≥ minimum threshold</p>
                    <p className="text-gray-500">• Age ≥ 18 (without revealing DOB)</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Set Membership Proofs</p>
                  <p className="text-gray-600 text-xs mb-2">Prove an element is (or is not) in a set without revealing the element.</p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p className="font-semibold text-gray-600">Use cases:</p>
                    <p className="text-gray-500">• Address NOT in sanctions list (OFAC, UN)</p>
                    <p className="text-gray-500">• User IS in approved investor list</p>
                    <p className="text-gray-500">• Jurisdiction IS in allowed countries</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Merkle Proofs</p>
                  <p className="text-gray-600 text-xs mb-2">Prove inclusion in a committed dataset efficiently.</p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p className="font-semibold text-gray-600">Use cases:</p>
                    <p className="text-gray-500">• KYC credential is in verified registry</p>
                    <p className="text-gray-500">• Transaction is included in batch</p>
                    <p className="text-gray-500">• Asset is part of reserve set</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Signature Proofs</p>
                  <p className="text-gray-600 text-xs mb-2">Prove possession of a valid signature without revealing it.</p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p className="font-semibold text-gray-600">Use cases:</p>
                    <p className="text-gray-500">• Credential signed by trusted issuer</p>
                    <p className="text-gray-500">• Data came from authenticated source</p>
                    <p className="text-gray-500">• Multi-party authorization occurred</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Implementation Priority</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">HIGH</span>
                  <div>
                    <strong>Proof-of-Policy:</strong> Start here. Compliance verification without exposing PII. 
                    Build circuits for: range checks (limits), set non-membership (sanctions), and policy hash verification.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">MEDIUM</span>
                  <div>
                    <strong>Proof-of-Arithmetic:</strong> Add to PoR and aggregation flows. Proves computation correctness. 
                    Useful for: reserve calculations, batch processing, cross-party reconciliation.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-100 rounded-lg">
                  <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">FUTURE</span>
                  <div>
                    <strong>Proof-of-Source:</strong> Requires authenticated data sources (custodian signatures, TLSNotary). 
                    Biggest differentiator long-term but depends on ecosystem maturity.
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Considerations</h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800 mb-2">Proof System Selection</p>
                <div className="text-amber-900 text-sm space-y-2">
                  <p><strong>Groth16:</strong> Smallest proofs (~200 bytes), fastest verification, but requires trusted setup per circuit. Good for stable, well-defined policies.</p>
                  <p><strong>Plonk:</strong> Universal trusted setup (reusable), slightly larger proofs. Better for evolving policy requirements.</p>
                  <p><strong>STARKs:</strong> No trusted setup, quantum-resistant, but larger proofs. Consider for long-term or high-security applications.</p>
                  <p className="italic text-xs mt-2">Recommendation: Start with Plonk for flexibility during development; consider Groth16 for production if proof size/verification cost matters.</p>
                </div>
              </div>
            </Section>
          )}

          {/* Part 6: Use Cases */}
          {activeSection === 'usecases' && (
            <Section title="Part 6: Target Use Cases by Priority">
              <p className="text-gray-700 mb-4">
                Use cases aligned with our three strategic priorities. Each demonstrates where Silence's 
                privacy-preserving approach creates differentiated value.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Priority 1: Confidential Enterprise Automation</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-green-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Cross-Border Payments (Xweave-style)</span>
                    <span className="bg-green-800 text-xs px-2 py-0.5 rounded">G3: Coordinator-led</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Multi-rail payment flows (SGD → stablecoin → PHP) across MTLs, VASPs, and fiat distributors 
                      with embedded compliance at each step.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Privacy-preserving KYC/AML at each step</p>
                        <p className="text-gray-600 text-xs">• SilentShard: Multi-party authorization for fund release</p>
                        <p className="text-gray-600 text-xs">• ZK: Proof chain linking compliance across rails</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins:</p>
                        <p className="text-gray-600 text-xs">• Travel rule data travels without exposing PII</p>
                        <p className="text-gray-600 text-xs">• Works across fiat + crypto rails (not blockchain-only)</p>
                        <p className="text-gray-600 text-xs">• Regulators can verify proofs without seeing raw data</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-green-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Supply Chain Coordination</span>
                    <span className="bg-green-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Multi-party supply chain verification where suppliers, manufacturers, and distributors 
                      need to prove provenance and compliance without revealing sourcing details to competitors.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Joint computation across supply chain parties</p>
                        <p className="text-gray-600 text-xs">• ZK: Provenance proofs without revealing suppliers</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins:</p>
                        <p className="text-gray-600 text-xs">• No central party sees all supply chain data</p>
                        <p className="text-gray-600 text-xs">• Settlement via enterprise systems (no blockchain required)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-green-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Multi-Party Compliance Workflows</span>
                    <span className="bg-green-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Enterprise workflows requiring sign-off from multiple parties (legal, compliance, finance) 
                      where each party's approval criteria must remain confidential.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Each party evaluates private criteria</p>
                        <p className="text-gray-600 text-xs">• SilentShard: Threshold approval (e.g., 3-of-5 sign-off)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins:</p>
                        <p className="text-gray-600 text-xs">• Approval criteria stay confidential to each party</p>
                        <p className="text-gray-600 text-xs">• Audit trail proves all checks passed without revealing what was checked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Priority 2: Cross-Enterprise Attestation</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Consortium Credit Checks</span>
                    <span className="bg-blue-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Multiple banks jointly verify a borrower's creditworthiness without any single bank 
                      revealing their customer's exposure or transaction history.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Banks jointly compute aggregate exposure</p>
                        <p className="text-gray-600 text-xs">• ZK: Prove "total exposure &lt; threshold" without revealing individual amounts</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins (vs pure ZK):</p>
                        <p className="text-gray-600 text-xs">• ZK alone: Each bank proves their piece independently</p>
                        <p className="text-gray-600 text-xs">• Silence: Banks jointly compute and attest — true multi-party</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Multi-Bank Trade Finance</span>
                    <span className="bg-blue-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Letter of credit verification where issuing bank, advising bank, and beneficiary bank 
                      jointly attest to document validity without revealing underlying trade details.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Cross-bank document verification</p>
                        <p className="text-gray-600 text-xs">• SilentShard: Multi-bank authorization for fund release</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins:</p>
                        <p className="text-gray-600 text-xs">• Trade details stay confidential to relevant parties</p>
                        <p className="text-gray-600 text-xs">• Attestation valid across existing banking systems</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Healthcare Data Sharing</span>
                    <span className="bg-blue-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Multi-provider patient data verification where hospitals, insurers, and pharmacies 
                      jointly verify eligibility and coverage without exposing full patient records.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute: Privacy-preserving eligibility check</p>
                        <p className="text-gray-600 text-xs">• ZK: Prove coverage without revealing diagnosis codes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Why Silence Wins:</p>
                        <p className="text-gray-600 text-xs">• HIPAA-compatible: No party sees another's patient data</p>
                        <p className="text-gray-600 text-xs">• Works with existing healthcare systems (no blockchain)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Priority 3: Regulated Institutional DeFi</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Stablecoin Issuance</span>
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded">G3: Coordinator-led</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Privacy-preserving compliance checks for mint/redeem authorization with verifiable proofs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Chainlink (CRE+ACE) Approach:</p>
                        <p className="text-gray-600 text-xs">• PoR → ACE compliance → DON-signed authorization</p>
                        <p className="text-gray-600 text-xs">• DON nodes see data during policy evaluation</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Approach:</p>
                        <p className="text-gray-600 text-xs">• Silent Compute compliance → SilentShard authorization</p>
                        <p className="text-gray-600 text-xs">• ZK proof of policy execution — no party sees inputs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Tokenized Asset Servicing</span>
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded">G3: Coordinator-led</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Syncing offchain system-of-record with onchain token state under consortium governance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Chainlink Approach:</p>
                        <p className="text-gray-600 text-xs">• Offchain DB sync → schema validation → DON-signed update</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Approach:</p>
                        <p className="text-gray-600 text-xs">• Private reconciliation → policy enforcement → committee-signed update</p>
                        <p className="text-gray-600 text-xs">• Consortium controls who can trigger updates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Proof of Reserve</span>
                    <span className="bg-gray-800 text-xs px-2 py-0.5 rounded">G3: Coordinator-led</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Verifiable reserve attestations with cryptographic proof of arithmetic correctness.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Chainlink Approach:</p>
                        <p className="text-gray-600 text-xs">• HTTP fetch → compute → DON consensus → signed attestation</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Approach:</p>
                        <p className="text-gray-600 text-xs">• Authenticated fetch → ZK arithmetic proof → committee attestation</p>
                        <p className="text-gray-600 text-xs italic">Note: Requires authenticated data sources for full value</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Priority 4: Agentic Collaboration</h3>
              <p className="text-gray-600 text-sm mb-3">
                As enterprises deploy AI agents, there's growing need for <strong>privacy-preserving agent-to-agent collaboration</strong>. 
                Agents from different organizations need to compute on each other's data without exposing sensitive information. 
                Silent Orchestration provides the secure computation layer that makes autonomous agent collaboration safe.
              </p>
              <div className="space-y-4">
                <div className="border border-purple-300 rounded-lg overflow-hidden">
                  <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Private Set Intersection (PSI) for Agents</span>
                    <span className="bg-purple-800 text-xs px-2 py-0.5 rounded">G1: Bilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Two agents find overlap in their datasets (customer lists, fraud signals, inventory) without revealing non-matches.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Example Scenarios:</p>
                        <p className="text-gray-600 text-xs">• Fintech agent checking customers against credit bureau</p>
                        <p className="text-gray-600 text-xs">• Anti-fraud agents cross-checking transaction blacklists</p>
                        <p className="text-gray-600 text-xs">• Lending agent filtering prospects against banking risk data</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• A2A protocol trigger → Orchestrator</p>
                        <p className="text-gray-600 text-xs">• PDP/PEP authorizes agent collaboration</p>
                        <p className="text-gray-600 text-xs">• Silent Compute executes PSI (2PC)</p>
                        <p className="text-gray-600 text-xs">• SilentShard signs result attestation</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded mt-3 text-xs">
                      <p className="text-purple-700">
                        <strong>Privacy Guarantee:</strong> Agent A learns only the intersection (or cardinality); Agent B's non-matching 
                        records remain completely hidden. Neither agent can cheat or tamper with the computation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-300 rounded-lg overflow-hidden">
                  <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Private Evaluation (Secure Function Computation)</span>
                    <span className="bg-purple-800 text-xs px-2 py-0.5 rounded">G1: Bilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Agent A evaluates Agent B's data against a proprietary model/function — neither sees the other's IP.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Example Scenarios:</p>
                        <p className="text-gray-600 text-xs">• Buyer agent evaluating supplier's chemical formula against proprietary fit-cost model</p>
                        <p className="text-gray-600 text-xs">• Insurance agent scoring risk against partner's actuarial model</p>
                        <p className="text-gray-600 text-xs">• HR agent running background check against encrypted sanctions database</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• CDT binds function + parties + constraints</p>
                        <p className="text-gray-600 text-xs">• Silent Compute executes secure 2PC</p>
                        <p className="text-gray-600 text-xs">• Result: pass/fail or score (not underlying data)</p>
                        <p className="text-gray-600 text-xs">• ZK proof of computation correctness (optional)</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded mt-3 text-xs">
                      <p className="text-purple-700">
                        <strong>Privacy Guarantee:</strong> Agent A never sees Agent B's raw data; Agent B never sees Agent A's 
                        model coefficients. Only the evaluation result is revealed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-300 rounded-lg overflow-hidden">
                  <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
                    <span>Multi-Agent Compliance Orchestration</span>
                    <span className="bg-purple-800 text-xs px-2 py-0.5 rounded">G2: Multilateral</span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3">
                      Multiple agents coordinate compliance checks across organizational boundaries without centralizing sensitive data.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Example Scenarios:</p>
                        <p className="text-gray-600 text-xs">• Multi-bank KYC: agents jointly verify customer without sharing full profiles</p>
                        <p className="text-gray-600 text-xs">• Supply chain compliance: agents attest supplier meets standards</p>
                        <p className="text-gray-600 text-xs">• Healthcare: agents verify eligibility across payer/provider systems</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">Silence Capabilities Used:</p>
                        <p className="text-gray-600 text-xs">• Orchestrator coordinates N-party MPC session</p>
                        <p className="text-gray-600 text-xs">• PDP enforces per-agent authorization</p>
                        <p className="text-gray-600 text-xs">• Silent Compute aggregates without revealing individual inputs</p>
                        <p className="text-gray-600 text-xs">• Signed attestation proves compliance to all parties</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded mt-3 text-xs">
                      <p className="text-purple-700">
                        <strong>Privacy Guarantee:</strong> Each agent's data remains with its organization. Only the aggregate 
                        compliance decision is revealed. Cryptographic proof ensures no agent cheated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">AP3</div>
                  <div>
                    <p className="font-semibold text-purple-800 mb-2">A2A + AP3 Protocol Integration</p>
                    <p className="text-purple-700 text-sm">
                      Google's <strong>A2A protocol</strong> provides agent interoperability. Silence Labs' <strong>AP3 
                      (Agent Privacy-Preserving Protocol)</strong> extends A2A with cryptographic MPC capabilities. 
                      Silent Orchestration is the reference implementation — providing the runtime, policy engine, and 
                      infrastructure for AP3-compliant privacy-preserving workflows.
                    </p>
                    <p className="text-purple-600 text-xs mt-2">
                      Protocol spec: <a href="https://ap3-protocol.org" className="underline">ap3-protocol.org</a>
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Recommended First POC</h3>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="font-semibold text-emerald-800 mb-2">Cross-Border Payments (Xweave Partnership)</p>
                <p className="text-emerald-700 text-sm mb-3">
                  This use case exercises all Silence capabilities, demonstrates the first three priorities, and has 
                  a potential partner (Xweave) already aligned with our positioning.
                </p>
                <div className="text-emerald-700 text-xs">
                  <p>✓ Validates Priority 1: Multi-rail payment orchestration across enterprises</p>
                  <p>✓ Validates Priority 2: Cross-enterprise attestation (7 parties jointly attest)</p>
                  <p>✓ Validates Priority 3: Crypto rail integration where needed</p>
                  <p>✓ Settlement-agnostic: Works with fiat rails, blockchain, and hybrid</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                <p className="font-semibold text-purple-800 mb-2">Future: Agentic POC (Priority 4)</p>
                <p className="text-purple-700 text-sm">
                  Once the core orchestration infrastructure is proven via Xweave, the same architecture supports 
                  <strong> agent-to-agent collaboration</strong>. A follow-on POC could demonstrate PSI or private 
                  evaluation between agents — validating Silent Orchestration as the privacy layer for enterprise 
                  AI agent ecosystems (A2A protocol integration).
                </p>
              </div>
            </Section>
          )}

          {/* Part 7: Engineering Questions */}
          {activeSection === 'questions' && (
            <Section title="Part 7: Engineering Questions & Recommendations">
              <p className="text-gray-700 mb-4">
                Key architectural decisions organized by priority. Questions marked <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span> must 
                be resolved before POC development begins. Questions marked <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span> can 
                be iterated during POC.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <p className="font-semibold text-amber-800">Critical Path</p>
                <p className="text-amber-900 text-sm">
                  Orchestration Layer is the primary gap. Resolve blocking questions there first, then proceed 
                  to Silent Compute and SilentShard integration. ZK and Onchain design can be deferred to Phase 2.
                </p>
              </div>

              <ExpandableCard 
                title="Orchestration Layer" 
                expanded={expandedItems['q-orch']} 
                onToggle={() => toggleExpand('q-orch')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">What's the minimal viable workflow runtime?</p>
                    <p className="text-gray-600 text-sm mb-2">SDK/DSL vs config-driven DAG vs existing framework?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Start with <strong>config-driven YAML/JSON DAG</strong> for POC — faster to iterate than building a DSL. 
                        Evaluate Temporal.io or Prefect as potential runtime bases; they handle retries, state, and observability. 
                        Custom DSL can come post-POC if workflow complexity demands it.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we integrate trigger mechanisms?</p>
                    <p className="text-gray-600 text-sm mb-2">Cron, HTTP webhook, chain event logs, message queues?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        POC needs only <strong>HTTP webhook</strong> trigger. Add cron for scheduled jobs in Phase 2. 
                        Chain event triggers (log subscription) only needed for DeFi use cases — defer to Path C (EVM Settlement).
                        Message queue (Kafka/AMQP) for enterprise integration in Path B.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2</span>
                    </div>
                    <p className="font-semibold text-gray-800">What retry/idempotency patterns work best with MPC?</p>
                    <p className="text-gray-600 text-sm mb-2">MPC sessions are expensive; how to handle partial failures?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Use <strong>idempotency keys</strong> at workflow level (not MPC session level). If MPC session fails, 
                        retry the entire confidential step with same idempotency key. CDT should include idempotency_key in binding. 
                        Explore checkpointing for long-running workflows in Phase 2.
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Silent Compute Integration" 
                expanded={expandedItems['q-compute']} 
                onToggle={() => toggleExpand('q-compute')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we define the "confidential step" interface?</p>
                    <p className="text-gray-600 text-sm mb-2">What does the orchestrator call? What does it receive back?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Define a <strong>ConfidentialStep</strong> interface: <code className="bg-green-100 px-1 rounded">execute(cdt, inputs) → (decision, outputs, witness)</code>. 
                        The CDT authorizes the step; inputs are secret-shared to MPC parties; outputs include the decision (allow/deny), 
                        any public outputs (e.g., authId), and witness data for optional ZK proof generation.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">What's the output format for policy evaluation?</p>
                    <p className="text-gray-600 text-sm mb-2">What fields go into the signed report?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Standardize on: <code className="bg-green-100 px-1 rounded">{`{decision, policyHash, authId, timestamp, publicSignals[]}`}</code>. 
                        The <strong>policyHash</strong> commits to which policy was evaluated; <strong>authId</strong> is unique per authorization 
                        (for replay protection); <strong>publicSignals</strong> are any values that can be revealed (e.g., "amount ≤ limit" without revealing amount).
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 1-2</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we ensure committee only signs if allow?</p>
                    <p className="text-gray-600 text-sm mb-2">What prevents a compromised orchestrator from requesting signatures on deny decisions?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        The signing step should be <strong>inside the MPC session</strong>, not a separate call. Silent Compute evaluates policy 
                        AND triggers SilentShard signing atomically — the committee never sees a "sign this" request without having participated 
                        in the policy evaluation. The CDT binding ensures parameters match.
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="SilentShard Integration" 
                expanded={expandedItems['q-shard']} 
                onToggle={() => toggleExpand('q-shard')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">What signing policy/quorum should be configurable?</p>
                    <p className="text-gray-600 text-sm mb-2">Per workflow? Per use case? Per customer?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Configure at <strong>workflow level</strong> with customer-level defaults. POC can hardcode 2-of-3 threshold. 
                        CDT should bind the (t, n) threshold so it can't be changed after policy evaluation. 
                        Allow different thresholds for different action types (e.g., higher threshold for large transfers).
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we handle key rotation and epoch management?</p>
                    <p className="text-gray-600 text-sm mb-2">What's the ceremony? How long is the grace period?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Defer detailed ceremony design to Phase 2. For POC, use a simple <strong>epoch counter</strong> with 24-hour grace period 
                        (accept current + previous epoch). Document the rotation trigger (time-based vs. event-based) as a Phase 2 decision. 
                        See Appendix A (Lifecycle Governance) for policy controls.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2</span>
                    </div>
                    <p className="font-semibold text-gray-800">What's the latency profile for threshold signing?</p>
                    <p className="text-gray-600 text-sm mb-2">Can we meet SLOs for high-throughput use cases?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Benchmark during Phase 2. Target: &lt;500ms for threshold signing (excluding network latency between parties). 
                        For high-throughput, consider <strong>batch signing</strong> — aggregate multiple authorizations into one signing ceremony. 
                        Document findings in Appendix D (Performance).
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Policy Engine (PDP/PEP)" 
                expanded={expandedItems['q-policy']} 
                onToggle={() => toggleExpand('q-policy')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">What policy language/format should PDP use?</p>
                    <p className="text-gray-600 text-sm mb-2">Rego (OPA)? Cedar? Custom DSL? JSON rules?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Start with <strong>JSON-based rules</strong> for POC — simple, easy to serialize into CDT. Evaluate 
                        <strong> Open Policy Agent (Rego)</strong> for production if policy complexity grows. OPA is battle-tested, 
                        has good tooling, and supports policy-as-code workflows. Avoid custom DSL unless OPA proves insufficient.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded">BLOCKING</span>
                      <span className="text-xs text-gray-500">Phase 1</span>
                    </div>
                    <p className="font-semibold text-gray-800">How is the CDT signed and verified?</p>
                    <p className="text-gray-600 text-sm mb-2">Who signs the CDT? How do MPC parties verify it?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        PEP (part of orchestrator) signs CDT with a <strong>coordinator key</strong>. Each MPC party has the coordinator's 
                        public key and verifies CDT signature + freshness + peer set before starting session. For higher security, 
                        CDT could be <strong>counter-signed by each party</strong> during session setup (adds latency but prevents coordinator MITM).
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we handle REQUIRE_APPROVAL decisions?</p>
                    <p className="text-gray-600 text-sm mb-2">Human-in-the-loop for elevated risk? What's the UX?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Defer to Phase 2. For POC, only implement ALLOW/DENY. REQUIRE_APPROVAL needs: approval workflow UI, 
                        notification system, timeout handling, and audit trail. Design the CDT to support "pending" state with 
                        approval_ids[] field for future expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="ZK Pipeline" 
                expanded={expandedItems['q-zk']} 
                onToggle={() => toggleExpand('q-zk')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2 / Path D</span>
                    </div>
                    <p className="font-semibold text-gray-800">What proof system fits best for compliance proofs?</p>
                    <p className="text-gray-600 text-sm mb-2">Groth16, Plonk, STARKs, or other?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Start with <strong>Plonk</strong> — universal setup means we can iterate on circuits without new ceremonies. 
                        Groth16 has smaller proofs but requires per-circuit trusted setup. STARKs are overkill for compliance proofs 
                        (larger proofs, quantum resistance not yet critical). See Part 5 for detailed comparison.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2 / Path D</span>
                    </div>
                    <p className="font-semibold text-gray-800">How do we structure circuits for policy templates?</p>
                    <p className="text-gray-600 text-sm mb-2">One circuit per policy? Parameterized circuits? Composable gadgets?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Build <strong>composable gadgets</strong>: range check, set membership, Merkle proof, signature verification. 
                        Compose these into policy circuits. Start with 2-3 template circuits (limit check, sanctions check, eligibility check) 
                        and expand based on customer needs. Parameterize thresholds as public inputs.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Phase 2</span>
                    </div>
                    <p className="font-semibold text-gray-800">Where does ZK verification live?</p>
                    <p className="text-gray-600 text-sm mb-2">In Forwarder (global) or in Receiver (per-use-case)?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Put verifier in <strong>Forwarder</strong> for consistency — all reports go through same verification. 
                        Use a registry pattern: Forwarder calls <code className="bg-green-100 px-1 rounded">IVerifier(verifierRegistry[proofType]).verify(proof, publicInputs)</code>. 
                        This allows upgrading verifiers without changing Forwarder.
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Onchain Design (EVM Settlement)" 
                expanded={expandedItems['q-onchain']} 
                onToggle={() => toggleExpand('q-onchain')}
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Path C only</span>
                    </div>
                    <p className="font-semibold text-gray-800">What should nonce scope be?</p>
                    <p className="text-gray-600 text-sm mb-2">Per workflowId? Per (workflowId, receiver)? Per receiver?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Use <strong>per (workflowId, receiver)</strong> — allows parallel workflows to different receivers without blocking, 
                        while preventing replay within same workflow→receiver pair. Store as mapping: <code className="bg-green-100 px-1 rounded">nonces[workflowId][receiver] → uint256</code>.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Path C only</span>
                    </div>
                    <p className="font-semibold text-gray-800">What events should Forwarder emit?</p>
                    <p className="text-gray-600 text-sm mb-2">For audit, indexing, and monitoring?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Emit: <code className="bg-green-100 px-1 rounded">ReportForwarded(workflowId, receiver, epoch, nonce, reportHash, success)</code>. 
                        Include <strong>reportHash</strong> (not full report) for gas efficiency. Add <code className="bg-green-100 px-1 rounded">EpochRotated(oldEpoch, newEpoch, newSigner)</code> 
                        for committee changes. Index by workflowId for workflow-level audit trails.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-1.5 py-0.5 rounded">EXPLORATORY</span>
                      <span className="text-xs text-gray-500">Path C only</span>
                    </div>
                    <p className="font-semibold text-gray-800">Do we need a Forwarder upgrade path?</p>
                    <p className="text-gray-600 text-sm mb-2">Proxy pattern or immutable deployment?</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-semibold text-green-800">Recommendation:</p>
                      <p className="text-green-700 text-xs">
                        Use <strong>UUPS proxy</strong> for POC — allows bug fixes without redeploying receivers. For production, 
                        consider immutable with versioned deployments (Forwarder_v1, v2) and migration path. 
                        The proxy admin should be a multisig or timelock for security.
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-6">
                <p className="font-semibold text-slate-800 mb-2">Summary: Blocking Questions for Phase 1</p>
                <div className="text-slate-700 text-sm space-y-1">
                  <p>1. <strong>Orchestrator runtime:</strong> Config-driven DAG (recommend Temporal.io evaluation)</p>
                  <p>2. <strong>Trigger mechanism:</strong> HTTP webhook for POC</p>
                  <p>3. <strong>Confidential step interface:</strong> Define execute(cdt, inputs) → (decision, outputs, witness)</p>
                  <p>4. <strong>Output format:</strong> Standardize {`{decision, policyHash, authId, timestamp, publicSignals[]}`}</p>
                  <p>5. <strong>Policy language:</strong> JSON rules for POC, evaluate OPA for production</p>
                  <p>6. <strong>CDT signing:</strong> Coordinator key signs, MPC parties verify</p>
                </div>
              </div>
            </Section>
          )}

          {/* Next Steps */}
          {activeSection === 'nextsteps' && (
            <Section title="Recommended Next Steps">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="font-semibold text-slate-800 mb-2">Primary Focus: Orchestration Layer</p>
                <p className="text-slate-700 text-sm">
                  Our cryptographic primitives are strong. The main gap is workflow orchestration — this is where 
                  engineering effort should concentrate. Build the minimum viable orchestrator, then validate with a POC.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phase 1: Foundation (Weeks 1-4)</h3>
              <ol className="space-y-3 mb-6">
                {[
                  { num: 1, title: 'Internal Design Review', desc: 'Walk through this architecture with the full engineering team. Identify blocking questions and assign owners.' },
                  { num: 2, title: 'Define Core Interfaces', desc: 'Standardize the "confidential step" interface for Silent Compute integration, output formats (decision, policyHash, authId), and signature schemes.' },
                  { num: 3, title: 'Spike on Orchestrator', desc: 'Build minimal trigger→compute→sign→deliver pipeline. Focus on the workflow runtime, not settlement layer specifics.' },
                ].map(({ num, title, desc }) => (
                  <li key={num} className="flex items-start gap-4">
                    <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{num}</span>
                    <div>
                      <strong className="text-gray-800">{title}:</strong>
                      <span className="text-gray-600 ml-1 text-sm">{desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phase 2: POC Paths (Weeks 5-10)</h3>
              <p className="text-gray-600 text-sm mb-3">Choose one or both POC paths based on partnership discussions:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-emerald-200 rounded-lg overflow-hidden">
                  <div className="bg-emerald-600 text-white px-4 py-2 font-semibold text-sm">Path A: Xweave Partnership (Recommended)</div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-700 mb-2">Cross-border payment POC demonstrating multi-rail compliance.</p>
                    <div className="text-gray-600 text-xs space-y-1">
                      <p>• Settlement: Hybrid (fiat rails + optional blockchain)</p>
                      <p>• Validates: P1 (automation) + P2 (cross-enterprise attestation)</p>
                      <p>• Deliverable: 2-3 step payment flow with privacy-preserving compliance</p>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white px-4 py-2 font-semibold text-sm">Path B: Enterprise API POC</div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-700 mb-2">No-blockchain POC for enterprises wanting MPC without DLT.</p>
                    <div className="text-gray-600 text-xs space-y-1">
                      <p>• Settlement: REST API + audit log (no blockchain)</p>
                      <p>• Validates: Enterprise integration, API gateway pattern</p>
                      <p>• Deliverable: Multi-party approval workflow with signed attestations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-600 text-white px-4 py-2 font-semibold text-sm">Path C: EVM Settlement POC</div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-700 mb-2">Blockchain POC for DeFi/tokenization use cases.</p>
                    <div className="text-gray-600 text-xs space-y-1">
                      <p>• Settlement: Sepolia or private EVM (Besu/Canton)</p>
                      <p>• Validates: Forwarder pattern, onchain verification</p>
                      <p>• Deliverable: CommitteeRegistry + SilentForwarder + MintGate</p>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-600 text-white px-4 py-2 font-semibold text-sm">Path D: ZK Proof Integration</div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-700 mb-2">Add ZK proofs to any of the above paths.</p>
                    <div className="text-gray-600 text-xs space-y-1">
                      <p>• Focus: Proof-of-Policy (compliance verification)</p>
                      <p>• Validates: MPC+ZK integration, proof generation pipeline</p>
                      <p>• Deliverable: Policy circuit + proof generation + verification</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phase 3: Demo & Iterate (Weeks 11-12)</h3>
              <ol className="space-y-3 mb-6" start="4">
                {[
                  { num: 4, title: 'End-to-End Demo', desc: 'Complete flow from trigger through settlement, demonstrating the chosen POC path(s).' },
                  { num: 5, title: 'Partner Feedback', desc: 'Review with Xweave or other potential partners. Gather requirements for production path.' },
                  { num: 6, title: 'Roadmap Refinement', desc: 'Prioritize gaps based on POC learnings. Define v1 scope for production deployment.' },
                ].map(({ num, title, desc }) => (
                  <li key={num} className="flex items-start gap-4">
                    <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{num}</span>
                    <div>
                      <strong className="text-gray-800">{title}:</strong>
                      <span className="text-gray-600 ml-1 text-sm">{desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800">Key Decision Point</p>
                <p className="text-amber-900 text-sm">
                  After Phase 1, we should have clarity on whether Xweave partnership is moving forward. If yes, 
                  prioritize Path A. If no/uncertain, Path B (Enterprise API) is the safest bet to demonstrate 
                  value without blockchain dependency.
                </p>
              </div>
            </Section>
          )}

          {/* Appendix C: Message Formats */}
          {activeSection === 'appendix-formats' && (
            <Section title="Appendix C: Report Message Format">
              <p className="text-gray-700 mb-4">Standardized ABI encodings for the Silence-CRE system:</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Metadata Structure</h3>
              <pre className="bg-slate-800 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`metadata = abi.encode(
    bytes32 workflowId,
    uint64 epoch,
    uint256 nonce,
    uint64 deadline
)`}
              </pre>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Report Structure (Mint Authorization)</h3>
              <pre className="bg-slate-800 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`report = abi.encode(
    address to,
    uint256 amount,
    bytes32 authId,
    bytes32 policyHash
)`}
              </pre>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Report Structure (With ZK Proof)</h3>
              <pre className="bg-slate-800 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
{`report = abi.encode(
    address to,
    uint256 amount,
    bytes32 authId,
    bytes32 policyHash,
    bytes zkProof,
    bytes32[] publicInputs
)`}
              </pre>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">EIP-712 Signature Digest</h3>
              <pre className="bg-slate-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`digest = keccak256(
    "\\x19\\x01" ||
    DOMAIN_SEPARATOR ||
    keccak256(abi.encode(
        TYPEHASH,
        workflowId,
        receiver,
        epoch,
        nonce,
        deadline,
        keccak256(report)
    ))
)`}
              </pre>
            </Section>
          )}

          {/* Appendix B: Regulated Industry Requirements */}
          {activeSection === 'appendix-regulated' && (
            <Section title="Appendix B: Regulated Industry Requirements Reference">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Why This Matters</h3>
                <p className="text-slate-700">
                  Cross-enterprise attestation (Priority 2) and Confidential Enterprise Automation (Priority 1) are valuable 
                  precisely because they solve <strong>real regulatory requirements</strong>. This appendix catalogs requirements 
                  that regulated institutions must meet — and maps them to Silence's capabilities.
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  <strong>Note:</strong> These requirements apply to cross-border payments (like Xweave), but similar patterns 
                  exist in healthcare data sharing, supply chain provenance, consortium credit checks, and other multi-party 
                  regulated workflows.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Regulatory Requirement Categories</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-700 text-white px-4 py-2 font-semibold">1. AML/CFT & Customer Due Diligence</div>
                  <div className="p-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div><strong>KYC/KYB:</strong> Identify and verify customer/business identity at onboarding</div>
                      <div><strong>CDD/EDD:</strong> Customer Due Diligence; Enhanced for high-risk customers</div>
                      <div><strong>Ongoing Monitoring:</strong> Continuous screening of transactions for suspicious activity</div>
                      <div><strong>SAR/CTR Reporting:</strong> Suspicious Activity Reports; Currency Transaction Reports</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-700 text-white px-4 py-2 font-semibold">2. Travel Rule (FATF R.16)</div>
                  <div className="p-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div><strong>Originator/Beneficiary Info:</strong> Names, account IDs, addresses must travel with payment</div>
                      <div><strong>Secure Transmission:</strong> Required info must travel promptly and securely</div>
                      <div><strong>Threshold Handling:</strong> Jurisdiction-specific thresholds ($1K, $3K, or none in EU)</div>
                      <div><strong>Retention & Availability:</strong> Data stored and available on regulator request</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-emerald-700 text-white px-4 py-2 font-semibold">3. Audit Trail & Verifiability</div>
                  <div className="p-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div><strong>Reconstructibility:</strong> Systems must allow full reconstruction of transactions/decisions</div>
                      <div><strong>Immutable Logs:</strong> Tamper-evident records of who, when, what</div>
                      <div><strong>Proof of Compliance:</strong> Documentation that checks occurred at correct time</div>
                      <div><strong>Data Correlation:</strong> Link regulatory metadata to actual value movement</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-orange-700 text-white px-4 py-2 font-semibold">4. Sanctions & Watchlist Screening</div>
                  <div className="p-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div><strong>Sanctions Lists:</strong> OFAC, UN, EU, national lists</div>
                      <div><strong>PEPs:</strong> Politically Exposed Persons screening</div>
                      <div><strong>Ongoing Screening:</strong> Continuous monitoring as watchlists change</div>
                      <div><strong>Timing:</strong> Screen before, during, and after transaction</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-600 text-white px-4 py-2 font-semibold">5. Data Privacy & Cross-Border Considerations</div>
                  <div className="p-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div><strong>GDPR/Data Minimization:</strong> Collect only what's necessary</div>
                      <div><strong>Secure Storage:</strong> Protect personal identifiers</div>
                      <div><strong>Selective Disclosure:</strong> Share with regulators without exposing to other parties</div>
                      <div><strong>Cross-Border Transfer:</strong> Comply with data localization requirements</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silence Capability Mapping</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Requirement</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Silence Capability</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Privacy Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">KYC/CDD Verification</td>
                    <td className="border border-gray-300 px-3 py-2">Silent Compute evaluates credentials via MPC</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Verifier confirms status without seeing raw PII</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Travel Rule Transmission</td>
                    <td className="border border-gray-300 px-3 py-2">MPC-held payload with selective disclosure proofs</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Data "travels" but only proofs exposed to intermediaries</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Sanctions Screening</td>
                    <td className="border border-gray-300 px-3 py-2">Silent Compute matches against watchlist</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Screener doesn't learn transaction details; list provider doesn't learn who's checked</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Audit Trail</td>
                    <td className="border border-gray-300 px-3 py-2">Cryptographic proof chain linking each step</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Tamper-evident proof of compliance, not just logs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Cross-Enterprise Correlation</td>
                    <td className="border border-gray-300 px-3 py-2">Joint MPC attestation across organizations</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Multiple parties attest collectively without sharing raw data</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Regulator Disclosure</td>
                    <td className="border border-gray-300 px-3 py-2">ZK proofs for selective disclosure; MPC key release for authorized access</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-50 text-green-800 text-xs">Controlled disclosure without violating privacy of uninvolved parties</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Generalizable Patterns</h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="font-semibold text-amber-800 mb-2">Beyond Payments: Where Else These Patterns Apply</p>
                <div className="text-amber-900 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>• <strong>Healthcare:</strong> Multi-provider patient data sharing with HIPAA compliance</div>
                  <div>• <strong>Supply Chain:</strong> Provenance verification across vendors without revealing sourcing</div>
                  <div>• <strong>Credit/Lending:</strong> Consortium credit checks without sharing customer data</div>
                  <div>• <strong>Insurance:</strong> Claims verification across carriers without exposing policyholder details</div>
                  <div>• <strong>Trade Finance:</strong> Multi-bank letter of credit verification</div>
                  <div>• <strong>Digital Identity:</strong> Cross-platform credential verification</div>
                </div>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4">
                <p className="font-semibold text-slate-800">Key Design Principles for Compliance Solutions</p>
                <div className="text-slate-700 text-sm mt-2 space-y-1">
                  <p>1. <strong>Group identity and payment data with value movement</strong> — not separate paperwork</p>
                  <p>2. <strong>Provide tamper-evident, reconstructable logs</strong> of compliance actions</p>
                  <p>3. <strong>Ensure metadata persists and is auditable</strong> across rails and counterparties</p>
                  <p>4. <strong>Support jurisdiction-specific rule variants</strong> and thresholds</p>
                  <p>5. <strong>Enable sanctioned disclosure on demand</strong> without violating privacy of others</p>
                </div>
              </div>
            </Section>
          )}

          {/* Appendix E: Xweave POC */}
          {activeSection === 'appendix-xweave' && (
            <Section title="Appendix E: Xweave POC Alignment">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Potential Lead Use Case</h3>
                <p className="text-emerald-900">
                  Xweave is building "Trust Infrastructure for the Multi-Rail Payments Ecosystem" — a blockchain, asset, 
                  and currency-agnostic trust layer for end-to-end transaction tracking with embedded compliance data. 
                  This aligns exceptionally well with Silence's capabilities and target market.
                </p>
                <p className="text-emerald-700 text-sm mt-2">
                  <strong>Note:</strong> Xweave is a concrete example of the regulated industry requirements detailed in Appendix B.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Problem Xweave Solves</h3>
              <p className="text-gray-700 mb-4">
                Today's cross-border payments have a critical verification gap. In a typical SGD → PHP remittance flow 
                through 7 steps (sender → MTL → exchange → blockchain → exchange → MTL → beneficiary):
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="font-semibold text-red-800">Only 1 of 7 Steps is Verifiable Today</p>
                <p className="text-red-700">
                  Only the blockchain transfer step can be verified — and even that lacks embedded travel rule data. 
                  <strong> 86% of the transaction flow is a compliance blind spot.</strong>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Xweave's Solution Requirements</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Xweave Requirement</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">End-to-End Tracking</td>
                    <td className="border border-gray-300 px-3 py-2">Every transaction carries KYC/B data, travel rule payload, and party information throughout its journey</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof of Transaction</td>
                    <td className="border border-gray-300 px-3 py-2">Cryptographic proof establishing funds ownership and transaction relationships between parties</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Selective Disclosure</td>
                    <td className="border border-gray-300 px-3 py-2">Transaction parties access full payload; external parties (regulators) see proof without sensitive data</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Privacy by Design</td>
                    <td className="border border-gray-300 px-3 py-2">Transaction parties control what sensitive data is revealed when creating proofs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Multi-Rail Coverage</td>
                    <td className="border border-gray-300 px-3 py-2">Works across both crypto AND fiat rails — not just onchain activity</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">How Silence Labs Capabilities Map</h3>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Xweave Need</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Silence Capability</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Selective Disclosure</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>Silent Compute</strong> — MPC evaluation without exposing inputs to any single party</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800 text-center font-bold">CORE</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof of Transaction</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>ZK Proofs</strong> — Prove compliance/ownership without disclosing underlying data</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800 text-center font-bold">CORE</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Multi-Party Authorization</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>SilentShard</strong> — Threshold signatures for committee-based transaction approval</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800 text-center font-bold">CORE</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">End-to-End Tracking</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>Workflow Orchestration</strong> — Chain proofs across transaction steps</td>
                    <td className="border border-gray-300 px-3 py-2 bg-yellow-100 text-yellow-800 text-center font-bold">BUILD</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Rail-Agnostic</td>
                    <td className="border border-gray-300 px-3 py-2"><strong>Architecture</strong> — Not blockchain-native; works with any data source</td>
                    <td className="border border-gray-300 px-3 py-2 bg-green-100 text-green-800 text-center font-bold">NATURAL</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Example Flow: Silence-Powered Xweave</h3>
              <p className="text-gray-700 mb-4">
                Here's how the 7-step SGD → PHP flow would work with Silence infrastructure:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { step: '1', title: 'Sender → MTL', desc: 'Silent Compute generates transaction proof with sender KYC bound to travel rule payload. ZK proof: "sender is verified, not sanctioned."' },
                  { step: '2', title: 'MTL → Exchange (VASP)', desc: 'Silent Compute links MTL deposit to original sender. Proof chain: Step 1 proof + Step 2 linkage. No raw KYC exposed.' },
                  { step: '3', title: 'Exchange Swap (SGD→USDC)', desc: 'Conversion recorded with cryptographic binding to upstream proofs. SilentShard signs swap attestation.' },
                  { step: '4', title: 'Blockchain Transfer', desc: 'Onchain transaction enriched with proof chain. Travel rule payload embedded (selective disclosure for regulators).' },
                  { step: '5', title: 'Receiving Exchange Swap', desc: 'USDC→PHP conversion linked to incoming proof chain. Committee authorization via SilentShard.' },
                  { step: '6', title: 'Exchange → Fiat Distributor', desc: 'PHP withdrawal verified against blockchain receipt. Proof chain continues to fiat rail.' },
                  { step: '7', title: 'Beneficiary Receipt', desc: 'Final ZK proof: "funds originated from verified sender, traversed compliant path, arrived at verified beneficiary." Complete audit trail.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{step}</span>
                    <div>
                      <strong className="text-gray-800">{title}:</strong>
                      <span className="text-gray-600 ml-1 text-sm">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why This Use Case is Strategic</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ Validates Priority 1 Segment</h4>
                  <p className="text-blue-700 text-sm">
                    Cross-border payments with MTLs, VASPs, and fiat distributors is quintessential "Confidential Enterprise Automation."
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ Perfect Priority 2 Example</h4>
                  <p className="text-blue-700 text-sm">
                    <strong>Cross-enterprise attestation in action:</strong> 7 parties (sender, MTLs, VASPs, distributor, beneficiary) 
                    jointly attest to compliance without revealing their private KYC data to each other.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ Exercises All Capabilities</h4>
                  <p className="text-blue-700 text-sm">
                    Requires Silent Compute (joint attestation), SilentShard (authorization), ZK (selective disclosure proofs), and orchestration.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ Clear Differentiation vs Chainlink</h4>
                  <p className="text-blue-700 text-sm">
                    CRE can't do multi-party attestation — DON nodes see data, model is blockchain-first, no fiat rail coverage.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
                <p className="font-semibold text-emerald-800 mb-2">How Xweave Exemplifies Cross-Enterprise Attestation</p>
                <p className="text-emerald-700 text-sm">
                  In the Xweave flow, each organization (MTL, VASP, distributor) contributes their private data (KYC, transaction details) 
                  to a Silent Compute session. The output is a <strong>joint attestation</strong>: "This transaction chain is compliant, 
                  and all parties verified their segments correctly." No single party sees anyone else's inputs — but regulators can 
                  verify the collective proof. <strong>This is fundamentally different from ZK</strong>, where a single party proves 
                  their own computation. Silence enables <em>collaborative proof across organizational boundaries</em>.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Architecture for Xweave</h3>
              <p className="text-gray-700 mb-3">The Xweave POC would require:</p>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Component</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Transaction Proof Generator</td>
                    <td className="border border-gray-300 px-3 py-2">Silent Compute job that binds KYC/travel rule data to transaction</td>
                    <td className="border border-gray-300 px-3 py-2 text-yellow-700">Extend Silent Compute</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Proof Chain Linker</td>
                    <td className="border border-gray-300 px-3 py-2">Links each step's proof to upstream proofs (Merkle chain or similar)</td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-700">New component</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Selective Disclosure Engine</td>
                    <td className="border border-gray-300 px-3 py-2">ZK circuits for "prove X without revealing Y" patterns</td>
                    <td className="border border-gray-300 px-3 py-2 text-yellow-700">ZK pipeline work</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Committee Authorization</td>
                    <td className="border border-gray-300 px-3 py-2">SilentShard signing for transaction approvals</td>
                    <td className="border border-gray-300 px-3 py-2 text-green-700">Exists (SilentShard)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">Orchestration Layer</td>
                    <td className="border border-gray-300 px-3 py-2">Coordinates multi-step flows across parties</td>
                    <td className="border border-gray-300 px-3 py-2 text-orange-700">New component (same as CRE gap)</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800">Recommendation</p>
                <p className="text-amber-900">
                  Xweave represents an ideal "lead use case" for Silence's Confidential Enterprise Automation positioning. 
                  If we pursue this partnership, the Xweave POC should drive our MVP scope for the orchestration layer — 
                  building exactly what's needed for multi-party payment compliance, rather than trying to replicate CRE's 
                  full feature set.
                </p>
              </div>
            </Section>
          )}

          {/* Appendix D: Performance Considerations - PLACEHOLDER */}
          {activeSection === 'appendix-performance' && (
            <Section title="Appendix D: Performance & Scalability Considerations">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <p className="font-semibold text-amber-800 mb-2">📋 Placeholder Section</p>
                <p className="text-amber-700">
                  This section will be populated with performance benchmarks and scalability analysis as we 
                  develop the Silent Orchestration platform. Key areas to cover:
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Topics to Address</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Silent Compute Performance</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="text-gray-400">• Latency for typical policy evaluation (TBD)</li>
                    <li className="text-gray-400">• Throughput: operations per second (TBD)</li>
                    <li className="text-gray-400">• Scaling characteristics with number of parties (TBD)</li>
                    <li className="text-gray-400">• Network bandwidth requirements (TBD)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">SilentShard Signing Performance</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="text-gray-400">• Threshold signing latency (TBD)</li>
                    <li className="text-gray-400">• Key generation ceremony time (TBD)</li>
                    <li className="text-gray-400">• Key rotation overhead (TBD)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">ZK Proof Generation</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="text-gray-400">• Proof generation time by circuit size (TBD)</li>
                    <li className="text-gray-400">• Proof verification time (TBD)</li>
                    <li className="text-gray-400">• Proof size by proof system (TBD)</li>
                    <li className="text-gray-400">• Hardware requirements for prover (TBD)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">End-to-End Workflow</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="text-gray-400">• Total latency: trigger to settlement (TBD)</li>
                    <li className="text-gray-400">• Bottleneck analysis by component (TBD)</li>
                    <li className="text-gray-400">• Horizontal scaling options (TBD)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Cost Model</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="text-gray-400">• Compute cost per operation (TBD)</li>
                    <li className="text-gray-400">• Gas cost for on-chain verification (TBD)</li>
                    <li className="text-gray-400">• Infrastructure requirements (TBD)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 mt-6">
                <p className="font-semibold text-slate-800">Next Step</p>
                <p className="text-slate-700 text-sm">
                  Benchmark testing should be conducted during the POC phase (Phase 2) to populate this section 
                  with real performance data. Priority benchmarks: Silent Compute policy evaluation latency and 
                  SilentShard signing time.
                </p>
              </div>
            </Section>
          )}

          {/* Appendix A: Policy Engine Reference */}
          {activeSection === 'appendix-policy' && (
            <Section title="Appendix A: Policy Engine Reference">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-slate-700">
                  This appendix provides detailed reference material for the policy engine architecture. 
                  For the conceptual overview, see Part 4: Policy Layer section.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Governance Archetypes</h3>
              <p className="text-gray-600 text-sm mb-3">
                MPC computations fall into three governance patterns. Each has different trust assumptions, 
                coordination requirements, and policy considerations.
              </p>
              <table className="w-full border-collapse mb-6 text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-left">Archetype</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Example Use Cases</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Policy Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">G1: Bilateral</td>
                    <td className="border border-gray-300 px-3 py-2">Two data owners compute together (A↔B) without revealing non-matched data</td>
                    <td className="border border-gray-300 px-3 py-2">PSI (customer overlap), Private Join & Compute, Lift/Attribution</td>
                    <td className="border border-gray-300 px-3 py-2">Party allowlists, k-min thresholds, output modality</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold">G2: Multilateral</td>
                    <td className="border border-gray-300 px-3 py-2">≥3 parties compute aggregates; no central data owner</td>
                    <td className="border border-gray-300 px-3 py-2">Consortium credit checks, N-party PSI cardinality, Secure aggregation</td>
                    <td className="border border-gray-300 px-3 py-2">Quorum requirements, peer set validation, aggregation-only enforcement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-semibold">G3: Coordinator-led</td>
                    <td className="border border-gray-300 px-3 py-2">Neutral orchestrator (hub-and-spoke) coordinates MPC jobs; coordinator cannot see plaintext</td>
                    <td className="border border-gray-300 px-3 py-2">Xweave (7-party payments), Clean room analytics, Stablecoin issuance</td>
                    <td className="border border-gray-300 px-3 py-2">Coordinator privileges, dataset registration, lifecycle governance</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Activity Domains</h3>
              <p className="text-gray-600 text-sm mb-3">
                The "building blocks" of MPC computation that Silent Compute should support:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { code: 'D1', name: 'PSI', desc: 'Private Set Intersection — find overlap without revealing non-matches' },
                  { code: 'D2', name: 'PJC', desc: 'Private Join & Compute — join on key, compute aggregates' },
                  { code: 'D3', name: 'Aggregation', desc: 'Secure statistics — sum, count, avg across parties' },
                  { code: 'D4', name: 'Attribution', desc: 'Lift measurement — conversion attribution without user exposure' },
                  { code: 'D6', name: 'Inference', desc: 'Private ML inference — model or data stays private' },
                  { code: 'D7', name: 'Data/API', desc: 'Dataset registration, API access, catalog management' },
                  { code: 'D8', name: 'Lifecycle', desc: 'Peer set changes, key rotation, binary attestation' },
                  { code: 'D9', name: 'Emergency', desc: 'Legal holds, regulator freezes, incident response' },
                ].map(({ code, name, desc }) => (
                  <div key={code} className="border border-gray-200 rounded p-3">
                    <p className="font-semibold text-slate-700">{code}: {name}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Attribute Dictionary</h3>
              <p className="text-gray-600 text-sm mb-3">
                Standard attributes consumed by the PDP for policy evaluation:
              </p>
              
              <ExpandableCard 
                title="Identity & Roles" 
                expanded={expandedItems['attr-identity']} 
                onToggle={() => toggleExpand('attr-identity')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['tenant_id', 'Organization/tenant identifier'],
                      ['org_id', 'Specific organization within tenant'],
                      ['user_id', 'Individual user identifier'],
                      ['role', 'User role (admin, analyst, auditor)'],
                      ['api_key_id', 'Service account / API key identifier'],
                      ['client_cert', 'mTLS certificate fingerprint'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <ExpandableCard 
                title="Dataset Attributes" 
                expanded={expandedItems['attr-dataset']} 
                onToggle={() => toggleExpand('attr-dataset')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['handle', 'Unique dataset identifier'],
                      ['consent_snapshot_id', 'Point-in-time consent binding (for audit)'],
                      ['classification', 'Data classification: PII, health, finance, public'],
                      ['residency', 'Data residency: country/region code'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <ExpandableCard 
                title="Function & Code" 
                expanded={expandedItems['attr-function']} 
                onToggle={() => toggleExpand('attr-function')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['function_id', 'Approved function name (e.g., "psi_v3", "pjc_sum_v1")'],
                      ['code_hash', 'SHA256 hash of circuit/code to execute'],
                      ['version', 'Function version for compatibility'],
                      ['schema', 'Input/output schema definition'],
                      ['join_key_spec', 'Allowed join keys for PJC operations'],
                      ['agg_ops', 'Allowed aggregation operations (sum, count, avg)'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <ExpandableCard 
                title="MPC Parameters" 
                expanded={expandedItems['attr-mpc']} 
                onToggle={() => toggleExpand('attr-mpc')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['protocol_class', '"2PC" for bilateral, "N-party" for multilateral'],
                      ['security_model', '"semi-honest" or "malicious" (Silent Compute supports malicious)'],
                      ['t', 'Threshold for signing (e.g., 2 in 2-of-3)'],
                      ['n', 'Total parties (e.g., 3 in 2-of-3)'],
                      ['expected_peers[]', 'Array of {org_id, cert_fingerprint, endpoint} for session'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <ExpandableCard 
                title="Limits & Safety" 
                expanded={expandedItems['attr-limits']} 
                onToggle={() => toggleExpand('attr-limits')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['k_min', 'Minimum count before revealing (privacy threshold)'],
                      ['rows_max', 'Maximum input rows allowed'],
                      ['round_cap', 'Maximum MPC rounds (DoS protection)'],
                      ['bytes_cap', 'Maximum data size'],
                      ['recipients[]', 'Allowed output recipients'],
                      ['output_modality', '"cardinality_only" or "flagged_ids" — controls what can be revealed'],
                      ['dp_budget_delta', 'Differential privacy budget consumption (optional)'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <ExpandableCard 
                title="Admin & Legal" 
                expanded={expandedItems['attr-admin']} 
                onToggle={() => toggleExpand('attr-admin')}
              >
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['operation', 'Admin operation type (ADD_PEER, REMOVE_PEER, ROTATE_CERT)'],
                      ['quorum', 'Required approvals for admin operations'],
                      ['time_lock', 'Delay before operation takes effect'],
                      ['legal_order_id', 'Reference to legal hold/freeze order'],
                      ['scope', 'Freeze scope (dataset, partner, function)'],
                      ['expiry', 'Automatic expiry timestamp'],
                    ].map(([attr, desc], i) => (
                      <tr key={attr} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{attr}</td>
                        <td className="border border-gray-300 px-3 py-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ExpandableCard>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Decision Outputs (Canonical)</h3>
              <p className="text-gray-600 text-sm mb-3">
                Every PDP evaluation returns a structured decision:
              </p>
              <div className="bg-slate-800 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
{`{
  effect: "ALLOW" | "DENY" | "REQUIRE_APPROVAL",
  approvers: ["role1", "role2"],     // if REQUIRE_APPROVAL
  
  constraints: {
    k_min: 100,                      // minimum count for reveal
    rows_max: 1000000,               // input size cap
    recipients: ["org_a", "org_b"],  // allowed output recipients
    output_modality: "cardinality_only",
    agg_ops_only: true,              // no row-level output
    join_key_whitelist: ["email_hash", "phone_hash"]
  },
  
  mpc: {
    protocol_class: "2PC",
    security_model: "malicious",
    t: 2,
    n: 3,
    expected_peers: [...]
  },
  
  meta: {
    policy_version: "v2.3.1",
    ttl_seconds: 3600,
    reason_codes: ["consent_valid", "residency_ok"],
    matched_rules: ["rule_pjc_default", "rule_k_min_100"]
  }
}`}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Representative Use Case: Private Set Intersection</h3>
              <p className="text-gray-600 text-sm mb-3">
                Example PDP/PEP sheet for a common MPC operation (G1-D1: Bilateral PSI):
              </p>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-slate-700 text-white px-4 py-2 font-semibold">UC-G1D1: Private Set Intersection (PSI)</div>
                <div className="p-4 text-sm">
                  <p className="text-gray-700 mb-3">
                    <strong>Story:</strong> Bank A and Fintech B determine how many customers they share 
                    (optionally: which customers), without revealing non-overlap.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">What Policy Checks:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Function allowlist (is "psi_v3" approved?)</li>
                        <li>• Party allowlists (is Bank A allowed to compute with Fintech B?)</li>
                        <li>• Input size caps (rows_max)</li>
                        <li>• Output modality (cardinality only vs flagged IDs)</li>
                        <li>• k-min threshold (minimum count for ID reveal)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">CDT Binds:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• function_id="psi_v3", code_hash</li>
                        <li>• datasets (with consent snapshots)</li>
                        <li>• parties (Bank A, Fintech B + certs)</li>
                        <li>• mpc: protocol="2PC", security="malicious"</li>
                        <li>• constraints: k_min, rows_max, output_modality</li>
                        <li>• ttl, policy_version, nonce</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-700 text-xs mb-1">Test Scenarios:</p>
                    <p className="text-gray-600 text-xs">1) Size-only request, within caps → <span className="text-green-600 font-semibold">ALLOW</span></p>
                    <p className="text-gray-600 text-xs">2) Request flagged IDs but k_min unmet → <span className="text-red-600 font-semibold">DENY</span></p>
                    <p className="text-gray-600 text-xs">3) Peer not on allowlist → <span className="text-red-600 font-semibold">DENY</span></p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Hold / Regulator Freeze</h3>
              <p className="text-gray-600 text-sm mb-3">
                A universal policy pattern that applies to all governance archetypes:
              </p>
              <div className="border border-red-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-red-700 text-white px-4 py-2 font-semibold">UC-U-LEGAL: Legal Hold</div>
                <div className="p-4 text-sm">
                  <p className="text-gray-700 mb-3">
                    <strong>Story:</strong> A lawful order freezes a dataset, partner, or function family; 
                    compute operations are blocked until expiry or explicit approval.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Trigger:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Legal order received (subpoena, regulator request)</li>
                        <li>• Order updated or expired</li>
                        <li>• Incident response activation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Enforcement:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Legal-hold token cached in PEP</li>
                        <li>• All compute requests in scope → <span className="text-red-600 font-semibold">DENY</span></li>
                        <li>• Read/metadata operations → <span className="text-green-600 font-semibold">ALLOWED</span></li>
                        <li>• Exception: Elevated quorum + time-lock</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 bg-red-50 p-3 rounded">
                    <p className="font-semibold text-gray-700 text-xs">SLO: Apply freeze within 5 seconds of order receipt</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifecycle Governance (Peer Set Changes)</h3>
              <p className="text-gray-600 text-sm mb-3">
                Policy controls for administrative operations:
              </p>
              <div className="border border-amber-200 rounded-lg overflow-hidden">
                <div className="bg-amber-600 text-white px-4 py-2 font-semibold">UC-G3D8: MPC Lifecycle & Peer-Set Governance</div>
                <div className="p-4 text-sm">
                  <p className="text-gray-700 mb-3">
                    <strong>Story:</strong> Clean room updates its compute cluster peer set or rotates certificates; 
                    future jobs must use the new peer roster.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Operations:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• ADD_PEER — onboard new MPC party</li>
                        <li>• REMOVE_PEER — offboard party</li>
                        <li>• ROTATE_CERT — certificate renewal</li>
                        <li>• UPDATE_IMAGE — binary/code update</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Policy Controls:</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Minimum quorum for approval</li>
                        <li>• Time-lock before effective</li>
                        <li>• Image hash allowlist</li>
                        <li>• Maintenance windows</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 bg-amber-50 p-3 rounded">
                    <p className="font-semibold text-gray-700 text-xs mb-1">Enforcement:</p>
                    <p className="text-gray-600 text-xs">
                      Admin CDT minted → Coordinator publishes new peer list → Jobs with old CDT fail post cut-over
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          Silence Laboratories • Internal Engineering Documentation • December 2025
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  );
}

function ExpandableCard({ title, expanded, onToggle, children }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {expanded && (
        <div className="px-4 py-3 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}
