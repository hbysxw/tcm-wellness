import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">☯</span>
              <span className="font-serif text-lg font-bold text-white">TCM Wellness</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bridging ancient wisdom and modern understanding. Your trusted guide to Traditional Chinese Medicine — free for everyone.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Explore</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/category/about" className="text-sm text-gray-400 hover:text-white transition-colors">What Is TCM</Link>
              <Link href="/category/body" className="text-sm text-gray-400 hover:text-white transition-colors">Your Body</Link>
              <Link href="/category/diagnosis" className="text-sm text-gray-400 hover:text-white transition-colors">Diagnosis</Link>
              <Link href="/category/conditions" className="text-sm text-gray-400 hover:text-white transition-colors">Conditions</Link>
              <Link href="/category/food" className="text-sm text-gray-400 hover:text-white transition-colors">Food as Medicine</Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Tools</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/quiz" className="text-sm text-gray-400 hover:text-white transition-colors">Body Constitution Quiz</Link>
              <Link href="/article/diagnosis/self-check-guide" className="text-sm text-gray-400 hover:text-white transition-colors">Daily Tongue Self-Check</Link>
              <Link href="/article/diagnosis/tongue-introduction" className="text-sm text-gray-400 hover:text-white transition-colors">Tongue Diagnosis Guide</Link>
              <Link href="/article/about/what-is-tcm" className="text-sm text-gray-400 hover:text-white transition-colors">TCM Basics</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Info</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/article/about/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/article/about/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Disclaimer</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Educational purposes only. Not a substitute for professional medical advice.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} TCM Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
