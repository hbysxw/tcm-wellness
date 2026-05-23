export default function TongueZoneMap() {
  return (
    <div className="bg-bg-card rounded-lg p-6 shadow-sm border border-gray-100 my-8">
      <h3 className="font-serif text-lg font-semibold text-text-body mb-4 text-center">Tongue Zone Map</h3>
      <p className="text-sm text-text-muted text-center mb-6">Different areas of the tongue correspond to different organs</p>
      <svg viewBox="0 0 400 280" style={{ maxHeight: "280px" }} className="w-full max-w-md mx-auto">
        <ellipse cx="200" cy="160" rx="120" ry="100" fill="#f5d6c6" stroke="#d4a89b" strokeWidth="2"/>
        <ellipse cx="200" cy="95" rx="55" ry="30" fill="rgba(199,59,59,0.15)" stroke="#C73B3B" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="200" y="92" textAnchor="middle" fontSize="11" fill="#C73B3B" fontWeight="bold">Heart</text>
        <text x="200" y="104" textAnchor="middle" fontSize="9" fill="#C73B3B">(Tip)</text>
        <ellipse cx="200" cy="148" rx="65" ry="35" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="200" y="146" textAnchor="middle" fontSize="11" fill="#8B7530" fontWeight="bold">Spleen / Stomach</text>
        <text x="200" y="168" textAnchor="middle" fontSize="9" fill="#8B7530">(Center)</text>
        <ellipse cx="130" cy="150" rx="25" ry="40" fill="rgba(27,122,90,0.12)" stroke="#1B7A5A" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="115" y="148" textAnchor="middle" fontSize="10" fill="#1B7A5A" fontWeight="bold">Liver</text>
        <ellipse cx="270" cy="150" rx="25" ry="40" fill="rgba(27,122,90,0.12)" stroke="#1B7A5A" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="285" y="148" textAnchor="middle" fontSize="10" fill="#1B7A5A" fontWeight="bold">GB</text>
        <text x="200" y="198" textAnchor="middle" fontSize="9" fill="#6B6BA0">(Sides)</text>
        <ellipse cx="200" cy="225" rx="50" ry="30" fill="rgba(100,100,180,0.12)" stroke="#6B6BA0" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="200" y="222" textAnchor="middle" fontSize="11" fill="#6B6BA0" fontWeight="bold">Kidney</text>
        <text x="200" y="234" textAnchor="middle" fontSize="9" fill="#6B6BA0">(Sides)</text>
      </svg>
      <p className="text-xs text-text-muted text-center mt-4 italic">This is a simplified reference. Professional diagnosis requires years of training.</p>
    </div>
  );
}
